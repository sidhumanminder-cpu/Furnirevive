import { useState } from "react";
import { useMutation } from "convex/react";
import { useQuery } from "@/lib/convex-query.ts";
import { api } from "@/convex/_generated/api.js";
import type { Id } from "@/convex/_generated/dataModel.d.ts";
import { toast } from "sonner";
import { Button } from "@/components/ui/button.tsx";
import { Spinner } from "@/components/ui/spinner.tsx";
import { formatBytes, resizeImageFile } from "@/lib/resize-image.ts";

const LARGE_PHOTO_BYTES = 300 * 1024;

type Side = "before" | "after";
type Photo = { id?: Id<"_storage">; url?: string | null };
type Proposal = { side: Side; originalBytes: number; newBytes: number; file: File; previewUrl: string };

type Props = { studyId: Id<"repairCaseStudies">; before: Photo; after: Photo };

/** Fetches an existing photo and returns it as a File, or null when the browser is not allowed to read it. */
async function fetchPhoto(url: string, side: Side): Promise<File | null> {
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    const blob = await res.blob();
    return new File([blob], `${side}`, { type: blob.type || "image/png" });
  } catch {
    return null;
  }
}

export default function CompressPhotosPanel({ studyId, before, after }: Props) {
  const ids = [before.id, after.id].filter((id): id is Id<"_storage"> => !!id);
  const sizes = useQuery(api.caseStudies.getImageSizes, { ids });
  const generateUploadUrl = useMutation(api.caseStudies.generateUploadUrl);
  const updateStudy = useMutation(api.caseStudies.update);

  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [proposals, setProposals] = useState<Proposal[] | null>(null);

  const sizeOf = (id?: Id<"_storage">) => sizes?.find((s) => s.id === id)?.size ?? 0;
  const targets = ([["before", before], ["after", after]] as const).filter(
    ([, photo]) => photo.url && sizeOf(photo.id) > LARGE_PHOTO_BYTES,
  );

  if (sizes === undefined || targets.length === 0) return null;

  async function handleCompress() {
    setBusy(true);
    setError(null);
    const found: Proposal[] = [];
    for (const [side, photo] of targets) {
      const file = await fetchPhoto(photo.url as string, side);
      if (!file) {
        found.forEach((p) => URL.revokeObjectURL(p.previewUrl));
        setError(`Could not download the ${side} photo in the browser (it may be blocked). Nothing was changed.`);
        setBusy(false);
        return;
      }
      const result = await resizeImageFile(file);
      if (result.changed) {
        found.push({ side, originalBytes: sizeOf(photo.id), newBytes: result.newBytes, file: result.file, previewUrl: URL.createObjectURL(result.file) });
      }
    }
    setBusy(false);
    if (found.length === 0) {
      setError("These photos cannot be made smaller. Nothing was changed.");
      return;
    }
    setProposals(found);
  }

  function discard() {
    proposals?.forEach((p) => URL.revokeObjectURL(p.previewUrl));
    setProposals(null);
  }

  async function uploadFile(file: File): Promise<Id<"_storage">> {
    const uploadUrl = await generateUploadUrl();
    const res = await fetch(uploadUrl, { method: "POST", headers: { "Content-Type": file.type }, body: file });
    if (!res.ok) throw new Error("Upload failed");
    const { storageId } = (await res.json()) as { storageId: Id<"_storage"> };
    return storageId;
  }

  async function handleConfirm() {
    if (!proposals) return;
    setBusy(true);
    try {
      const newIds: { beforeImageId?: Id<"_storage">; afterImageId?: Id<"_storage"> } = {};
      for (const p of proposals) {
        const id = await uploadFile(p.file);
        if (p.side === "before") newIds.beforeImageId = id;
        else newIds.afterImageId = id;
      }
      // Old files stay in storage on purpose; only the case study points at the new ones.
      await updateStudy({ id: studyId, ...newIds });
      toast.success("Photos compressed and saved");
      discard();
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Could not save the compressed photos");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="space-y-3 rounded-lg border p-4">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm">
          {targets.map(([side, photo]) => `${side} photo ${formatBytes(sizeOf(photo.id))}`).join(", ")} (over 300 kB)
        </p>
        {!proposals && (
          <Button type="button" size="sm" variant="secondary" onClick={handleCompress} disabled={busy}>
            {busy && <Spinner className="mr-2" />}
            Compress photos
          </Button>
        )}
      </div>

      {error && <p className="text-sm text-destructive">{error}</p>}

      {proposals && (
        <div className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {proposals.map((p) => (
              <div key={p.side} className="space-y-1">
                <img src={p.previewUrl} alt={`Compressed ${p.side} preview`} className="w-full h-40 object-cover rounded-lg border" />
                <p className="text-xs text-muted-foreground capitalize">
                  {p.side}: {formatBytes(p.originalBytes)} to {formatBytes(p.newBytes)}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-end gap-2">
            <Button type="button" size="sm" variant="secondary" onClick={discard} disabled={busy}>Cancel</Button>
            <Button type="button" size="sm" onClick={handleConfirm} disabled={busy}>
              {busy && <Spinner className="mr-2" />}
              Confirm and save
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

import { useState, useRef, useEffect, type FormEvent } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api.js";
import type { Id } from "@/convex/_generated/dataModel.d.ts";
import { toast } from "sonner";
import { Upload, X, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog.tsx";
import { Spinner } from "@/components/ui/spinner.tsx";
import { ALL_SEO_PAGES } from "@/lib/seo-pages/registry.ts";

type RepairType = "sofa" | "leather" | "recliner" | "furniture" | "upholstery";
type ProblemType = "sagging" | "tear" | "broken-frame" | "spring" | "polish" | "mechanism" | "other";
type IntentType = "near_me" | "cost" | "urgency" | "type" | "gallery";

const REPAIR_TYPES: { value: RepairType; label: string }[] = [
  { value: "sofa", label: "Sofa" },
  { value: "leather", label: "Leather" },
  { value: "recliner", label: "Recliner" },
  { value: "furniture", label: "Furniture" },
  { value: "upholstery", label: "Upholstery" },
];

const PROBLEM_TYPES: { value: ProblemType; label: string }[] = [
  { value: "sagging", label: "Sagging" },
  { value: "tear", label: "Tear" },
  { value: "broken-frame", label: "Broken Frame" },
  { value: "spring", label: "Spring" },
  { value: "polish", label: "Polish" },
  { value: "mechanism", label: "Mechanism" },
  { value: "other", label: "Other" },
];

const INTENT_TYPES: { value: IntentType; label: string }[] = [
  { value: "near_me", label: "Near Me" },
  { value: "cost", label: "Cost" },
  { value: "urgency", label: "Urgency" },
  { value: "type", label: "Type" },
  { value: "gallery", label: "Gallery" },
];

// All available page slugs from the SEO registry
const PAGE_SLUG_OPTIONS = ALL_SEO_PAGES.map((p) => p.slug).sort();

type CaseStudyFormData = {
  _id?: Id<"repairCaseStudies">;
  repairType: RepairType;
  problemType: ProblemType;
  location: string;
  intentType: IntentType;
  beforeImageId?: Id<"_storage">;
  afterImageId?: Id<"_storage">;
  altTextBefore: string;
  altTextAfter: string;
  problem: string;
  solution: string;
  materialsUsed?: string;
  costMin: number;
  costMax: number;
  timeTaken: string;
  heading: string;
  pageSlugs: string[];
  isFeatured: boolean;
  displayOrder: number;
  // For displaying existing images
  beforeUrl?: string | null;
  afterUrl?: string | null;
};

const EMPTY_FORM: CaseStudyFormData = {
  repairType: "sofa",
  problemType: "other",
  location: "",
  intentType: "type",
  altTextBefore: "",
  altTextAfter: "",
  problem: "",
  solution: "",
  materialsUsed: "",
  costMin: 0,
  costMax: 0,
  timeTaken: "",
  heading: "",
  pageSlugs: [],
  isFeatured: false,
  displayOrder: 0,
};

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialData?: CaseStudyFormData;
};

export default function CaseStudyFormDialog({ open, onOpenChange, initialData }: Props) {
  const isEditing = !!initialData?._id;
  const [form, setForm] = useState<CaseStudyFormData>(initialData ?? EMPTY_FORM);
  const [saving, setSaving] = useState(false);

  // Image upload state
  const [beforeFile, setBeforeFile] = useState<File | null>(null);
  const [afterFile, setAfterFile] = useState<File | null>(null);
  const [beforePreview, setBeforePreview] = useState<string | null>(
    initialData?.beforeUrl ?? null
  );
  const [afterPreview, setAfterPreview] = useState<string | null>(
    initialData?.afterUrl ?? null
  );
  const beforeInputRef = useRef<HTMLInputElement>(null);
  const afterInputRef = useRef<HTMLInputElement>(null);

  // Page slug search
  const [slugSearch, setSlugSearch] = useState("");

  // Reset all form state when initialData changes (e.g. switching between case studies)
  useEffect(() => {
    setForm(initialData ?? EMPTY_FORM);
    setBeforePreview(initialData?.beforeUrl ?? null);
    setAfterPreview(initialData?.afterUrl ?? null);
    setBeforeFile(null);
    setAfterFile(null);
    setSlugSearch("");
  }, [initialData]);

  const generateUploadUrl = useMutation(api.caseStudies.generateUploadUrl);
  const createStudy = useMutation(api.caseStudies.create);
  const updateStudy = useMutation(api.caseStudies.update);

  function handleFileSelect(
    file: File,
    type: "before" | "after"
  ) {
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }
    if (type === "before") {
      setBeforeFile(file);
      setBeforePreview(URL.createObjectURL(file));
    } else {
      setAfterFile(file);
      setAfterPreview(URL.createObjectURL(file));
    }
  }

  function generateAltText(type: "before" | "after") {
    const repairLabel = REPAIR_TYPES.find((r) => r.value === form.repairType)?.label ?? form.repairType;
    const loc = form.location || "Delhi";
    const alt = `${repairLabel} repair ${type === "before" ? "before" : "after"} in ${loc} Delhi`;
    setForm((prev) => ({
      ...prev,
      [type === "before" ? "altTextBefore" : "altTextAfter"]: alt,
    }));
  }

  async function uploadImage(file: File): Promise<Id<"_storage">> {
    const uploadUrl = await generateUploadUrl();
    const result = await fetch(uploadUrl, {
      method: "POST",
      headers: { "Content-Type": file.type },
      body: file,
    });
    const { storageId } = await result.json();
    return storageId as Id<"_storage">;
  }

  function togglePageSlug(slug: string) {
    setForm((prev) => {
      const exists = prev.pageSlugs.includes(slug);
      return {
        ...prev,
        pageSlugs: exists
          ? prev.pageSlugs.filter((s) => s !== slug)
          : [...prev.pageSlugs, slug],
      };
    });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // Validation
    if (!form.heading.trim()) {
      toast.error("Heading is required");
      return;
    }
    if (!form.location.trim()) {
      toast.error("Location is required");
      return;
    }
    if (!form.problem.trim() || !form.solution.trim()) {
      toast.error("Problem and Solution are required");
      return;
    }
    if (!isEditing && (!beforeFile || !afterFile)) {
      toast.error("Both before and after images are required");
      return;
    }

    setSaving(true);
    try {
      // Upload new images if provided
      let beforeImageId = form.beforeImageId;
      let afterImageId = form.afterImageId;

      if (beforeFile) {
        beforeImageId = await uploadImage(beforeFile);
      }
      if (afterFile) {
        afterImageId = await uploadImage(afterFile);
      }

      if (!beforeImageId || !afterImageId) {
        toast.error("Image upload failed");
        setSaving(false);
        return;
      }

      // Auto-generate alt text if empty
      const altBefore = form.altTextBefore.trim() ||
        `${form.repairType} repair before in ${form.location} Delhi`;
      const altAfter = form.altTextAfter.trim() ||
        `${form.repairType} repair after in ${form.location} Delhi`;

      if (isEditing && initialData?._id) {
        await updateStudy({
          id: initialData._id,
          repairType: form.repairType,
          problemType: form.problemType,
          location: form.location.trim(),
          intentType: form.intentType,
          ...(beforeFile ? { beforeImageId } : {}),
          ...(afterFile ? { afterImageId } : {}),
          altTextBefore: altBefore,
          altTextAfter: altAfter,
          problem: form.problem.trim(),
          solution: form.solution.trim(),
          materialsUsed: form.materialsUsed?.trim() || undefined,
          costMin: form.costMin,
          costMax: form.costMax,
          timeTaken: form.timeTaken.trim(),
          heading: form.heading.trim(),
          pageSlugs: form.pageSlugs,
          isFeatured: form.isFeatured,
          displayOrder: form.displayOrder,
        });
        toast.success("Case study updated");
      } else {
        await createStudy({
          repairType: form.repairType,
          problemType: form.problemType,
          location: form.location.trim(),
          intentType: form.intentType,
          beforeImageId,
          afterImageId,
          altTextBefore: altBefore,
          altTextAfter: altAfter,
          problem: form.problem.trim(),
          solution: form.solution.trim(),
          materialsUsed: form.materialsUsed?.trim() || undefined,
          costMin: form.costMin,
          costMax: form.costMax,
          timeTaken: form.timeTaken.trim(),
          heading: form.heading.trim(),
          pageSlugs: form.pageSlugs,
          isFeatured: form.isFeatured,
          displayOrder: form.displayOrder,
        });
        toast.success("Case study created");
      }

      onOpenChange(false);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to save";
      toast.error(message);
    } finally {
      setSaving(false);
    }
  }

  const filteredSlugs = slugSearch
    ? PAGE_SLUG_OPTIONS.filter((s) => s.includes(slugSearch.toLowerCase()))
    : PAGE_SLUG_OPTIONS;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif">
            {isEditing ? "Edit Case Study" : "Add New Case Study"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Heading */}
          <div className="space-y-2">
            <Label htmlFor="heading">Heading *</Label>
            <Input
              id="heading"
              placeholder="e.g. Leather Sofa Repair – Dwarka"
              value={form.heading}
              onChange={(e) => setForm((p) => ({ ...p, heading: e.target.value }))}
            />
          </div>

          {/* Type selectors row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Repair Type *</Label>
              <Select
                value={form.repairType}
                onValueChange={(val) => setForm((p) => ({ ...p, repairType: val as RepairType }))}
              >
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {REPAIR_TYPES.map((t) => (
                    <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Problem Type *</Label>
              <Select
                value={form.problemType}
                onValueChange={(val) => setForm((p) => ({ ...p, problemType: val as ProblemType }))}
              >
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {PROBLEM_TYPES.map((t) => (
                    <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Intent Type *</Label>
              <Select
                value={form.intentType}
                onValueChange={(val) => setForm((p) => ({ ...p, intentType: val as IntentType }))}
              >
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {INTENT_TYPES.map((t) => (
                    <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-2">
            <Label htmlFor="location">Location *</Label>
            <Input
              id="location"
              placeholder="e.g. Dwarka, Rohini, GK"
              value={form.location}
              onChange={(e) => setForm((p) => ({ ...p, location: e.target.value }))}
            />
          </div>

          {/* Before / After Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Before Image */}
            <div className="space-y-2">
              <Label>Before Image *</Label>
              <input
                ref={beforeInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleFileSelect(file, "before");
                }}
              />
              {beforePreview ? (
                <div className="relative group">
                  <img
                    src={beforePreview}
                    alt="Before preview"
                    className="w-full h-40 object-cover rounded-lg border"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setBeforeFile(null);
                      setBeforePreview(null);
                      if (beforeInputRef.current) beforeInputRef.current.value = "";
                    }}
                    className="absolute top-2 right-2 p-1 bg-background/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="size-4" />
                  </button>
                  <Button
                    type="button"
                    size="sm"
                    variant="secondary"
                    className="mt-2 w-full"
                    onClick={() => beforeInputRef.current?.click()}
                  >
                    Replace Image
                  </Button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => beforeInputRef.current?.click()}
                  className="w-full h-40 border-2 border-dashed rounded-lg flex flex-col items-center justify-center gap-2 text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  <Upload className="size-6" />
                  <span className="text-sm">Upload Before Image</span>
                </button>
              )}
              <div className="flex gap-2">
                <Input
                  placeholder="Alt text for before image"
                  value={form.altTextBefore}
                  onChange={(e) => setForm((p) => ({ ...p, altTextBefore: e.target.value }))}
                  className="text-xs"
                />
                <Button
                  type="button"
                  size="sm"
                  variant="secondary"
                  onClick={() => generateAltText("before")}
                  className="shrink-0 text-xs"
                >
                  Auto
                </Button>
              </div>
            </div>

            {/* After Image */}
            <div className="space-y-2">
              <Label>After Image *</Label>
              <input
                ref={afterInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleFileSelect(file, "after");
                }}
              />
              {afterPreview ? (
                <div className="relative group">
                  <img
                    src={afterPreview}
                    alt="After preview"
                    className="w-full h-40 object-cover rounded-lg border"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setAfterFile(null);
                      setAfterPreview(null);
                      if (afterInputRef.current) afterInputRef.current.value = "";
                    }}
                    className="absolute top-2 right-2 p-1 bg-background/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="size-4" />
                  </button>
                  <Button
                    type="button"
                    size="sm"
                    variant="secondary"
                    className="mt-2 w-full"
                    onClick={() => afterInputRef.current?.click()}
                  >
                    Replace Image
                  </Button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => afterInputRef.current?.click()}
                  className="w-full h-40 border-2 border-dashed rounded-lg flex flex-col items-center justify-center gap-2 text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  <Upload className="size-6" />
                  <span className="text-sm">Upload After Image</span>
                </button>
              )}
              <div className="flex gap-2">
                <Input
                  placeholder="Alt text for after image"
                  value={form.altTextAfter}
                  onChange={(e) => setForm((p) => ({ ...p, altTextAfter: e.target.value }))}
                  className="text-xs"
                />
                <Button
                  type="button"
                  size="sm"
                  variant="secondary"
                  onClick={() => generateAltText("after")}
                  className="shrink-0 text-xs"
                >
                  Auto
                </Button>
              </div>
            </div>
          </div>

          {/* Problem / Solution */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="problem">Problem *</Label>
              <Textarea
                id="problem"
                placeholder="Describe the issue (60-100 words)"
                value={form.problem}
                onChange={(e) => setForm((p) => ({ ...p, problem: e.target.value }))}
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="solution">Solution *</Label>
              <Textarea
                id="solution"
                placeholder="Describe the fix (60-100 words)"
                value={form.solution}
                onChange={(e) => setForm((p) => ({ ...p, solution: e.target.value }))}
                rows={3}
              />
            </div>
          </div>

          {/* Materials Used */}
          <div className="space-y-2">
            <Label htmlFor="materials">Materials Used (optional)</Label>
            <Input
              id="materials"
              placeholder="e.g. High-density foam, premium fabric"
              value={form.materialsUsed ?? ""}
              onChange={(e) => setForm((p) => ({ ...p, materialsUsed: e.target.value }))}
            />
          </div>

          {/* Cost + Time + Order */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label>Min Cost (₹) *</Label>
              <Input
                type="number"
                min={0}
                value={form.costMin}
                onChange={(e) => setForm((p) => ({ ...p, costMin: Number(e.target.value) }))}
              />
            </div>
            <div className="space-y-2">
              <Label>Max Cost (₹) *</Label>
              <Input
                type="number"
                min={0}
                value={form.costMax}
                onChange={(e) => setForm((p) => ({ ...p, costMax: Number(e.target.value) }))}
              />
            </div>
            <div className="space-y-2">
              <Label>Time Taken *</Label>
              <Input
                placeholder="e.g. 2 hours"
                value={form.timeTaken}
                onChange={(e) => setForm((p) => ({ ...p, timeTaken: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label>Display Order</Label>
              <Input
                type="number"
                min={0}
                value={form.displayOrder}
                onChange={(e) => setForm((p) => ({ ...p, displayOrder: Number(e.target.value) }))}
              />
            </div>
          </div>

          {/* Featured toggle */}
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={form.isFeatured}
              onChange={(e) => setForm((p) => ({ ...p, isFeatured: e.target.checked }))}
              className="size-4 rounded accent-primary"
            />
            <span className="text-sm font-medium">Featured Case Study</span>
            <span className="text-xs text-muted-foreground">(gets priority in auto-matching)</span>
          </label>

          {/* Assign to Pages */}
          <div className="space-y-2">
            <Label>Assign to Pages (optional)</Label>
            <p className="text-xs text-muted-foreground">
              Leave empty to auto-match based on repair type and intent. Or manually assign to specific pages.
            </p>
            {form.pageSlugs.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-2">
                {form.pageSlugs.map((slug) => (
                  <span
                    key={slug}
                    className="inline-flex items-center gap-1 px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs"
                  >
                    {slug}
                    <button
                      type="button"
                      onClick={() => togglePageSlug(slug)}
                      className="hover:text-destructive"
                    >
                      <X className="size-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}
            <Input
              placeholder="Search pages..."
              value={slugSearch}
              onChange={(e) => setSlugSearch(e.target.value)}
              className="text-xs"
            />
            {slugSearch && (
              <div className="max-h-40 overflow-y-auto border rounded-lg p-1 space-y-0.5">
                {filteredSlugs.length === 0 ? (
                  <p className="text-xs text-muted-foreground p-2">No pages match your search</p>
                ) : (
                  filteredSlugs.slice(0, 30).map((slug) => {
                    const isSelected = form.pageSlugs.includes(slug);
                    return (
                      <button
                        key={slug}
                        type="button"
                        onClick={() => togglePageSlug(slug)}
                        className={`w-full text-left text-xs px-2 py-1.5 rounded hover:bg-accent transition-colors ${
                          isSelected ? "bg-primary/10 text-primary font-medium" : ""
                        }`}
                      >
                        <ImageIcon className="size-3 inline mr-1.5" />
                        {slug}
                      </button>
                    );
                  })
                )}
              </div>
            )}
          </div>

          {/* Submit */}
          <div className="flex justify-end gap-3 pt-2">
            <Button
              type="button"
              variant="secondary"
              onClick={() => onOpenChange(false)}
              disabled={saving}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={saving}>
              {saving && <Spinner className="mr-2" />}
              {isEditing ? "Update" : "Create"} Case Study
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api.js";
import type { Id } from "@/convex/_generated/dataModel.d.ts";
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import {
  Plus,
  Pencil,
  Trash2,
  ArrowLeft,
  AlertCircle,
  LogIn,
  Star,
  ImageIcon,
} from "lucide-react";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { SignInButton } from "@/components/ui/signin.tsx";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table.tsx";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog.tsx";
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty.tsx";
import CaseStudyFormDialog from "./_components/case-study-form.tsx";

type RepairType = "sofa" | "leather" | "recliner" | "furniture" | "upholstery";
type ProblemType = "sagging" | "tear" | "broken-frame" | "spring" | "polish" | "mechanism" | "other";
type IntentType = "near_me" | "cost" | "urgency" | "type" | "gallery";

type CaseStudy = {
  _id: Id<"repairCaseStudies">;
  _creationTime: number;
  repairType: RepairType;
  problemType: ProblemType;
  location: string;
  intentType: IntentType;
  beforeImageId: Id<"_storage">;
  afterImageId: Id<"_storage">;
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
  beforeUrl: string | null;
  afterUrl: string | null;
};

const INTENT_LABELS: Record<IntentType, string> = {
  near_me: "Near Me",
  cost: "Cost",
  urgency: "Urgency",
  type: "Type",
  gallery: "Gallery",
};

function CaseStudyListContent() {
  const isAdmin = useQuery(api.users.isAdmin);
  const caseStudies = useQuery(api.caseStudies.getAll);
  const removeMutation = useMutation(api.caseStudies.remove);
  const navigate = useNavigate();

  const [formOpen, setFormOpen] = useState(false);
  const [editData, setEditData] = useState<CaseStudy | undefined>();
  const [deleteId, setDeleteId] = useState<Id<"repairCaseStudies"> | null>(null);
  const [deleting, setDeleting] = useState(false);

  if (isAdmin === undefined || caseStudies === undefined) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-64 w-full" />
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="text-center py-16 space-y-4">
        <AlertCircle className="size-10 mx-auto text-destructive" />
        <h2 className="text-xl font-bold">Access Denied</h2>
        <p className="text-muted-foreground">
          You need admin privileges to view this page.
        </p>
        <Button variant="secondary" onClick={() => navigate("/")}>
          Go Home
        </Button>
      </div>
    );
  }

  function openCreate() {
    setEditData(undefined);
    setFormOpen(true);
  }

  function openEdit(study: CaseStudy) {
    setEditData(study);
    setFormOpen(true);
  }

  async function handleDelete() {
    if (!deleteId) return;
    setDeleting(true);
    try {
      await removeMutation({ id: deleteId });
      toast.success("Case study deleted");
    } catch {
      toast.error("Failed to delete case study");
    } finally {
      setDeleting(false);
      setDeleteId(null);
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">
            {caseStudies.length} case {caseStudies.length === 1 ? "study" : "studies"} total
          </p>
        </div>
        <Button onClick={openCreate} className="gap-2">
          <Plus className="size-4" />
          Add Case Study
        </Button>
      </div>

      {/* List */}
      {caseStudies.length === 0 ? (
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon"><ImageIcon /></EmptyMedia>
            <EmptyTitle>No case studies yet</EmptyTitle>
            <EmptyDescription>
              Upload your first before/after repair case study to display on SEO pages.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button size="sm" onClick={openCreate}>
              <Plus className="size-4 mr-1" />
              Add Case Study
            </Button>
          </EmptyContent>
        </Empty>
      ) : (
        <Card>
          <CardContent className="p-0 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Before / After</TableHead>
                  <TableHead>Heading</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Cost</TableHead>
                  <TableHead>Pages</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {caseStudies.map((study) => (
                  <TableRow key={study._id}>
                    <TableCell>
                      <div className="flex gap-1.5">
                        {study.beforeUrl ? (
                          <img
                            src={study.beforeUrl}
                            alt={study.altTextBefore}
                            className="size-16 object-cover rounded border"
                          />
                        ) : (
                          <div className="size-16 bg-muted rounded border flex items-center justify-center">
                            <ImageIcon className="size-5 text-muted-foreground" />
                          </div>
                        )}
                        {study.afterUrl ? (
                          <img
                            src={study.afterUrl}
                            alt={study.altTextAfter}
                            className="size-16 object-cover rounded border"
                          />
                        ) : (
                          <div className="size-16 bg-muted rounded border flex items-center justify-center">
                            <ImageIcon className="size-5 text-muted-foreground" />
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1.5">
                        {study.isFeatured && (
                          <Star className="size-3.5 text-amber-500 fill-amber-500 shrink-0" />
                        )}
                        <span className="font-medium text-sm line-clamp-2">
                          {study.heading}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <Badge variant="secondary" className="text-xs capitalize">
                          {study.repairType}
                        </Badge>
                        <br />
                        <Badge variant="secondary" className="text-xs">
                          {INTENT_LABELS[study.intentType]}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm">{study.location}</TableCell>
                    <TableCell className="text-sm">
                      ₹{study.costMin.toLocaleString("en-IN")} – ₹{study.costMax.toLocaleString("en-IN")}
                    </TableCell>
                    <TableCell>
                      {study.pageSlugs.length > 0 ? (
                        <span className="text-xs text-muted-foreground">
                          {study.pageSlugs.length} page{study.pageSlugs.length > 1 ? "s" : ""}
                        </span>
                      ) : (
                        <span className="text-xs text-muted-foreground italic">Auto</span>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-1">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => openEdit(study as CaseStudy)}
                        >
                          <Pencil className="size-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-destructive hover:text-destructive"
                          onClick={() => setDeleteId(study._id)}
                        >
                          <Trash2 className="size-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}

      {/* Form Dialog */}
      <CaseStudyFormDialog
        open={formOpen}
        onOpenChange={(open) => {
          setFormOpen(open);
          if (!open) setEditData(undefined);
        }}
        initialData={
          editData
            ? {
                _id: editData._id,
                repairType: editData.repairType,
                problemType: editData.problemType,
                location: editData.location,
                intentType: editData.intentType,
                beforeImageId: editData.beforeImageId,
                afterImageId: editData.afterImageId,
                altTextBefore: editData.altTextBefore,
                altTextAfter: editData.altTextAfter,
                problem: editData.problem,
                solution: editData.solution,
                materialsUsed: editData.materialsUsed,
                costMin: editData.costMin,
                costMax: editData.costMax,
                timeTaken: editData.timeTaken,
                heading: editData.heading,
                pageSlugs: editData.pageSlugs,
                isFeatured: editData.isFeatured,
                displayOrder: editData.displayOrder,
                beforeUrl: editData.beforeUrl,
                afterUrl: editData.afterUrl,
              }
            : undefined
        }
      />

      {/* Delete Confirmation */}
      <AlertDialog open={!!deleteId} onOpenChange={(open) => !open && setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Case Study?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete this case study and its images. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={deleting}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              disabled={deleting}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {deleting ? "Deleting..." : "Delete"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default function CaseStudiesAdminPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-10 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header with back link */}
          <div className="mb-8">
            <Button
              variant="ghost"
              size="sm"
              className="gap-1.5 mb-3 -ml-2"
              onClick={() => navigate("/admin")}
            >
              <ArrowLeft className="size-4" />
              Back to Dashboard
            </Button>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold">
              Repair Case Studies
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Upload before/after repair images to display on SEO pages as social proof.
            </p>
          </div>

          <AuthLoading>
            <div className="space-y-4">
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-64 w-full" />
            </div>
          </AuthLoading>

          <Unauthenticated>
            <div className="text-center py-16 space-y-4">
              <LogIn className="size-10 mx-auto text-muted-foreground" />
              <p className="text-muted-foreground">
                Sign in to access the case studies panel.
              </p>
              <SignInButton />
            </div>
          </Unauthenticated>

          <Authenticated>
            <CaseStudyListContent />
          </Authenticated>
        </div>
      </main>
      <Footer />
    </div>
  );
}

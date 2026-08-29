import { useState, useRef, useCallback } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api.js";
import { toast } from "sonner";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  Check,
  Upload,
  X,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { Separator } from "@/components/ui/separator.tsx";
import { cn } from "@/lib/utils.ts";
import {
  SERVICES,
  TIME_SLOTS,
  SERVICE_MAP,
  type ServiceKey,
} from "@/lib/booking-constants.ts";
import type { Id } from "@/convex/_generated/dataModel.d.ts";

const TOTAL_STEPS = 7;

type BookingFormData = {
  service: ServiceKey | null;
  imageStorageIds: Id<"_storage">[];
  imagePreviewUrls: string[];
  description: string;
  date: string;
  timeSlot: string;
  address: string;
  landmark: string;
  phone: string;
  customerName: string;
};

const initialFormData: BookingFormData = {
  service: null,
  imageStorageIds: [],
  imagePreviewUrls: [],
  description: "",
  date: "",
  timeSlot: "",
  address: "",
  landmark: "",
  phone: "",
  customerName: "",
};

export default function BookingForm({
  onComplete,
}: {
  onComplete: (bookingNumber: string) => void;
}) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<BookingFormData>(initialFormData);
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const generateUploadUrl = useMutation(api.bookings.generateUploadUrl);
  const createBooking = useMutation(api.bookings.create);

  const today = new Date().toISOString().split("T")[0];

  const canNext = useCallback((): boolean => {
    switch (step) {
      case 1:
        return form.service !== null;
      case 2:
        return true; // photos optional
      case 3:
        return form.description.trim().length >= 10;
      case 4:
        return form.date !== "" && form.timeSlot !== "";
      case 5:
        return (
          form.address.trim().length >= 5 &&
          form.phone.trim().length >= 10 &&
          form.customerName.trim().length >= 2
        );
      case 6:
        return true; // review step
      default:
        return false;
    }
  }, [step, form]);

  const handleImageUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setUploading(true);

    try {
      const newIds: Id<"_storage">[] = [];
      const newPreviews: string[] = [];

      for (const file of Array.from(files)) {
        const url = await generateUploadUrl();
        const result = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": file.type },
          body: file,
        });
        const { storageId } = await result.json();
        newIds.push(storageId);
        newPreviews.push(URL.createObjectURL(file));
      }

      setForm((prev) => ({
        ...prev,
        imageStorageIds: [...prev.imageStorageIds, ...newIds],
        imagePreviewUrls: [...prev.imagePreviewUrls, ...newPreviews],
      }));
    } catch {
      toast.error("Failed to upload images. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const removeImage = (index: number) => {
    setForm((prev) => ({
      ...prev,
      imageStorageIds: prev.imageStorageIds.filter((_, i) => i !== index),
      imagePreviewUrls: prev.imagePreviewUrls.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async () => {
    if (!form.service) return;
    setSubmitting(true);
    try {
      const result = await createBooking({
        service: form.service,
        description: form.description,
        imageStorageIds: form.imageStorageIds,
        date: form.date,
        timeSlot: form.timeSlot,
        address: form.address,
        landmark: form.landmark || undefined,
        phone: form.phone,
        customerName: form.customerName,
      });
      onComplete(result.bookingNumber);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to create booking";
      toast.error(message);
    } finally {
      setSubmitting(false);
    }
  };

  const estimatedPrice = form.service
    ? SERVICE_MAP[form.service].startingPrice
    : 0;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between text-xs text-muted-foreground mb-2">
          <span>Step {step} of {TOTAL_STEPS}</span>
          <span>{Math.round((step / TOTAL_STEPS) * 100)}%</span>
        </div>
        <div className="h-2 bg-secondary rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Steps */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
        >
          {/* Step 1: Select Service */}
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-bold">Select Service</h2>
              <p className="text-muted-foreground">
                What type of furniture needs repair?
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SERVICES.map((s) => (
                  <Card
                    key={s.key}
                    className={cn(
                      "cursor-pointer transition-all hover:shadow-md",
                      form.service === s.key
                        ? "ring-2 ring-primary bg-primary/5"
                        : "hover:border-primary/30"
                    )}
                    onClick={() => setForm({ ...form, service: s.key })}
                  >
                    <CardContent className="flex items-start gap-3 py-4">
                      <div
                        className={cn(
                          "size-10 rounded-lg flex items-center justify-center shrink-0",
                          form.service === s.key
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-muted-foreground"
                        )}
                      >
                        <s.icon className="size-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-sm">{s.label}</p>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {s.description}
                        </p>
                        <p className="text-xs font-semibold text-primary mt-1">
                          From {"\u20B9"}{s.startingPrice}
                        </p>
                      </div>
                      {form.service === s.key && (
                        <Check className="size-5 text-primary shrink-0 ml-auto" />
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Upload Photos */}
          {step === 2 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-bold">Upload Photos</h2>
              <p className="text-muted-foreground">
                Take photos of the damaged furniture (optional but helpful).
              </p>
              <div
                className="border-2 border-dashed rounded-xl p-8 text-center cursor-pointer hover:border-primary/50 transition-colors"
                onClick={() => fileRef.current?.click()}
              >
                <input
                  type="file"
                  ref={fileRef}
                  multiple
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleImageUpload(e.target.files)}
                />
                {uploading ? (
                  <Loader2 className="size-8 mx-auto text-primary animate-spin" />
                ) : (
                  <>
                    <Camera className="size-8 mx-auto text-muted-foreground mb-2" />
                    <p className="text-sm font-medium">Click to upload or take photos</p>
                    <p className="text-xs text-muted-foreground">
                      JPG, PNG up to 10MB each
                    </p>
                  </>
                )}
              </div>
              {form.imagePreviewUrls.length > 0 && (
                <div className="grid grid-cols-3 gap-3">
                  {form.imagePreviewUrls.map((url, i) => (
                    <div key={i} className="relative rounded-lg overflow-hidden aspect-square">
                      <img
                        src={url}
                        alt={`Upload ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <button
                        onClick={() => removeImage(i)}
                        className="absolute top-1 right-1 size-6 bg-destructive text-white rounded-full flex items-center justify-center"
                      >
                        <X className="size-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Step 3: Describe Issue */}
          {step === 3 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-bold">Describe the Issue</h2>
              <p className="text-muted-foreground">
                Tell us what needs to be fixed in detail.
              </p>
              <Textarea
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                placeholder="E.g., The sofa's left armrest is broken and the cushion foam needs replacement. Fabric is torn near the back..."
                rows={5}
                className="resize-none"
              />
              <p className="text-xs text-muted-foreground">
                Minimum 10 characters ({form.description.length}/10)
              </p>
            </div>
          )}

          {/* Step 4: Date & Time */}
          {step === 4 && (
            <div className="space-y-5">
              <h2 className="text-2xl font-serif font-bold">
                Pick Date {"&"} Time
              </h2>
              <p className="text-muted-foreground">
                Choose a convenient date and time slot for the visit.
              </p>
              <div className="space-y-2">
                <Label>Select Date</Label>
                <Input
                  type="date"
                  value={form.date}
                  min={today}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>Select Time Slot</Label>
                <div className="grid grid-cols-2 gap-2">
                  {TIME_SLOTS.map((slot) => (
                    <Card
                      key={slot}
                      className={cn(
                        "cursor-pointer text-center transition-all",
                        form.timeSlot === slot
                          ? "ring-2 ring-primary bg-primary/5"
                          : "hover:border-primary/30"
                      )}
                      onClick={() => setForm({ ...form, timeSlot: slot })}
                    >
                      <CardContent className="py-3">
                        <p className="text-sm font-medium">{slot}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Address */}
          {step === 5 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-bold">Your Details</h2>
              <p className="text-muted-foreground">
                Tell us who you are and where the technician should visit.
              </p>
              <div className="space-y-3">
                <div className="space-y-2">
                  <Label>Full Name *</Label>
                  <Input
                    value={form.customerName}
                    onChange={(e) =>
                      setForm({ ...form, customerName: e.target.value })
                    }
                    placeholder="John Smith"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Phone Number *</Label>
                  <Input
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    placeholder="+91 92179 99355"
                    type="tel"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Full Address *</Label>
                  <Textarea
                    value={form.address}
                    onChange={(e) =>
                      setForm({ ...form, address: e.target.value })
                    }
                    placeholder="House/Flat no., Street, Colony, City, PIN code"
                    rows={3}
                    className="resize-none"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Landmark (Optional)</Label>
                  <Input
                    value={form.landmark}
                    onChange={(e) =>
                      setForm({ ...form, landmark: e.target.value })
                    }
                    placeholder="Near metro station, temple, etc."
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 6: Review & Price */}
          {step === 6 && form.service && (
            <div className="space-y-5">
              <h2 className="text-2xl font-serif font-bold">
                Review {"&"} Confirm
              </h2>
              <p className="text-muted-foreground">
                Please review your booking details before confirming.
              </p>
              <Card>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Service</span>
                    <span className="font-semibold">
                      {SERVICE_MAP[form.service].label}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Photos</span>
                    <span>{form.imageStorageIds.length} uploaded</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Issue</span>
                    <span className="text-right max-w-[60%] line-clamp-2">
                      {form.description}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Date</span>
                    <span>
                      {new Date(form.date + "T00:00:00").toLocaleDateString(
                        "en-IN",
                        {
                          weekday: "short",
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        }
                      )}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Time</span>
                    <span>{form.timeSlot}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Name</span>
                    <span className="font-semibold">{form.customerName}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Phone</span>
                    <span>{form.phone}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Address</span>
                    <span className="text-right max-w-[60%] line-clamp-2">
                      {form.address}
                    </span>
                  </div>
                  <Separator />
                  <div className="pt-2 text-sm text-muted-foreground bg-secondary/50 rounded-lg px-3 py-3">
                    Our technician will inspect and confirm the final price at your doorstep before starting any work.
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Step 7: Submitting */}
          {step === 7 && (
            <div className="text-center space-y-4 py-12">
              <Loader2 className="size-12 mx-auto text-primary animate-spin" />
              <h2 className="text-2xl font-serif font-bold">
                Creating Your Booking...
              </h2>
              <p className="text-muted-foreground">Please wait a moment.</p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      {step <= 6 && (
        <div className="flex justify-between mt-8 pt-6 border-t border-border">
          <Button
            variant="ghost"
            onClick={() => setStep(Math.max(1, step - 1))}
            disabled={step === 1}
          >
            <ArrowLeft className="size-4 mr-1" />
            Back
          </Button>

          {step < 6 ? (
            <Button
              onClick={() => setStep(step + 1)}
              disabled={!canNext()}
            >
              Next
              <ArrowRight className="size-4 ml-1" />
            </Button>
          ) : (
            <Button
              onClick={() => {
                setStep(7);
                handleSubmit();
              }}
              disabled={submitting}
            >
              {submitting ? (
                <Loader2 className="size-4 mr-1 animate-spin" />
              ) : (
                <Upload className="size-4 mr-1" />
              )}
              Confirm Booking
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

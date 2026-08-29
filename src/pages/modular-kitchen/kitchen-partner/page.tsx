import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api.js";
import { toast } from "sonner";
import { Phone, Users, Clock, ShieldCheck, ClipboardList, Handshake, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select.tsx";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import { PHONE_NUMBER } from "@/lib/seo-constants.ts";

const MARKET_SLUG = "chandigarh-tricity";

const CITIES_COVERED = {
  chandigarh: [
    "Sector 7", "Sector 9", "Sector 15", "Sector 17", "Sector 22",
    "Sector 26", "Sector 34", "Sector 35", "Sector 43", "Sector 44",
  ],
  mohali: [
    "Phase 1", "Phase 2", "Phase 3B1", "Phase 5", "Phase 7",
    "Phase 8", "Phase 10", "Sector 66", "Sector 70", "Sector 71",
  ],
  panchkula: [
    "Sector 2", "Sector 4", "Sector 6", "Sector 9", "Sector 11",
    "Sector 12", "Sector 15", "Sector 20", "Sector 21", "Sector 25",
  ],
};

const WHY_PARTNER = [
  {
    icon: Users,
    title: "High-Quality Leads",
    description: "We qualify every enquiry before routing. No tyre-kickers.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "14-day average installation. Your clients won't wait.",
  },
  {
    icon: ShieldCheck,
    title: "10-Year Warranty",
    description: "Every kitchen backed by FurniRevive's structural warranty.",
  },
];

const HOW_IT_WORKS = [
  {
    icon: ClipboardList,
    step: "Apply",
    description: "Fill the form below with your details.",
  },
  {
    icon: Handshake,
    step: "We Connect",
    description: "Our partnership team calls you within 24 hours.",
  },
  {
    icon: IndianRupee,
    step: "Start Earning",
    description: "Refer clients or collaborate on projects, earn commission or margin.",
  },
];

export default function KitchenPartnerPage() {
  const { pathname } = useLocation();
  const submitLead = useMutation(api.kitchenPartnerLeads.submitLead);

  const cityLabel = pathname.includes("chandigarh")
    ? "Chandigarh & Tricity"
    : "Tricity (Chandigarh, Mohali, Panchkula)";

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    city: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.city) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    try {
      await submitLead({
        name: formData.name.trim(),
        company: formData.company.trim() || undefined,
        phone: formData.phone.trim(),
        city: formData.city,
        marketSlug: MARKET_SLUG,
        message: formData.message.trim() || undefined,
        source: pathname,
      });
      toast.success("Thanks! We'll call you within 24 hours.");
      setFormData({ name: "", company: "", phone: "", city: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-b from-stone-50 to-amber-50 dark:from-stone-950 dark:to-amber-950/30 py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
            Partner with FurniRevive — Earn on Every Kitchen Project in {cityLabel}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            We work with interior designers, contractors, and builders across {cityLabel} who need
            a reliable modular kitchen manufacturing and installation partner.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="cursor-pointer"
              onClick={() => document.getElementById("partner-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              Apply to Partner
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="cursor-pointer"
              asChild
            >
              <a href={`tel:${PHONE_NUMBER}`}>
                <Phone className="size-4 mr-2" />
                Call Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
            Why Partner With Us
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {WHY_PARTNER.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-card p-6 text-center"
              >
                <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10">
                  <item.icon className="size-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {HOW_IT_WORKS.map((item, idx) => (
              <div key={item.step} className="flex flex-col items-center text-center">
                <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl">
                  {idx + 1}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <item.icon className="size-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">{item.step}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities Covered */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
            Cities & Areas We Cover
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(CITIES_COVERED).map(([city, areas]) => (
              <div key={city}>
                <h3 className="text-lg font-semibold text-foreground capitalize mb-3">
                  {city}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {areas.map((area) => (
                    <span
                      key={area}
                      className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Enquiry Form */}
      <section id="partner-form" className="py-16 px-4 bg-muted/30">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-2">
            Partner Enquiry Form
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            Fill in your details and our partnership team will reach out within 24 hours.
          </p>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="partner-name">Name *</Label>
              <Input
                id="partner-name"
                placeholder="Rajesh Kumar"
                value={formData.name}
                onChange={(e) => setFormData((d) => ({ ...d, name: e.target.value }))}
                required
              />
            </div>
            <div>
              <Label htmlFor="partner-company">Company / Business Name</Label>
              <Input
                id="partner-company"
                placeholder="Your Interior Firm"
                value={formData.company}
                onChange={(e) => setFormData((d) => ({ ...d, company: e.target.value }))}
              />
            </div>
            <div>
              <Label htmlFor="partner-phone">Phone Number *</Label>
              <Input
                id="partner-phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData((d) => ({ ...d, phone: e.target.value }))}
                required
              />
            </div>
            <div>
              <Label htmlFor="partner-city">Your City *</Label>
              <Select
                value={formData.city}
                onValueChange={(val) => setFormData((d) => ({ ...d, city: val }))}
              >
                <SelectTrigger id="partner-city">
                  <SelectValue placeholder="Select your city" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Chandigarh">Chandigarh</SelectItem>
                  <SelectItem value="Mohali">Mohali</SelectItem>
                  <SelectItem value="Panchkula">Panchkula</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="partner-message">Message (optional)</Label>
              <Textarea
                id="partner-message"
                placeholder="Tell us about your business and how you'd like to collaborate..."
                value={formData.message}
                onChange={(e) => setFormData((d) => ({ ...d, message: e.target.value }))}
                rows={4}
              />
            </div>
            <Button
              type="submit"
              className="w-full cursor-pointer"
              size="lg"
              disabled={submitting}
            >
              {submitting ? "Submitting..." : "Submit Partnership Enquiry"}
            </Button>
          </form>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 px-4 text-center">
        <p className="text-muted-foreground">
          Already a modular kitchen buyer?{" "}
          <a
            href="/modular-kitchen-near-me"
            className="text-primary font-medium underline underline-offset-2 hover:text-primary/80"
          >
            Get a free consultation
          </a>
        </p>
      </section>

      <Footer />
    </div>
  );
}

import { Shield, Clock, CheckCircle2 } from "lucide-react";

export default function WarrantyInfo() {
  return (
    <div className="rounded-2xl border border-primary/20 bg-primary/5 px-6 py-5">
      <div className="flex items-center gap-2 mb-4">
        <Shield className="size-5 text-primary" />
        <h3 className="font-semibold text-foreground">Upholstery Warranty</h3>
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="flex items-start gap-2.5">
          <CheckCircle2 className="size-4 text-green-500 mt-0.5 shrink-0" />
          <div>
            <p className="text-sm font-medium text-foreground">Stitching & Fabric</p>
            <p className="text-xs text-muted-foreground">6-month warranty on all stitching and fabric integrity</p>
          </div>
        </div>
        <div className="flex items-start gap-2.5">
          <CheckCircle2 className="size-4 text-green-500 mt-0.5 shrink-0" />
          <div>
            <p className="text-sm font-medium text-foreground">40D Foam</p>
            <p className="text-xs text-muted-foreground">12-month extended warranty on premium foam installations</p>
          </div>
        </div>
        <div className="flex items-start gap-2.5">
          <Clock className="size-4 text-primary mt-0.5 shrink-0" />
          <div>
            <p className="text-sm font-medium text-foreground">Doorstep Claims</p>
            <p className="text-xs text-muted-foreground">All warranty work handled at your home — no drop-off needed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * LocalityProfileSection
 *
 * Renders a "Kitchen Planning in {Locality}" section using verified locality data
 * (from the sofa repair registry where available, or affluence-derived fallback).
 *
 * Also renders a material-suitability block answering the intent-specific question:
 * "Why choose this finish for this locality?"
 *
 * This is the primary content differentiation layer for kitchen material locality pages.
 */
import { MapPin, Home, Info } from "lucide-react";
import type { LocalityProfile } from "@/lib/registry/locality-profile-engine.ts";

type Props = {
  localityName: string;
  cityName: string;
  profile: LocalityProfile;
  suitability: { headline: string; body: string };
};

export default function LocalityProfileSection({ localityName, cityName, profile, suitability }: Props) {
  return (
    <section className="py-14 px-6 max-w-5xl mx-auto">
      {/* Locality context */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-1 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-amber-700 shrink-0" />
          Kitchen Planning in {localityName}, {cityName}
        </h2>
        <p className="text-muted-foreground text-sm mb-5">
          Local property context and kitchen considerations for this area
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {/* Property context card */}
          <div className="rounded-xl border border-border bg-background p-5">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center shrink-0">
                <Home className="w-3.5 h-3.5 text-amber-700" />
              </div>
              <h3 className="font-semibold text-foreground text-sm">Residential Character</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed capitalize-first">
              {localityName} is a {profile.propertyContext}.
            </p>
            {profile.isRich && profile.landmarks.length > 0 && (
              <p className="text-xs text-muted-foreground mt-2">
                Key landmarks: {profile.landmarks.join(", ")}.
              </p>
            )}
          </div>

          {/* Kitchen context card */}
          <div className="rounded-xl border border-border bg-background p-5">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center shrink-0">
                <Info className="w-3.5 h-3.5 text-amber-700" />
              </div>
              <h3 className="font-semibold text-foreground text-sm">Typical Kitchen Profile</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {profile.typicalKitchenContext}
            </p>
          </div>
        </div>

        {/* Adjacent areas (only shown when rich data available) */}
        {profile.isRich && profile.adjacentAreas.length > 0 && (
          <p className="text-xs text-muted-foreground mt-4">
            Also serving nearby areas:{" "}
            {profile.adjacentAreas.slice(0, 5).join(", ")}.
          </p>
        )}
      </div>

      {/* Material suitability — the intent-specific differentiation block */}
      <div className="rounded-xl border border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800 p-6">
        <h2 className="text-lg font-bold text-foreground mb-3">{suitability.headline}</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">{suitability.body}</p>
      </div>
    </section>
  );
}

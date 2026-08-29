import type { KitchenLocalitySnapshotSectionData } from "@/lib/content-engine/index.ts";
import { Link } from "react-router-dom";
import { CheckCircle, MapPin, Navigation, Home, Layers, Palette, DollarSign, Clock } from "lucide-react";

export default function KitchenLocalitySnapshotSection({
  section,
}: {
  section: KitchenLocalitySnapshotSectionData;
}) {
  const {
    localityName,
    areaProfile,
    landmarks,
    nearby,
    propertyTypes,
    recommendedLayouts,
    recommendedMaterials,
    budgetRange,
    installationDays,
  } = section.props;

  return (
    <section className="bg-stone-50 dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <h2 className="text-sm font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-4">
          Quick Locality Guide — {localityName}
        </h2>

        {/* Area Profile — unique per locality */}
        {areaProfile && (
          <p className="text-sm text-stone-600 dark:text-stone-400 mb-5 italic">
            {areaProfile}
          </p>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {/* Reference Points — unique per locality */}
          {landmarks.length > 0 && (
            <div className="col-span-2 md:col-span-1 lg:col-span-2">
              <div className="flex items-center gap-1.5 mb-2">
                <Navigation className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0" />
                <span className="text-xs font-semibold text-stone-600 dark:text-stone-400 uppercase tracking-wide">
                  Reference Points
                </span>
              </div>
              <ul className="space-y-1">
                {landmarks.map((lm) => (
                  <li key={lm} className="text-sm text-stone-700 dark:text-stone-300 flex items-center gap-1">
                    <CheckCircle className="h-3 w-3 text-green-500 shrink-0" />
                    {lm}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Nearby Areas — unique per locality */}
          {nearby.length > 0 && (
            <div className="col-span-2 md:col-span-1 lg:col-span-2">
              <div className="flex items-center gap-1.5 mb-2">
                <Home className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0" />
                <span className="text-xs font-semibold text-stone-600 dark:text-stone-400 uppercase tracking-wide">
                  Nearby Areas
                </span>
              </div>
              <ul className="space-y-1">
                {nearby.map((n) => (
                  <li key={n} className="text-sm text-stone-700 dark:text-stone-300 flex items-center gap-1">
                    <CheckCircle className="h-3 w-3 text-green-500 shrink-0" />
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Ideal Property Types */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-1.5 mb-2">
              <MapPin className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0" />
              <span className="text-xs font-semibold text-stone-600 dark:text-stone-400 uppercase tracking-wide">
                Ideal For
              </span>
            </div>
            <ul className="space-y-1">
              {propertyTypes.map((pt) => (
                <li key={pt} className="text-sm text-stone-700 dark:text-stone-300 flex items-center gap-1">
                  <CheckCircle className="h-3 w-3 text-green-500 shrink-0" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>

          {/* Budget Range */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-1.5 mb-2">
              <DollarSign className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0" />
              <span className="text-xs font-semibold text-stone-600 dark:text-stone-400 uppercase tracking-wide">
                Typical Budget
              </span>
            </div>
            <p className="text-sm font-semibold text-stone-800 dark:text-stone-200">{budgetRange}</p>
          </div>

          {/* Installation Time */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-1.5 mb-2">
              <Clock className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0" />
              <span className="text-xs font-semibold text-stone-600 dark:text-stone-400 uppercase tracking-wide">
                Install Time
              </span>
            </div>
            <p className="text-sm font-semibold text-stone-800 dark:text-stone-200">{installationDays}</p>
          </div>

          {/* Popular Layouts */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-1.5 mb-2">
              <Layers className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0" />
              <span className="text-xs font-semibold text-stone-600 dark:text-stone-400 uppercase tracking-wide">
                Top Layouts
              </span>
            </div>
            <ul className="space-y-1">
              {recommendedLayouts.map((l) => (
                <li key={l.slug}>
                  <Link
                    to={l.href}
                    className="text-sm text-amber-700 dark:text-amber-400 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <CheckCircle className="h-3 w-3 text-green-500 shrink-0" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Finishes */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-1.5 mb-2">
              <Palette className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0" />
              <span className="text-xs font-semibold text-stone-600 dark:text-stone-400 uppercase tracking-wide">
                Top Finishes
              </span>
            </div>
            <ul className="space-y-1">
              {recommendedMaterials.map((m) => (
                <li key={m.slug}>
                  <Link
                    to={m.href}
                    className="text-sm text-amber-700 dark:text-amber-400 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <CheckCircle className="h-3 w-3 text-green-500 shrink-0" />
                    {m.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

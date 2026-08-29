import { useEffect } from "react";
import HubPageLayout from "./_components/HubPageLayout.tsx";

export default function OfficeChairRepairNoidaHub() {
  useEffect(() => {
    document.title =
      "Office Chair Repair in Noida | Corporate On-site Service, GST Invoice | FurniRevive";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc)
      metaDesc.setAttribute(
        "content",
        "Corporate office chair repair across Noida — Sector 62, Sector 63, Film City and more. Same-day on-site service, gas lift & hydraulic repair, GST invoice, AMC plans. Call 92179 99355.",
      );
  }, []);

  return (
    <HubPageLayout
      city="noida"
      cityDisplay="Noida"
      intro="Noida's tech corridors and corporate sectors — from Sector 62 and Sector 63 to Film City — rely on our on-site office chair repair. Gas lift, hydraulic, caster and mesh fixes with GST billing and flexible AMC plans."
    />
  );
}

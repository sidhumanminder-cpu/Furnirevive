import { useEffect } from "react";
import HubPageLayout from "./_components/HubPageLayout.tsx";

export default function OfficeChairRepairFaridabadHub() {
  useEffect(() => {
    document.title =
      "Office Chair Repair in Faridabad | Corporate On-site Service, GST Invoice | FurniRevive";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc)
      metaDesc.setAttribute(
        "content",
        "Corporate office chair repair across Faridabad — industrial estates, corporate offices and business parks. Same-day on-site service, bulk repair, GST invoice, AMC plans. Call 92179 99355.",
      );
  }, []);

  return (
    <HubPageLayout
      city="faridabad"
      cityDisplay="Faridabad"
      intro="We bring on-site office chair repair to Faridabad's industrial estates, corporate offices and business parks. Gas lift, hydraulic and mesh repairs with GST billing, bulk pricing and dependable AMC contracts."
    />
  );
}

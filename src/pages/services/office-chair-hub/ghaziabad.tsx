import { useEffect } from "react";
import HubPageLayout from "./_components/HubPageLayout.tsx";

export default function OfficeChairRepairGhaziabadHub() {
  useEffect(() => {
    document.title =
      "Office Chair Repair in Ghaziabad | Corporate On-site Service, GST Invoice | FurniRevive";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc)
      metaDesc.setAttribute(
        "content",
        "Corporate office chair repair across Ghaziabad — Indirapuram, corporate offices and industrial areas. Same-day on-site service, bulk repair, GST invoice, AMC plans. Call 92179 99355.",
      );
  }, []);

  return (
    <HubPageLayout
      city="ghaziabad"
      cityDisplay="Ghaziabad"
      intro="From Indirapuram to Ghaziabad's corporate offices and industrial areas, our technicians handle on-site office chair repair with same-day service, GST billing, bulk repair pricing and annual maintenance contracts."
    />
  );
}

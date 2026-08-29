import { useEffect } from "react";
import HubPageLayout from "./_components/HubPageLayout.tsx";

export default function OfficeChairRepairDelhiHub() {
  useEffect(() => {
    document.title =
      "Office Chair Repair in Delhi | Corporate On-site Service, GST Invoice | FurniRevive";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc)
      metaDesc.setAttribute(
        "content",
        "Corporate office chair repair across Delhi — Nehru Place, Connaught Place, Barakhamba Road and more. Same-day on-site service, gas lift & hydraulic repair, GST invoice, AMC plans. Call 92179 99355.",
      );
  }, []);

  return (
    <HubPageLayout
      city="delhi"
      cityDisplay="Delhi"
      intro="From Nehru Place and Connaught Place to Barakhamba Road and Okhla, we keep Delhi's corporate offices seated in comfort. On-site gas lift, hydraulic, mesh and executive chair repair with GST billing and AMC contracts."
    />
  );
}

import { useEffect } from "react";
import HubPageLayout from "./_components/HubPageLayout.tsx";

export default function OfficeChairRepairGurgaonHub() {
  useEffect(() => {
    document.title =
      "Office Chair Repair in Gurgaon | Corporate On-site Service, GST Invoice | FurniRevive";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc)
      metaDesc.setAttribute(
        "content",
        "Corporate office chair repair across Gurgaon — Cyber City, Udyog Vihar, Golf Course Road and more. Same-day on-site service, bulk repair, GST invoice, AMC plans. Call 92179 99355.",
      );
  }, []);

  return (
    <HubPageLayout
      city="gurgaon"
      cityDisplay="Gurgaon"
      intro="Gurgaon's IT parks and multinational offices trust us for on-site chair repair — from Cyber City and Udyog Vihar to Golf Course Road and Sohna Road. Fast turnaround, bulk repair, GST billing and tailored AMC contracts."
    />
  );
}

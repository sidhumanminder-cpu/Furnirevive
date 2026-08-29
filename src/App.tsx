import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

// DEV-only: cross-cluster authority audit (tree-shaken in production)
if (import.meta.env.DEV) {
  import("@/lib/seoConfigs/authority-audit.ts");
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}
import { DefaultProviders } from "./components/providers/default.tsx";
import AuthCallback from "./pages/auth/Callback.tsx";
import Index from "./pages/Index.tsx";
import ContactPage from "./pages/contact/page.tsx";
import BookPage from "./pages/book/page.tsx";
import MyBookingsPage from "./pages/my-bookings/page.tsx";
import AdminPage from "./pages/admin/page.tsx";
import AuditPage from "./pages/audit/page.tsx";
import CaseStudiesAdminPage from "./pages/admin/case-studies/page.tsx";
import NotFound from "./pages/NotFound.tsx";
import FloatingTestimonial from "./components/floating-testimonial.tsx";
import FloatingWhatsApp from "./components/floating-whatsapp.tsx";
import DynamicSeoPage from "./pages/services/dynamic-seo-page.tsx";
import SofaRepairNewGurgaon from "./pages/services/programmatic/sofa-repair-new-gurgaon.tsx";
import SofaRepairSector49Gurgaon from "./pages/services/programmatic/sofa-repair-sector-49-gurgaon.tsx";
import SofaRepairSector50Gurgaon from "./pages/services/programmatic/sofa-repair-sector-50-gurgaon.tsx";
import SofaRepairSector56Gurgaon from "./pages/services/programmatic/sofa-repair-sector-56-gurgaon.tsx";
import SofaRepairSector57Gurgaon from "./pages/services/programmatic/sofa-repair-sector-57-gurgaon.tsx";
import SofaRepairSector58Gurgaon from "./pages/services/programmatic/sofa-repair-sector-58-gurgaon.tsx";
import SofaRepairSector65Gurgaon from "./pages/services/programmatic/sofa-repair-sector-65-gurgaon.tsx";
import SofaRepairSector67Gurgaon from "./pages/services/programmatic/sofa-repair-sector-67-gurgaon.tsx";
import SofaRepairSector70Gurgaon from "./pages/services/programmatic/sofa-repair-sector-70-gurgaon.tsx";
import SofaRepairSector71Gurgaon from "./pages/services/programmatic/sofa-repair-sector-71-gurgaon.tsx";
import ReclineRepairSector67Gurgaon from "./pages/services/programmatic/recliner-repair-sector-67-gurgaon.tsx";
import ReclineRepairSector70Gurgaon from "./pages/services/programmatic/recliner-repair-sector-70-gurgaon.tsx";
import ReclineRepairSector71Gurgaon from "./pages/services/programmatic/recliner-repair-sector-71-gurgaon.tsx";
import FurnitureRepairSector67Gurgaon from "./pages/services/programmatic/furniture-repair-sector-67-gurgaon.tsx";
import FurnitureRepairSector70Gurgaon from "./pages/services/programmatic/furniture-repair-sector-70-gurgaon.tsx";
import FurnitureRepairSector71Gurgaon from "./pages/services/programmatic/furniture-repair-sector-71-gurgaon.tsx";
import SofaRepairGolfCourseExtensionGurgaon from "./pages/services/programmatic/sofa-repair-golf-course-extension-gurgaon.tsx";
import SofaRepairSector51Gurgaon from "./pages/services/programmatic/sofa-repair-sector-51-gurgaon.tsx";
import SofaRepairSector59Gurgaon from "./pages/services/programmatic/sofa-repair-sector-59-gurgaon.tsx";
import SofaRepairSector60Gurgaon from "./pages/services/programmatic/sofa-repair-sector-60-gurgaon.tsx";
import SofaRepairSector61Gurgaon from "./pages/services/programmatic/sofa-repair-sector-61-gurgaon.tsx";
import SofaRepairSector62Gurgaon from "./pages/services/programmatic/sofa-repair-sector-62-gurgaon.tsx";
import SofaRepairSector63Gurgaon from "./pages/services/programmatic/sofa-repair-sector-63-gurgaon.tsx";
import SofaRepairSector64Gurgaon from "./pages/services/programmatic/sofa-repair-sector-64-gurgaon.tsx";
import SofaRepairSector66Gurgaon from "./pages/services/programmatic/sofa-repair-sector-66-gurgaon.tsx";
import SofaRepairSector68Gurgaon from "./pages/services/programmatic/sofa-repair-sector-68-gurgaon.tsx";
import SofaRepairSector69Gurgaon from "./pages/services/programmatic/sofa-repair-sector-69-gurgaon.tsx";
import ReclineRepairGolfCourseExtensionGurgaon from "./pages/services/programmatic/recliner-repair-golf-course-extension-gurgaon.tsx";
import ReclineRepairSector51Gurgaon from "./pages/services/programmatic/recliner-repair-sector-51-gurgaon.tsx";
import ReclineRepairSector59Gurgaon from "./pages/services/programmatic/recliner-repair-sector-59-gurgaon.tsx";
import ReclineRepairSector60Gurgaon from "./pages/services/programmatic/recliner-repair-sector-60-gurgaon.tsx";
import ReclineRepairSector61Gurgaon from "./pages/services/programmatic/recliner-repair-sector-61-gurgaon.tsx";
import ReclineRepairSector62Gurgaon from "./pages/services/programmatic/recliner-repair-sector-62-gurgaon.tsx";
import ReclineRepairSector63Gurgaon from "./pages/services/programmatic/recliner-repair-sector-63-gurgaon.tsx";
import ReclineRepairSector64Gurgaon from "./pages/services/programmatic/recliner-repair-sector-64-gurgaon.tsx";
import ReclineRepairSector66Gurgaon from "./pages/services/programmatic/recliner-repair-sector-66-gurgaon.tsx";
import ReclineRepairSector68Gurgaon from "./pages/services/programmatic/recliner-repair-sector-68-gurgaon.tsx";
import ReclineRepairSector69Gurgaon from "./pages/services/programmatic/recliner-repair-sector-69-gurgaon.tsx";
import FurnitureRepairGolfCourseExtensionGurgaon from "./pages/services/programmatic/furniture-repair-golf-course-extension-gurgaon.tsx";
import FurnitureRepairSector51Gurgaon from "./pages/services/programmatic/furniture-repair-sector-51-gurgaon.tsx";
import FurnitureRepairSector59Gurgaon from "./pages/services/programmatic/furniture-repair-sector-59-gurgaon.tsx";
import FurnitureRepairSector60Gurgaon from "./pages/services/programmatic/furniture-repair-sector-60-gurgaon.tsx";
import FurnitureRepairSector61Gurgaon from "./pages/services/programmatic/furniture-repair-sector-61-gurgaon.tsx";
import FurnitureRepairSector62Gurgaon from "./pages/services/programmatic/furniture-repair-sector-62-gurgaon.tsx";
import FurnitureRepairSector63Gurgaon from "./pages/services/programmatic/furniture-repair-sector-63-gurgaon.tsx";
import FurnitureRepairSector64Gurgaon from "./pages/services/programmatic/furniture-repair-sector-64-gurgaon.tsx";
import FurnitureRepairSector66Gurgaon from "./pages/services/programmatic/furniture-repair-sector-66-gurgaon.tsx";
import FurnitureRepairSector68Gurgaon from "./pages/services/programmatic/furniture-repair-sector-68-gurgaon.tsx";
import FurnitureRepairSector69Gurgaon from "./pages/services/programmatic/furniture-repair-sector-69-gurgaon.tsx";
import SofaRepairSector72Gurgaon from "./pages/services/programmatic/sofa-repair-sector-72-gurgaon.tsx";
import SofaRepairSector73Gurgaon from "./pages/services/programmatic/sofa-repair-sector-73-gurgaon.tsx";
import SofaRepairSector74Gurgaon from "./pages/services/programmatic/sofa-repair-sector-74-gurgaon.tsx";
import SofaRepairSector75Gurgaon from "./pages/services/programmatic/sofa-repair-sector-75-gurgaon.tsx";
import SofaRepairSector76Gurgaon from "./pages/services/programmatic/sofa-repair-sector-76-gurgaon.tsx";
import SofaRepairSector77Gurgaon from "./pages/services/programmatic/sofa-repair-sector-77-gurgaon.tsx";
import SofaRepairSector78Gurgaon from "./pages/services/programmatic/sofa-repair-sector-78-gurgaon.tsx";
import SofaRepairSector79Gurgaon from "./pages/services/programmatic/sofa-repair-sector-79-gurgaon.tsx";
import SofaRepairSector80Gurgaon from "./pages/services/programmatic/sofa-repair-sector-80-gurgaon.tsx";
import SofaRepairSector81Gurgaon from "./pages/services/programmatic/sofa-repair-sector-81-gurgaon.tsx";
import SofaRepairDwarkaExpresswayGurgaon from "./pages/services/programmatic/sofa-repair-dwarka-expressway-gurgaon.tsx";
import ReclineRepairNewGurgaon from "./pages/services/programmatic/recliner-repair-new-gurgaon.tsx";
import ReclineRepairSector72Gurgaon from "./pages/services/programmatic/recliner-repair-sector-72-gurgaon.tsx";
import ReclineRepairSector73Gurgaon from "./pages/services/programmatic/recliner-repair-sector-73-gurgaon.tsx";
import ReclineRepairSector74Gurgaon from "./pages/services/programmatic/recliner-repair-sector-74-gurgaon.tsx";
import ReclineRepairSector75Gurgaon from "./pages/services/programmatic/recliner-repair-sector-75-gurgaon.tsx";
import ReclineRepairSector76Gurgaon from "./pages/services/programmatic/recliner-repair-sector-76-gurgaon.tsx";
import ReclineRepairSector77Gurgaon from "./pages/services/programmatic/recliner-repair-sector-77-gurgaon.tsx";
import ReclineRepairSector78Gurgaon from "./pages/services/programmatic/recliner-repair-sector-78-gurgaon.tsx";
import ReclineRepairSector79Gurgaon from "./pages/services/programmatic/recliner-repair-sector-79-gurgaon.tsx";
import ReclineRepairSector80Gurgaon from "./pages/services/programmatic/recliner-repair-sector-80-gurgaon.tsx";
import ReclineRepairSector81Gurgaon from "./pages/services/programmatic/recliner-repair-sector-81-gurgaon.tsx";
import ReclineRepairDwarkaExpresswayGurgaon from "./pages/services/programmatic/recliner-repair-dwarka-expressway-gurgaon.tsx";
import FurnitureRepairNewGurgaon from "./pages/services/programmatic/furniture-repair-new-gurgaon.tsx";
import FurnitureRepairSector72Gurgaon from "./pages/services/programmatic/furniture-repair-sector-72-gurgaon.tsx";
import FurnitureRepairSector73Gurgaon from "./pages/services/programmatic/furniture-repair-sector-73-gurgaon.tsx";
import FurnitureRepairSector74Gurgaon from "./pages/services/programmatic/furniture-repair-sector-74-gurgaon.tsx";
import FurnitureRepairSector75Gurgaon from "./pages/services/programmatic/furniture-repair-sector-75-gurgaon.tsx";
import FurnitureRepairSector76Gurgaon from "./pages/services/programmatic/furniture-repair-sector-76-gurgaon.tsx";
import FurnitureRepairSector77Gurgaon from "./pages/services/programmatic/furniture-repair-sector-77-gurgaon.tsx";
import FurnitureRepairSector78Gurgaon from "./pages/services/programmatic/furniture-repair-sector-78-gurgaon.tsx";
import FurnitureRepairSector79Gurgaon from "./pages/services/programmatic/furniture-repair-sector-79-gurgaon.tsx";
import FurnitureRepairSector80Gurgaon from "./pages/services/programmatic/furniture-repair-sector-80-gurgaon.tsx";
import FurnitureRepairSector81Gurgaon from "./pages/services/programmatic/furniture-repair-sector-81-gurgaon.tsx";
import FurnitureRepairDwarkaExpresswayGurgaon from "./pages/services/programmatic/furniture-repair-dwarka-expressway-gurgaon.tsx";
// Batch B — Sectors 82–90 + New Residential
import SofaRepairSector82Gurgaon from "./pages/services/programmatic/sofa-repair-sector-82-gurgaon.tsx";
import SofaRepairSector82aGurgaon from "./pages/services/programmatic/sofa-repair-sector-82a-gurgaon.tsx";
import SofaRepairSector83Gurgaon from "./pages/services/programmatic/sofa-repair-sector-83-gurgaon.tsx";
import SofaRepairSector84Gurgaon from "./pages/services/programmatic/sofa-repair-sector-84-gurgaon.tsx";
import SofaRepairSector85Gurgaon from "./pages/services/programmatic/sofa-repair-sector-85-gurgaon.tsx";
import SofaRepairSector86Gurgaon from "./pages/services/programmatic/sofa-repair-sector-86-gurgaon.tsx";
import SofaRepairSector87Gurgaon from "./pages/services/programmatic/sofa-repair-sector-87-gurgaon.tsx";
import SofaRepairSector88Gurgaon from "./pages/services/programmatic/sofa-repair-sector-88-gurgaon.tsx";
import SofaRepairSector89Gurgaon from "./pages/services/programmatic/sofa-repair-sector-89-gurgaon.tsx";
import SofaRepairSector90Gurgaon from "./pages/services/programmatic/sofa-repair-sector-90-gurgaon.tsx";
import SofaRepairNewResidentialGurgaon from "./pages/services/programmatic/sofa-repair-new-residential-gurgaon.tsx";
import ReclineRepairSector82Gurgaon from "./pages/services/programmatic/recliner-repair-sector-82-gurgaon.tsx";
import ReclineRepairSector82aGurgaon from "./pages/services/programmatic/recliner-repair-sector-82a-gurgaon.tsx";
import ReclineRepairSector83Gurgaon from "./pages/services/programmatic/recliner-repair-sector-83-gurgaon.tsx";
import ReclineRepairSector84Gurgaon from "./pages/services/programmatic/recliner-repair-sector-84-gurgaon.tsx";
import ReclineRepairSector85Gurgaon from "./pages/services/programmatic/recliner-repair-sector-85-gurgaon.tsx";
import ReclineRepairSector86Gurgaon from "./pages/services/programmatic/recliner-repair-sector-86-gurgaon.tsx";
import ReclineRepairSector87Gurgaon from "./pages/services/programmatic/recliner-repair-sector-87-gurgaon.tsx";
import ReclineRepairSector88Gurgaon from "./pages/services/programmatic/recliner-repair-sector-88-gurgaon.tsx";
import ReclineRepairSector89Gurgaon from "./pages/services/programmatic/recliner-repair-sector-89-gurgaon.tsx";
import ReclineRepairSector90Gurgaon from "./pages/services/programmatic/recliner-repair-sector-90-gurgaon.tsx";
import ReclineRepairNewResidentialGurgaon from "./pages/services/programmatic/recliner-repair-new-residential-gurgaon.tsx";
import FurnitureRepairSector82Gurgaon from "./pages/services/programmatic/furniture-repair-sector-82-gurgaon.tsx";
import FurnitureRepairSector82aGurgaon from "./pages/services/programmatic/furniture-repair-sector-82a-gurgaon.tsx";
import FurnitureRepairSector83Gurgaon from "./pages/services/programmatic/furniture-repair-sector-83-gurgaon.tsx";
import FurnitureRepairSector84Gurgaon from "./pages/services/programmatic/furniture-repair-sector-84-gurgaon.tsx";
import FurnitureRepairSector85Gurgaon from "./pages/services/programmatic/furniture-repair-sector-85-gurgaon.tsx";
import FurnitureRepairSector86Gurgaon from "./pages/services/programmatic/furniture-repair-sector-86-gurgaon.tsx";
import FurnitureRepairSector87Gurgaon from "./pages/services/programmatic/furniture-repair-sector-87-gurgaon.tsx";
import FurnitureRepairSector88Gurgaon from "./pages/services/programmatic/furniture-repair-sector-88-gurgaon.tsx";
import FurnitureRepairSector89Gurgaon from "./pages/services/programmatic/furniture-repair-sector-89-gurgaon.tsx";
import FurnitureRepairSector90Gurgaon from "./pages/services/programmatic/furniture-repair-sector-90-gurgaon.tsx";
import FurnitureRepairNewResidentialGurgaon from "./pages/services/programmatic/furniture-repair-new-residential-gurgaon.tsx";
// Batch C — Sectors 91–111
import SofaRepairSector91Gurgaon from "./pages/services/programmatic/sofa-repair-sector-91-gurgaon.tsx";
import SofaRepairSector92Gurgaon from "./pages/services/programmatic/sofa-repair-sector-92-gurgaon.tsx";
import SofaRepairSector93Gurgaon from "./pages/services/programmatic/sofa-repair-sector-93-gurgaon.tsx";
import SofaRepairSector95Gurgaon from "./pages/services/programmatic/sofa-repair-sector-95-gurgaon.tsx";
import SofaRepairSector99Gurgaon from "./pages/services/programmatic/sofa-repair-sector-99-gurgaon.tsx";
import SofaRepairSector102Gurgaon from "./pages/services/programmatic/sofa-repair-sector-102-gurgaon.tsx";
import SofaRepairSector104Gurgaon from "./pages/services/programmatic/sofa-repair-sector-104-gurgaon.tsx";
import SofaRepairSector109Gurgaon from "./pages/services/programmatic/sofa-repair-sector-109-gurgaon.tsx";
import SofaRepairSector110Gurgaon from "./pages/services/programmatic/sofa-repair-sector-110-gurgaon.tsx";
import SofaRepairSector111Gurgaon from "./pages/services/programmatic/sofa-repair-sector-111-gurgaon.tsx";
import ReclineRepairSector91Gurgaon from "./pages/services/programmatic/recliner-repair-sector-91-gurgaon.tsx";
import ReclineRepairSector92Gurgaon from "./pages/services/programmatic/recliner-repair-sector-92-gurgaon.tsx";
import ReclineRepairSector93Gurgaon from "./pages/services/programmatic/recliner-repair-sector-93-gurgaon.tsx";
import ReclineRepairSector95Gurgaon from "./pages/services/programmatic/recliner-repair-sector-95-gurgaon.tsx";
import ReclineRepairSector99Gurgaon from "./pages/services/programmatic/recliner-repair-sector-99-gurgaon.tsx";
import ReclineRepairSector102Gurgaon from "./pages/services/programmatic/recliner-repair-sector-102-gurgaon.tsx";
import ReclineRepairSector104Gurgaon from "./pages/services/programmatic/recliner-repair-sector-104-gurgaon.tsx";
import ReclineRepairSector109Gurgaon from "./pages/services/programmatic/recliner-repair-sector-109-gurgaon.tsx";
import ReclineRepairSector110Gurgaon from "./pages/services/programmatic/recliner-repair-sector-110-gurgaon.tsx";
import ReclineRepairSector111Gurgaon from "./pages/services/programmatic/recliner-repair-sector-111-gurgaon.tsx";
import FurnitureRepairSector91Gurgaon from "./pages/services/programmatic/furniture-repair-sector-91-gurgaon.tsx";
import FurnitureRepairSector92Gurgaon from "./pages/services/programmatic/furniture-repair-sector-92-gurgaon.tsx";
import FurnitureRepairSector93Gurgaon from "./pages/services/programmatic/furniture-repair-sector-93-gurgaon.tsx";
import FurnitureRepairSector95Gurgaon from "./pages/services/programmatic/furniture-repair-sector-95-gurgaon.tsx";
import FurnitureRepairSector99Gurgaon from "./pages/services/programmatic/furniture-repair-sector-99-gurgaon.tsx";
import FurnitureRepairSector102Gurgaon from "./pages/services/programmatic/furniture-repair-sector-102-gurgaon.tsx";
import FurnitureRepairSector104Gurgaon from "./pages/services/programmatic/furniture-repair-sector-104-gurgaon.tsx";
import FurnitureRepairSector109Gurgaon from "./pages/services/programmatic/furniture-repair-sector-109-gurgaon.tsx";
import FurnitureRepairSector110Gurgaon from "./pages/services/programmatic/furniture-repair-sector-110-gurgaon.tsx";
import FurnitureRepairSector111Gurgaon from "./pages/services/programmatic/furniture-repair-sector-111-gurgaon.tsx";
// Batch D — Premium Townships
import SofaRepairVipulWorldGurgaon from "./pages/services/programmatic/sofa-repair-vipul-world-gurgaon.tsx";
import SofaRepairCentralParkGurgaon from "./pages/services/programmatic/sofa-repair-central-park-gurgaon.tsx";
import SofaRepairTataRaisinaGurgaon from "./pages/services/programmatic/sofa-repair-tata-raisina-gurgaon.tsx";
import SofaRepairEmaarPalmDriveGurgaon from "./pages/services/programmatic/sofa-repair-emaar-palm-drive-gurgaon.tsx";
import SofaRepairEmaarMarbellaGurgaon from "./pages/services/programmatic/sofa-repair-emaar-marbella-gurgaon.tsx";
import SofaRepairOrchidPetalsGurgaon from "./pages/services/programmatic/sofa-repair-orchid-petals-gurgaon.tsx";
import SofaRepairBestechParkViewGurgaon from "./pages/services/programmatic/sofa-repair-bestech-park-view-gurgaon.tsx";
import SofaRepairVatikaCityGurgaon from "./pages/services/programmatic/sofa-repair-vatika-city-gurgaon.tsx";
import SofaRepairRichmondParkGurgaon from "./pages/services/programmatic/sofa-repair-richmond-park-gurgaon.tsx";
import SofaRepairHamiltonCourtGurgaon from "./pages/services/programmatic/sofa-repair-hamilton-court-gurgaon.tsx";
import ReclineRepairVipulWorldGurgaon from "./pages/services/programmatic/recliner-repair-vipul-world-gurgaon.tsx";
import ReclineRepairCentralParkGurgaon from "./pages/services/programmatic/recliner-repair-central-park-gurgaon.tsx";
import ReclineRepairTataRaisinaGurgaon from "./pages/services/programmatic/recliner-repair-tata-raisina-gurgaon.tsx";
import ReclineRepairEmaarPalmDriveGurgaon from "./pages/services/programmatic/recliner-repair-emaar-palm-drive-gurgaon.tsx";
import ReclineRepairEmaarMarbellaGurgaon from "./pages/services/programmatic/recliner-repair-emaar-marbella-gurgaon.tsx";
import ReclineRepairOrchidPetalsGurgaon from "./pages/services/programmatic/recliner-repair-orchid-petals-gurgaon.tsx";
import ReclineRepairBestechParkViewGurgaon from "./pages/services/programmatic/recliner-repair-bestech-park-view-gurgaon.tsx";
import ReclineRepairVatikaCityGurgaon from "./pages/services/programmatic/recliner-repair-vatika-city-gurgaon.tsx";
import ReclineRepairRichmondParkGurgaon from "./pages/services/programmatic/recliner-repair-richmond-park-gurgaon.tsx";
import ReclineRepairHamiltonCourtGurgaon from "./pages/services/programmatic/recliner-repair-hamilton-court-gurgaon.tsx";
import FurnitureRepairVipulWorldGurgaon from "./pages/services/programmatic/furniture-repair-vipul-world-gurgaon.tsx";
import FurnitureRepairCentralParkGurgaon from "./pages/services/programmatic/furniture-repair-central-park-gurgaon.tsx";
import FurnitureRepairTataRaisinaGurgaon from "./pages/services/programmatic/furniture-repair-tata-raisina-gurgaon.tsx";
import FurnitureRepairEmaarPalmDriveGurgaon from "./pages/services/programmatic/furniture-repair-emaar-palm-drive-gurgaon.tsx";
import FurnitureRepairEmaarMarbellaGurgaon from "./pages/services/programmatic/furniture-repair-emaar-marbella-gurgaon.tsx";
import FurnitureRepairOrchidPetalsGurgaon from "./pages/services/programmatic/furniture-repair-orchid-petals-gurgaon.tsx";
import FurnitureRepairBestechParkViewGurgaon from "./pages/services/programmatic/furniture-repair-bestech-park-view-gurgaon.tsx";
import FurnitureRepairVatikaCityGurgaon from "./pages/services/programmatic/furniture-repair-vatika-city-gurgaon.tsx";
import FurnitureRepairRichmondParkGurgaon from "./pages/services/programmatic/furniture-repair-richmond-park-gurgaon.tsx";
import FurnitureRepairHamiltonCourtGurgaon from "./pages/services/programmatic/furniture-repair-hamilton-court-gurgaon.tsx";
import SofaUpholsterySector59Gurgaon from "./pages/services/programmatic/sofa-upholstery-sector-59-gurgaon.tsx";
import SofaUpholsteryNewGurgaon from "./pages/services/programmatic/sofa-upholstery-new-gurgaon.tsx";
import SofaUpholsterySector49Gurgaon from "./pages/services/programmatic/sofa-upholstery-sector-49-gurgaon.tsx";
import SofaUpholsterySector50Gurgaon from "./pages/services/programmatic/sofa-upholstery-sector-50-gurgaon.tsx";
import SofaUpholsterySector51Gurgaon from "./pages/services/programmatic/sofa-upholstery-sector-51-gurgaon.tsx";
import SofaUpholsterySector56Gurgaon from "./pages/services/programmatic/sofa-upholstery-sector-56-gurgaon.tsx";
import SofaUpholsterySector57Gurgaon from "./pages/services/programmatic/sofa-upholstery-sector-57-gurgaon.tsx";
import SofaUpholsterySector58Gurgaon from "./pages/services/programmatic/sofa-upholstery-sector-58-gurgaon.tsx";
import SofaUpholsterySector60Gurgaon from "./pages/services/programmatic/sofa-upholstery-sector-60-gurgaon.tsx";
import SofaUpholsterySector61Gurgaon from "./pages/services/programmatic/sofa-upholstery-sector-61-gurgaon.tsx";
import SofaUpholsterySector62Gurgaon from "./pages/services/programmatic/sofa-upholstery-sector-62-gurgaon.tsx";
import SofaUpholsterySector63Gurgaon from "./pages/services/programmatic/sofa-upholstery-sector-63-gurgaon.tsx";
import SofaUpholsterySector64Gurgaon from "./pages/services/programmatic/sofa-upholstery-sector-64-gurgaon.tsx";
import SofaUpholsterySector65Gurgaon from "./pages/services/programmatic/sofa-upholstery-sector-65-gurgaon.tsx";
import SofaUpholsterySector66Gurgaon from "./pages/services/programmatic/sofa-upholstery-sector-66-gurgaon.tsx";
import SofaUpholsterySector67Gurgaon from "./pages/services/programmatic/sofa-upholstery-sector-67-gurgaon.tsx";
import SofaUpholsterySector68Gurgaon from "./pages/services/programmatic/sofa-upholstery-sector-68-gurgaon.tsx";
import SofaUpholsterySector69Gurgaon from "./pages/services/programmatic/sofa-upholstery-sector-69-gurgaon.tsx";
import SofaUpholsterySector70Gurgaon from "./pages/services/programmatic/sofa-upholstery-sector-70-gurgaon.tsx";
import SofaUpholsterySector71Gurgaon from "./pages/services/programmatic/sofa-upholstery-sector-71-gurgaon.tsx";
import SofaUpholsterySector72Gurgaon from "./pages/services/programmatic/sofa-upholstery-sector-72-gurgaon.tsx";
import SofaUpholsteryDwarkaExpressway from "./pages/services/programmatic/sofa-upholstery-dwarka-expressway.tsx";
import SofaUpholsteryGolfCourseExtension from "./pages/services/programmatic/sofa-upholstery-golf-course-extension.tsx";
import SofaUpholsteryDlfPhase1 from "./pages/services/programmatic/sofa-upholstery-dlf-phase-1.tsx";
import SofaUpholsteryDlfPhase2 from "./pages/services/programmatic/sofa-upholstery-dlf-phase-2.tsx";
import SofaUpholsteryDlfPhase3 from "./pages/services/programmatic/sofa-upholstery-dlf-phase-3.tsx";
import SofaUpholsteryDlfPhase4 from "./pages/services/programmatic/sofa-upholstery-dlf-phase-4.tsx";
import SofaUpholsteryDlfPhase5 from "./pages/services/programmatic/sofa-upholstery-dlf-phase-5.tsx";
import SofaUpholsterySushantLok from "./pages/services/programmatic/sofa-upholstery-sushant-lok.tsx";
import SofaUpholsterySohnaRoad from "./pages/services/programmatic/sofa-upholstery-sohna-road.tsx";
import SofaUpholsteryNirvanaCountry from "./pages/services/programmatic/sofa-upholstery-nirvana-country.tsx";
import SofaUpholsteryGolfCourse from "./pages/services/programmatic/sofa-upholstery-golf-course.tsx";
import SofaUpholsterySouthCity1 from "./pages/services/programmatic/sofa-upholstery-south-city-1.tsx";
import SofaUpholsterySouthCity2 from "./pages/services/programmatic/sofa-upholstery-south-city-2.tsx";
import SofaUpholsteryPalamVihar from "./pages/services/programmatic/sofa-upholstery-palam-vihar.tsx";
import SofaUpholsterySector40Gurgaon from "./pages/services/programmatic/sofa-upholstery-sector-40-gurgaon.tsx";
import SofaUpholsterySector41Gurgaon from "./pages/services/programmatic/sofa-upholstery-sector-41-gurgaon.tsx";
import SofaUpholsterySector44Gurgaon from "./pages/services/programmatic/sofa-upholstery-sector-44-gurgaon.tsx";
import SofaUpholsterySector45Gurgaon from "./pages/services/programmatic/sofa-upholstery-sector-45-gurgaon.tsx";
import SofaUpholsterySector46Gurgaon from "./pages/services/programmatic/sofa-upholstery-sector-46-gurgaon.tsx";
import SofaUpholsterySector47Gurgaon from "./pages/services/programmatic/sofa-upholstery-sector-47-gurgaon.tsx";
import SofaUpholsterySector48Gurgaon from "./pages/services/programmatic/sofa-upholstery-sector-48-gurgaon.tsx";
import SofaUpholsterySector52Gurgaon from "./pages/services/programmatic/sofa-upholstery-sector-52-gurgaon.tsx";
import SofaUpholsterySector53Gurgaon from "./pages/services/programmatic/sofa-upholstery-sector-53-gurgaon.tsx";
import SofaUpholsterySector54Gurgaon from "./pages/services/programmatic/sofa-upholstery-sector-54-gurgaon.tsx";
import SofaUpholsterySector55Gurgaon from "./pages/services/programmatic/sofa-upholstery-sector-55-gurgaon.tsx";
import SofaUpholsteryMalibuTowne from "./pages/services/programmatic/sofa-upholstery-malibu-towne.tsx";
import SofaUpholsteryArdeeCity from "./pages/services/programmatic/sofa-upholstery-ardee-city.tsx";
import SofaUpholsteryHeritageCityGurgaon from "./pages/services/programmatic/sofa-upholstery-heritage-city-gurgaon.tsx";
import SofaUpholsterySector82Gurgaon from "./pages/services/programmatic/sofa-upholstery-sector-82-gurgaon.tsx";
import SofaUpholsterySector82aGurgaon from "./pages/services/programmatic/sofa-upholstery-sector-82a-gurgaon.tsx";
import SofaUpholsterySector83Gurgaon from "./pages/services/programmatic/sofa-upholstery-sector-83-gurgaon.tsx";
import SofaUpholsterySector84Gurgaon from "./pages/services/programmatic/sofa-upholstery-sector-84-gurgaon.tsx";
import SofaUpholsterySector85Gurgaon from "./pages/services/programmatic/sofa-upholstery-sector-85-gurgaon.tsx";
import SofaUpholsterySector86Gurgaon from "./pages/services/programmatic/sofa-upholstery-sector-86-gurgaon.tsx";
import SofaUpholsterySector87Gurgaon from "./pages/services/programmatic/sofa-upholstery-sector-87-gurgaon.tsx";
import SofaUpholsterySector88Gurgaon from "./pages/services/programmatic/sofa-upholstery-sector-88-gurgaon.tsx";
import SofaUpholsterySector89Gurgaon from "./pages/services/programmatic/sofa-upholstery-sector-89-gurgaon.tsx";
import SofaUpholsterySector90Gurgaon from "./pages/services/programmatic/sofa-upholstery-sector-90-gurgaon.tsx";
import SofaUpholsterySector91Gurgaon from "./pages/services/programmatic/sofa-upholstery-sector-91-gurgaon.tsx";
import SofaUpholsterySector92Gurgaon from "./pages/services/programmatic/sofa-upholstery-sector-92-gurgaon.tsx";
import SofaUpholsterySector93Gurgaon from "./pages/services/programmatic/sofa-upholstery-sector-93-gurgaon.tsx";
import SofaUpholsterySector95Gurgaon from "./pages/services/programmatic/sofa-upholstery-sector-95-gurgaon.tsx";
import SofaUpholsterySector99Gurgaon from "./pages/services/programmatic/sofa-upholstery-sector-99-gurgaon.tsx";
import SofaUpholsterySector102Gurgaon from "./pages/services/programmatic/sofa-upholstery-sector-102-gurgaon.tsx";
import SofaUpholsterySector104Gurgaon from "./pages/services/programmatic/sofa-upholstery-sector-104-gurgaon.tsx";
import SofaUpholsterySector109Gurgaon from "./pages/services/programmatic/sofa-upholstery-sector-109-gurgaon.tsx";
import SofaUpholsterySector110Gurgaon from "./pages/services/programmatic/sofa-upholstery-sector-110-gurgaon.tsx";
import SofaUpholsterySector111Gurgaon from "./pages/services/programmatic/sofa-upholstery-sector-111-gurgaon.tsx";
import SofaUpholsteryVatikaCityGurgaon from "./pages/services/programmatic/sofa-upholstery-vatika-city-gurgaon.tsx";
import SofaUpholsteryVasantViharDelhi from "./pages/services/programmatic/sofa-upholstery-vasant-vihar-delhi.tsx";
import SofaUpholsteryDefenceColonyDelhi from "./pages/services/programmatic/sofa-upholstery-defence-colony-delhi.tsx";
import SofaUpholsteryFriendsColonyDelhi from "./pages/services/programmatic/sofa-upholstery-friends-colony-delhi.tsx";
import SofaUpholsteryMaharaniBaghDelhi from "./pages/services/programmatic/sofa-upholstery-maharani-bagh-delhi.tsx";
import SofaUpholsteryGreenParkDelhi from "./pages/services/programmatic/sofa-upholstery-green-park-delhi.tsx";
import SofaUpholsteryHauzKhasDelhi from "./pages/services/programmatic/sofa-upholstery-hauz-khas-delhi.tsx";
import SofaUpholsterySafdarjungEnclaveDelhi from "./pages/services/programmatic/sofa-upholstery-safdarjung-enclave-delhi.tsx";
import SofaUpholsteryPanchsheelParkDelhi from "./pages/services/programmatic/sofa-upholstery-panchsheel-park-delhi.tsx";
import SofaUpholsteryGulmoharParkDelhi from "./pages/services/programmatic/sofa-upholstery-gulmohar-park-delhi.tsx";
import SofaUpholsteryGreaterKailash1Delhi from "./pages/services/programmatic/sofa-upholstery-greater-kailash-1-delhi.tsx";
import SofaUpholsteryGreaterKailash2Delhi from "./pages/services/programmatic/sofa-upholstery-greater-kailash-2-delhi.tsx";
import SofaUpholsteryGreaterKailash3Delhi from "./pages/services/programmatic/sofa-upholstery-greater-kailash-3-delhi.tsx";
import SofaUpholsteryRajouriGardenDelhi from "./pages/services/programmatic/sofa-upholstery-rajouri-garden-delhi.tsx";
import SofaUpholsteryPunjabiBaghDelhi from "./pages/services/programmatic/sofa-upholstery-punjabi-bagh-delhi.tsx";
import SofaUpholsteryJanakpuriDelhi from "./pages/services/programmatic/sofa-upholstery-janakpuri-delhi.tsx";
import SofaUpholsteryPaschimViharDelhi from "./pages/services/programmatic/sofa-upholstery-paschim-vihar-delhi.tsx";
import SofaUpholsteryTilakNagarDelhi from "./pages/services/programmatic/sofa-upholstery-tilak-nagar-delhi.tsx";
import SofaUpholsteryVikaspuriDelhi from "./pages/services/programmatic/sofa-upholstery-vikaspuri-delhi.tsx";
import SofaUpholsteryUttamNagarDelhi from "./pages/services/programmatic/sofa-upholstery-uttam-nagar-delhi.tsx";
import SofaUpholsteryRohiniDelhi from "./pages/services/programmatic/sofa-upholstery-rohini-delhi.tsx";
import SofaUpholsteryPitampuraDelhi from "./pages/services/programmatic/sofa-upholstery-pitampura-delhi.tsx";
import SofaUpholsteryAshokViharDelhi from "./pages/services/programmatic/sofa-upholstery-ashok-vihar-delhi.tsx";
import SofaUpholsteryModelTownDelhi from "./pages/services/programmatic/sofa-upholstery-model-town-delhi.tsx";
import SofaUpholsteryShalimarBaghDelhi from "./pages/services/programmatic/sofa-upholstery-shalimar-bagh-delhi.tsx";
import SofaUpholsteryKamlaNagarDelhi from "./pages/services/programmatic/sofa-upholstery-kamla-nagar-delhi.tsx";
import SofaUpholsteryCivilLinesDelhi from "./pages/services/programmatic/sofa-upholstery-civil-lines-delhi.tsx";
import SofaUpholsteryMukherjeeNagarDelhi from "./pages/services/programmatic/sofa-upholstery-mukherjee-nagar-delhi.tsx";
import SofaUpholsteryGtbNagarDelhi from "./pages/services/programmatic/sofa-upholstery-gtb-nagar-delhi.tsx";
import SofaUpholsteryAdarshNagarDelhi from "./pages/services/programmatic/sofa-upholstery-adarsh-nagar-delhi.tsx";
import SofaUpholsteryGujranwalaTownDelhi from "./pages/services/programmatic/sofa-upholstery-gujranwala-town-delhi.tsx";
import SofaUpholsteryKeshavPuramDelhi from "./pages/services/programmatic/sofa-upholstery-keshav-puram-delhi.tsx";
import SofaUpholsteryDerawalNagarDelhi from "./pages/services/programmatic/sofa-upholstery-derawal-nagar-delhi.tsx";
import SofaUpholsteryShaktiNagarDelhi from "./pages/services/programmatic/sofa-upholstery-shakti-nagar-delhi.tsx";
import SofaUpholsteryHudsonLaneDelhi from "./pages/services/programmatic/sofa-upholstery-hudson-lane-delhi.tsx";
import OfficeChairRepairDelhiHub from "./pages/services/office-chair-hub/delhi.tsx";
import OfficeChairRepairGurgaonHub from "./pages/services/office-chair-hub/gurgaon.tsx";
import OfficeChairRepairNoidaHub from "./pages/services/office-chair-hub/noida.tsx";
import OfficeChairRepairFaridabadHub from "./pages/services/office-chair-hub/faridabad.tsx";
import OfficeChairRepairGhaziabadHub from "./pages/services/office-chair-hub/ghaziabad.tsx";
import BlogListingPage from "./pages/blog/page.tsx";
import SofaRepairCostDelhiPost from "./pages/blog/sofa-repair-cost-delhi.tsx";
import FurnitureRepairVsReplacePost from "./pages/blog/furniture-repair-vs-replace.tsx";
import HowToFixDiningChairPost from "./pages/blog/how-to-fix-dining-chair.tsx";
import SofaUpholsteryCostDelhiPost from "./pages/blog/sofa-upholstery-cost-delhi.tsx";
import CommonFurnitureRepairProblemsPost from "./pages/blog/common-furniture-repair-problems.tsx";
import BestSofaFoamDelhiClimatePost from "./pages/blog/best-sofa-foam-for-delhi-climate.tsx";
import LeatherSofaCareTipsDelhiPost from "./pages/blog/leather-sofa-care-tips-delhi.tsx";
import HowToMaintainWoodenFurnitureDelhiPost from "./pages/blog/how-to-maintain-wooden-furniture-delhi.tsx";
import TermiteTreatmentCostDelhiPost from "./pages/blog/termite-treatment-cost-delhi.tsx";
import OfficeChairRepairGuideDelhiPost from "./pages/blog/office-chair-repair-guide-delhi.tsx";
import MonsoonFurnitureCareDelhiPost from "./pages/blog/monsoon-furniture-care-delhi.tsx";
import RecliferSofaRepairGuideDelhiPost from "./pages/blog/recliner-sofa-repair-guide-delhi.tsx";
import SofaRepairVsUpholsteryDelhiPost from "./pages/blog/sofa-repair-vs-upholstery-delhi.tsx";
import SofaFabricTypesGuideDelhiPost from "./pages/blog/sofa-fabric-types-guide-delhi.tsx";
import SofaRepairAtHomeDelhiPost from "./pages/blog/sofa-repair-at-home-delhi.tsx";
import SofaRepairNoidaVsDelhiPost from "./pages/blog/sofa-repair-noida-vs-delhi.tsx";
import FurnitureRestorationCostGuideDelhiNcrPost from "./pages/blog/furniture-restoration-cost-guide-delhi-ncr.tsx";
import HowToChooseFurnitureRepairDelhiPost from "./pages/blog/how-to-choose-furniture-repair-service-delhi.tsx";
import LuxuryImportedFurnitureRepairDelhiNcrPost from "./pages/blog/luxury-imported-furniture-repair-delhi-ncr.tsx";
import SofaRepairVsBuyNewSofaPost from "./pages/blog/sofa-repair-vs-buy-new-sofa.tsx";
import IsSofaRestorationWorthItPost from "./pages/blog/is-sofa-restoration-worth-it.tsx";
import HowLongDoesSofaFoamLastPost from "./pages/blog/how-long-does-sofa-foam-last.tsx";
import CommonReclineMotorProblemsPost from "./pages/blog/common-recliner-motor-problems.tsx";
import ImportedFurnitureRestorationGuidePost from "./pages/blog/imported-furniture-restoration-guide.tsx";
import WoodenFurnitureRestorationGuideDelhiPost from "./pages/blog/wooden-furniture-restoration-guide-delhi.tsx";
import OfficeChairErgonomicRepairUpgradeDelhiPost from "./pages/blog/office-chair-ergonomic-repair-upgrade-delhi.tsx";
import UltimateSofaUpholsteryGuidePost from "./pages/blog/ultimate-sofa-upholstery-guide.tsx";
import SofaFabricChangeCostPost from "./pages/blog/sofa-fabric-change-cost.tsx";
import SofaReupholsteryVsBuyingNewPost from "./pages/blog/sofa-reupholstery-vs-buying-new.tsx";
import LeatherSofaUpholsteryGuidePost from "./pages/blog/leather-sofa-upholstery-guide.tsx";
import BestSofaFabricsIndianHomesPost from "./pages/blog/best-sofa-fabrics-indian-homes.tsx";
import SofaUpholsteryProcessPost from "./pages/blog/sofa-upholstery-process.tsx";
import HowLongSofaUpholsteryLastsPost from "./pages/blog/how-long-does-sofa-upholstery-last.tsx";
import SignsYourSofaNeedsReupholsteryPost from "./pages/blog/signs-your-sofa-needs-reupholstery.tsx";
import FoamReplacementVsSofaUpholsteryPost from "./pages/blog/foam-replacement-vs-sofa-upholstery.tsx";
import CustomSofaUpholsteryPost from "./pages/blog/custom-sofa-upholstery.tsx";
import VelvetVsLeatherVsFabricPost from "./pages/blog/velvet-vs-leather-vs-fabric-sofa-upholstery.tsx";
import PetFriendlySofaFabricPost from "./pages/blog/pet-friendly-sofa-fabric-guide.tsx";
import SofaUpholsteryMistakesPost from "./pages/blog/sofa-upholstery-mistakes.tsx";
import IsSofaUpholsteryWorthItPost from "./pages/blog/is-sofa-upholstery-worth-it.tsx";
import HowToMaintainUpholsteredSofaPost from "./pages/blog/how-to-maintain-upholstered-sofa.tsx";
import UltimateSofaRepairCostGuidePost from "./pages/blog/sofa-repair-cost-delhi-ncr.tsx";
import SofaRepairCostPerSeatPost from "./pages/blog/sofa-repair-cost-per-seat.tsx";
import SofaFoamReplacementCostPost from "./pages/blog/sofa-foam-replacement-cost.tsx";
import SofaSpringRepairCostPost from "./pages/blog/sofa-spring-repair-cost.tsx";
import ReclineRepairCostGuidePost from "./pages/blog/recliner-repair-cost-guide.tsx";
import IsSofaRepairWorthItPost from "./pages/blog/is-sofa-repair-worth-it.tsx";
import SofaRepairVsReplacementPost from "./pages/blog/sofa-repair-vs-replacement.tsx";
import IsMySofaWorthRepairingPost from "./pages/blog/is-my-sofa-worth-repairing.tsx";
import SignsYourSofaCanBeRestoredPost from "./pages/blog/signs-your-sofa-needs-repair.tsx";
import ExtendSofaLifePost from "./pages/blog/extend-sofa-life.tsx";
import UltimateFurnitureRestorationGuidePost from "./pages/blog/ultimate-furniture-restoration-guide.tsx";
import FurnitureRestorationVsRepairVsRefinishingPost from "./pages/blog/furniture-restoration-vs-repair-vs-refinishing.tsx";
import IsFurnitureRestorationWorthItPost from "./pages/blog/is-furniture-restoration-worth-it.tsx";
import FurnitureRestorationBenefitsPost from "./pages/blog/furniture-restoration-benefits.tsx";
import DiyVsProfessionalFurnitureRestorationPost from "./pages/blog/diy-vs-professional-furniture-restoration.tsx";
import CompleteFurnitureRestorationProcessPost from "./pages/blog/complete-furniture-restoration-process.tsx";
import HowLongFurnitureRestorationLastsPost from "./pages/blog/how-long-does-furniture-restoration-last.tsx";
import FurnitureRestorationMistakesPost from "./pages/blog/furniture-restoration-mistakes.tsx";
import HowToChooseFurnitureRestorationCompanyPost from "./pages/blog/how-to-choose-furniture-restoration-company.tsx";
import FurnitureRestorationChecklistPost from "./pages/blog/furniture-restoration-checklist.tsx";
// Office Chair Blog Cluster
import OfficeChairRepairCostGuidePost from "./pages/blog/office-chair-repair-cost-guide.tsx";
import GasLiftReplacementGuidePost from "./pages/blog/gas-lift-replacement-guide.tsx";
import HydraulicCylinderRepairOfficeChairPost from "./pages/blog/hydraulic-cylinder-repair-office-chair.tsx";
import OfficeChairWheelsReplacementGuidePost from "./pages/blog/office-chair-wheels-replacement-guide.tsx";
import MeshChairRepairGuidePost from "./pages/blog/mesh-chair-repair-guide.tsx";
import ExecutiveChairMaintenancePost from "./pages/blog/executive-chair-maintenance.tsx";
import GamingChairRepairGuidePost from "./pages/blog/gaming-chair-repair-guide.tsx";
import VisitorChairRepairPost from "./pages/blog/visitor-chair-repair.tsx";
import ConferenceChairRepairPost from "./pages/blog/conference-chair-repair.tsx";
import OfficeChairAmcGuidePost from "./pages/blog/office-chair-amc-guide.tsx";
import BulkOfficeChairRepairPost from "./pages/blog/bulk-office-chair-repair.tsx";
import ErgonomicChairCarePost from "./pages/blog/ergonomic-chair-care.tsx";
import BuyingVsRepairingOfficeChairPost from "./pages/blog/buying-vs-repairing-office-chair.tsx";
import OfficeChairMaintenanceChecklistPost from "./pages/blog/office-chair-maintenance-checklist.tsx";
import WorkstationChairSetupGuidePost from "./pages/blog/workstation-chair-setup-guide.tsx";
import OfficeErgonomicsChairGuidePost from "./pages/blog/office-ergonomics-chair-guide.tsx";
import CorporateFurnitureMaintenancePost from "./pages/blog/corporate-furniture-maintenance.tsx";
import OfficeChairLifespanGuidePost from "./pages/blog/office-chair-lifespan-guide.tsx";
import CommonOfficeChairProblemsPost from "./pages/blog/common-office-chair-problems.tsx";
import OfficeChairRepairProcessExplainedPost from "./pages/blog/office-chair-repair-process-explained.tsx";
// Kitchen Blog Cluster
import KitchenBlogIndexPage from "./pages/blog/modular-kitchen/page.tsx";
import KitchenBlogLShapeDesignGuide from "./pages/blog/modular-kitchen-l-shape-design-guide.tsx";
import KitchenBlogUShapeDesignGuide from "./pages/blog/modular-kitchen-u-shape-design-guide.tsx";
import KitchenBlogParallelDesignGuide from "./pages/blog/modular-kitchen-parallel-design-guide.tsx";
import KitchenBlogStraightDesignGuide from "./pages/blog/modular-kitchen-straight-design-guide.tsx";
import KitchenBlogIslandDesignGuide from "./pages/blog/modular-kitchen-island-design-guide.tsx";
import KitchenBlogPeninsulaDesignGuide from "./pages/blog/modular-kitchen-peninsula-design-guide.tsx";
import KitchenBlogAcrylicGuide from "./pages/blog/acrylic-modular-kitchen-guide.tsx";
import KitchenBlogLaminateGuide from "./pages/blog/laminate-modular-kitchen-guide.tsx";
import KitchenBlogMembraneGuide from "./pages/blog/membrane-modular-kitchen-guide.tsx";
import KitchenBlogPvcGuide from "./pages/blog/pvc-modular-kitchen-guide.tsx";
import KitchenBlogPuGuide from "./pages/blog/pu-modular-kitchen-guide.tsx";
import KitchenBlogVeneerGuide from "./pages/blog/veneer-modular-kitchen-guide.tsx";
import KitchenBlogGlassGuide from "./pages/blog/glass-modular-kitchen-guide.tsx";
import KitchenBlogStainlessSteelGuide from "./pages/blog/stainless-steel-modular-kitchen-guide.tsx";
import KitchenBlogCostDelhiGuide from "./pages/blog/modular-kitchen-cost-delhi-guide.tsx";
import KitchenBlogCostGurgaon from "./pages/blog/modular-kitchen-cost-gurgaon.tsx";
import KitchenBlogSmallKitchenCost from "./pages/blog/small-kitchen-cost-guide.tsx";
import KitchenBlog10x10KitchenCost from "./pages/blog/10x10-kitchen-cost-guide.tsx";
import KitchenBlogLuxuryKitchenCost from "./pages/blog/luxury-kitchen-cost-guide.tsx";
import KitchenBlogAcrylicKitchenCost from "./pages/blog/acrylic-kitchen-cost-guide.tsx";
import KitchenBlogLaminateKitchenCost from "./pages/blog/laminate-kitchen-cost-guide.tsx";
import KitchenBlogInstallationCost from "./pages/blog/kitchen-installation-cost-guide.tsx";
import KitchenBlogDelhiGuide from "./pages/blog/modular-kitchen-delhi-guide.tsx";
import KitchenBlogGurgaonGuide from "./pages/blog/modular-kitchen-gurgaon-guide.tsx";
import KitchenBlogNoidaGuide from "./pages/blog/modular-kitchen-noida-guide.tsx";
import KitchenBlogFaridabadGuide from "./pages/blog/modular-kitchen-faridabad-guide.tsx";
import KitchenBlogGhaziabadGuide from "./pages/blog/modular-kitchen-ghaziabad-guide.tsx";
import KitchenBlogModularVsCarpenter from "./pages/blog/modular-vs-carpenter-kitchen.tsx";
import KitchenBlogHowToPlan from "./pages/blog/how-to-plan-modular-kitchen.tsx";
import KitchenBlogMeasuringKitchen from "./pages/blog/measuring-kitchen-for-modular.tsx";
import KitchenBlogChoosingLayout from "./pages/blog/choosing-kitchen-layout-guide.tsx";
import KitchenBlogChoosingMaterials from "./pages/blog/choosing-kitchen-materials-guide.tsx";
import KitchenBlogCommonMistakes from "./pages/blog/common-kitchen-renovation-mistakes.tsx";
import KitchenBlogMaintenanceGuide from "./pages/blog/kitchen-maintenance-guide.tsx";
import KitchenBlogWarrantyGuide from "./pages/blog/modular-kitchen-warranty-guide.tsx";
import KitchenBlogDesignIdeas from "./pages/blog/modular-kitchen-design-ideas.tsx";
import KitchenBlogSmallApartment from "./pages/blog/small-apartment-modular-kitchen.tsx";
import KitchenBlogChecklist from "./pages/blog/modular-kitchen-checklist.tsx";
import HomeInteriorsDelhiPage from "./pages/services/home-interiors-delhi.tsx";
import KitchenPartnerPage from "./pages/modular-kitchen/kitchen-partner/page.tsx";
import ModularKitchenGuidePage from "./pages/modular-kitchen/guide/page.tsx";
import ModularKitchenPage from "./pages/modular-kitchen/page.tsx";
import LocalitiesDirectoryPage from "./pages/modular-kitchen/localities/page.tsx";
import DesignsDirectoryPage from "./pages/modular-kitchen/designs/page.tsx";
import MaterialsDirectoryPage from "./pages/modular-kitchen/materials/page.tsx";
import BudgetDirectoryPage from "./pages/modular-kitchen/budget/page.tsx";
import RepairGuideDirectoryPage from "./pages/modular-kitchen/repair/page.tsx";
import RenovationDirectoryPage from "./pages/modular-kitchen/renovation/page.tsx";
import GuidesDirectoryPage from "./pages/modular-kitchen/guides/page.tsx";
import ModularKitchenNearMePage from "./pages/modular-kitchen/near-me/page.tsx";
import ModularKitchenDelhiPage from "./pages/modular-kitchen/delhi/page.tsx";
import ModularKitchenGurgaonPage from "./pages/modular-kitchen/gurgaon/page.tsx";
import ModularKitchenNoidaPage from "./pages/modular-kitchen/noida/page.tsx";
import ModularKitchenFaridabadPage from "./pages/modular-kitchen/faridabad/page.tsx";
import ModularKitchenGhaziabadPage from "./pages/modular-kitchen/ghaziabad/page.tsx";
import ModularKitchenChandigarhPage from "./pages/modular-kitchen/chandigarh/page.tsx";
import ModularKitchenMohaliPage from "./pages/modular-kitchen/mohali/page.tsx";
import ModularKitchenPanchkulaPage from "./pages/modular-kitchen/panchkula/page.tsx";
import ModularKitchenTricityPage from "./pages/modular-kitchen/tricity/page.tsx";
import ModularKitchenCostGurgaonPage from "./pages/modular-kitchen/cost-gurgaon/page.tsx";
import ModularKitchenCostNoidaPage from "./pages/modular-kitchen/cost-noida/page.tsx";
import ModularKitchenCostFaridabadPage from "./pages/modular-kitchen/cost-faridabad/page.tsx";
import ModularKitchenCostGhaziabadPage from "./pages/modular-kitchen/cost-ghaziabad/page.tsx";
import ModularKitchenCostDelhiPage from "./pages/modular-kitchen/cost-delhi/page.tsx";
import OpenKitchenDesignPage from "./pages/modular-kitchen/open-kitchen-design/page.tsx";
import ModernModularKitchenDesignsPage from "./pages/modular-kitchen/modern-modular-kitchen-designs/page.tsx";
import SmallModularKitchenDesignsPage from "./pages/modular-kitchen/small-modular-kitchen-designs/page.tsx";
import ModularKitchenPricePage from "./pages/modular-kitchen/price/page.tsx";
import ModularKitchenRenovationDelhiPage from "./pages/modular-kitchen/renovation-delhi/page.tsx";
import ModularKitchenRenovationGurgaonPage from "./pages/modular-kitchen/renovation-gurgaon/page.tsx";
import ModularKitchenRenovationNoidaPage from "./pages/modular-kitchen/renovation-noida/page.tsx";
import KitchenRenovationCostDelhiPage from "./pages/modular-kitchen/kitchen-renovation-cost-delhi/page.tsx";
import GShapedModularKitchenPage from "./pages/modular-kitchen/g-shaped-modular-kitchen/page.tsx";
import AcrylicVsLaminatePage from "./pages/modular-kitchen/acrylic-vs-laminate/page.tsx";
import LShapeVsUShapePage from "./pages/modular-kitchen/l-shape-vs-u-shape/page.tsx";
import ModularVsSemiModularPage from "./pages/modular-kitchen/modular-vs-semi-modular/page.tsx";
import ModularKitchenSmallFlatPage from "./pages/modular-kitchen/modular-kitchen-for-small-flat/page.tsx";
import TwoBhkKitchenPage from "./pages/modular-kitchen/2bhk-modular-kitchen/page.tsx";
import ThreeBhkKitchenPage from "./pages/modular-kitchen/3bhk-modular-kitchen/page.tsx";
import Kitchen10x8Page from "./pages/modular-kitchen/kitchen-10x8/page.tsx";
import Kitchen10x10Page from "./pages/modular-kitchen/kitchen-10x10/page.tsx";
import Kitchen10x12Page from "./pages/modular-kitchen/kitchen-10x12/page.tsx";
import Under50000Page from "./pages/modular-kitchen/under-50000/page.tsx";
import Under3LakhPage from "./pages/modular-kitchen/under-3-lakh/page.tsx";
import CommercialIntentPage from "./pages/modular-kitchen/commercial-intent/page.tsx";
import AcrylicKitchenDelhiPage from "./pages/modular-kitchen/acrylic-modular-kitchen-delhi/page.tsx";
import AcrylicKitchenGurgaonPage from "./pages/modular-kitchen/acrylic-modular-kitchen-gurgaon/page.tsx";
import AcrylicKitchenNoidaPage from "./pages/modular-kitchen/acrylic-modular-kitchen-noida/page.tsx";
import AcrylicKitchenFaridabadPage from "./pages/modular-kitchen/acrylic-modular-kitchen-faridabad/page.tsx";
import AcrylicKitchenGhaziabadPage from "./pages/modular-kitchen/acrylic-modular-kitchen-ghaziabad/page.tsx";
import LaminateKitchenDelhiPage from "./pages/modular-kitchen/laminate-modular-kitchen-delhi/page.tsx";
import LaminateKitchenGurgaonPage from "./pages/modular-kitchen/laminate-modular-kitchen-gurgaon/page.tsx";
import LaminateKitchenNoidaPage from "./pages/modular-kitchen/laminate-modular-kitchen-noida/page.tsx";
import LaminateKitchenFaridabadPage from "./pages/modular-kitchen/laminate-modular-kitchen-faridabad/page.tsx";
import LaminateKitchenGhaziabadPage from "./pages/modular-kitchen/laminate-modular-kitchen-ghaziabad/page.tsx";
import PuKitchenDelhiPage from "./pages/modular-kitchen/pu-modular-kitchen-delhi/page.tsx";
import PuKitchenGurgaonPage from "./pages/modular-kitchen/pu-modular-kitchen-gurgaon/page.tsx";
import PuKitchenNoidaPage from "./pages/modular-kitchen/pu-modular-kitchen-noida/page.tsx";
import PuKitchenFaridabadPage from "./pages/modular-kitchen/pu-modular-kitchen-faridabad/page.tsx";
import PuKitchenGhaziabadPage from "./pages/modular-kitchen/pu-modular-kitchen-ghaziabad/page.tsx";
import LShapeKitchenDelhiPage from "./pages/modular-kitchen/l-shape-modular-kitchen-delhi/page.tsx";
import LShapeKitchenGurgaonPage from "./pages/modular-kitchen/l-shape-modular-kitchen-gurgaon/page.tsx";
import LShapeKitchenNoidaPage from "./pages/modular-kitchen/l-shape-modular-kitchen-noida/page.tsx";
import LShapeKitchenFaridabadPage from "./pages/modular-kitchen/l-shape-modular-kitchen-faridabad/page.tsx";
import LShapeKitchenGhaziabadPage from "./pages/modular-kitchen/l-shape-modular-kitchen-ghaziabad/page.tsx";
import UShapeKitchenDelhiPage from "./pages/modular-kitchen/u-shape-modular-kitchen-delhi/page.tsx";
import UShapeKitchenGurgaonPage from "./pages/modular-kitchen/u-shape-modular-kitchen-gurgaon/page.tsx";
import UShapeKitchenNoidaPage from "./pages/modular-kitchen/u-shape-modular-kitchen-noida/page.tsx";
import UShapeKitchenFaridabadPage from "./pages/modular-kitchen/u-shape-modular-kitchen-faridabad/page.tsx";
import UShapeKitchenGhaziabadPage from "./pages/modular-kitchen/u-shape-modular-kitchen-ghaziabad/page.tsx";
import ParallelKitchenDelhiPage from "./pages/modular-kitchen/parallel-modular-kitchen-delhi/page.tsx";
import ParallelKitchenGurgaonPage from "./pages/modular-kitchen/parallel-modular-kitchen-gurgaon/page.tsx";
import ParallelKitchenNoidaPage from "./pages/modular-kitchen/parallel-modular-kitchen-noida/page.tsx";
import ParallelKitchenFaridabadPage from "./pages/modular-kitchen/parallel-modular-kitchen-faridabad/page.tsx";
import ParallelKitchenGhaziabadPage from "./pages/modular-kitchen/parallel-modular-kitchen-ghaziabad/page.tsx";
import StraightKitchenDelhiPage from "./pages/modular-kitchen/straight-modular-kitchen-delhi/page.tsx";
import StraightKitchenGurgaonPage from "./pages/modular-kitchen/straight-modular-kitchen-gurgaon/page.tsx";
import StraightKitchenNoidaPage from "./pages/modular-kitchen/straight-modular-kitchen-noida/page.tsx";
import StraightKitchenFaridabadPage from "./pages/modular-kitchen/straight-modular-kitchen-faridabad/page.tsx";
import StraightKitchenGhaziabadPage from "./pages/modular-kitchen/straight-modular-kitchen-ghaziabad/page.tsx";
import IslandKitchenDelhiPage from "./pages/modular-kitchen/island-modular-kitchen-delhi/page.tsx";
import IslandKitchenGurgaonPage from "./pages/modular-kitchen/island-modular-kitchen-gurgaon/page.tsx";
import IslandKitchenNoidaPage from "./pages/modular-kitchen/island-modular-kitchen-noida/page.tsx";
import IslandKitchenFaridabadPage from "./pages/modular-kitchen/island-modular-kitchen-faridabad/page.tsx";
import IslandKitchenGhaziabadPage from "./pages/modular-kitchen/island-modular-kitchen-ghaziabad/page.tsx";
import PeninsulaKitchenDelhiPage from "./pages/modular-kitchen/peninsula-modular-kitchen-delhi/page.tsx";
import PeninsulaKitchenGurgaonPage from "./pages/modular-kitchen/peninsula-modular-kitchen-gurgaon/page.tsx";
import PeninsulaKitchenNoidaPage from "./pages/modular-kitchen/peninsula-modular-kitchen-noida/page.tsx";
import PeninsulaKitchenFaridabadPage from "./pages/modular-kitchen/peninsula-modular-kitchen-faridabad/page.tsx";
import PeninsulaKitchenGhaziabadPage from "./pages/modular-kitchen/peninsula-modular-kitchen-ghaziabad/page.tsx";

export default function App() {
  return (
    <DefaultProviders>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/book" element={<BookPage />} />
          <Route path="/my-bookings" element={<MyBookingsPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/audit" element={<AuditPage />} />
          <Route path="/admin/case-studies" element={<CaseStudiesAdminPage />} />
          {/* Blog */}
          <Route path="/blog" element={<BlogListingPage />} />
          <Route path="/blog/sofa-repair-cost-delhi" element={<SofaRepairCostDelhiPost />} />
          <Route path="/blog/furniture-repair-vs-replace" element={<FurnitureRepairVsReplacePost />} />
          <Route path="/blog/how-to-fix-dining-chair" element={<HowToFixDiningChairPost />} />
          <Route path="/blog/sofa-upholstery-cost-delhi" element={<SofaUpholsteryCostDelhiPost />} />
          <Route path="/blog/common-furniture-repair-problems" element={<CommonFurnitureRepairProblemsPost />} />
          <Route path="/blog/best-sofa-foam-for-delhi-climate" element={<BestSofaFoamDelhiClimatePost />} />
          <Route path="/blog/leather-sofa-care-tips-delhi" element={<LeatherSofaCareTipsDelhiPost />} />
          <Route path="/blog/how-to-maintain-wooden-furniture-delhi" element={<HowToMaintainWoodenFurnitureDelhiPost />} />
          <Route path="/blog/termite-treatment-cost-delhi" element={<TermiteTreatmentCostDelhiPost />} />
          <Route path="/blog/office-chair-repair-guide-delhi" element={<OfficeChairRepairGuideDelhiPost />} />
          <Route path="/blog/monsoon-furniture-care-delhi" element={<MonsoonFurnitureCareDelhiPost />} />
          <Route path="/blog/recliner-sofa-repair-guide-delhi" element={<RecliferSofaRepairGuideDelhiPost />} />
          <Route path="/blog/sofa-repair-vs-upholstery-delhi" element={<SofaRepairVsUpholsteryDelhiPost />} />
          <Route path="/blog/sofa-fabric-types-guide-delhi" element={<SofaFabricTypesGuideDelhiPost />} />
          <Route path="/blog/sofa-repair-at-home-delhi" element={<SofaRepairAtHomeDelhiPost />} />
          <Route path="/blog/sofa-repair-noida-vs-delhi" element={<SofaRepairNoidaVsDelhiPost />} />
          <Route path="/blog/furniture-restoration-cost-guide-delhi-ncr" element={<FurnitureRestorationCostGuideDelhiNcrPost />} />
          <Route path="/blog/how-to-choose-furniture-repair-service-delhi" element={<HowToChooseFurnitureRepairDelhiPost />} />
          <Route path="/blog/luxury-imported-furniture-repair-delhi-ncr" element={<LuxuryImportedFurnitureRepairDelhiNcrPost />} />
          <Route path="/blog/sofa-repair-vs-buy-new-sofa" element={<SofaRepairVsBuyNewSofaPost />} />
          <Route path="/blog/is-sofa-restoration-worth-it" element={<IsSofaRestorationWorthItPost />} />
          <Route path="/blog/how-long-does-sofa-foam-last" element={<HowLongDoesSofaFoamLastPost />} />
          <Route path="/blog/common-recliner-motor-problems" element={<CommonReclineMotorProblemsPost />} />
          <Route path="/blog/imported-furniture-restoration-guide" element={<ImportedFurnitureRestorationGuidePost />} />
          <Route path="/blog/wooden-furniture-restoration-guide-delhi" element={<WoodenFurnitureRestorationGuideDelhiPost />} />
          <Route path="/blog/office-chair-ergonomic-repair-upgrade-delhi" element={<OfficeChairErgonomicRepairUpgradeDelhiPost />} />
          <Route path="/blog/ultimate-sofa-upholstery-guide" element={<UltimateSofaUpholsteryGuidePost />} />
          <Route path="/blog/sofa-fabric-change-cost" element={<SofaFabricChangeCostPost />} />
          <Route path="/blog/sofa-reupholstery-vs-buying-new" element={<SofaReupholsteryVsBuyingNewPost />} />
          <Route path="/blog/leather-sofa-upholstery-guide" element={<LeatherSofaUpholsteryGuidePost />} />
          <Route path="/blog/best-sofa-fabrics-indian-homes" element={<BestSofaFabricsIndianHomesPost />} />
          <Route path="/blog/sofa-upholstery-process" element={<SofaUpholsteryProcessPost />} />
          <Route path="/blog/how-long-does-sofa-upholstery-last" element={<HowLongSofaUpholsteryLastsPost />} />
          <Route path="/blog/signs-your-sofa-needs-reupholstery" element={<SignsYourSofaNeedsReupholsteryPost />} />
          <Route path="/blog/foam-replacement-vs-sofa-upholstery" element={<FoamReplacementVsSofaUpholsteryPost />} />
          <Route path="/blog/custom-sofa-upholstery" element={<CustomSofaUpholsteryPost />} />
          <Route path="/blog/velvet-vs-leather-vs-fabric-sofa-upholstery" element={<VelvetVsLeatherVsFabricPost />} />
          <Route path="/blog/pet-friendly-sofa-fabric-guide" element={<PetFriendlySofaFabricPost />} />
          <Route path="/blog/sofa-upholstery-mistakes" element={<SofaUpholsteryMistakesPost />} />
          <Route path="/blog/is-sofa-upholstery-worth-it" element={<IsSofaUpholsteryWorthItPost />} />
          <Route path="/blog/how-to-maintain-upholstered-sofa" element={<HowToMaintainUpholsteredSofaPost />} />
          <Route path="/blog/sofa-repair-cost-delhi-ncr" element={<UltimateSofaRepairCostGuidePost />} />
          <Route path="/blog/sofa-repair-cost-per-seat" element={<SofaRepairCostPerSeatPost />} />
          <Route path="/blog/sofa-foam-replacement-cost" element={<SofaFoamReplacementCostPost />} />
          <Route path="/blog/sofa-spring-repair-cost" element={<SofaSpringRepairCostPost />} />
          <Route path="/blog/recliner-repair-cost-guide" element={<ReclineRepairCostGuidePost />} />
          <Route path="/blog/is-sofa-repair-worth-it" element={<IsSofaRepairWorthItPost />} />
          <Route path="/blog/sofa-repair-vs-replacement" element={<SofaRepairVsReplacementPost />} />
          <Route path="/blog/is-my-sofa-worth-repairing" element={<IsMySofaWorthRepairingPost />} />
          <Route path="/blog/signs-your-sofa-needs-repair" element={<SignsYourSofaCanBeRestoredPost />} />
          <Route path="/blog/extend-sofa-life" element={<ExtendSofaLifePost />} />
          <Route path="/blog/ultimate-furniture-restoration-guide" element={<UltimateFurnitureRestorationGuidePost />} />
          <Route path="/blog/furniture-restoration-vs-repair-vs-refinishing" element={<FurnitureRestorationVsRepairVsRefinishingPost />} />
          <Route path="/blog/is-furniture-restoration-worth-it" element={<IsFurnitureRestorationWorthItPost />} />
          <Route path="/blog/furniture-restoration-benefits" element={<FurnitureRestorationBenefitsPost />} />
          <Route path="/blog/diy-vs-professional-furniture-restoration" element={<DiyVsProfessionalFurnitureRestorationPost />} />
          <Route path="/blog/complete-furniture-restoration-process" element={<CompleteFurnitureRestorationProcessPost />} />
          <Route path="/blog/how-long-does-furniture-restoration-last" element={<HowLongFurnitureRestorationLastsPost />} />
          <Route path="/blog/furniture-restoration-mistakes" element={<FurnitureRestorationMistakesPost />} />
          <Route path="/blog/how-to-choose-furniture-restoration-company" element={<HowToChooseFurnitureRestorationCompanyPost />} />
          <Route path="/blog/furniture-restoration-checklist" element={<FurnitureRestorationChecklistPost />} />
          {/* Office Chair Blog Cluster */}
          <Route path="/blog/office-chair-repair-cost-guide" element={<OfficeChairRepairCostGuidePost />} />
          <Route path="/blog/gas-lift-replacement-guide" element={<GasLiftReplacementGuidePost />} />
          <Route path="/blog/hydraulic-cylinder-repair-office-chair" element={<HydraulicCylinderRepairOfficeChairPost />} />
          <Route path="/blog/office-chair-wheels-replacement-guide" element={<OfficeChairWheelsReplacementGuidePost />} />
          <Route path="/blog/mesh-chair-repair-guide" element={<MeshChairRepairGuidePost />} />
          <Route path="/blog/executive-chair-maintenance" element={<ExecutiveChairMaintenancePost />} />
          <Route path="/blog/gaming-chair-repair-guide" element={<GamingChairRepairGuidePost />} />
          <Route path="/blog/visitor-chair-repair" element={<VisitorChairRepairPost />} />
          <Route path="/blog/conference-chair-repair" element={<ConferenceChairRepairPost />} />
          <Route path="/blog/office-chair-amc-guide" element={<OfficeChairAmcGuidePost />} />
          <Route path="/blog/bulk-office-chair-repair" element={<BulkOfficeChairRepairPost />} />
          <Route path="/blog/ergonomic-chair-care" element={<ErgonomicChairCarePost />} />
          <Route path="/blog/buying-vs-repairing-office-chair" element={<BuyingVsRepairingOfficeChairPost />} />
          <Route path="/blog/office-chair-maintenance-checklist" element={<OfficeChairMaintenanceChecklistPost />} />
          <Route path="/blog/workstation-chair-setup-guide" element={<WorkstationChairSetupGuidePost />} />
          <Route path="/blog/office-ergonomics-chair-guide" element={<OfficeErgonomicsChairGuidePost />} />
          <Route path="/blog/corporate-furniture-maintenance" element={<CorporateFurnitureMaintenancePost />} />
          <Route path="/blog/office-chair-lifespan-guide" element={<OfficeChairLifespanGuidePost />} />
          <Route path="/blog/common-office-chair-problems" element={<CommonOfficeChairProblemsPost />} />
          <Route path="/blog/office-chair-repair-process-explained" element={<OfficeChairRepairProcessExplainedPost />} />
          {/* Kitchen Blog Cluster */}
          <Route path="/blog/modular-kitchen" element={<KitchenBlogIndexPage />} />
          <Route path="/blog/modular-kitchen-l-shape-design-guide" element={<KitchenBlogLShapeDesignGuide />} />
          <Route path="/blog/modular-kitchen-u-shape-design-guide" element={<KitchenBlogUShapeDesignGuide />} />
          <Route path="/blog/modular-kitchen-parallel-design-guide" element={<KitchenBlogParallelDesignGuide />} />
          <Route path="/blog/modular-kitchen-straight-design-guide" element={<KitchenBlogStraightDesignGuide />} />
          <Route path="/blog/modular-kitchen-island-design-guide" element={<KitchenBlogIslandDesignGuide />} />
          <Route path="/blog/modular-kitchen-peninsula-design-guide" element={<KitchenBlogPeninsulaDesignGuide />} />
          <Route path="/blog/acrylic-modular-kitchen-guide" element={<KitchenBlogAcrylicGuide />} />
          <Route path="/blog/laminate-modular-kitchen-guide" element={<KitchenBlogLaminateGuide />} />
          <Route path="/blog/membrane-modular-kitchen-guide" element={<KitchenBlogMembraneGuide />} />
          <Route path="/blog/pvc-modular-kitchen-guide" element={<KitchenBlogPvcGuide />} />
          <Route path="/blog/pu-modular-kitchen-guide" element={<KitchenBlogPuGuide />} />
          <Route path="/blog/veneer-modular-kitchen-guide" element={<KitchenBlogVeneerGuide />} />
          <Route path="/blog/glass-modular-kitchen-guide" element={<KitchenBlogGlassGuide />} />
          <Route path="/blog/stainless-steel-modular-kitchen-guide" element={<KitchenBlogStainlessSteelGuide />} />
          <Route path="/blog/modular-kitchen-cost-delhi-guide" element={<KitchenBlogCostDelhiGuide />} />
          <Route path="/blog/modular-kitchen-cost-gurgaon" element={<KitchenBlogCostGurgaon />} />
          <Route path="/blog/small-kitchen-cost-guide" element={<KitchenBlogSmallKitchenCost />} />
          <Route path="/blog/10x10-kitchen-cost-guide" element={<KitchenBlog10x10KitchenCost />} />
          <Route path="/blog/luxury-kitchen-cost-guide" element={<KitchenBlogLuxuryKitchenCost />} />
          <Route path="/blog/acrylic-kitchen-cost-guide" element={<KitchenBlogAcrylicKitchenCost />} />
          <Route path="/blog/laminate-kitchen-cost-guide" element={<KitchenBlogLaminateKitchenCost />} />
          <Route path="/blog/kitchen-installation-cost-guide" element={<KitchenBlogInstallationCost />} />
          <Route path="/blog/modular-kitchen-delhi-guide" element={<KitchenBlogDelhiGuide />} />
          <Route path="/blog/modular-kitchen-gurgaon-guide" element={<KitchenBlogGurgaonGuide />} />
          <Route path="/blog/modular-kitchen-noida-guide" element={<KitchenBlogNoidaGuide />} />
          <Route path="/blog/modular-kitchen-faridabad-guide" element={<KitchenBlogFaridabadGuide />} />
          <Route path="/blog/modular-kitchen-ghaziabad-guide" element={<KitchenBlogGhaziabadGuide />} />
          <Route path="/blog/modular-vs-carpenter-kitchen" element={<KitchenBlogModularVsCarpenter />} />
          <Route path="/blog/how-to-plan-modular-kitchen" element={<KitchenBlogHowToPlan />} />
          <Route path="/blog/measuring-kitchen-for-modular" element={<KitchenBlogMeasuringKitchen />} />
          <Route path="/blog/choosing-kitchen-layout-guide" element={<KitchenBlogChoosingLayout />} />
          <Route path="/blog/choosing-kitchen-materials-guide" element={<KitchenBlogChoosingMaterials />} />
          <Route path="/blog/common-kitchen-renovation-mistakes" element={<KitchenBlogCommonMistakes />} />
          <Route path="/blog/kitchen-maintenance-guide" element={<KitchenBlogMaintenanceGuide />} />
          <Route path="/blog/modular-kitchen-warranty-guide" element={<KitchenBlogWarrantyGuide />} />
          <Route path="/blog/modular-kitchen-design-ideas" element={<KitchenBlogDesignIdeas />} />
          <Route path="/blog/small-apartment-modular-kitchen" element={<KitchenBlogSmallApartment />} />
          <Route path="/blog/modular-kitchen-checklist" element={<KitchenBlogChecklist />} />
          <Route path="/home-interiors-delhi" element={<HomeInteriorsDelhiPage />} />
          {/* 301 Redirects — /services/* to canonical slugs */}
          <Route path="/leather-couch-repair-delhi" element={<Navigate to="/leather-sofa-repair-delhi" replace />} />
          <Route path="/services/antique-furniture-restoration-delhi" element={<Navigate to="/antique-furniture-restoration-delhi" replace />} />
          <Route path="/services/termite-treatment-delhi" element={<Navigate to="/wooden-furniture-termite-treatment-delhi" replace />} />
          <Route path="/services/recliner-sofa-repair-delhi" element={<Navigate to="/recliner-sofa-repair-delhi" replace />} />
          <Route path="/services/imported-furniture-repair-delhi" element={<Navigate to="/imported-furniture-repair-delhi" replace />} />
          <Route path="/services/furniture-repair-faridabad" element={<Navigate to="/furniture-repair-nit-faridabad" replace />} />
          <Route path="/services/furniture-polishing-delhi" element={<Navigate to="/furniture-polish-delhi" replace />} />
          <Route path="/services/furniture-repair-gurgaon" element={<Navigate to="/chair-repair-gurgaon" replace />} />
          <Route path="/services/furniture-repair-noida" element={<Navigate to="/furniture-repair-greater-noida" replace />} />
          <Route path="/services/office-chair-repair-delhi" element={<Navigate to="/office-chair-repair-delhi" replace />} />
          <Route path="/services/furniture-repair-delhi" element={<Navigate to="/furniture-repair-near-me-delhi" replace />} />
          <Route path="/services/wooden-furniture-repair-delhi" element={<Navigate to="/wooden-furniture-repair-delhi" replace />} />
          <Route path="/services/sofa-repair-delhi" element={<Navigate to="/sofa-repair-near-me-delhi" replace />} />
          <Route path="/services/upholstery-sofa-repair-delhi" element={<Navigate to="/doorstep-upholstery-repair-delhi" replace />} />
          <Route path="/services/furniture-repair-south-delhi" element={<Navigate to="/furniture-repair-south-delhi" replace />} />
          <Route path="/services/luxury-furniture-restoration-delhi" element={<Navigate to="/luxury-furniture-restoration-delhi" replace />} />
          {/* 301 Redirects — wrong-slug variants to correct slugs */}
          <Route path="/foam-replacement" element={<Navigate to="/sofa-foam-replacement-delhi" replace />} />
          <Route path="/wood-polish-delhi" element={<Navigate to="/furniture-polish-delhi" replace />} />
          <Route path="/furniture-polishing-delhi" element={<Navigate to="/furniture-polish-delhi" replace />} />
          <Route path="/wooden-chair-repair-delhi" element={<Navigate to="/chair-repair-delhi" replace />} />
          <Route path="/luxury-furniture-repair-delhi" element={<Navigate to="/luxury-furniture-restoration-delhi" replace />} />
          <Route path="/furniture-restoration-delhi" element={<Navigate to="/wooden-furniture-restoration-delhi" replace />} />
          <Route path="/sofa-repair-sector-18-noida" element={<Navigate to="/sofa-repair-noida-sector-18" replace />} />
          <Route path="/sofa-repair-noida-sector-77" element={<Navigate to="/sofa-repair-noida-sector-75" replace />} />
          <Route path="/sofa-repair-noida-sector-128" element={<Navigate to="/sofa-repair-sector-128-noida" replace />} />
          <Route path="/sofa-repair-noida-sector-134" element={<Navigate to="/sofa-repair-sector-134-noida" replace />} />
          <Route path="/sofa-repair-noida-sector-105" element={<Navigate to="/sofa-repair-sector-105-noida" replace />} />
          <Route path="/sofa-repair-noida-sector-142" element={<Navigate to="/sofa-repair-sector-142-noida" replace />} />
          <Route path="/sofa-repair-sector-143-noida" element={<Navigate to="/sofa-repair-noida-sector-143" replace />} />
          <Route path="/sofa-spring-repair-noida" element={<Navigate to="/sofa-spring-repair-delhi" replace />} />
          <Route path="/furniture-repair-noida-sector-62" element={<Navigate to="/sofa-repair-noida-sector-62" replace />} />
          <Route path="/sofa-repair-sector-47-gurgaon" element={<Navigate to="/sofa-repair-sector-46-gurgaon" replace />} />
          {/* Auth callback — must be before dynamic /:slug route */}
          <Route path="/auth/callback" element={<AuthCallback />} />
          {/* Programmatic SEO pages — pipeline-generated, no registry entry needed */}
          <Route path="/sofa-repair-new-gurgaon" element={<SofaRepairNewGurgaon />} />
          <Route path="/sofa-repair-sector-49-gurgaon" element={<SofaRepairSector49Gurgaon />} />
          <Route path="/sofa-repair-sector-50-gurgaon" element={<SofaRepairSector50Gurgaon />} />
          <Route path="/sofa-repair-sector-56-gurgaon" element={<SofaRepairSector56Gurgaon />} />
          <Route path="/sofa-repair-sector-57-gurgaon" element={<SofaRepairSector57Gurgaon />} />
          <Route path="/sofa-repair-sector-58-gurgaon" element={<SofaRepairSector58Gurgaon />} />
          <Route path="/sofa-repair-sector-65-gurgaon" element={<SofaRepairSector65Gurgaon />} />
          <Route path="/sofa-repair-sector-67-gurgaon" element={<SofaRepairSector67Gurgaon />} />
          <Route path="/sofa-repair-sector-70-gurgaon" element={<SofaRepairSector70Gurgaon />} />
          <Route path="/sofa-repair-sector-71-gurgaon" element={<SofaRepairSector71Gurgaon />} />
          <Route path="/recliner-repair-sector-67-gurgaon" element={<ReclineRepairSector67Gurgaon />} />
          <Route path="/recliner-repair-sector-70-gurgaon" element={<ReclineRepairSector70Gurgaon />} />
          <Route path="/recliner-repair-sector-71-gurgaon" element={<ReclineRepairSector71Gurgaon />} />
          <Route path="/furniture-repair-sector-67-gurgaon" element={<FurnitureRepairSector67Gurgaon />} />
          <Route path="/furniture-repair-sector-70-gurgaon" element={<FurnitureRepairSector70Gurgaon />} />
          <Route path="/furniture-repair-sector-71-gurgaon" element={<FurnitureRepairSector71Gurgaon />} />
          {/* Golf Course Extension + sectors 51, 59–64, 66, 68–69 — sofa */}
          <Route path="/sofa-repair-golf-course-extension-gurgaon" element={<SofaRepairGolfCourseExtensionGurgaon />} />
          <Route path="/sofa-repair-sector-51-gurgaon" element={<SofaRepairSector51Gurgaon />} />
          <Route path="/sofa-repair-sector-59-gurgaon" element={<SofaRepairSector59Gurgaon />} />
          <Route path="/sofa-repair-sector-60-gurgaon" element={<SofaRepairSector60Gurgaon />} />
          <Route path="/sofa-repair-sector-61-gurgaon" element={<SofaRepairSector61Gurgaon />} />
          <Route path="/sofa-repair-sector-62-gurgaon" element={<SofaRepairSector62Gurgaon />} />
          <Route path="/sofa-repair-sector-63-gurgaon" element={<SofaRepairSector63Gurgaon />} />
          <Route path="/sofa-repair-sector-64-gurgaon" element={<SofaRepairSector64Gurgaon />} />
          <Route path="/sofa-repair-sector-66-gurgaon" element={<SofaRepairSector66Gurgaon />} />
          <Route path="/sofa-repair-sector-68-gurgaon" element={<SofaRepairSector68Gurgaon />} />
          <Route path="/sofa-repair-sector-69-gurgaon" element={<SofaRepairSector69Gurgaon />} />
          {/* Golf Course Extension + sectors 51, 59–64, 66, 68–69 — recliner */}
          <Route path="/recliner-repair-golf-course-extension-gurgaon" element={<ReclineRepairGolfCourseExtensionGurgaon />} />
          <Route path="/recliner-repair-sector-51-gurgaon" element={<ReclineRepairSector51Gurgaon />} />
          <Route path="/recliner-repair-sector-59-gurgaon" element={<ReclineRepairSector59Gurgaon />} />
          <Route path="/recliner-repair-sector-60-gurgaon" element={<ReclineRepairSector60Gurgaon />} />
          <Route path="/recliner-repair-sector-61-gurgaon" element={<ReclineRepairSector61Gurgaon />} />
          <Route path="/recliner-repair-sector-62-gurgaon" element={<ReclineRepairSector62Gurgaon />} />
          <Route path="/recliner-repair-sector-63-gurgaon" element={<ReclineRepairSector63Gurgaon />} />
          <Route path="/recliner-repair-sector-64-gurgaon" element={<ReclineRepairSector64Gurgaon />} />
          <Route path="/recliner-repair-sector-66-gurgaon" element={<ReclineRepairSector66Gurgaon />} />
          <Route path="/recliner-repair-sector-68-gurgaon" element={<ReclineRepairSector68Gurgaon />} />
          <Route path="/recliner-repair-sector-69-gurgaon" element={<ReclineRepairSector69Gurgaon />} />
          {/* Golf Course Extension + sectors 51, 59–64, 66, 68–69 — furniture */}
          <Route path="/furniture-repair-golf-course-extension-gurgaon" element={<FurnitureRepairGolfCourseExtensionGurgaon />} />
          <Route path="/furniture-repair-sector-51-gurgaon" element={<FurnitureRepairSector51Gurgaon />} />
          <Route path="/furniture-repair-sector-59-gurgaon" element={<FurnitureRepairSector59Gurgaon />} />
          <Route path="/furniture-repair-sector-60-gurgaon" element={<FurnitureRepairSector60Gurgaon />} />
          <Route path="/furniture-repair-sector-61-gurgaon" element={<FurnitureRepairSector61Gurgaon />} />
          <Route path="/furniture-repair-sector-62-gurgaon" element={<FurnitureRepairSector62Gurgaon />} />
          <Route path="/furniture-repair-sector-63-gurgaon" element={<FurnitureRepairSector63Gurgaon />} />
          <Route path="/furniture-repair-sector-64-gurgaon" element={<FurnitureRepairSector64Gurgaon />} />
          <Route path="/furniture-repair-sector-66-gurgaon" element={<FurnitureRepairSector66Gurgaon />} />
          <Route path="/furniture-repair-sector-68-gurgaon" element={<FurnitureRepairSector68Gurgaon />} />
          <Route path="/furniture-repair-sector-69-gurgaon" element={<FurnitureRepairSector69Gurgaon />} />
          <Route path="/sofa-repair-sector-72-gurgaon" element={<SofaRepairSector72Gurgaon />} />
          <Route path="/sofa-repair-sector-73-gurgaon" element={<SofaRepairSector73Gurgaon />} />
          <Route path="/sofa-repair-sector-74-gurgaon" element={<SofaRepairSector74Gurgaon />} />
          <Route path="/sofa-repair-sector-75-gurgaon" element={<SofaRepairSector75Gurgaon />} />
          <Route path="/sofa-repair-sector-76-gurgaon" element={<SofaRepairSector76Gurgaon />} />
          <Route path="/sofa-repair-sector-77-gurgaon" element={<SofaRepairSector77Gurgaon />} />
          <Route path="/sofa-repair-sector-78-gurgaon" element={<SofaRepairSector78Gurgaon />} />
          <Route path="/sofa-repair-sector-79-gurgaon" element={<SofaRepairSector79Gurgaon />} />
          <Route path="/sofa-repair-sector-80-gurgaon" element={<SofaRepairSector80Gurgaon />} />
          <Route path="/sofa-repair-sector-81-gurgaon" element={<SofaRepairSector81Gurgaon />} />
          <Route path="/sofa-repair-dwarka-expressway-gurgaon" element={<SofaRepairDwarkaExpresswayGurgaon />} />
          <Route path="/recliner-repair-new-gurgaon" element={<ReclineRepairNewGurgaon />} />
          <Route path="/recliner-repair-sector-72-gurgaon" element={<ReclineRepairSector72Gurgaon />} />
          <Route path="/recliner-repair-sector-73-gurgaon" element={<ReclineRepairSector73Gurgaon />} />
          <Route path="/recliner-repair-sector-74-gurgaon" element={<ReclineRepairSector74Gurgaon />} />
          <Route path="/recliner-repair-sector-75-gurgaon" element={<ReclineRepairSector75Gurgaon />} />
          <Route path="/recliner-repair-sector-76-gurgaon" element={<ReclineRepairSector76Gurgaon />} />
          <Route path="/recliner-repair-sector-77-gurgaon" element={<ReclineRepairSector77Gurgaon />} />
          <Route path="/recliner-repair-sector-78-gurgaon" element={<ReclineRepairSector78Gurgaon />} />
          <Route path="/recliner-repair-sector-79-gurgaon" element={<ReclineRepairSector79Gurgaon />} />
          <Route path="/recliner-repair-sector-80-gurgaon" element={<ReclineRepairSector80Gurgaon />} />
          <Route path="/recliner-repair-sector-81-gurgaon" element={<ReclineRepairSector81Gurgaon />} />
          <Route path="/recliner-repair-dwarka-expressway-gurgaon" element={<ReclineRepairDwarkaExpresswayGurgaon />} />
          <Route path="/furniture-repair-new-gurgaon" element={<FurnitureRepairNewGurgaon />} />
          <Route path="/furniture-repair-sector-72-gurgaon" element={<FurnitureRepairSector72Gurgaon />} />
          <Route path="/furniture-repair-sector-73-gurgaon" element={<FurnitureRepairSector73Gurgaon />} />
          <Route path="/furniture-repair-sector-74-gurgaon" element={<FurnitureRepairSector74Gurgaon />} />
          <Route path="/furniture-repair-sector-75-gurgaon" element={<FurnitureRepairSector75Gurgaon />} />
          <Route path="/furniture-repair-sector-76-gurgaon" element={<FurnitureRepairSector76Gurgaon />} />
          <Route path="/furniture-repair-sector-77-gurgaon" element={<FurnitureRepairSector77Gurgaon />} />
          <Route path="/furniture-repair-sector-78-gurgaon" element={<FurnitureRepairSector78Gurgaon />} />
          <Route path="/furniture-repair-sector-79-gurgaon" element={<FurnitureRepairSector79Gurgaon />} />
          <Route path="/furniture-repair-sector-80-gurgaon" element={<FurnitureRepairSector80Gurgaon />} />
          <Route path="/furniture-repair-sector-81-gurgaon" element={<FurnitureRepairSector81Gurgaon />} />
          <Route path="/furniture-repair-dwarka-expressway-gurgaon" element={<FurnitureRepairDwarkaExpresswayGurgaon />} />
          {/* Batch B — Sectors 82–90 + New Residential */}
          <Route path="/sofa-repair-sector-82-gurgaon" element={<SofaRepairSector82Gurgaon />} />
          <Route path="/sofa-repair-sector-82a-gurgaon" element={<SofaRepairSector82aGurgaon />} />
          <Route path="/sofa-repair-sector-83-gurgaon" element={<SofaRepairSector83Gurgaon />} />
          <Route path="/sofa-repair-sector-84-gurgaon" element={<SofaRepairSector84Gurgaon />} />
          <Route path="/sofa-repair-sector-85-gurgaon" element={<SofaRepairSector85Gurgaon />} />
          <Route path="/sofa-repair-sector-86-gurgaon" element={<SofaRepairSector86Gurgaon />} />
          <Route path="/sofa-repair-sector-87-gurgaon" element={<SofaRepairSector87Gurgaon />} />
          <Route path="/sofa-repair-sector-88-gurgaon" element={<SofaRepairSector88Gurgaon />} />
          <Route path="/sofa-repair-sector-89-gurgaon" element={<SofaRepairSector89Gurgaon />} />
          <Route path="/sofa-repair-sector-90-gurgaon" element={<SofaRepairSector90Gurgaon />} />
          <Route path="/sofa-repair-new-residential-gurgaon" element={<SofaRepairNewResidentialGurgaon />} />
          <Route path="/recliner-repair-sector-82-gurgaon" element={<ReclineRepairSector82Gurgaon />} />
          <Route path="/recliner-repair-sector-82a-gurgaon" element={<ReclineRepairSector82aGurgaon />} />
          <Route path="/recliner-repair-sector-83-gurgaon" element={<ReclineRepairSector83Gurgaon />} />
          <Route path="/recliner-repair-sector-84-gurgaon" element={<ReclineRepairSector84Gurgaon />} />
          <Route path="/recliner-repair-sector-85-gurgaon" element={<ReclineRepairSector85Gurgaon />} />
          <Route path="/recliner-repair-sector-86-gurgaon" element={<ReclineRepairSector86Gurgaon />} />
          <Route path="/recliner-repair-sector-87-gurgaon" element={<ReclineRepairSector87Gurgaon />} />
          <Route path="/recliner-repair-sector-88-gurgaon" element={<ReclineRepairSector88Gurgaon />} />
          <Route path="/recliner-repair-sector-89-gurgaon" element={<ReclineRepairSector89Gurgaon />} />
          <Route path="/recliner-repair-sector-90-gurgaon" element={<ReclineRepairSector90Gurgaon />} />
          <Route path="/recliner-repair-new-residential-gurgaon" element={<ReclineRepairNewResidentialGurgaon />} />
          <Route path="/furniture-repair-sector-82-gurgaon" element={<FurnitureRepairSector82Gurgaon />} />
          <Route path="/furniture-repair-sector-82a-gurgaon" element={<FurnitureRepairSector82aGurgaon />} />
          <Route path="/furniture-repair-sector-83-gurgaon" element={<FurnitureRepairSector83Gurgaon />} />
          <Route path="/furniture-repair-sector-84-gurgaon" element={<FurnitureRepairSector84Gurgaon />} />
          <Route path="/furniture-repair-sector-85-gurgaon" element={<FurnitureRepairSector85Gurgaon />} />
          <Route path="/furniture-repair-sector-86-gurgaon" element={<FurnitureRepairSector86Gurgaon />} />
          <Route path="/furniture-repair-sector-87-gurgaon" element={<FurnitureRepairSector87Gurgaon />} />
          <Route path="/furniture-repair-sector-88-gurgaon" element={<FurnitureRepairSector88Gurgaon />} />
          <Route path="/furniture-repair-sector-89-gurgaon" element={<FurnitureRepairSector89Gurgaon />} />
          <Route path="/furniture-repair-sector-90-gurgaon" element={<FurnitureRepairSector90Gurgaon />} />
          <Route path="/furniture-repair-new-residential-gurgaon" element={<FurnitureRepairNewResidentialGurgaon />} />
          {/* Batch C — Sectors 91–111 */}
          <Route path="/sofa-repair-sector-91-gurgaon" element={<SofaRepairSector91Gurgaon />} />
          <Route path="/sofa-repair-sector-92-gurgaon" element={<SofaRepairSector92Gurgaon />} />
          <Route path="/sofa-repair-sector-93-gurgaon" element={<SofaRepairSector93Gurgaon />} />
          <Route path="/sofa-repair-sector-95-gurgaon" element={<SofaRepairSector95Gurgaon />} />
          <Route path="/sofa-repair-sector-99-gurgaon" element={<SofaRepairSector99Gurgaon />} />
          <Route path="/sofa-repair-sector-102-gurgaon" element={<SofaRepairSector102Gurgaon />} />
          <Route path="/sofa-repair-sector-104-gurgaon" element={<SofaRepairSector104Gurgaon />} />
          <Route path="/sofa-repair-sector-109-gurgaon" element={<SofaRepairSector109Gurgaon />} />
          <Route path="/sofa-repair-sector-110-gurgaon" element={<SofaRepairSector110Gurgaon />} />
          <Route path="/sofa-repair-sector-111-gurgaon" element={<SofaRepairSector111Gurgaon />} />
          <Route path="/recliner-repair-sector-91-gurgaon" element={<ReclineRepairSector91Gurgaon />} />
          <Route path="/recliner-repair-sector-92-gurgaon" element={<ReclineRepairSector92Gurgaon />} />
          <Route path="/recliner-repair-sector-93-gurgaon" element={<ReclineRepairSector93Gurgaon />} />
          <Route path="/recliner-repair-sector-95-gurgaon" element={<ReclineRepairSector95Gurgaon />} />
          <Route path="/recliner-repair-sector-99-gurgaon" element={<ReclineRepairSector99Gurgaon />} />
          <Route path="/recliner-repair-sector-102-gurgaon" element={<ReclineRepairSector102Gurgaon />} />
          <Route path="/recliner-repair-sector-104-gurgaon" element={<ReclineRepairSector104Gurgaon />} />
          <Route path="/recliner-repair-sector-109-gurgaon" element={<ReclineRepairSector109Gurgaon />} />
          <Route path="/recliner-repair-sector-110-gurgaon" element={<ReclineRepairSector110Gurgaon />} />
          <Route path="/recliner-repair-sector-111-gurgaon" element={<ReclineRepairSector111Gurgaon />} />
          <Route path="/furniture-repair-sector-91-gurgaon" element={<FurnitureRepairSector91Gurgaon />} />
          <Route path="/furniture-repair-sector-92-gurgaon" element={<FurnitureRepairSector92Gurgaon />} />
          <Route path="/furniture-repair-sector-93-gurgaon" element={<FurnitureRepairSector93Gurgaon />} />
          <Route path="/furniture-repair-sector-95-gurgaon" element={<FurnitureRepairSector95Gurgaon />} />
          <Route path="/furniture-repair-sector-99-gurgaon" element={<FurnitureRepairSector99Gurgaon />} />
          <Route path="/furniture-repair-sector-102-gurgaon" element={<FurnitureRepairSector102Gurgaon />} />
          <Route path="/furniture-repair-sector-104-gurgaon" element={<FurnitureRepairSector104Gurgaon />} />
          <Route path="/furniture-repair-sector-109-gurgaon" element={<FurnitureRepairSector109Gurgaon />} />
          <Route path="/furniture-repair-sector-110-gurgaon" element={<FurnitureRepairSector110Gurgaon />} />
          <Route path="/furniture-repair-sector-111-gurgaon" element={<FurnitureRepairSector111Gurgaon />} />
          {/* Batch D — Premium Townships */}
          <Route path="/sofa-repair-vipul-world-gurgaon" element={<SofaRepairVipulWorldGurgaon />} />
          <Route path="/sofa-repair-central-park-gurgaon" element={<SofaRepairCentralParkGurgaon />} />
          <Route path="/sofa-repair-tata-raisina-gurgaon" element={<SofaRepairTataRaisinaGurgaon />} />
          <Route path="/sofa-repair-emaar-palm-drive-gurgaon" element={<SofaRepairEmaarPalmDriveGurgaon />} />
          <Route path="/sofa-repair-emaar-marbella-gurgaon" element={<SofaRepairEmaarMarbellaGurgaon />} />
          <Route path="/sofa-repair-orchid-petals-gurgaon" element={<SofaRepairOrchidPetalsGurgaon />} />
          <Route path="/sofa-repair-bestech-park-view-gurgaon" element={<SofaRepairBestechParkViewGurgaon />} />
          <Route path="/sofa-repair-vatika-city-gurgaon" element={<SofaRepairVatikaCityGurgaon />} />
          <Route path="/sofa-repair-richmond-park-gurgaon" element={<SofaRepairRichmondParkGurgaon />} />
          <Route path="/sofa-repair-hamilton-court-gurgaon" element={<SofaRepairHamiltonCourtGurgaon />} />
          <Route path="/recliner-repair-vipul-world-gurgaon" element={<ReclineRepairVipulWorldGurgaon />} />
          <Route path="/recliner-repair-central-park-gurgaon" element={<ReclineRepairCentralParkGurgaon />} />
          <Route path="/recliner-repair-tata-raisina-gurgaon" element={<ReclineRepairTataRaisinaGurgaon />} />
          <Route path="/recliner-repair-emaar-palm-drive-gurgaon" element={<ReclineRepairEmaarPalmDriveGurgaon />} />
          <Route path="/recliner-repair-emaar-marbella-gurgaon" element={<ReclineRepairEmaarMarbellaGurgaon />} />
          <Route path="/recliner-repair-orchid-petals-gurgaon" element={<ReclineRepairOrchidPetalsGurgaon />} />
          <Route path="/recliner-repair-bestech-park-view-gurgaon" element={<ReclineRepairBestechParkViewGurgaon />} />
          <Route path="/recliner-repair-vatika-city-gurgaon" element={<ReclineRepairVatikaCityGurgaon />} />
          <Route path="/recliner-repair-richmond-park-gurgaon" element={<ReclineRepairRichmondParkGurgaon />} />
          <Route path="/recliner-repair-hamilton-court-gurgaon" element={<ReclineRepairHamiltonCourtGurgaon />} />
          <Route path="/furniture-repair-vipul-world-gurgaon" element={<FurnitureRepairVipulWorldGurgaon />} />
          <Route path="/furniture-repair-central-park-gurgaon" element={<FurnitureRepairCentralParkGurgaon />} />
          <Route path="/furniture-repair-tata-raisina-gurgaon" element={<FurnitureRepairTataRaisinaGurgaon />} />
          <Route path="/furniture-repair-emaar-palm-drive-gurgaon" element={<FurnitureRepairEmaarPalmDriveGurgaon />} />
          <Route path="/furniture-repair-emaar-marbella-gurgaon" element={<FurnitureRepairEmaarMarbellaGurgaon />} />
          <Route path="/furniture-repair-orchid-petals-gurgaon" element={<FurnitureRepairOrchidPetalsGurgaon />} />
          <Route path="/furniture-repair-bestech-park-view-gurgaon" element={<FurnitureRepairBestechParkViewGurgaon />} />
          <Route path="/furniture-repair-vatika-city-gurgaon" element={<FurnitureRepairVatikaCityGurgaon />} />
          <Route path="/furniture-repair-richmond-park-gurgaon" element={<FurnitureRepairRichmondParkGurgaon />} />
          <Route path="/furniture-repair-hamilton-court-gurgaon" element={<FurnitureRepairHamiltonCourtGurgaon />} />
          {/* Upholstery — exemplar page (Milestone 123) */}
          <Route path="/sofa-upholstery-sector-59-gurgaon" element={<SofaUpholsterySector59Gurgaon />} />
          {/* Upholstery — Batch 1 (Milestone 124) */}
          <Route path="/sofa-upholstery-new-gurgaon" element={<SofaUpholsteryNewGurgaon />} />
          <Route path="/sofa-upholstery-sector-49-gurgaon" element={<SofaUpholsterySector49Gurgaon />} />
          <Route path="/sofa-upholstery-sector-50-gurgaon" element={<SofaUpholsterySector50Gurgaon />} />
          <Route path="/sofa-upholstery-sector-51-gurgaon" element={<SofaUpholsterySector51Gurgaon />} />
          <Route path="/sofa-upholstery-sector-56-gurgaon" element={<SofaUpholsterySector56Gurgaon />} />
          <Route path="/sofa-upholstery-sector-57-gurgaon" element={<SofaUpholsterySector57Gurgaon />} />
          <Route path="/sofa-upholstery-sector-58-gurgaon" element={<SofaUpholsterySector58Gurgaon />} />
          <Route path="/sofa-upholstery-sector-60-gurgaon" element={<SofaUpholsterySector60Gurgaon />} />
          <Route path="/sofa-upholstery-sector-61-gurgaon" element={<SofaUpholsterySector61Gurgaon />} />
          <Route path="/sofa-upholstery-sector-62-gurgaon" element={<SofaUpholsterySector62Gurgaon />} />
          <Route path="/sofa-upholstery-sector-63-gurgaon" element={<SofaUpholsterySector63Gurgaon />} />
          <Route path="/sofa-upholstery-sector-64-gurgaon" element={<SofaUpholsterySector64Gurgaon />} />
          <Route path="/sofa-upholstery-sector-65-gurgaon" element={<SofaUpholsterySector65Gurgaon />} />
          <Route path="/sofa-upholstery-sector-66-gurgaon" element={<SofaUpholsterySector66Gurgaon />} />
          <Route path="/sofa-upholstery-sector-67-gurgaon" element={<SofaUpholsterySector67Gurgaon />} />
          <Route path="/sofa-upholstery-sector-68-gurgaon" element={<SofaUpholsterySector68Gurgaon />} />
          <Route path="/sofa-upholstery-sector-69-gurgaon" element={<SofaUpholsterySector69Gurgaon />} />
          <Route path="/sofa-upholstery-sector-70-gurgaon" element={<SofaUpholsterySector70Gurgaon />} />
          <Route path="/sofa-upholstery-sector-71-gurgaon" element={<SofaUpholsterySector71Gurgaon />} />
          <Route path="/sofa-upholstery-sector-72-gurgaon" element={<SofaUpholsterySector72Gurgaon />} />
          <Route path="/sofa-upholstery-dwarka-expressway" element={<SofaUpholsteryDwarkaExpressway />} />
          <Route path="/sofa-upholstery-golf-course-extension" element={<SofaUpholsteryGolfCourseExtension />} />
          <Route path="/sofa-upholstery-dlf-phase-1" element={<SofaUpholsteryDlfPhase1 />} />
          <Route path="/sofa-upholstery-dlf-phase-2" element={<SofaUpholsteryDlfPhase2 />} />
          <Route path="/sofa-upholstery-dlf-phase-3" element={<SofaUpholsteryDlfPhase3 />} />
          <Route path="/sofa-upholstery-dlf-phase-4" element={<SofaUpholsteryDlfPhase4 />} />
          <Route path="/sofa-upholstery-dlf-phase-5" element={<SofaUpholsteryDlfPhase5 />} />
          <Route path="/sofa-upholstery-sushant-lok" element={<SofaUpholsterySushantLok />} />
          <Route path="/sofa-upholstery-sohna-road" element={<SofaUpholsterySohnaRoad />} />
          <Route path="/sofa-upholstery-nirvana-country" element={<SofaUpholsteryNirvanaCountry />} />
          <Route path="/sofa-upholstery-golf-course" element={<SofaUpholsteryGolfCourse />} />
          <Route path="/sofa-upholstery-south-city-1" element={<SofaUpholsterySouthCity1 />} />
          <Route path="/sofa-upholstery-south-city-2" element={<SofaUpholsterySouthCity2 />} />
          <Route path="/sofa-upholstery-palam-vihar" element={<SofaUpholsteryPalamVihar />} />
          {/* Upholstery — Batch 2 (Milestone 125) */}
          <Route path="/sofa-upholstery-sector-40-gurgaon" element={<SofaUpholsterySector40Gurgaon />} />
          <Route path="/sofa-upholstery-sector-41-gurgaon" element={<SofaUpholsterySector41Gurgaon />} />
          <Route path="/sofa-upholstery-sector-44-gurgaon" element={<SofaUpholsterySector44Gurgaon />} />
          <Route path="/sofa-upholstery-sector-45-gurgaon" element={<SofaUpholsterySector45Gurgaon />} />
          <Route path="/sofa-upholstery-sector-46-gurgaon" element={<SofaUpholsterySector46Gurgaon />} />
          <Route path="/sofa-upholstery-sector-47-gurgaon" element={<SofaUpholsterySector47Gurgaon />} />
          <Route path="/sofa-upholstery-sector-48-gurgaon" element={<SofaUpholsterySector48Gurgaon />} />
          <Route path="/sofa-upholstery-sector-52-gurgaon" element={<SofaUpholsterySector52Gurgaon />} />
          <Route path="/sofa-upholstery-sector-53-gurgaon" element={<SofaUpholsterySector53Gurgaon />} />
          <Route path="/sofa-upholstery-sector-54-gurgaon" element={<SofaUpholsterySector54Gurgaon />} />
          <Route path="/sofa-upholstery-sector-55-gurgaon" element={<SofaUpholsterySector55Gurgaon />} />
          <Route path="/sofa-upholstery-malibu-towne" element={<SofaUpholsteryMalibuTowne />} />
          <Route path="/sofa-upholstery-ardee-city" element={<SofaUpholsteryArdeeCity />} />
          <Route path="/sofa-upholstery-heritage-city-gurgaon" element={<SofaUpholsteryHeritageCityGurgaon />} />
          <Route path="/sofa-upholstery-sector-82-gurgaon" element={<SofaUpholsterySector82Gurgaon />} />
          <Route path="/sofa-upholstery-sector-82a-gurgaon" element={<SofaUpholsterySector82aGurgaon />} />
          <Route path="/sofa-upholstery-sector-83-gurgaon" element={<SofaUpholsterySector83Gurgaon />} />
          <Route path="/sofa-upholstery-sector-84-gurgaon" element={<SofaUpholsterySector84Gurgaon />} />
          <Route path="/sofa-upholstery-sector-85-gurgaon" element={<SofaUpholsterySector85Gurgaon />} />
          <Route path="/sofa-upholstery-sector-86-gurgaon" element={<SofaUpholsterySector86Gurgaon />} />
          <Route path="/sofa-upholstery-sector-87-gurgaon" element={<SofaUpholsterySector87Gurgaon />} />
          <Route path="/sofa-upholstery-sector-88-gurgaon" element={<SofaUpholsterySector88Gurgaon />} />
          <Route path="/sofa-upholstery-sector-89-gurgaon" element={<SofaUpholsterySector89Gurgaon />} />
          <Route path="/sofa-upholstery-sector-90-gurgaon" element={<SofaUpholsterySector90Gurgaon />} />
          <Route path="/sofa-upholstery-sector-91-gurgaon" element={<SofaUpholsterySector91Gurgaon />} />
          <Route path="/sofa-upholstery-sector-92-gurgaon" element={<SofaUpholsterySector92Gurgaon />} />
          <Route path="/sofa-upholstery-sector-93-gurgaon" element={<SofaUpholsterySector93Gurgaon />} />
          <Route path="/sofa-upholstery-sector-95-gurgaon" element={<SofaUpholsterySector95Gurgaon />} />
          <Route path="/sofa-upholstery-sector-99-gurgaon" element={<SofaUpholsterySector99Gurgaon />} />
          <Route path="/sofa-upholstery-sector-102-gurgaon" element={<SofaUpholsterySector102Gurgaon />} />
          <Route path="/sofa-upholstery-sector-104-gurgaon" element={<SofaUpholsterySector104Gurgaon />} />
          <Route path="/sofa-upholstery-sector-109-gurgaon" element={<SofaUpholsterySector109Gurgaon />} />
          <Route path="/sofa-upholstery-sector-110-gurgaon" element={<SofaUpholsterySector110Gurgaon />} />
          <Route path="/sofa-upholstery-sector-111-gurgaon" element={<SofaUpholsterySector111Gurgaon />} />
          <Route path="/sofa-upholstery-vatika-city-gurgaon" element={<SofaUpholsteryVatikaCityGurgaon />} />
          {/* South Delhi upholstery cluster */}
          <Route path="/sofa-upholstery-vasant-vihar-delhi" element={<SofaUpholsteryVasantViharDelhi />} />
          <Route path="/sofa-upholstery-defence-colony-delhi" element={<SofaUpholsteryDefenceColonyDelhi />} />
          <Route path="/sofa-upholstery-friends-colony-delhi" element={<SofaUpholsteryFriendsColonyDelhi />} />
          <Route path="/sofa-upholstery-maharani-bagh-delhi" element={<SofaUpholsteryMaharaniBaghDelhi />} />
          <Route path="/sofa-upholstery-green-park-delhi" element={<SofaUpholsteryGreenParkDelhi />} />
          <Route path="/sofa-upholstery-hauz-khas-delhi" element={<SofaUpholsteryHauzKhasDelhi />} />
          <Route path="/sofa-upholstery-safdarjung-enclave-delhi" element={<SofaUpholsterySafdarjungEnclaveDelhi />} />
          <Route path="/sofa-upholstery-panchsheel-park-delhi" element={<SofaUpholsteryPanchsheelParkDelhi />} />
          <Route path="/sofa-upholstery-gulmohar-park-delhi" element={<SofaUpholsteryGulmoharParkDelhi />} />
          <Route path="/sofa-upholstery-greater-kailash-1-delhi" element={<SofaUpholsteryGreaterKailash1Delhi />} />
          <Route path="/sofa-upholstery-greater-kailash-2-delhi" element={<SofaUpholsteryGreaterKailash2Delhi />} />
          <Route path="/sofa-upholstery-greater-kailash-3-delhi" element={<SofaUpholsteryGreaterKailash3Delhi />} />
          {/* West Delhi upholstery cluster */}
          <Route path="/sofa-upholstery-rajouri-garden-delhi" element={<SofaUpholsteryRajouriGardenDelhi />} />
          <Route path="/sofa-upholstery-punjabi-bagh-delhi" element={<SofaUpholsteryPunjabiBaghDelhi />} />
          <Route path="/sofa-upholstery-janakpuri-delhi" element={<SofaUpholsteryJanakpuriDelhi />} />
          <Route path="/sofa-upholstery-paschim-vihar-delhi" element={<SofaUpholsteryPaschimViharDelhi />} />
          <Route path="/sofa-upholstery-tilak-nagar-delhi" element={<SofaUpholsteryTilakNagarDelhi />} />
          <Route path="/sofa-upholstery-vikaspuri-delhi" element={<SofaUpholsteryVikaspuriDelhi />} />
          <Route path="/sofa-upholstery-uttam-nagar-delhi" element={<SofaUpholsteryUttamNagarDelhi />} />
          {/* North Delhi upholstery cluster */}
          <Route path="/sofa-upholstery-rohini-delhi" element={<SofaUpholsteryRohiniDelhi />} />
          <Route path="/sofa-upholstery-pitampura-delhi" element={<SofaUpholsteryPitampuraDelhi />} />
          <Route path="/sofa-upholstery-ashok-vihar-delhi" element={<SofaUpholsteryAshokViharDelhi />} />
          <Route path="/sofa-upholstery-model-town-delhi" element={<SofaUpholsteryModelTownDelhi />} />
          <Route path="/sofa-upholstery-shalimar-bagh-delhi" element={<SofaUpholsteryShalimarBaghDelhi />} />
          <Route path="/sofa-upholstery-kamla-nagar-delhi" element={<SofaUpholsteryKamlaNagarDelhi />} />
          <Route path="/sofa-upholstery-civil-lines-delhi" element={<SofaUpholsteryCivilLinesDelhi />} />
          <Route path="/sofa-upholstery-mukherjee-nagar-delhi" element={<SofaUpholsteryMukherjeeNagarDelhi />} />
          <Route path="/sofa-upholstery-gtb-nagar-delhi" element={<SofaUpholsteryGtbNagarDelhi />} />
          <Route path="/sofa-upholstery-adarsh-nagar-delhi" element={<SofaUpholsteryAdarshNagarDelhi />} />
          <Route path="/sofa-upholstery-gujranwala-town-delhi" element={<SofaUpholsteryGujranwalaTownDelhi />} />
          <Route path="/sofa-upholstery-keshav-puram-delhi" element={<SofaUpholsteryKeshavPuramDelhi />} />
          <Route path="/sofa-upholstery-derawal-nagar-delhi" element={<SofaUpholsteryDerawalNagarDelhi />} />
          <Route path="/sofa-upholstery-shakti-nagar-delhi" element={<SofaUpholsteryShaktiNagarDelhi />} />
          <Route path="/sofa-upholstery-hudson-lane-delhi" element={<SofaUpholsteryHudsonLaneDelhi />} />
          {/* Office Chair Hub Pages */}
          <Route path="/office-chair-repair-delhi" element={<OfficeChairRepairDelhiHub />} />
          <Route path="/office-chair-repair-gurgaon" element={<OfficeChairRepairGurgaonHub />} />
          <Route path="/office-chair-repair-noida" element={<OfficeChairRepairNoidaHub />} />
          <Route path="/office-chair-repair-faridabad" element={<OfficeChairRepairFaridabadHub />} />
          <Route path="/office-chair-repair-ghaziabad" element={<OfficeChairRepairGhaziabadHub />} />
          {/* Modular Kitchen Hub Pages */}
          <Route path="/modular-kitchen-guide" element={<ModularKitchenGuidePage />} />
          <Route path="/modular-kitchen" element={<ModularKitchenPage />} />
          <Route path="/modular-kitchen-localities" element={<LocalitiesDirectoryPage />} />
          <Route path="/modular-kitchen-designs" element={<DesignsDirectoryPage />} />
          <Route path="/modular-kitchen-materials" element={<MaterialsDirectoryPage />} />
          <Route path="/modular-kitchen-budget" element={<BudgetDirectoryPage />} />
          <Route path="/modular-kitchen-repair-guide" element={<RepairGuideDirectoryPage />} />
          <Route path="/modular-kitchen-renovation" element={<RenovationDirectoryPage />} />
          <Route path="/modular-kitchen-guides" element={<GuidesDirectoryPage />} />
          <Route path="/modular-kitchen-near-me" element={<ModularKitchenNearMePage />} />
          <Route path="/modular-kitchen-delhi" element={<ModularKitchenDelhiPage />} />
          <Route path="/modular-kitchen-gurgaon" element={<ModularKitchenGurgaonPage />} />
          <Route path="/modular-kitchen-noida" element={<ModularKitchenNoidaPage />} />
          <Route path="/modular-kitchen-faridabad" element={<ModularKitchenFaridabadPage />} />
          <Route path="/modular-kitchen-ghaziabad" element={<ModularKitchenGhaziabadPage />} />
          <Route path="/modular-kitchen-chandigarh" element={<ModularKitchenChandigarhPage />} />
          <Route path="/modular-kitchen-mohali" element={<ModularKitchenMohaliPage />} />
          <Route path="/modular-kitchen-panchkula" element={<ModularKitchenPanchkulaPage />} />
          <Route path="/modular-kitchen-tricity" element={<ModularKitchenTricityPage />} />
          <Route path="/modular-kitchen-cost-gurgaon" element={<ModularKitchenCostGurgaonPage />} />
          <Route path="/modular-kitchen-cost-noida" element={<ModularKitchenCostNoidaPage />} />
          <Route path="/modular-kitchen-cost-faridabad" element={<ModularKitchenCostFaridabadPage />} />
          <Route path="/modular-kitchen-cost-ghaziabad" element={<ModularKitchenCostGhaziabadPage />} />
          <Route path="/modular-kitchen-cost-delhi" element={<ModularKitchenCostDelhiPage />} />
          <Route path="/open-kitchen-design" element={<OpenKitchenDesignPage />} />
          <Route path="/modern-modular-kitchen-designs" element={<ModernModularKitchenDesignsPage />} />
          <Route path="/small-modular-kitchen-designs" element={<SmallModularKitchenDesignsPage />} />
          <Route path="/modular-kitchen-price" element={<ModularKitchenPricePage />} />
          <Route path="/modular-kitchen-renovation-delhi" element={<ModularKitchenRenovationDelhiPage />} />
          <Route path="/modular-kitchen-renovation-gurgaon" element={<ModularKitchenRenovationGurgaonPage />} />
          <Route path="/modular-kitchen-renovation-noida" element={<ModularKitchenRenovationNoidaPage />} />
          <Route path="/kitchen-renovation-cost-delhi" element={<KitchenRenovationCostDelhiPage />} />
          <Route path="/g-shaped-modular-kitchen" element={<GShapedModularKitchenPage />} />
          {/* Material × City Pages (15) */}
          <Route path="/acrylic-modular-kitchen-delhi" element={<AcrylicKitchenDelhiPage />} />
          <Route path="/acrylic-modular-kitchen-gurgaon" element={<AcrylicKitchenGurgaonPage />} />
          <Route path="/acrylic-modular-kitchen-noida" element={<AcrylicKitchenNoidaPage />} />
          <Route path="/acrylic-modular-kitchen-faridabad" element={<AcrylicKitchenFaridabadPage />} />
          <Route path="/acrylic-modular-kitchen-ghaziabad" element={<AcrylicKitchenGhaziabadPage />} />
          <Route path="/laminate-modular-kitchen-delhi" element={<LaminateKitchenDelhiPage />} />
          <Route path="/laminate-modular-kitchen-gurgaon" element={<LaminateKitchenGurgaonPage />} />
          <Route path="/laminate-modular-kitchen-noida" element={<LaminateKitchenNoidaPage />} />
          <Route path="/laminate-modular-kitchen-faridabad" element={<LaminateKitchenFaridabadPage />} />
          <Route path="/laminate-modular-kitchen-ghaziabad" element={<LaminateKitchenGhaziabadPage />} />
          <Route path="/pu-modular-kitchen-delhi" element={<PuKitchenDelhiPage />} />
          <Route path="/pu-modular-kitchen-gurgaon" element={<PuKitchenGurgaonPage />} />
          <Route path="/pu-modular-kitchen-noida" element={<PuKitchenNoidaPage />} />
          <Route path="/pu-modular-kitchen-faridabad" element={<PuKitchenFaridabadPage />} />
          <Route path="/pu-modular-kitchen-ghaziabad" element={<PuKitchenGhaziabadPage />} />
          {/* Layout × City Pages (30) */}
          <Route path="/l-shape-modular-kitchen-delhi" element={<LShapeKitchenDelhiPage />} />
          <Route path="/l-shape-modular-kitchen-gurgaon" element={<LShapeKitchenGurgaonPage />} />
          <Route path="/l-shape-modular-kitchen-noida" element={<LShapeKitchenNoidaPage />} />
          <Route path="/l-shape-modular-kitchen-faridabad" element={<LShapeKitchenFaridabadPage />} />
          <Route path="/l-shape-modular-kitchen-ghaziabad" element={<LShapeKitchenGhaziabadPage />} />
          <Route path="/u-shape-modular-kitchen-delhi" element={<UShapeKitchenDelhiPage />} />
          <Route path="/u-shape-modular-kitchen-gurgaon" element={<UShapeKitchenGurgaonPage />} />
          <Route path="/u-shape-modular-kitchen-noida" element={<UShapeKitchenNoidaPage />} />
          <Route path="/u-shape-modular-kitchen-faridabad" element={<UShapeKitchenFaridabadPage />} />
          <Route path="/u-shape-modular-kitchen-ghaziabad" element={<UShapeKitchenGhaziabadPage />} />
          <Route path="/parallel-modular-kitchen-delhi" element={<ParallelKitchenDelhiPage />} />
          <Route path="/parallel-modular-kitchen-gurgaon" element={<ParallelKitchenGurgaonPage />} />
          <Route path="/parallel-modular-kitchen-noida" element={<ParallelKitchenNoidaPage />} />
          <Route path="/parallel-modular-kitchen-faridabad" element={<ParallelKitchenFaridabadPage />} />
          <Route path="/parallel-modular-kitchen-ghaziabad" element={<ParallelKitchenGhaziabadPage />} />
          <Route path="/straight-modular-kitchen-delhi" element={<StraightKitchenDelhiPage />} />
          <Route path="/straight-modular-kitchen-gurgaon" element={<StraightKitchenGurgaonPage />} />
          <Route path="/straight-modular-kitchen-noida" element={<StraightKitchenNoidaPage />} />
          <Route path="/straight-modular-kitchen-faridabad" element={<StraightKitchenFaridabadPage />} />
          <Route path="/straight-modular-kitchen-ghaziabad" element={<StraightKitchenGhaziabadPage />} />
          <Route path="/island-modular-kitchen-delhi" element={<IslandKitchenDelhiPage />} />
          <Route path="/island-modular-kitchen-gurgaon" element={<IslandKitchenGurgaonPage />} />
          <Route path="/island-modular-kitchen-noida" element={<IslandKitchenNoidaPage />} />
          <Route path="/island-modular-kitchen-faridabad" element={<IslandKitchenFaridabadPage />} />
          <Route path="/island-modular-kitchen-ghaziabad" element={<IslandKitchenGhaziabadPage />} />
          <Route path="/peninsula-modular-kitchen-delhi" element={<PeninsulaKitchenDelhiPage />} />
          <Route path="/peninsula-modular-kitchen-gurgaon" element={<PeninsulaKitchenGurgaonPage />} />
          <Route path="/peninsula-modular-kitchen-noida" element={<PeninsulaKitchenNoidaPage />} />
          <Route path="/peninsula-modular-kitchen-faridabad" element={<PeninsulaKitchenFaridabadPage />} />
          <Route path="/peninsula-modular-kitchen-ghaziabad" element={<PeninsulaKitchenGhaziabadPage />} />
          {/* Comparison & Buying Guides (milestone-225) */}
          <Route path="/acrylic-vs-laminate-modular-kitchen" element={<AcrylicVsLaminatePage />} />
          <Route path="/l-shape-vs-u-shape-modular-kitchen" element={<LShapeVsUShapePage />} />
          <Route path="/modular-vs-semi-modular-kitchen" element={<ModularVsSemiModularPage />} />
          <Route path="/modular-kitchen-for-small-flat" element={<ModularKitchenSmallFlatPage />} />
          <Route path="/2bhk-modular-kitchen-design" element={<TwoBhkKitchenPage />} />
          <Route path="/3bhk-modular-kitchen-cost" element={<ThreeBhkKitchenPage />} />
          {/* Size & Budget Guides (milestone-226) */}
          <Route path="/modular-kitchen-10x8" element={<Kitchen10x8Page />} />
          <Route path="/modular-kitchen-10x10" element={<Kitchen10x10Page />} />
          <Route path="/modular-kitchen-10x12" element={<Kitchen10x12Page />} />
          <Route path="/modular-kitchen-under-50000" element={<Under50000Page />} />
          <Route path="/modular-kitchen-under-3-lakh" element={<Under3LakhPage />} />
          {/* Commercial Intent Pages (7 intents × 5 cities = 35) */}
          <Route path="/modular-kitchen-company-delhi" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-company-gurgaon" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-company-noida" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-company-faridabad" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-company-ghaziabad" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-designer-delhi" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-designer-gurgaon" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-designer-noida" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-designer-faridabad" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-designer-ghaziabad" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-showroom-delhi" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-showroom-gurgaon" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-showroom-noida" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-showroom-faridabad" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-showroom-ghaziabad" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-dealer-delhi" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-dealer-gurgaon" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-dealer-noida" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-dealer-faridabad" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-dealer-ghaziabad" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-manufacturer-delhi" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-manufacturer-gurgaon" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-manufacturer-noida" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-manufacturer-faridabad" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-manufacturer-ghaziabad" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-installation-delhi" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-installation-gurgaon" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-installation-noida" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-installation-faridabad" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-installation-ghaziabad" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-contractors-delhi" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-contractors-gurgaon" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-contractors-noida" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-contractors-faridabad" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-contractors-ghaziabad" element={<CommercialIntentPage />} />
          {/* Commercial Intent Pages — Tricity (7 intents × 4 cities = 28) */}
          <Route path="/modular-kitchen-company-chandigarh" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-company-mohali" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-company-panchkula" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-company-tricity" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-designer-chandigarh" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-designer-mohali" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-designer-panchkula" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-designer-tricity" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-showroom-chandigarh" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-showroom-mohali" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-showroom-panchkula" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-showroom-tricity" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-dealer-chandigarh" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-dealer-mohali" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-dealer-panchkula" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-dealer-tricity" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-manufacturer-chandigarh" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-manufacturer-mohali" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-manufacturer-panchkula" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-manufacturer-tricity" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-installation-chandigarh" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-installation-mohali" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-installation-panchkula" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-installation-tricity" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-contractors-chandigarh" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-contractors-mohali" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-contractors-panchkula" element={<CommercialIntentPage />} />
          <Route path="/modular-kitchen-contractors-tricity" element={<CommercialIntentPage />} />
          {/* Kitchen Partner Pages */}
          <Route path="/kitchen-partner-chandigarh" element={<KitchenPartnerPage />} />
          <Route path="/kitchen-partner-tricity" element={<KitchenPartnerPage />} />
          {/* Dynamic SEO pages — all service, location, and programmatic pages */}
          <Route path="/:slug" element={<DynamicSeoPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingTestimonial />
        <FloatingWhatsApp />
      </BrowserRouter>
    </DefaultProviders>
  );
}

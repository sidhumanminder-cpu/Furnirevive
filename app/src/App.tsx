import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultProviders } from "./components/providers/default.tsx";
import AuthCallback from "./pages/auth/Callback.tsx";
import Index from "./pages/Index.tsx";
import ContactPage from "./pages/contact/page.tsx";
import BookPage from "./pages/book/page.tsx";
import MyBookingsPage from "./pages/my-bookings/page.tsx";
import AdminPage from "./pages/admin/page.tsx";
import CaseStudiesAdminPage from "./pages/admin/case-studies/page.tsx";
import NotFound from "./pages/NotFound.tsx";
import FloatingTestimonial from "./components/floating-testimonial.tsx";
import FloatingWhatsApp from "./components/floating-whatsapp.tsx";
import DynamicSeoPage from "./pages/services/dynamic-seo-page.tsx";
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

export default function App() {
  return (
    <DefaultProviders>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/book" element={<BookPage />} />
          <Route path="/my-bookings" element={<MyBookingsPage />} />
          <Route path="/admin" element={<AdminPage />} />
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
          {/* Auth callback — must be before dynamic /:slug route */}
          <Route path="/auth/callback" element={<AuthCallback />} />
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

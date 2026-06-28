import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const FOOTER_LINKS = [
  {
    title: "Repair Services",
    links: [
      { label: "Sofa Repair Delhi", href: "/sofa-repair-delhi" },
      { label: "Furniture Repair Delhi", href: "/furniture-repair-delhi" },
      { label: "Recliner Repair Delhi", href: "/recliner-repair-delhi" },
      { label: "Chair Repair Delhi", href: "/chair-repair-delhi" },
      { label: "Furniture Polish Delhi", href: "/furniture-polish-delhi" },
      { label: "Carpenter Home Service", href: "/carpenter-home-service-delhi" },
      { label: "Sofa Upholstery Delhi", href: "/sofa-upholstery-delhi" },
    ],
  },
  {
    title: "Delhi Areas",
    links: [
      { label: "Sofa Repair South Delhi", href: "/sofa-repair-south-delhi" },
      { label: "Furniture Repair South Delhi", href: "/furniture-repair-south-delhi" },
      { label: "Recliner Repair South Delhi", href: "/recliner-repair-south-delhi" },
      { label: "Sofa Repair Dwarka", href: "/sofa-repair-dwarka" },
      { label: "Furniture Repair Rohini", href: "/furniture-repair-rohini" },
      { label: "Sofa Repair East Delhi", href: "/sofa-repair-east-delhi" },
    ],
  },
  {
    title: "Gurgaon & Noida",
    links: [
      { label: "Sofa Repair Gurgaon", href: "/sofa-repair-gurgaon" },
      { label: "Furniture Repair Gurgaon", href: "/furniture-repair-gurgaon" },
      { label: "Recliner Repair Gurgaon", href: "/recliner-repair-gurgaon" },
      { label: "Sofa Repair Noida", href: "/sofa-repair-noida" },
      { label: "Furniture Repair Noida", href: "/furniture-repair-noida" },
      { label: "Recliner Repair Noida", href: "/recliner-repair-noida" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/#how-it-works" },
      { label: "Reviews", href: "/#reviews" },
      { label: "Blog", href: "/blog" },
      { label: "Repair Tips & Guides", href: "https://ncrsofarepair.wordpress.com" },
      { label: "NCR Sofa Repair Blog | Medium", href: "https://medium.com/@ncr-sofa-repair-guide" },
      { label: "Contact", href: "/contact" },
      { label: "Book Repair", href: "/book" },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-2">
              <img
                src="https://cdn.hercules.app/file_dtr8PtooAsmRwfNTJKNRTESW"
                alt="FurniRevive Furniture Repair"
                className="h-[6.75rem] w-auto mix-blend-screen"
              />
              <span className="font-serif text-xl font-bold">FurniRevive</span>
            </div>
            <p className="text-sm opacity-70 leading-relaxed max-w-xs">
              Delhi NCR{"'"}s most trusted furniture repair service. Expert sofa repair, recliner repair, chair repair, wood polish &amp; carpenter home service at your doorstep since 2018.
            </p>
            {/* Contact info */}
            <ul className="space-y-2.5 pt-2">
              <li className="flex items-center gap-2.5 text-sm opacity-70">
                <Phone className="size-4 shrink-0" />
                <a href="tel:+919217999355" className="hover:opacity-100 transition-opacity">+91 92179 99355</a>
              </li>
              <li className="flex items-center gap-2.5 text-sm opacity-70">
                <Mail className="size-4 shrink-0" />
                <a href="mailto:support@furnirevive.com" className="hover:opacity-100 transition-opacity">support@furnirevive.com</a>
              </li>
              <li className="flex items-start gap-2.5 text-sm opacity-70">
                <MapPin className="size-4 shrink-0 mt-0.5" />
                Serving Delhi, Noida, Gurgaon, Ghaziabad &amp; Faridabad
              </li>
            </ul>
            {/* Social media */}
            <div className="pt-4 space-y-3">
              <div>
                <p className="text-sm font-semibold opacity-90">Follow us &amp; see our work</p>
                <p className="text-xs opacity-60 mt-0.5">Check our pages for before/after repairs, tips &amp; offers.</p>
              </div>
              <div className="flex items-center gap-5">
                <a
                  href="https://www.instagram.com/furnirevive/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow FurniRevive on Instagram"
                  className="hover:opacity-80 transition-opacity"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                    <defs>
                      <radialGradient id="ig-grad" cx="30%" cy="107%" r="150%">
                        <stop offset="0%" stopColor="#fdf497" />
                        <stop offset="5%" stopColor="#fdf497" />
                        <stop offset="45%" stopColor="#fd5949" />
                        <stop offset="60%" stopColor="#d6249f" />
                        <stop offset="90%" stopColor="#285AEB" />
                      </radialGradient>
                    </defs>
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" fill="url(#ig-grad)" />
                    <circle cx="12" cy="12" r="4" fill="none" stroke="white" strokeWidth="1.5" />
                    <circle cx="17.5" cy="6.5" r="1" fill="white" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/FurniRevive/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow FurniRevive on Facebook"
                  className="hover:opacity-80 transition-opacity"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="4" fill="#1877F2" />
                    <path d="M13.5 8.5H15V6.5H13.5C12.12 6.5 11 7.62 11 9v1.5H9.5V12.5H11V17.5H13V12.5H14.5L15 10.5H13V9C13 8.72 13.22 8.5 13.5 8.5Z" fill="white" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h3 className="font-semibold text-sm tracking-wider uppercase mb-4 opacity-90">
                {group.title}
              </h3>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm opacity-60 hover:opacity-100 transition-opacity"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-sm opacity-60 hover:opacity-100 transition-opacity"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-background/10">
          <p className="text-sm text-center opacity-50">
            {"\u00A9"} {currentYear} FurniRevive – Furniture Repair Services in Delhi NCR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

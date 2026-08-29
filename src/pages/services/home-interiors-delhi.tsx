import { useEffect } from "react";
import { Link } from "react-router-dom";

/**
 * Bridge page: Home Interiors Delhi
 *
 * Sits between the furniture-repair cluster and the kitchen cluster in the
 * three-layer internal authority linking chain:
 *   Furniture Repair → Home Interiors Delhi → Modular Kitchen Delhi
 *
 * This is a lean, SEO-focused hub page. It signals topical breadth to search
 * engines while passing authority down to both clusters.
 */
export default function HomeInteriorsDelhiPage() {
  useEffect(() => {
    document.title =
      "Home Interiors Delhi | Furniture Repair & Modular Kitchen | FurniRevive";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc)
      metaDesc.setAttribute(
        "content",
        "Complete home interiors in Delhi — professional furniture repair, sofa restoration, and modular kitchen installation under one roof. Serving South Delhi, Gurgaon, Noida & NCR.",
      );
  }, []);

  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-foreground">
      <h1 className="text-3xl font-bold mb-4">Home Interiors Delhi</h1>
      <p className="text-muted-foreground mb-8 text-lg">
        FurniRevive offers a full range of home interior services across Delhi
        NCR — from furniture repair and sofa upholstery to complete modular
        kitchen design and installation. One trusted team for every room in your
        home.
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Furniture Repair & Restoration</h2>
        <p className="text-muted-foreground mb-4">
          Breathe new life into your existing furniture. We repair sofas,
          recliners, chairs, and all wooden furniture across Delhi, Gurgaon,
          Noida, Faridabad, and Ghaziabad.
        </p>
        <ul className="space-y-2">
          <li>
            <Link to="/furniture-repair-delhi" className="text-primary hover:underline">
              Furniture Repair Delhi
            </Link>
          </li>
          <li>
            <Link to="/sofa-repair-delhi" className="text-primary hover:underline">
              Sofa Repair Delhi
            </Link>
          </li>
          <li>
            <Link to="/furniture-polish-delhi" className="text-primary hover:underline">
              Furniture Polish Delhi
            </Link>
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Modular Kitchen Design & Installation</h2>
        <p className="text-muted-foreground mb-4">
          Design and install your dream kitchen with FurniRevive. We offer
          L-shape, U-shape, parallel, and island layouts with acrylic, laminate,
          and PU finishes — delivered across Delhi NCR.
        </p>
        <ul className="space-y-2">
          <li>
            <Link to="/modular-kitchen-delhi" className="text-primary hover:underline">
              Modular Kitchen Delhi
            </Link>
          </li>
          <li>
            <Link to="/modular-kitchen-cost-delhi" className="text-primary hover:underline">
              Modular Kitchen Cost in Delhi
            </Link>
          </li>
          <li>
            <Link to="/l-shape-modular-kitchen-delhi" className="text-primary hover:underline">
              L-Shape Modular Kitchen Delhi
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Serving All of Delhi NCR</h2>
        <p className="text-muted-foreground">
          Our teams operate across South Delhi, North Delhi, East Delhi, West
          Delhi, Gurgaon, Noida, Faridabad, and Ghaziabad. Same-day service
          available in most localities. Call{" "}
          <a href="tel:+919217999355" className="text-primary hover:underline">
            92179 99355
          </a>{" "}
          to book.
        </p>
      </section>
    </main>
  );
}

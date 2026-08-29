import { test, expect } from "@playwright/test";

/**
 * Registry routing smoke tests.
 *
 * These tests validate the complete request lifecycle:
 *   LOCALITY_REGISTRY → generatePages() → PAGE_MAP → Dynamic Route → Renderer
 *
 * The registry-e2e-test fixture locality is published specifically for these
 * tests and should never be used as a real production locality.
 */

const TEST_LOCALITY_SLUG = "registry-e2e-test";
const PUBLISHED_URL = `/sofa-repair-${TEST_LOCALITY_SLUG}`;

test.describe("Registry routing — published locality", () => {
  test("renders page with correct title", async ({ page }) => {
    await page.goto(PUBLISHED_URL);
    // Title should contain the service and locality name
    await expect(page).toHaveTitle(/Registry Test Area/i);
  });

  test("canonical link tag is present", async ({ page }) => {
    await page.goto(PUBLISHED_URL);
    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveAttribute("href", /registry-e2e-test/);
  });

  test("LocalBusiness JSON-LD is present in head", async ({ page }) => {
    await page.goto(PUBLISHED_URL);
    const jsonld = page.locator('script[type="application/ld+json"]');
    await expect(jsonld).toHaveCount(1);
    const content = await jsonld.textContent();
    expect(content).toContain("LocalBusiness");
  });

  test("hero section renders with locality name", async ({ page }) => {
    await page.goto(PUBLISHED_URL);
    // The hero section should contain the locality name somewhere on the page
    await expect(page.locator("body")).toContainText("Registry Test Area");
  });

  test("meta description is present", async ({ page }) => {
    await page.goto(PUBLISHED_URL);
    const metaDesc = page.locator('meta[name="description"]');
    await expect(metaDesc).toHaveAttribute("content", /.+/);
  });
});

test.describe("Registry routing — unknown locality", () => {
  test("unknown locality renders NotFound", async ({ page }) => {
    await page.goto("/sofa-repair-this-does-not-exist-xyz");
    // NotFound page should be rendered — check for 404 text or not-found indicator
    // The app is a SPA so HTTP status is always 200; check page content instead
    await expect(page.locator("body")).toContainText(/not found|404/i);
  });
});

test.describe("Registry routing — draft locality", () => {
  test("draft locality (lajpat-nagar) renders NotFound", async ({ page }) => {
    await page.goto("/sofa-repair-lajpat-nagar");
    await expect(page.locator("body")).toContainText(/not found|404/i);
  });
});

test.describe("Legacy route precedence", () => {
  test("existing legacy route still resolves correctly", async ({ page }) => {
    // Pick a well-known existing legacy route
    await page.goto("/sofa-repair-delhi");
    // Should NOT be NotFound — should have actual content
    await expect(page.locator("body")).not.toContainText(/not found/i);
    await expect(page).toHaveTitle(/.+/);
  });

  test("routing precedence: explicit route wins over registry pattern", async ({ page }) => {
    // sofa-repair-delhi matches both the explicit route AND /sofa-repair-:localitySlug
    // The explicit route should win — it serves real content, not a registry page
    await page.goto("/sofa-repair-delhi");
    // If the registry intercepted this, it would 404 (delhi is not in LOCALITY_REGISTRY)
    // The legacy page should render fine
    await expect(page.locator("body")).not.toContainText(/not found/i);
  });
});

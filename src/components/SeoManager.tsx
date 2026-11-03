import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { blogPosts } from "../data/blogData";
import { caseStudies } from "../data/caseStudyData";

// Per-route SEO for the whole site.
// The static index.html title and description are the homepage defaults.
// This component updates title, meta description, canonical, social tags
// and JSON-LD schema on every route change, including blog posts, case
// studies and tool pages whose data already lives in the data files.

const SITE = "https://www.nawazbuilds.com";
const DEFAULT_IMAGE = `${SITE}/og-image.webp`;
const HOME_TITLE = "Nawaz Builds | Premium Shopify Store Design & Development Services";
const HOME_DESCRIPTION =
  "Expert Shopify store designer helping brands scale with high-end, conversion-focused ecommerce solutions. Get a premium online store built by Nawaz Builds.";

interface SeoEntry {
  title: string;
  description: string;
  canonicalPath?: string;
  noindex?: boolean;
  image?: string;
  type?: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
}

const staticSeo: Record<string, SeoEntry> = {
  "/": { title: HOME_TITLE, description: HOME_DESCRIPTION },
  "/funnel/step1": { title: HOME_TITLE, description: HOME_DESCRIPTION, canonicalPath: "/" },
  "/strategy-call": {
    title: "Book Your Shopify Strategy Call | Nawaz Builds",
    description:
      "Book a strategy call with Nawaz Builds to review your Shopify store goals, current problems and the exact next steps before you invest.",
  },
  "/thank-you": {
    title: "Thank You | Nawaz Builds",
    description: "Your strategy call request has been received.",
    noindex: true,
  },
  "/blog": {
    title: "Shopify Growth Blog | Nawaz Builds",
    description:
      "Practical Shopify guides on store design, conversion, checkout and maintenance, written from real store builds by Nawaz Builds.",
  },
  "/tools": {
    title: "Free Shopify Tools | Nawaz Builds",
    description:
      "Free tools for Shopify store owners: profit margin calculator, legal policy generator, theme detector and business name generator.",
  },
  "/case-studies": {
    title: "Shopify Case Studies | Nawaz Builds",
    description:
      "Real Shopify store projects by Nawaz Builds: the problem, the rebuild and the results for each store.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Nawaz Builds",
    description: "How Nawaz Builds collects, uses and protects your information.",
  },
  "/terms-of-service": {
    title: "Terms of Service | Nawaz Builds",
    description: "The terms that apply when you use Nawaz Builds services and this website.",
  },
  "/refund-policy": {
    title: "Refund Policy | Nawaz Builds",
    description: "The Nawaz Builds refund policy for store design and development services.",
  },
  "/services/custom-liquid-development": {
    title: "Custom Liquid Development Services | Nawaz Builds",
    description:
      "Custom Shopify Liquid development for the features and sections your theme cannot do, built directly into your store by Nawaz Builds.",
  },
  "/services/mobile-first-ux": {
    title: "Mobile First UX Design for Shopify Stores | Nawaz Builds",
    description:
      "Mobile first UX design for Shopify stores, built around how your customers actually shop on their phones.",
  },
  "/services/visual-storytelling": {
    title: "Visual Storytelling for Shopify Stores | Nawaz Builds",
    description:
      "Visual storytelling and product presentation design that helps Shopify stores explain value and sell more.",
  },
  "/services/app-api-sync": {
    title: "Shopify App and API Integration Services | Nawaz Builds",
    description:
      "Shopify app integrations and API sync work that keeps your store data moving between the tools you rely on.",
  },
  "/services/checkout-flow": {
    title: "Shopify Checkout Flow Optimization | Nawaz Builds",
    description:
      "Checkout flow optimization for Shopify stores: fewer drop offs between cart and payment, without breaking customer trust.",
  },
  "/services/shopify-maintenance-services": {
    title: "Shopify Maintenance Services for Growing Stores | NawazBuilds",
    description:
      "Ongoing Shopify maintenance services covering updates, backups, security checks, small fixes and a monthly health report, from the studio behind your store.",
  },
  "/services/shopify-store-audit": {
    title: "Shopify Store Audit: Find What Is Costing You Sales | NawazBuilds",
    description:
      "A Shopify store audit that checks speed, product pages, checkout, mobile UX, apps and SEO basics, then gives you a fix list ranked by impact on sales.",
  },
  "/services/shopify-migration-services": {
    title: "Shopify Migration Services: Move Without Losing Sales | NawazBuilds",
    description:
      "Shopify migration services for Magento and WooCommerce stores: data, design, redirects and SEO protection planned before the move, not after the damage.",
  },
  "/services/shopify-theme-customization-services": {
    title: "Shopify Theme Customization Services | NawazBuilds",
    description:
      "Shopify theme customization and theme development services: reshape your current theme or build a custom one, with editable sections and no app bloat.",
  },
  "/services/shopify-consulting-services": {
    title: "Shopify Consulting Services for Store Owners | NawazBuilds",
    description:
      "Independent Shopify consulting: rebuild, migration and Plus decisions reviewed with evidence, delivered as a ranked roadmap you can execute with any developer.",
  },
  "/services/shopify-speed-optimization-services": {
    title: "Shopify Speed Optimization Service | NawazBuilds",
    description:
      "Shopify speed optimization that fixes app bloat, leftover code and heavy media on your real pages, measured before and after in a written report.",
  },
  "/services/shopify-store-management-services": {
    title: "Shopify Store Management Services | NawazBuilds",
    description:
      "Shopify store management for daily operations: product uploads, content updates, promotions and campaign changes, with a monthly summary of all work done.",
  },
  "/services/shopify-development-services": {
    title: "Shopify Development Services | NawazBuilds",
    description:
      "Shopify development services for new and growing stores: custom themes, app integration, checkout work and migration, built by the developer you talk to.",
  },
  "/services/hire-shopify-developer": {
    title: "Hire a Shopify Developer | NawazBuilds",
    description:
      "Hire a Shopify developer and work directly with the person who writes your code. Theme work, custom features, fixes and honest advice, scoped in writing.",
  },
};

const toolSeo: Record<string, SeoEntry> = {
  "profit-margin-calculator": {
    title: "Shopify Profit Margin Calculator | Nawaz Builds",
    description:
      "Calculate net profit, margin and ROI for your Shopify products with this free profit margin calculator.",
  },
  "legal-policy-generator": {
    title: "Shopify Legal Policy Generator | Nawaz Builds",
    description:
      "Generate privacy, refund and terms policies for your Shopify store with this free legal policy generator.",
  },
  "shopify-theme-detector": {
    title: "Shopify Theme Detector | Nawaz Builds",
    description: "Detect which Shopify theme a store is using. Free and instant.",
  },
  "business-name-generator": {
    title: "Shopify Business Name Generator | Nawaz Builds",
    description:
      "Generate brandable business name ideas for your Shopify store with this free name generator.",
  },
};

// Old or short tool URLs point at the canonical tool page.
const toolCanonical: Record<string, string> = {
  calculator: "profit-margin-calculator",
  policy: "legal-policy-generator",
  detector: "shopify-theme-detector",
  generator: "business-name-generator",
  "theme-detector": "shopify-theme-detector",
};

const notFoundSeo: SeoEntry = {
  title: "Page Not Found | Nawaz Builds",
  description: "The page you are looking for does not exist.",
  noindex: true,
};

function pageName(title: string): string {
  return title.split("|")[0].trim();
}

function breadcrumbSchema(items: { name: string; path: string }[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE}${item.path}`,
    })),
  };
}

function toIsoDate(dateStr: string): string | undefined {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return undefined;
  return d.toISOString().slice(0, 10);
}

function firstParagraphText(html: string): string {
  const match = html.match(/<p>([\s\S]*?)<\/p>/);
  if (!match) return "";
  const text = match[1]
    .replace(/<[^>]*>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
  if (text.length <= 160) return text;
  return text.slice(0, 157).replace(/\s+\S*$/, "") + "...";
}

function resolveSeo(pathname: string): SeoEntry {
  if (staticSeo[pathname]) {
    const entry = staticSeo[pathname];
    if (pathname === "/" || pathname === "/funnel/step1" || entry.noindex) return entry;
    const name = pageName(entry.title);
    if (pathname.startsWith("/services/")) {
      return {
        ...entry,
        schema: [
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name,
            description: entry.description,
            url: `${SITE}${pathname}`,
            provider: { "@type": "Organization", name: "Nawaz Builds", url: SITE },
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name, path: pathname },
          ]),
        ],
      };
    }
    return {
      ...entry,
      schema: breadcrumbSchema([
        { name: "Home", path: "/" },
        { name, path: pathname },
      ]),
    };
  }

  if (pathname.startsWith("/blog/")) {
    const id = pathname.slice("/blog/".length);
    const post = blogPosts.find((p) => p.id === id);
    if (!post) return notFoundSeo;
    const description = firstParagraphText(post.content) || HOME_DESCRIPTION;
    const image = post.image ? `${SITE}${post.image}` : DEFAULT_IMAGE;
    const published = toIsoDate(post.date);
    return {
      title: `${post.title} | Nawaz Builds`,
      description,
      image,
      type: "article",
      schema: {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description,
        image: [image],
        author: { "@type": "Person", name: post.author, url: SITE },
        publisher: { "@type": "Organization", name: "Nawaz Builds", url: SITE },
        mainEntityOfPage: `${SITE}${pathname}`,
        ...(published ? { datePublished: published } : {}),
      },
    };
  }

  if (pathname.startsWith("/case-studies/")) {
    const id = pathname.slice("/case-studies/".length);
    const project = caseStudies.find((p) => p.id === id);
    if (!project) return notFoundSeo;
    return {
      title: `${project.title} Case Study | Nawaz Builds`,
      description: project.subtitle || staticSeo["/case-studies"].description,
      image: project.image ? `${SITE}${project.image}` : DEFAULT_IMAGE,
      schema: breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Case Studies", path: "/case-studies" },
        { name: project.title, path: pathname },
      ]),
    };
  }

  if (pathname.startsWith("/tools/")) {
    const slug = pathname.slice("/tools/".length);
    if (toolSeo[slug]) {
      const entry = toolSeo[slug];
      return {
        ...entry,
        schema: breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Tools", path: "/tools" },
          { name: pageName(entry.title), path: pathname },
        ]),
      };
    }
    const canonicalSlug = toolCanonical[slug];
    if (canonicalSlug) {
      return { ...toolSeo[canonicalSlug], canonicalPath: `/tools/${canonicalSlug}` };
    }
    // Legacy ?tool= style pages are served from /tools itself.
    return staticSeo["/tools"];
  }

  return notFoundSeo;
}

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setJsonLd(schema?: SeoEntry["schema"]) {
  let tag = document.getElementById("seo-jsonld") as HTMLScriptElement | null;
  if (!schema) {
    if (tag) tag.remove();
    return;
  }
  if (!tag) {
    tag = document.createElement("script");
    tag.type = "application/ld+json";
    tag.id = "seo-jsonld";
    document.head.appendChild(tag);
  }
  tag.textContent = JSON.stringify(schema);
}

function applySeo(pathname: string, entry: SeoEntry) {
  const canonicalPath = entry.canonicalPath || pathname;
  const url = `${SITE}${canonicalPath}`;
  const image = entry.image || DEFAULT_IMAGE;

  document.title = entry.title;
  setMeta("name", "description", entry.description);
  setMeta("name", "robots", entry.noindex ? "noindex, nofollow" : "index, follow");

  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", url);

  setMeta("property", "og:type", entry.type || "website");
  setMeta("property", "og:url", url);
  setMeta("property", "og:title", entry.title);
  setMeta("property", "og:description", entry.description);
  setMeta("property", "og:image", image);
  setMeta("name", "twitter:card", "summary_large_image");
  setMeta("name", "twitter:title", entry.title);
  setMeta("name", "twitter:description", entry.description);
  setMeta("name", "twitter:image", image);

  setJsonLd(entry.schema);
}

const SeoManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    applySeo(pathname, resolveSeo(pathname));
  }, [pathname]);

  return null;
};

export default SeoManager;

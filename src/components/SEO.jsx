import { Helmet } from "react-helmet-async";

const SITE = "Genius Books";
const BASE_URL = "https://geniusbooks.in";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;

/**
 * Drop-in per-page SEO head manager.
 * title     — short page title, appended with " | Genius Books"
 * description — 140–160 char meta description
 * canonical   — URL path e.g. "/series"  (base URL prepended automatically)
 * noindex     — true for auth/utility pages (login, register)
 * ogImage     — absolute URL override for og:image
 * breadcrumbs — array of { name, path } for BreadcrumbList schema
 */
export default function SEO({
  title,
  description,
  canonical,
  noindex = false,
  ogImage = DEFAULT_OG_IMAGE,
  breadcrumbs,
}) {
  const fullTitle = title ? `${title} | ${SITE}` : `${SITE} | School Textbook Publisher Chennai`;
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : null;

  const breadcrumbSchema = breadcrumbs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
          ...breadcrumbs.map((crumb, i) => ({
            "@type": "ListItem",
            position: i + 2,
            name: crumb.name,
            item: `${BASE_URL}${crumb.path}`,
          })),
        ],
      }
    : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={fullTitle} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

      {/* Twitter Card */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Breadcrumb structured data */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
}

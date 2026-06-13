import { MetadataRoute } from "next"

// Only the real production deployment should be indexable. Preview / staging
// deployments (vercel.app URLs and any non-production environment) are blocked
// from indexing to avoid duplicate-content issues.
const isProduction = process.env.VERCEL_ENV === "production"

export default function robots(): MetadataRoute.Robots {
  if (!isProduction) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    }
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"],
    },
    sitemap: "https://alfacall.net/sitemap.xml",
  }
}

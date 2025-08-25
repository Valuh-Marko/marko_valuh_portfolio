import React from "react";
import { Helmet } from "react-helmet-async";

const DEFAULT_TITLE = "Marko Valuh | Frontend Developer";
const DEFAULT_DESCRIPTION =
  "I bring solid frontend engineering skills and a sharp eye for UI/UX to craft seamless digital experiences.";
const DEFAULT_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "https://marko-valuh.com/",
  name: "Marko Valuh",
  description: DEFAULT_DESCRIPTION,
};

export default function SEO({ title, description, jsonLd }) {
  return (
    <Helmet>
      <title>{title || DEFAULT_TITLE}</title>
      <meta name="description" content={description || DEFAULT_DESCRIPTION} />
      <link rel="canonical" href={window.location.href} />
      <script type="application/ld+json">
        {JSON.stringify(jsonLd || DEFAULT_JSONLD)}
      </script>
    </Helmet>
  );
}

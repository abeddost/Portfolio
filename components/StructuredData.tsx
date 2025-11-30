export default function StructuredData() {
  const baseUrl = 'https://abdulqaderdost.vercel.app'; // Update with your actual domain

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Abdul Qader Dost",
    "jobTitle": "Fullstack Developer",
    "description": "Fullstack Developer specializing in AI, Machine Learning, and modern web applications",
    "url": baseUrl,
    "sameAs": [
      "https://github.com/abeddost",
      "https://linkedin.com/in/abdulqaderdost",
      "https://instagram.com/abeddostt"
    ],
    "email": "abdulqaderdost@yahoo.com",
    "knowsAbout": [
      "Full Stack Development",
      "Artificial Intelligence",
      "Machine Learning",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Python",
      "TensorFlow",
      "PyTorch"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "MIT Emerging Talent Program"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Abdul Qader Dost Portfolio",
    "url": baseUrl,
    "description": "Portfolio website showcasing projects, skills, and experience as a Fullstack Developer and AI Engineer",
    "author": {
      "@type": "Person",
      "name": "Abdul Qader Dost"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": `${baseUrl}/#about`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Projects",
        "item": `${baseUrl}/#projects`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Portfolio",
        "item": `${baseUrl}/#portfolio`
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Contact",
        "item": `${baseUrl}/#contact`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}


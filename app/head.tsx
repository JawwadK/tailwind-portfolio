export default function Head() {
  return (
    <>
      <title>Jawwad Khan | Portfolio</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Jawwad Khan - Portfolio Website" />
      <meta
        name="keywords"
        content="jawwad, khan, jawwadkhan, software engineer, developer, engineer, programmer, toronto, ontario, software developer, full-stack developer, web developer, portfolio, projects, skills "
      />
      <meta name="author" content="Jawwad Khan" />
      {/* Open Graph meta tags */}
      <meta
        property="og:title"
        content="Jawwad Khan - Software Developer Portfolio"
      />
      <meta
        property="og:description"
        content="Jawwad Khan - Full-stack Software Developer Portfolio showcasing my projects and skills."
      />
      <meta
        property="og:image"
        content="https://jawwadkhan.ca/your-image.jpg"
      />
      <meta property="og:url" content="https://example.com/portfolio" />
      <meta property="og:type" content="website" />

      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:title"
        content="Jawwad Khan - Software Developer Portfolio"
      />
      <meta
        name="twitter:description"
        content="Jawwad Khan - Full-stack Software Developer Portfolio showcasing my projects and skills."
      />
      <meta name="twitter:image" content="https://example.com/your-image.jpg" />

      {/* Other meta tags */}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://example.com/portfolio" />
      {/* Favicon */}
      <link rel="shortcut icon" href="/favicon/favicon.ico" sizes="any" />

    </>
  );
}

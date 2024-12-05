export default function Head() {
  return (
    <>
      <title>Jawwad Khan | Software Engineer & Data Scientist</title>
      <meta
        content="width=device-width, initial-scale=1, maximum-scale=5"
        name="viewport"
      />
      <meta
        name="description"
        content="Toronto-based Software Engineer and Data Scientist specializing in web development, cloud architecture, and data analytics. View my projects and experience."
      />
      <meta
        name="keywords"
        content="jawwad khan, software engineer, data scientist, web developer, toronto tech, python developer, react developer, azure cloud, software development, data analytics, full-stack developer"
      />
      <meta name="author" content="Jawwad Khan" />

      {/* Open Graph meta tags */}
      <meta
        property="og:title"
        content="Jawwad Khan | Software Engineer & Data Scientist"
      />
      <meta
        property="og:description"
        content="Toronto-based Software Engineer and Data Scientist showcasing projects and experience in web development, cloud architecture, and data analytics."
      />
      <meta property="og:image" content="/Headshot.jpg" />
      <meta property="og:url" content="https://jawwadkhan.ca" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Jawwad Khan Portfolio" />

      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Jawwad Khan | Software Engineer & Data Scientist"
      />
      <meta
        name="twitter:description"
        content="Toronto-based Software Engineer and Data Scientist showcasing projects and experience in web development, cloud architecture, and data analytics."
      />
      <meta name="twitter:image" content="/Headshot.jpg" />

      {/* Other meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="theme-color" content="#0891b2" />
      <link rel="canonical" href="https://jawwadkhan.ca" />

      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
    </>
  );
}

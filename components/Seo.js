const Seo = ({ title, description, canonical }) => {
  const jsonLd = {
    '@context': `https://schema.org/`,
    '@type': type,
    url: canonical,
    image: shareImage
      ? {
          '@type': `ImageObject`,
          url: shareImage,
          width: 1000,
          height: 523
        }
      : undefined,
    publisher: {
      '@type': `Organization`,
      name: settings.title,
      logo: {
        '@type': `ImageObject`,
        url: publisherLogo,
        width: 60,
        height: 60
      }
    },
    mainEntityOfPage: {
      '@type': `WebPage`,
      '@id': `https://koalafyhq.com`
    },
    description
  }
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
        <link rel='canonical' href={canonical} />
        <meta property='og:site_name' content={settings.title} />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:url' content={canonical} />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:url' content={canonical} />
        <script type='application/ld+json'>
          {JSON.stringify(jsonLd, undefined, 4)}
        </script>
      </Helmet>
      <ImageMeta image={shareImage} />
    </>
  )
}

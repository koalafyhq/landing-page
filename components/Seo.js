import Head from 'next/head'
import { defaultOgImage, baseURL } from '~/config'

const Seo = ({ title, description, type = 'Article', shareImage }) => {
  const canonical =
    typeof window !== 'undefined' ? window.location.pathname : ''
  const ogImage = shareImage || defaultOgImage
  const jsonLd = {
    '@context': `https://schema.org/`,
    '@type': type,
    url: canonical,
    image: {
      '@type': `ImageObject`,
      url: ogImage,
      width: 1000,
      height: 523
    },
    publisher: {
      '@type': `Organization`,
      name: title,
      logo: {
        '@type': `ImageObject`,
        url: ogImage,
        width: 60,
        height: 60
      }
    },
    mainEntityOfPage: {
      '@type': `WebPage`,
      '@id': baseURL
    },
    description
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <link rel='canonical' href={canonical} />
      <meta property='og:site_name' content={title} />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:url' content={canonical} />
      <meta property='og:image' content={defaultOgImage} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:url' content={canonical} />
      <script type='application/ld+json'>
        {JSON.stringify(jsonLd, undefined, 4)}
      </script>
    </Head>
  )
}

export default Seo

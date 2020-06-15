import Seo from '~/components/Seo'
import Paper from '~/components/Paper'

import { SectionCTA } from '~/pages/services'

export const MDXComponents = {
  wrapper: ({ children, frontMatter, ...props }) => {
    const { title, description, layout } = frontMatter

    const seoTitle =
      layout === 'service'
        ? `${title} service | Koalafy`
        : `${title} | Koalafy blog`

    return (
      <MDXWrapper {...frontMatter} {...props}>
        <Seo title={seoTitle} description={description} />
        {children}
      </MDXWrapper>
    )
  },
  h1: ({ children, ...props }) => (
    <h1 {...props}>
      <style jsx>{`
        h1 {
          color: var(--color-primary);
          font-size: 2.4rem;
        }
      `}</style>
      {children}
    </h1>
  ),
  hr: ({ children, ...props }) => (
    <>
      <hr {...props} />
      <style jsx>{`
        hr {
          border: 0;
          border-bottom: 1px solid #bbb;
          margin-top: 20px;
          margin-bottom: 20px;
        }
      `}</style>
    </>
  ),
  a: ({ children, ...props }) => (
    <a {...props}>
      {children}
      <style jsx>{`
        a {
          text-decoration: underline;
        }
      `}</style>
    </a>
  ),
  p: ({ children, ...props }) => (
    <p {...props}>
      {children}
      <style jsx>{`
        p {
          line-height: 1.8rem;
          margin-bottom: 1.3rem;
        }
      `}</style>
    </p>
  ),
  ul: ({ children, ...props }) => (
    <ul {...props}>
      {children}
      <style jsx>{`
        ul {
          margin-top: 1.5rem;
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
          line-height: 1.8rem;
        }
      `}</style>
    </ul>
  ),
  img: props => (
    <>
      <img {...props} />
      <style jsx>{`
        img {
          border: 2px solid var(--color-secondary);
          width: 100%;
          height: 100%;
        }
      `}</style>
    </>
  ),
  pre: ({ children, ...props }) => (
    <pre {...props}>
      {children}
      <style jsx>{`
        pre {
          margin-bottom: 1.5rem;
        }
      `}</style>
    </pre>
  ),
  li: ({ children, ...props }) => (
    <li {...props}>
      {children}
      <style jsx>
        {`
          li {
            padding-bottom: 5px;
          }
        `}
      </style>
    </li>
  )
}

export const MDXWrapper = ({ children, ...props }) => (
  <article>
    <section>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </section>
    <Paper>{children}</Paper>
    <div className='_service-cta'>
      <SectionCTA />
    </div>
    <style jsx>
      {`
        article {
          color: var(--color-white);
          background-color: var(--color-secondary);
          padding-bottom: 4rem;
          border-bottom: 1px solid var(--color-black);
          min-height: 100vh;
        }

        section {
          background-color: var(--color-secondary);
          max-width: 1020px;
          margin: auto;
          padding: 4rem 1rem;
        }

        h1 {
          color: var(--color-primary);
          font-size: 3rem;
          letter-spacing: -1.5px;
          margin-bottom: 1.3rem;
        }

        p {
          line-height: 1.6rem;
        }

        ._service-cta {
          padding-top: 3rem;
          border-top: 1px solid var(--color-black);
        }

        @media screen and (min-width: 640px) {
          h1 {
            font-size: 4rem;
            margin-bottom: 1rem;
          }

          section {
            padding: 4rem 0;
          }
        }
      `}
    </style>
  </article>
)

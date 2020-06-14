import Seo from '~/components/Seo'
import { SectionCTA } from '~/pages/services'

export const MDXComponents = {
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
    <Seo
      title={`${props.title} service | Koalafy`}
      description={props.description}
    />
    <section>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </section>
    <div className='_service-container'>{children}</div>
    <div className='_service-cta'>
      <SectionCTA />
    </div>
    <style jsx>
      {`
        article {
          color: var(--color-white);
          background-color: var(--color-secondary);
          font-size: 16px;
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

        ._service-container {
          color: var(--color-black);
          background-color: var(--color-white);
          padding: 2rem 1rem;
          max-width: 1020px;
          margin: auto;
          margin-bottom: 6rem;
          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 -10px 0 -5px #eee,
            0 -10px 1px -4px rgba(0, 0, 0, 0.15), 0 -20px 0 -10px #eee,
            0 -20px 1px -9px rgba(0, 0, 0, 0.15), 0 10px 0 -5px #eee,
            0 10px 1px -4px rgba(0, 0, 0, 0.15), 0 20px 0 -10px #eee,
            0 20px 1px -9px rgba(0, 0, 0, 0.15);
        }

        ._service-cta {
          padding-top: 3rem;
          border-top: 1px solid var(--color-black);
        }

        @media screen and (min-width: 640px) {
          article {
            font-size: 18px;
          }

          h1 {
            font-size: 4rem;
            margin-bottom: 1rem;
          }

          section {
            padding: 4rem 0;
          }

          ._service-container {
            padding: 4rem;
            padding-right: 8rem;
          }
        }
      `}
    </style>
  </article>
)

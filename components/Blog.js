import Link from 'next/link'

import Paper from '~/components/Paper'
import Seo from '~/components/Seo'

import { SectionCTA } from '~/pages/services'

const Header = ({ description }) => (
  <header>
    <h1>
      The views and news of{' '}
      <Link href='/about'>
        <a className='_brand'>Koalafy</a>
      </Link>
    </h1>
    <p>{description}</p>
    <hr />
    <style jsx>{`
      h1 {
        color: var(--color-secondary);
        font-size: 2.3rem;
        letter-spacing: -2.5px;
        margin-bottom: 1rem;
      }

      p {
        font-size: 1rem;
        line-height: 1.6rem;
      }

      hr {
        border: 0;
        border-bottom: 1px solid #bbb;
        margin-top: 40px;
      }

      ._brand {
        color: var(--color-primary);
        text-decoration: underline;
      }

      @media screen and (min-width: 640px) {
        h1 {
          font-size: 3rem;
        }

        p {
          font-size: 1.2rem;
        }
      }
    `}</style>
  </header>
)

export const IndexLayout = ({ children, icon, title, description }) => (
  <main>
    <Seo title={`${title} | Koalafy Blog`} description={description} />
    <img src={icon.src} alt={icon.alt} />
    <Paper>
      <Header description={description} />
      {children}
    </Paper>
    <SectionCTA />
    <style jsx>{`
      main {
        padding-top: 12.8rem;
        padding-bottom: 6rem;
        background-color: var(--color-secondary);
        min-height: 100vh;
        position: relative;
      }

      img {
        max-width: 100%;
        margin-top: 3rem;
        width: 350px;
        top: -5%;
        left: 0;
        position: absolute;
      }

      ._with-underline {
        text-decoration: underline;
      }

      @media screen and (min-width: 640px) {
        img {
          left: 25%;
        }
      }
    `}</style>
  </main>
)

export const PostList = ({ href, title, excerpt }) => (
  <article>
    <Link href={href}>
      <a>
        <h2>{title}</h2>
      </a>
    </Link>
    <p>{excerpt}</p>
    <style jsx>
      {`
        h2 {
          padding-right: 4rem;
          letter-spacing: -1.3px;
          font-size: 1.8rem;
          line-height: 2rem;
          margin-bottom: 0.8rem;
        }

        a {
          color: var(--color-secondary);
        }

        a:hover,
        a:focus {
          color: var(--color-black);
          text-decoration: underline;
        }

        p {
          line-height: 1.6rem;
        }

        article {
          padding-top: 2rem;
          padding-bottom: 2rem;
        }
      `}
    </style>
  </article>
)

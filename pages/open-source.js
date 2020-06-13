import { HeroCenter } from '~/components/Hero'
import ButtonLink from '~/components/ButtonLink'
import Seo from '~/components/Seo'

const Section = ({
  title,
  description,
  isTitle = false,
  Content,
  isLast = false,
  isTop = false,
  isSecondLast = false
}) => (
  <section>
    <div
      className={`_container ${isTop ? '_container--has-border-top' : ''} ${
        isSecondLast ? '_container--has-padding-bottom' : ''
      } ${isLast ? '_container--has-border' : '_container--reduce-padding'}`}
    >
      <div className='o-container'>
        {isTitle ? (
          <>
            <h2>{title}</h2>
            <p>{description}</p>
          </>
        ) : (
          ''
        )}
        <Content />
      </div>
    </div>
    <style jsx>
      {`
        p {
          color: var(--color-white);
          font-size: 1rem;
          margin-bottom: 1rem;
        }

        ._container {
          background-color: var(--color-secondary);
          padding: 1rem;
          display: table;
          width: 100%;
        }

        ._container--has-border-top {
          border-top: 1px solid;
          padding-top: 4rem;
        }

        ._container--has-border {
          border-top: 1px solid;
          border-bottom: 1px solid;
        }

        ._container--has-padding-bottom {
          padding-bottom: 4rem;
        }

        @media screen and (min-width: 640px) {
          ._container {
            padding: 6rem 1rem;
          }

          ._container--reduce-padding {
            padding: 1rem;
          }

          ._container--has-border-top {
            padding-top: 6rem;
          }

          ._container--has-padding-bottom {
            padding-bottom: 6rem;
          }

          h2 {
            font-size: 3rem;
          }
        }
      `}
    </style>
  </section>
)

const SectionCTA = () => (
  <div className='__content'>
    <h2>Yes, we are hiring!</h2>
    <p>
      Join our distributed team, help us solving more problem, exploring more
      possibilities, and contribute more to the Open Source community.
    </p>
    <p>
      If you’re an ambitious, love to hack with cutting-edge technologies,
      interesting with Web Development, try us. Our typical stacks is C, Go,
      Rust, Reason and Elixir. If it sound interesting to you, go come here.
    </p>
    <ButtonLink
      style={{ padding: '15px 30px' }}
      pilled={false}
      href='mailto:hi@koalafyhq.com'
    >
      PING US
    </ButtonLink>
    <style jsx>
      {`
        p {
          color: var(--color-white);
          font-size: 1.1rem;
          margin-bottom: 2rem;
          line-height: 1.8rem;
        }

        h2 {
          font-size: 2.5rem;
          color: var(--color-primary);
          margin-bottom: 0.5rem;
        }

        .__content {
          margin: auto;
          text-align: center;
          padding: 4rem 0;
        }

        @media screen and (min-width: 640px) {
          h2 {
            font-size: 3rem;
          }

          .__content {
            width: 60%;
          }
        }
      `}
    </style>
  </div>
)

const IndexPage = () => (
  <main>
    <Seo
      title='Open Source at Koalafy'
      description='Koalafy rely on open source software and it’s at the heart of all we do — and we like to give back to the community.'
    />

    <HeroCenter
      title='Open Source'
      description='Koalafy rely on open source software and it’s at the heart of all we do —
      and we like to give back to the community.'
      extraDescription='Here’s more what &amp; why we commit into Open Source'
    />

    <Section
      Content={() => (
        <>
          <div className='_container'>
            <p>
              As a digital agency (specialized in Web Development), we’d love to
              help our clients to turn their ideas into reality, especially for
              those who have zero/less knowledge & skill related with web
              development.
            </p>
            <p>
              And we’re here not only care with our growth & success, but
              everyone.
            </p>
            <p>
              Using Open Source as our idelogy, commiting on it, and giving back
              to the Open Source community, are our effort to achieve what we
              care: Growth & success for everyone, especially to people where
              are we coming from: Indonesia.
            </p>
            <p>And here is why we use Open Source way.</p>
          </div>
        </>
      )}
      isTop={true}
    />

    <Section
      Content={() => (
        <>
          <div className='_container'>
            <h2>The Not-Invented-Here</h2>
            <p>
              According to Wikipedia,{' '}
              <i>
                In programming, it is also common to refer to the "NIH syndrome"
                as the tendency towards reinventing the wheel (reimplementing
                something that is already available) based on the belief that
                in-house developments are inherently better suited, more secure,
                more controlled, quicker to develop, and incur lower overall
                cost (including maintenance cost) than using existing
                implementations
              </i>
            </p>
            <p>
              To avoid that “NIH syndrome” we’d love to choose a stable,
              battle-tested existing Open Source technologies to solve our own
              problems, and probably yours too. One of the beauty of Open Source
              project is, we can build a better technologies. together.
            </p>
            <p>Collaboratively.</p>
            <p>
              So we can focus on solving the real problem, helping discover more
              bugs, propose new feature. etc.
            </p>
          </div>
        </>
      )}
    />

    <Section
      Content={() => (
        <>
          <div className='_container'>
            <h2>Helping people to use it</h2>
            <p>
              It’s quite strange that we’re (as an agency) not only want people
              come to us just to help turn their ideas into reality, but to help
              how they can turn it by themselves too.
            </p>
            <p>
              We loved to share what we’ve learn, problem we’ve (aimed to be)
              solved, and sharing our insight what we’ve got.
            </p>
            <p>
              An another beauty of Open Source is everyone can read; Learn, and
              contribute to the code. We are pleasantly share the way we build a
              website/webapp, solving the problem. building a solution,
              anything.
            </p>
            <p>
              And we’ll share it to the public domain, where everyone can read;
              learn, share, or develop, freely with very permissive license.
            </p>
          </div>
        </>
      )}
    />

    <Section
      Content={() => (
        <>
          <div className='_container'>
            <h2>Now, let’s develop, together</h2>
            <p>
              ...by building something new on top of it (or compliant) based on
              our own need & problem.
            </p>
            <p>
              Like, you know, you can build a great product with existing
              technologies without building an another framework. rolling your
              own database, your own programming language, etc if possible.
            </p>
            <p>And when it’s not, just continune read.</p>
          </div>
        </>
      )}
    />

    <Section
      Content={() => (
        <>
          <div className='_container'>
            <h2>Bleeding-edge is welcome here</h2>
            <p>
              Because we’d love taking a risk, exploring something new, and
              touching the untouchable.
            </p>
            <p>
              We (also) do some R&D to contribute to the Open Source
              community—especially in Indonesia—to make the world little better,
              and placing Indonesia as our first-class citizen.
            </p>
          </div>
        </>
      )}
      isSecondLast={true}
    />

    <Section Content={() => <SectionCTA />} isLast={true} />
    <style jsx>{`
      p {
        font-size: 1.1rem;
        color: var(--color-white);
        margin-bottom: 2rem;
        line-height: 1.8rem;
      }

      ._container {
        margin: 0 auto;
      }

      h2 {
        font-size: 2.5rem;
        color: var(--color-primary);
        margin-bottom: 0.5rem;
      }

      @media screen and (min-width: 640px) {
        h2 {
          font-size: 3rem;
        }

        ._container {
          width: 50%;
        }
      }
    `}</style>
  </main>
)

export default IndexPage

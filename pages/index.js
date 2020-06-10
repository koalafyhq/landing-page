import Link from 'next/link'

import Hero from '~/components/Hero'
import Section from '~/components/Section'
import ButtonLink from '~/components/ButtonLink'
import Seo from '~/components/Seo'

const SectionOne = ({ isImage }) => (
  <>
    {isImage ? (
      <img
        src='/static/img/pluto-bad-gateway.png'
        alt='Slow website is slow & boring'
      />
    ) : (
      <>
        <h3>Slow website is slow & boring</h3>
        <p>Users hate waiting</p>
        <p>
          Either your "backend" is generating the page for you, fetching the
          dynamic data, or anything else: the users are always there waiting
          when it will be done, until they’re not.
        </p>
        <p>
          Check out why this is bad and yes we can fix this by click button
          below
        </p>
        <ButtonLink pilled={true} href='/services/jamstack'>
          Learn More
        </ButtonLink>
      </>
    )}
  </>
)

const SectionTwo = () => (
  <>
    <h3>Security is essential</h3>
    <p>
      You don’t want your site is hacked just because there are security holes
      or outdated plugins installed in your system
    </p>
    <p>
      <Link href='/services/security'>
        <a className='u-underline'>Learn more</a>
      </Link>
      &nbsp;how we can make sure your website is secure
    </p>
  </>
)

const SectionThree = ({ isImage }) => (
  <>
    {isImage ? (
      <img
        src='/static/img/information-security.png'
        alt='Modern problem needs modern solution'
      />
    ) : (
      <>
        <h3>Modern problem needs modern solution</h3>
        <p>
          We work with cutting-edge, modern, and reliable technologies to solves
          modern & contextual problem.
        </p>

        <p>
          We believe good business is not only about good design, but also good
          developer experience.
        </p>
      </>
    )}
  </>
)

const SectionFour = () => (
  <div>
    <h2>Partnering with best in class Frontend Engineers in town</h2>
    <p>
      Our main focus is building blazing fast website with good User Experience
      and Developer Experience. Since performance is part of User Experience,
      you got the point.
    </p>
    <ButtonLink pilled={false} href='/contact'>
      Tell us your project
    </ButtonLink>
    <style jsx>
      {`
        .o-sections.o-sections--has-white-bg {
          background-color: var(--color-secondary);
        }
        p {
          color: var(--color-white);
        }
      `}
    </style>
  </div>
)

const SectionFive = ({ isImage }) => (
  <>
    {isImage ? (
      <img
        src='/static/img/pluto-success.png'
        alt='Check out our services page'
      />
    ) : (
      <>
        <h3>
          Check out our{' '}
          <Link href='/services'>
            <a className='u-underline'>services page</a>
          </Link>
        </h3>
        <p>Learn more what we do & don’t, in case you need to.</p>
        <p>
          There is{' '}
          <Link href='/about'>
            <a className='u-underline'>About page</a>
          </Link>{' '}
          to learn more who we are, how we work and principles we have.
        </p>
        <p>
          We also write{' '}
          <Link href='/blog'>
            <a className='u-underline'>blog posts</a>
          </Link>
          , to share insights; Tips & tricks, and what we’ve learned in order to
          make website faster, better, and more fun.
        </p>
      </>
    )}
    <style jsx>
      {`
        @media screen and (min-width: 640px) {
          img {
            margin-top: -7rem;
          }
        }
      `}
    </style>
  </>
)

const SectionSix = () => (
  <div>
    <h3>You’ve reached here, now what?</h3>
    <p>
      We try our best, from architecting IA; choosing honest & friendly
      copywriting, until to make this website as fast as we’ve promised earlier.
    </p>
    <p>
      Deliberate to not mention that we are also good in SEO since SEO is the
      essential aspect for digital business after security.
    </p>
    <ButtonLink pilled={true} href='/contact'>
      Work with us
    </ButtonLink>
  </div>
)

const IndexPage = () => {
  return (
    <main>
      <Seo
        title='JAMStack done right'
        description='build blazing fast & secure website to leveraging your business and digital transformation'
        canonical='/'
      />

      <Hero
        title='JAMStack done right'
        description='build blazing fast & secure website to leveraging your business
        and digital transformation'
        ctaButtonTitle='Work with us'
        ctaButtonLink='/contact'
      />

      <Section
        isImageInLeft={true}
        Left={() => <SectionOne isImage={true} />}
        Right={() => <SectionOne />}
      />

      <Section isCenter={true}>
        <SectionTwo />
      </Section>

      <Section
        isImageInLeft={false}
        Right={() => <SectionThree isImage={true} />}
        Left={() => <SectionThree />}
      ></Section>

      <Section
        isCenter={true}
        style={{ backgroundColor: 'var(--color-secondary)' }}
      >
        <SectionFour />
      </Section>

      <Section
        style={{ marginBottom: '-14px' }}
        isImageInLeft={true}
        Left={() => <SectionFive isImage={true} />}
        Right={() => <SectionFive />}
      />

      <svg
        viewBox='0 0 1440 68'
        enableBackground='new 0 0 1440 68'
        style={{ marginTop: '-55px' }}
      >
        <path
          d='m1622.3 1937.7c0 0-410.7 169.1-913.4 75.5-502.7-93.6-977.7 56.3-977.7 56.3v440h1891.1v-571.8'
          fill='#FFFFFF'
          transform='translate(0-1977)'
        ></path>
      </svg>

      <Section isCenter={true}>
        <SectionSix />
      </Section>
    </main>
  )
}

export default IndexPage

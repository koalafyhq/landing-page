import Link from 'next/link'

import Hero from '~/components/Hero'
import Section from '~/components/Section'
import ButtonLink from '~/components/ButtonLink'

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

const IndexPage = () => {
  return (
    <main>
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
    </main>
  )
}

export default IndexPage

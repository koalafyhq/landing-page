import { HeroCenter } from '~/components/Hero'
import Card from '~/components/Card'
import ButtonLink from '~/components/ButtonLink'
import Seo from '~/components/Seo'

const services = [
  {
    title: 'JAMStack Website',
    description:
      'Suitable for company profile, marketing page, microsite, blog, and anything that have no frequent minor changes',
    image: '/static/img/rec-orange.png'
  },
  {
    title: 'Progressive Web App',
    description:
      'PWA is a techniques & patterns, but become the best selling point for non-techy person. PWA is suitable for your mobile web app that need much user interaction',
    image: '/static/img/rec-blue.png'
  },
  {
    title: 'Single Page App',
    description:
      'Suitable for back-office app like internal dashboard. If you need an application used to administer operations that are not related to any direct sales effort, SPA is for you.',
    image: '/static/img/rec-tosca.png'
  }
]

const projectExist = [
  {
    title: 'Premium Support',
    description:
      'Need help with your existing project? Wonder why your website is slow? Your conversion rate is low? Or anyting? We got you.',
    image: '/static/img/rec-purple.png'
  },
  {
    title: 'Dedicated Hosting',
    description:
      'This is our exclusive service to empower JAMStack ecosystem. Enjoy the art of JAMStack by using our Dedicated Hosting service.',
    image: '/static/img/rec-lime.png'
  },
  {
    title: 'Custom Needs',
    description:
      'Need us to solve your own problem? We can help. Let’s talk, tell your problem.',
    image: '/static/img/rec-red.png'
  }
]

const CardService = () =>
  services.map((service, index) => (
    <Card
      key={index}
      title={service.title}
      description={service.description}
      image={service.image}
    />
  ))

const CardProject = () =>
  projectExist.map((content, index) => (
    <Card
      key={index}
      title={content.title}
      description={content.description}
      image={content.image}
    />
  ))

const SectionCTA = () => (
  <div className='__content'>
    <h2>Let’s do business together</h2>
    <p>We are happy to help your business to deliver fast & secure website</p>
    <ButtonLink pilled={false} href='/contact'>
      Contact us
    </ButtonLink>
    <style jsx>
      {`
        p {
          color: var(--color-white);
          font-size: 1rem;
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
        }
      `}
    </style>
  </div>
)

const Section = ({
  title,
  description,
  isTitle = false,
  Content,
  isLast = false
}) => (
  <section>
    <div className={`_container ${isLast ? '_container--has-border' : ''}`}>
      <div className='o-container'>
        {isTitle ? (
          <div className='_section-title'>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        ) : (
          ''
        )}
        <Content />
      </div>
    </div>
    <style jsx>
      {`
        h2 {
          color: white;
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }

        p {
          color: var(--color-white);
          font-size: 1rem;
          margin-bottom: 1rem;
        }

        ._container {
          background-color: var(--color-secondary);
          padding: 3rem 1rem;
          display: table;
          width: 100%;
        }

        ._container--has-border {
          border-top: 1px solid;
          border-bottom: 1px solid;
        }

        ._section-title {
          padding: 0 2rem;
        }

        @media screen and (min-width: 640px) {
          ._container {
            padding: 6rem 1rem;
          }

          h2 {
            font-size: 3rem;
          }
        }
      `}
    </style>
  </section>
)

const IndexPage = () => {
  return (
    <main>
      <Seo
        title='Our best offers'
        description="Let's make your business better than before, learn more which website that fit with your own need"
      />

      <HeroCenter
        title='Our best offers'
        description="Let's make your business better than before, learn more which website that fit with your own need"
      />

      <Section Content={() => <CardService />} />

      <Section
        isTitle={true}
        title='Have an existing project?'
        description='We’ve got you covered.'
        Content={() => <CardProject />}
      />

      <Section Content={() => <SectionCTA />} isLast={true} />
    </main>
  )
}

export default IndexPage

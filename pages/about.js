import Link from 'next/link'

import { HeroWithHighlight } from '~/components/Hero'
import Seo from '~/components/Seo'

const story = [
  {
    title: 'We love the web',
    description:
      'It all begins here, while we visit our favorite website. Like the rest of us, we surely have our own favorite website that we’re never get bored to visit everyday.',
    image: '/static/img/lime-order-complete.png'
  },
  {
    title: 'We all hate slow website',
    description:
      'Your website are powered by great front-end frameworks, using Virtual DOM to do reconciliation, CSS-in-JS, state manager, whatever. Who cares? Yes, its increase Developer Experience but its add more overhead to the end-user.',
    image: '/static/img/lime-waiting.png'
  },
  {
    title: 'So we do advocating™',
    description:
      'We learn & share on how to build a website with performance in mind.  We are diving deeper into web fundamentals, advanced (developer) tooling, how internet & browsers work, and so on. In aim to help other web developers in building fast & modern website.',
    image: '/static/img/lime-searching.png'
  },
  {
    title: 'And then we realize',
    description:
      'Not all websites are created with performance in mind. Sometimes “they” only focus on SEO, or “done is better than anything”. They forgot that the “end-consumer” of the web is the user, not Search Engine nor stakeholders — But not us.',
    image: '/static/img/lime-list-is-empty.png'
  },
  {
    title: 'So here we are!',
    description:
      "We are passionate in building fast & secure website to make website accessible to everyone, in any browsers; any network condition, without borders. We know how SEO works, we know how to leveraging Developer Experience without killing the User Experience, and we use modern technologies. You've got the point. Advocating is not enough, we need to do a direct action.",
    image: '/static/img/lime-sign-in.png'
  }
]

const Section = ({
  title,
  image,
  description,
  isEven = false,
  isLast = false
}) => (
  <div>
    <img src={image} alt={title} width={500} />
    <h3>{title}</h3>
    <p>{description}</p>
    {!isLast && (
      <svg
        width='60'
        height='100'
        viewBox='0 0 61 109'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d={
            isEven
              ? 'M28.2736 1.04545C28.2736 1.04545 40.1861 28.2702 26.6889 58.2725C13.1917 88.2747 41.6852 105.404 41.6852 105.404'
              : 'M32.5281 1.04545C32.5281 1.04545 20.6156 28.2702 34.1128 58.2725C47.6101 88.2747 19.1165 105.404 19.1165 105.404'
          }
          stroke='#7B7B7B'
        />
      </svg>
    )}
    <style jsx>{`
      div {
        text-align: center;
        width: 100%;
        margin: 3rem auto;
        padding: 1rem;
      }

      h3 {
        color: var(--color-primary);
        letter-spacing: -1px;
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
      }

      p {
        line-height: 1.8rem;
        font-size: 1.2rem;
        margin-bottom: 5rem;
      }

      @media screen and (min-width: 640px) {
        div {
          width: 40%;
        }

        h3 {
          font-size: 3rem;
        }

        p {
          font-size: 1.2rem;
        }
      }
    `}</style>
  </div>
)

const IndexPage = () => (
  <main>
    <Seo
      title='About Koalafy'
      description='Make a web faster & safer — We are passionate in building fast & secure website to make website accessible to everyone. Keep scrolling to read our story.'
    />

    <HeroWithHighlight
      title='Make a web '
      highlight='faster & safer'
      description='We are passionate in building fast & secure website to make website accessible to everyone. Keep scrolling to read our story.'
      image='/static/img/pluto-come-back-later.png'
      isHighlight
    />

    {story.map((content, index) => (
      <Section
        key={index}
        title={content.title}
        description={content.description}
        image={content.image}
        isEven={index % 2 === 0}
        isLast={index + 1 === story.length}
      />
    ))}

    <svg
      viewBox='0 0 1440 101'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{ marginTop: '4rem', marginBottom: '-20px' }}
    >
      <path
        d='M0 100.5H1440V14.2636C1440 14.2636 1332.5 -11.1917 1275 14.2636C1217.5 39.7188 948.5 57.2454 821.5 14.2636C694.5 -28.7183 508.5 41.8053 368 14.2636C227.5 -13.2782 0 14.2636 0 14.2636V100.5Z'
        fill='#F9F9F9'
      />
    </svg>

    <div className='_container'>
      <div className='o-container'>
        <h3>And yes, security is essential.</h3>
        <p>
          Hackers love Database and Server, we all know it. JAMStack will help
          to make your website more secure since it's all about static, no
          server & database runtime required.
        </p>
        <p>
          Also, by using our{' '}
          <Link href='/services/dedicated-hosting'>
            <a className='u-underline'>Dedicated Hosting</a>
          </Link>{' '}
          service, we can help to make your website much more secure, more
          reliable and fast.
        </p>
      </div>
    </div>
    <style jsx>{`
      ._container {
        background-color: #f9f9f9;
        padding: 6rem 1rem;
      }

      ._container h3 {
        margin-bottom: 1rem;
        letter-spacing: -1px;
        font-size: 3rem;
        color: var(--color-primary);
      }

      ._container p {
        width: 100%;
        font-size: 1.2rem;
        line-height: 1.8rem;
        margin-bottom: 2rem;
      }

      @media screen and (min-width: 640px) {
        ._container {
          padding: 6rem 4rem;
          padding-bottom: 8rem;
        }

        ._container p {
          width: 50%;
        }
      }
    `}</style>
  </main>
)

export default IndexPage

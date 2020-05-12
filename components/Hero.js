import ButtonLink from '~/components/ButtonLink'

const HeroBase = ({ children }) => (
  <div className='c-hero'>
    <div className='c-hero__content cf'>
      <div className='o-container'>{children}</div>
    </div>
    <style jsx global>{`
      .c-hero {
        display: table;
        width: 100%;
        background-color: var(--color-secondary);
        color: var(--color-white);
         text-align: center;
      }

      .c-hero__content {
        padding: 2rem 1rem;
        height: 600px;
        display: table-cell;
        vertical-align: middle;
        position: relative;
        overflow: hidden;
      }

      .c-hero h2 {
        color: var(--color-primary);
        font-size: 3rem;
        letter-spacing: -1.5px;
      }

      .c-hero--color-white h2 {
        color: var(--color-white);
      }

      .c-hero p {
        font-size: 1.3rem;
        margin-top: 1rem;
        line-height: 1.7rem;
      }

      @media screen and (min-width: 640px) {
        .c-hero h2 {
          font-size: 4rem;
        }
    `}</style>
  </div>
)

export const HeroCenter = ({ title, description }) => (
  <>
    <HeroBase>
      <div className='center'>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </HeroBase>
    <style jsx global>{`
      .c-hero__content {
        height: 350px;
      }

      .center {
        text-align: center;
        width: 100%;
        margin: auto;
      }

      @media screen and (min-width: 640px) {
        .center {
          width: 60%;
        }
      }
    `}</style>
  </>
)

export const HeroWithHighlight = ({
  title,
  description,
  highlight,
  background
}) => (
  <HeroBase>
    <div className='c-hero--color-white'>
      <h2>
        {title} <span className='highlight'>{highlight}</span>
      </h2>
      <p>{description}</p>
      <div className='o-image-container'>
        <img src='/static/img/pluto-come-back-later.png' />
      </div>
      <style jsx>{`
        .o-image-container {
          width: 100%;
          text-align: center;
          opacity: 0.6;
          position: absolute;
          left: 0;
          bottom: -8.75rem;
          pointer-events: none;
        }

        .o-image-container img {
          width: 35%;
        }

        .highlight {
          color: var(--color-primary);
        }

        p {
          width: 100%;
          margin: auto;
          margin-top: 1.5rem;
        }

        @media screen and (min-width: 640px) {
          p {
            width: 55%;
            margin-bottom: 15rem;
          }

          .highlight {
            color: var(--color-white);
            box-shadow: inset 0 -10px 0px var(--color-primary);
          }
        }
      `}</style>
    </div>
  </HeroBase>
)

export const HeroWithCTA = ({
  title,
  description,
  ctaButtonTitle,
  ctaButtonLink
}) => (
  <HeroBase>
    <div className='left'>
      <h2>{title}</h2>
      <p>{description}</p>
      <ButtonLink pilled={true} href={ctaButtonLink}>
        {ctaButtonTitle}
      </ButtonLink>
    </div>
    <div className='right'>
      <img
        src='/static/img/pluto-searching.png'
        alt='Blazing fast illustration'
      />
    </div>
    <style jsx>{`
      .left {
        float: left;
        width: 100%;
      }

      .right {
        float: left;
        width: 100%;
        display: none;
        text-align: center;
      }

      @media screen and (min-width: 640px) {
        .left {
          width: 60%;
          text-align: left;
        }

        .right {
          display: block;
          width: 40%;
        }
      }
    `}</style>
  </HeroBase>
)

export default HeroWithCTA

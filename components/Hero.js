import ButtonLink from '~/components/ButtonLink'

const Hero = ({ title, description, ctaButtonTitle, ctaButtonLink }) => (
  <div className='c-hero'>
    <div className='c-hero__content cf'>
      <div className='o-container'>
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
      </div>
    </div>
    <style jsx>{`
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
      }

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

      h2 {
        color: var(--color-primary);
        font-size: 3rem;
        letter-spacing: -1.5px;
      }

      p {
        font-size: 1.3rem;
        margin-top: 1rem;
        line-height: 1.7rem;
      }

      @media screen and (min-width: 640px) {
        .c-hero {
          text-align: left;
        }

        .left {
          width: 60%;
        }

        .right {
          display: block;
          width: 40%;
        }

        h2 {
          font-size: 4rem;
        }

        p {
          width: 70%;
        }
      }
    `}</style>
  </div>
)

export default Hero

const Section = ({ isImageInLeft = true, isCenter, children, Left, Right }) => (
  <section
    className={`o-sections ${isCenter ? 'o-sections--has-white-bg' : ''}`}
  >
    <div className='o-container o-section'>
      <div className='o-section__content'>
        {isCenter ? (
          <div className='o-section__center'>{children}</div>
        ) : (
          <>
            <div
              className={`o-section__left ${
                isImageInLeft ? '' : 'o-section__left--is-reversed'
              }`}
            >
              <Left />
            </div>
            <div
              className={`o-section__right ${
                isImageInLeft ? '' : 'o-section__right--is-reversed'
              }`}
            >
              <Right />
            </div>
          </>
        )}
      </div>
    </div>
    <style jsx global>{`
      .o-sections {
        background-color: var(--color-gray);
      }

      .o-sections--has-white-bg {
        background-color: var(--color-white);
      }

      .o-section {
        padding: 4rem 0;
        display: table;
        width: 100%;
      }

      .o-section h3 {
        margin-top: 2rem;
        font-size: 2.3rem;
        letter-spacing: -1.5px;
      }

      .o-section p {
        line-height: 1.8rem;
        margin-top: 1rem;
        font-size: 1.2rem;
      }

      .o-section__content {
        padding: 1rem;
        display: table-cell;
        vertical-align: middle;
        height: 400px;
      }

      .o-section__left,
      .o-section__right {
        float: left;
        width: 100%;
      }

      .o-section__left--is-reversed,
      .o-section__right--is-reversed {
        width: 100%;
        margin-top: 1rem;
      }

      .o-section__center {
        text-align: center;
        width: 100%;
        margin: auto;
      }

      @media screen and (min-width: 640px) {
        .o-section h3 {
          font-size: 2.8rem;
        }

        .o-section p {
          font-size: 1.3rem;
        }

        .o-section__left {
          width: 40%;
        }

        .o-section__center {
          width: 60%;
        }

        .o-section__right {
          width: 60%;
          padding-left: 3rem;
        }

        .o-section__left--is-reversed {
          width: 60%;
        }

        .o-section__right--is-reversed {
          margin-top: 0;
          width: 40%;
          text-align: center;
        }
      }
    `}</style>
  </section>
)

export default Section

import { HeroWithHighlight } from '~/components/Hero'

const IndexPage = () => (
  <main>
    <HeroWithHighlight
      title='Let’s work together'
      description='Launching a new project? Need help on an existing project? We’d love to talk.'
      image='/static/img/pluto-waiting.png'
    />

    <section>
      <div className='_container'>
        <div className='o-container'>
          <form>
            <div>
              <label>Name</label>
              <input />
            </div>
          </form>
        </div>
      </div>
      <style jsx>
        {`
          ._container {
            padding: 3rem 1rem;
            display: table;
            width: 100%;
          }
          @media screen and (min-width: 640px) {
            ._container {
              padding: 6rem 1rem;
            }
          }
        `}
      </style>
    </section>
  </main>
)

export default IndexPage

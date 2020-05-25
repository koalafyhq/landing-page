import { HeroWithHighlight } from '~/components/Hero'
import axios from 'axios'

const IndexPage = ({
  isLoading = false,
  submitted = false,
  name,
  companyName,
  email,
  referrer,
  message
}) => {
  const handleSubmit = event => {
    event.preventDefault()
    isLoading = true
    axios
      .post('https://koalafy-partner.fn.edgyfn.app', {
        name: name,
        company: companyName,
        email: email,
        referrer: referrer,
        madu: '',
        detail: message
      })
      .then(response => {
        console.log(response)
        isLoading = false
        submitted = true
      })
      .catch(function(error) {
        console.log(error)
      })
  }
  return (
    <main>
      <HeroWithHighlight
        title='Let’s work together'
        description='Launching a new project? Need help on an existing project? We’d love to talk.'
        image='/static/img/pluto-waiting.png'
      />

      <section>
        <div className='_container'>
          <div className='o-container'>
            {submitted ? (
              <div className='alert'>
                <strong>Thanks for being awesome!</strong> We have received your
                message and would like to thank you for writing to us. One of
                our colleagues will get back in touch with you soon!
              </div>
            ) : (
              ''
            )}
            <form onSubmit={handleSubmit}>
              <div className='left'>
                <label htmlFor='name'>Name</label>
                <input type='text' value={name} name='name' required />
              </div>
              <div className='right'>
                <label htmlFor='company-name'>Company Name</label>
                <input
                  type='text'
                  value={companyName}
                  name='companyName'
                  required
                />
              </div>
              <div className='left'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  pattern='^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$'
                  value={email}
                  name='email'
                  required
                />
              </div>
              <div className='right'>
                <label htmlFor='referrer'>How did you hear about us?</label>
                <select value={referrer} name='referrer' required>
                  <option value='Ads'>Ads</option>
                  <option value='Blog Post'>Blog Post</option>
                  <option value='Family'>Family</option>
                  <option value='Search Engine'>Search Engine</option>
                  <option value='LinkedIn'>LinkedIn</option>
                  <option value='Twitter'>Twitter</option>
                  <option value='Referral'>Referral</option>
                  <option value='Others'>Others</option>
                </select>
              </div>
              <div className='center'>
                <label htmlFor='message'>How can we help?</label>
                <textarea value={message} name='message' required></textarea>
              </div>
              <div style={{ display: 'none' }}>
                <label htmlFor='madu'>
                  If you're human, don't fill this
                  <input type='text' name='madu' id='madu' />
                </label>
              </div>
              <p>All fields are required to fill</p>
              <button type='submit'>
                {isLoading ? 'Loading...' : 'Submit'}
              </button>
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

            .left {
              float: left;
              width: 100%;
              margin-bottom: 2rem;
            }

            .right {
              float: right;
              width: 100%;
              margin-bottom: 2rem;
            }

            .center {
              width: 100%;
              margin-bottom: 0.5rem;
            }

            p {
              color: #666;
              font-size: 0.8rem;
            }

            label {
              display: block;
              margin-bottom: 10px;
            }

            input,
            textarea,
            select {
              border-color: #666;
              width: 100%;
              font-size: 1.2rem;
              box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
              border-style: inset;
              border-width: 2px;
              padding: 0.2rem;
              border-radius: 5px;
            }

            input {
              line-height: 2.5rem;
            }

            textarea {
              height: 130px;
            }

            select {
              height: 3.17rem;
            }

            button {
              float: right;
              padding: 13px 25px;
              color: white;
              font-weight: bold;
              background-color: var(--color-primary);
              border: 1px solid var(--color-primary);
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
              transition: 0.3s all;
              font-family: inherit;
              font-size: 1.3rem;
            }

            button:hover {
              cursor: pointer;
              transform: translate(0, -3px);
            }

            .alert {
              padding: 20px;
              background-color: #4caf50;
              color: white;
              margin-bottom: 1rem;
            }

            @media screen and (min-width: 640px) {
              ._container {
                padding: 6rem 1rem;
                width: 60%;
                margin: auto;
              }

              .right,
              .left {
                width: 48%;
                margin-right: 0.2rem;
              }
            }
          `}
        </style>
      </section>
    </main>
  )
}

export default IndexPage

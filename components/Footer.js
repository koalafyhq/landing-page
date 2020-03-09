import Link from 'next/link'
import ButtonLink from '~/components/ButtonLink'

const Footer = () => {
  const companyLinks = ['Home', 'About', 'Contact', 'Blog', 'Privacy']
  const services = [
    'JAMStack Website',
    'Progressive Web App',
    'Single Page Application',
    'Premium Support',
    'Dedicated Hosting'
  ]

  return (
    <footer>
      <div className='c-footer'>
        <div className='o-container'>
          <div className='c-footer__content'>
            <div className='left'>
              <img
                src='/static/img/logotype_light.png'
                width='160'
                alt='Koalafy Footer Logo'
              />
              <div className='c-description'>
                <p>
                  Jakarta HQ: Go Work — Plaza Indonesia, Level 5 Unit E021AB,
                  Jl. M.H. Thamrin No.Kav. 28-30, Daerah Khusus Ibukota Jakarta
                  10350
                </p>
                <p>
                  Bandung HQ: CO&CO — Jl. Dipati Ukur No.5, Lebakgede, Kecamatan
                  Coblong, Kota Bandung, Jawa Barat 40132
                </p>
              </div>
            </div>
            <div className='center'>
              <h3>Company</h3>
              <div className='c-links'>
                {companyLinks.map(companyLink => (
                  <Link href={companyLink.toLowerCase()} key={companyLink}>
                    <a>{companyLink}</a>
                  </Link>
                ))}
              </div>
            </div>
            <div className='right'>
              <h3>Services</h3>
              <div className='c-links'>
                {services.map(service => (
                  <Link
                    href={service.replace(/\s+/g, '-').toLowerCase()}
                    key={service}
                  >
                    <a>{service}</a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className='c-footer__copyright'>
            <p>
              &copy; {new Date().getFullYear()},{' '}
              <Link href='/'>
                <a className='u-underline'>koalify.co</a>
              </Link>{' '}
              - All right reserved, Icons by{' '}
              <a
                href='https://icons8.com/'
                className='u-underline'
                target='_blank'
              >
                Icons8
              </a>{' '}
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        footer {
          background-color: var(--color-secondary);
          color: #fff;
        }

        .c-footer__content {
          height: 870px;
          padding: 30px 10px;
        }

        .c-footer__copyright {
          text-align: left;
          height: 90px;
          padding: 0 10px;
        }

        .left {
          float: left;
          width: 100%;
          margin-bottom: 10px;
        }

        .right {
          float: left;
          width: 100%;
          text-align: left;
          margin-bottom: 10px;
        }

        .center {
          float: left;
          text-align: left;
          display: inline-block;
          width: 100%;
          margin-bottom: 10px;
        }

        .c-description {
          width: 80%;
        }

        .c-links {
          margin: 20px 0;
        }

        .c-links a {
          display: block;
          font-size: 1.3rem;
          line-height: 1.7rem;
          margin-bottom: 10px;
        }

        .c-links a:hover {
          text-decoration: underline;
        }

        a {
          color: var(--color-white);
        }

        img {
          margin-left: -10px;
        }

        h3 {
          font-size: 2rem;
          letter-spacing: -1.5px;
        }

        p {
          margin: 20px 0;
          font-size: 1rem;
          line-height: 1.7rem;
        }

        @media screen and (min-width: 768px) {
          .c-footer__content {
            height: 300px;
          }

          .c-footer__copyright {
            text-align: center;
          }

          .left {
            width: 50%;
          }

          .right {
            width: 25%;
          }

          .center {
            width: 25%;
          }
        }
      `}</style>
    </footer>
  )
}
export default Footer

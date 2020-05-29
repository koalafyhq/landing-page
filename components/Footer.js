import Link from 'next/link'
import ButtonLink from '~/components/ButtonLink'

const Footer = () => {
  const companyLinks = ['About', 'Contact', 'Blog', 'Services', 'Open Source']
  const services = [
    'JAMStack Website',
    'Progressive Web App',
    'Single Page Application',
    'Premium Support',
    'Dedicated Hosting'
  ]

  return (
    <footer>
      <div className='c-footer cf'>
        <div className='o-container'>
          <div className='c-footer__content cf'>
            <div className='left'>
              <Link href='/'>
                <a>
                  <img
                    src='/static/img/logotype_light.png'
                    width='160'
                    alt='Koalafy Footer Logo'
                  />
                </a>
              </Link>
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
                    href={`services/${service
                      .replace(/\s+/g, '-')
                      .toLowerCase()}`}
                    key={service}
                  >
                    {service === 'Dedicated Hosting' ? (
                      <a className='c-links--with-label'>
                        {service}
                        {service === 'Dedicated Hosting' && <span>Beta</span>}
                      </a>
                    ) : (
                      <a>{service}</a>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className='c-footer__copyright'>
            <p>
              &copy; {new Date().getFullYear()},{' '}
              <Link href='/'>
                <a className='u-underline'>koalafyhq.com</a>
              </Link>{' '}
              - All right reserved, Icons by{' '}
              <a
                href='https://icons8.com/'
                className='u-underline'
                target='_blank'
              >
                Icons8
              </a>
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        footer {
          background-color: var(--color-secondary);
          color: #fff;
        }

        span {
          background-color: var(--color-primary);
          margin-left: 4px;
          display: inline-block;
          padding: 0.2rem 0.4rem;
          font-size: 0.8rem;
          line-height: 0.8rem;
          text-align: center;
          white-space: nowrap;
          vertical-align: top;
          border-radius: 3px;
        }

        .c-footer__content {
          padding: 30px 10px;
        }

        .c-footer__copyright {
          text-align: left;
          padding: 0 0 2rem 10px;
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
          font-size: 1.2rem;
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
          font-size: 1.8rem;
          letter-spacing: -1.5px;
          line-height: 1.3rem;
          margin-top: 1.5rem;
        }

        p {
          margin: 20px 0;
          font-size: 1rem;
          line-height: 1.7rem;
        }

        @media screen and (min-width: 768px) {
          h3 {
            line-height: normal;
            font-size: 2rem;
            margin-top: 0;
          }

          .c-footer__copyright {
            text-align: center;
            padding: 1rem 0;
          }

          .c-links a {
            font-size: 1.3rem;
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

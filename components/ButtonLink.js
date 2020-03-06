import Link from 'next/link'

const ButtonLink = ({ pilled, children, href }) => (
  <>
    <Link href={href}>
      <a>{children}</a>
    </Link>
    <style jsx>{`
      a {
        margin-top: 2rem;
        display: inline-block;
        font-family: inherit;
        font-size: 1.3rem;
        font-weight: bold;
        color: #ffffff;
        letter-spacing: 1px;
        padding: ${pilled ? '17px' : '15px'};
        border-radius: ${pilled ? '999px' : '3px'};
        background-color: var(--color-primary);
        border: 1px solid var(--color-primary);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
        transition: 0.3s all;
      }

      a:hover {
        cursor: pointer;
        transform: translate(0, -3px);
      }
    `}</style>
  </>
)

export default ButtonLink

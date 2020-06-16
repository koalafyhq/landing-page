import Link from 'next/link'

const Card = ({ title, description, image }) => {
  return (
    <div>
      <img src={image} alt={title} />
      <Link href={`services/${title.replace(/\s+/g, '-').toLowerCase()}`}>
        <a>
          <h3>{title}</h3>
        </a>
      </Link>
      <p>{description}</p>
      <style jsx>{`
        div {
          width: 100%;
          padding: 1rem 2rem;
        }

        img {
          width: 100%;
        }

        h3 {
          color: var(--color-primary);
          letter-spacing: -1px;
          font-size: 2rem;
          margin-top: 1rem;
          margin-bottom: 0.5rem;
        }

        p {
          line-height: 1.8rem;
          font-size: 1rem;
          margin-bottom: 5rem;
          color: var(--color-white);
        }

        @media screen and (min-width: 640px) {
          div {
            width: 33.33%;
            float: left;
          }

          h3 {
            font-size: 2rem;
          }

          p {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </div>
  )
}

export default Card

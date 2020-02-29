import Link from 'next/link'

function Navbar() {
  return (
    <nav>
      <Link href='/'>
        <a className='c-navbar__brand'>Koalafy</a>
      </Link>
      <style jsx>{`
        nav {
          background-color: #000;
          color: #fff;
          padding: 10px;
          font-weight: bold;
          margin-bottom: 1rem;
        }
        .c-navbar__brand {
          color: #fff;
          text-decoration: none;
          font-size: 1.8rem;
        }
      `}</style>
    </nav>
  )
}

export default Navbar

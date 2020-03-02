import { useState } from 'react'
import Link from 'next/link'

const HamburgerMenu = ({ isFocus, onClick }) => (
  <button className={isFocus ? 'is-focus' : ''} onClick={onClick}>
    <div></div>
    <div></div>
    <style jsx>{`
      button {
        background-color: transparent;
        border: 3px solid transparent;
        border-radius: 3px;
        padding: 5px 10px;
        position: relative;
        transition: var(--transition-common);
        width: 50px;
        z-index: 1;
      }

      button:hover,
      button:focus {
        border-color: var(--color-primary);
        cursor: pointer;
      }

      button.is-focus div:first-child {
        transform: translate(0, 5px);
      }

      button.is-focus div:last-child {
        transform: translate(0, -5px);
      }

      div {
        background: var(--color-white);
        content: '';
        width: 100%;
        height: 3px;
        display: block;
        margin-top: 8px;
        margin-bottom: 8px;
        transition: var(--transition-common);
      }
    `}</style>
  </button>
)

const Menu = ({ isVisible, menus }) => (
  <div className={`c-menu ${isVisible ? 'c-menu--is-visible' : ''}`}>
    {menus.map(menu => (
      <Link href={menu.toLowerCase()} key={menu}>
        <a>{menu}</a>
      </Link>
    ))}
    <style jsx>{`
      .c-menu {
        background: var(--color-primary);
        border-radius: 3px;
        font-size: 24px;
        padding: 2rem;
        position: absolute;
        text-align: left;
        right: 0;
        top: 0;
        opacity: 0;
        transition: 0.3s all, 0.3s opacity ease-out;
        visibility: hidden;
        width: 300px;
        height: 350px;
      }

      .c-menu--is-visible {
        visibility: visible;
        opacity: 1;
      }

      .c-menu a {
        color: var(--color-white);
        text-decoration: none;
        margin-bottom: 1rem;
        display: block;
        font-weight: bold;
        transition: 0.5s transform ease-in-out, 0.3s color;
        transform: translate(0, 666px);
      }

      .c-menu--is-visible a {
        transform: translate(0, 0);
      }

      .c-menu a:hover {
        color: var(--color-secondary);
      }
    `}</style>
  </div>
)

const Navbar = () => {
  const menus = ['Home', 'About', 'Services', 'Blog']
  const [menuVisible, setMenuVisible] = useState(true)

  const toggleMenuVisiblity = () => setMenuVisible(isVisible => !isVisible)

  return (
    <nav className='c-navbar cf'>
      <div className='c-navbar__left'>
        <Link href='/'>
          <a>
            <img
              src='/static/img/logotype_light.png'
              width='120'
              alt='Koalafy'
            />
          </a>
        </Link>
      </div>
      <div className='c-navbar__right'>
        <HamburgerMenu isFocus={menuVisible} onClick={toggleMenuVisiblity} />
        <Menu isVisible={menuVisible} menus={menus} />
      </div>
      <style jsx>{`
        .c-navbar {
          background-color: var(--color-secondary);
          color: #fff;
          padding: 25px 25px;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .c-navbar__left {
          float: left;
          width: 30%;
        }

        .c-navbar__right {
          float: left;
          width: 70%;
          text-align: right;
          position: relative;
        }
      `}</style>
    </nav>
  )
}

export default Navbar

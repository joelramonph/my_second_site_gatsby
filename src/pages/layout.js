import * as React from 'react'
import { Link } from 'gatsby'
import { container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle} from '../componets/layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <title className={heading}>{pageTitle}</title>
      <nav className={navLinks}>
        <ul className={navLinkItem}>
          <li className={navLinkText}><Link to="/">Home</Link></li>
          <li className={navLinkText}><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <main>
        <h1 className={siteTitle}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
import React from "react"

import PropTypes from "prop-types"
import styles from "./styles.module.css"
import findByType from "../../utils/findByType"

const Link = () => null

const Nav = ({ children }) => {
  const renderLink = () => {
    const links = findByType(children, Link)
    if (!links) return

    return links.map((link, idx) => (
      <li key={idx} className={`${styles.navItem} ${link.props.active ? styles.active : ""}`}>
        <a href={link.props.href}>
          {link.props.children}
        </a>
      </li>
    ))
  }

  return (
    <ul className={`${styles.nav}`}>
      {renderLink()}
    </ul>
  )
}

Nav.propTypes = {
  children: PropTypes.node
}

Nav.Link = Link
export default Nav

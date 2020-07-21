import React, { useState } from "react"

import PropTypes from "prop-types"
import styles from "./styles.module.css"

import findByType from "../utils/findByType"
import useGetWindowWidth from "../utils/useGetWindowWidth"
import { BREAKPOINT } from "../utils/variables"

import ToggleClose from "./assets/toggle_close.svg"
import ToggleOpen from "./assets/toggle_open.svg"

const Brand = () => null
const Collapse = () => null
const Toggle = () => null

const Navbar = ({ children }) => {
  const [show, setShow] = useState(false)
  const windowWidth = useGetWindowWidth()
  const isMobile = windowWidth < BREAKPOINT

  const renderBrand = () => {
    const brand = findByType(children, Brand)[0]
    if (!brand) return

    let brandText, brandTextMobile
    const brandChild = brand.props?.children || ""

    if (!Array.isArray(brandChild)) {
      brandText = brandTextMobile = brandChild
    } else {
      brandTextMobile = brandChild.filter((b) => b.props.mobile)
      brandText = brandChild.filter((b) => !b.props.mobile)
    }

    const brandLink = brand.props?.href || "#"

    return (
      <div className={styles.brand}>
        <div className={styles.brandWrapper}>
          <a href={brandLink}>
            <div className={styles.brandText}>
              {isMobile ? brandTextMobile : brandText}
            </div>
          </a>
          {renderToggle()}
        </div>
      </div>
    )
  }

  const renderToggle = () => {
    const toggle = findByType(children, Toggle)[0]

    if (!toggle) return

    return (
      <div className={styles.toggle} onClick={() => setShow((prev) => !prev)}>
        {show ? <img src={ToggleClose} /> : <img src={ToggleOpen} />}
      </div>
    )
  }

  const renderCollapse = () => {
    const collapse = findByType(children, Collapse)[0]
    if (!collapse) return

    return (
      <div
        className={`${styles.collapse} ${show || !isMobile ? styles.show : ""}`}
      >
        {collapse.props.children}
      </div>
    )
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarWrapper}>
        {renderBrand()}
        {renderCollapse()}
      </div>
    </div>
  )
}

Navbar.propTypes = {
  children: PropTypes.node
}

Navbar.Brand = Brand
Navbar.Collapse = Collapse
Navbar.Toggle = Toggle
export default Navbar

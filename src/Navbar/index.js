import React, { useState } from "react"

import PropTypes from "prop-types"
import styles from "./styles.module.css"

import findByType from "../utils/findByType"
import useGetWindowWidth from "../utils/useGetWindowWidth"
import { BREAKPOINT } from "../utils/variables"

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
      brandTextMobile = brandChild.filter(b => b.props.mobile)
      brandText = brandChild.filter(b => !b.props.mobile)
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
      <div className={styles.toggle} onClick={() => setShow(prev => !prev)}>
        {show ? (
          <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="22.1914" height="3.50215" rx="1.75107" transform="matrix(0.742317 0.670049 0.580506 -0.814256 0.493652 3.13062)" fill="white"/>
            <rect width="22.1914" height="3.50215" rx="1.75107" transform="matrix(-0.742317 0.670049 -0.580506 -0.814256 18.5059 2.85156)" fill="white"/>
          </svg>
        ) : (
          <svg width="26" height="13" viewBox="0 0 26 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="26" height="4" rx="2" transform="matrix(1 0 0 -1 0 4)" fill="white"/>
            <rect width="26" height="4" rx="2" transform="matrix(1 0 0 -1 0 13)" fill="white"/>
          </svg>
        )}
      </div>
    )
  }

  const renderCollapse = () => {
    const collapse = findByType(children, Collapse)[0]
    if (!collapse) return

    return (
      <div className={`${styles.collapse} ${show || !isMobile ? styles.show : ""}`}>
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

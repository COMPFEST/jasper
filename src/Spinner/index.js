import React from "react"

import PropTypes from "prop-types"
import styles from "./styles.module.css"

const Spinner = (props) => {
  const { variant, size, speed, animation, ...other } = props
  return (
    <div className={styles.spinner}>
      <div
        className={`${styles[variant]} ${styles[size]} ${styles[speed]} ${styles[animation]}`}
        {...other}
      />
    </div>
  )
}

Spinner.propTypes = {
  variant: PropTypes.string,
  size: PropTypes.string,
  speed: PropTypes.string,
  animation: PropTypes.string,
}
Spinner.defaultProps = {
  variant: "default",
  size: "md",
  speed: "normal",
  animation: "linear",
}

export default Spinner

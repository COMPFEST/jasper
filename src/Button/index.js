import React from "react"

import PropTypes from "prop-types"
import styles from "./styles.module.css"

const Button = props => {
  if (props.href) {
    return (
      <a href={props.href}>
        <button className={styles.all} {...props}>{props.children}</button>
      </a>
    )
  }
  return <button className={styles.all} {...props}>{props.children}</button>
}

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.string,
}
Button.defaultProps = {
  type: "button",
}

export default Button

import React from "react"

import PropTypes from "prop-types"
import { StyledButton } from "./style"

const Button = props => {
  if (props.href) {
    if (props.download) {
      return (
        <a href={props.href} download>
          <StyledButton {...props}>{props.children}</StyledButton>
        </a>
      )
    } else {
      return (
        <a href={props.href}>
          <StyledButton {...props}>{props.children}</StyledButton>
        </a>
      )
    }
  }
  return <StyledButton {...props}>{props.children}</StyledButton>
}

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.string,
}
Button.defaultProps = {
  type: "button",
}

export default Button

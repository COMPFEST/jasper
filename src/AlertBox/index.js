import React from "react"

import Button from "../Button"
import { MyStyle } from "./style"

const AlertBox = props => {
  const { message, cancel, proceed, ...other } = props
  return (
    <MyStyle {...other}>
      <div className="container">
        <div className="info-message">
          {message}
        </div>
        <Button onClick={cancel}>Cancel</Button>
        <Button onClick={proceed}>Proceed</Button>
      </div>
    </MyStyle>
  )
}

export default AlertBox

import React from "react"

import Button from "../Button"
import { MyStyle } from "./style"

const AlertBox = props => {
  return (
    <MyStyle>
      <div className="container">
        <div className="info-message">
          {props.message}
        </div>
        <Button onClick={props.cancel}>Cancel</Button>
        <Button onClick={props.proceed}>Proceed</Button>
      </div>
    </MyStyle>
  )
}

export default AlertBox

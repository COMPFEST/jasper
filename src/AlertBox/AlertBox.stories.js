import React from "react"
import { storiesOf } from "@storybook/react"
import AlertBox from "."

const alertMessage = "Are you sure?"
const alertProceed = () => {
  console.log("Proceed")
}
const alertCancel = () => {
  console.log("Cancelled")
}

storiesOf("AlertBox").add("Default", () => (
  <AlertBox message={alertMessage} cancel={alertCancel} proceed={alertProceed} />
))

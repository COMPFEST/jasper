import React from "react"
import { storiesOf } from "@storybook/react"

import Nav from "."

storiesOf("Nav").add("Nav", () => (
  <Nav>
    <Nav.Link href="#" active>Home</Nav.Link>
    <Nav.Link href="#">About</Nav.Link>
    <Nav.Link href="#">Seminar</Nav.Link>
    <Nav.Link href="#">Exhibitor</Nav.Link>
    <Nav.Link href="#">Location</Nav.Link>
  </Nav>
))

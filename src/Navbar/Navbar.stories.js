import React, { useState } from "react"
import { storiesOf } from "@storybook/react"

import Navbar from "."
import Nav from "./Nav"

import LogoMobile from "./assets/logo_mobile.svg"
import LogoDesktop from "./assets/logo_desktop.svg"
import ToggleClose from "./assets/toggle_close.svg"
import ToggleOpen from "./assets/toggle_open.svg"

storiesOf("Navbar").add("Navbar", () => {
  const [show, setShow] = useState(false)

  return (
    <Navbar>
      <Navbar.Brand>
        <div mobile>
          <img src={LogoMobile} style={{ width: "30px" }} />
        </div>
        <div>
          <img src={LogoDesktop} style={{ width: "150px" }} />
        </div>
      </Navbar.Brand>
      <Navbar.Toggle setShow={setShow}>
        <img src={ToggleOpen} alt="toggle open" open />
        <img src={ToggleClose} alt="toggle close" close />
      </Navbar.Toggle>
      <Navbar.Collapse show={show}>
        <Nav>
          <Nav.Link href="#" active>
            Home
          </Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Seminar</Nav.Link>
          <Nav.Link href="#">Exhibitor</Nav.Link>
          <Nav.Link href="#">Location</Nav.Link>
          <Nav.Link href="#">Playground</Nav.Link>
          <Nav.Link href="#">Competition</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
})

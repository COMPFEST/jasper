import React from "react"
import { storiesOf } from "@storybook/react"

import Navbar from "."
import Nav from "./Nav"

import LogoMobile from './assets/logo_mobile.svg'
import LogoDesktop from './assets/logo_desktop.svg'

storiesOf("Navbar").add("Navbar", () => (
  <Navbar>
    <Navbar.Brand>
      <div mobile>
        <img src={LogoMobile}/>
      </div>
      <div>
        <img src={LogoDesktop}/>
      </div>
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Nav>
        <Nav.Link href="#" active>Home</Nav.Link>
        <Nav.Link href="#">About</Nav.Link>
        <Nav.Link href="#">Seminar</Nav.Link>
        <Nav.Link href="#">Exhibitor</Nav.Link>
        <Nav.Link href="#">Location</Nav.Link>
        <Nav.Link href="#">Playground</Nav.Link>
        <Nav.Link href="#">Competition</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
))

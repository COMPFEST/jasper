import React from "react"
import renderer from "react-test-renderer"
import Navbar from '.'
import Nav from './Nav'

it("renders correctly", () => {
  const tree = renderer.create((
    <Navbar>
      <Navbar.Brand>
        <div>
          Hello
        </div>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          <Nav.Link href="#" active>Budi</Nav.Link>
          <Nav.Link href="#">Andi</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )).toJSON()
  expect(tree).toMatchSnapshot()
})

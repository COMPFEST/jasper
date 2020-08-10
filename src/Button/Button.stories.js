import React from "react"
import { storiesOf } from "@storybook/react"
import Button from "."

storiesOf("Button").add("Default", () => (
  <Button>Hello</Button>
))

storiesOf("Button").add("Secondary", () => (
  <Button className="secondary">Hello Secondary</Button>
))

storiesOf("Button").add("Bold", () => (
  <Button className="bold">Hello Bold</Button>
))

storiesOf("Button").add("Nude", () => (
  <Button className="nude">Hello Bold</Button>
))

storiesOf("Button").add("Href", () => (
  <Button href="https://www.compfest.id/">Hello Href</Button>
))

storiesOf("Button").add("Download", () => (
  <Button
    href="https://www.compfest.id/images/common/bgmobile_jargon_acad_compe_landing.svg"
    download
  >
    Hello Download
  </Button>
))

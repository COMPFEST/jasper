import React from "react"
import { storiesOf } from "@storybook/react"
import Footer from "."
import Facebook from "./Facebook.svg"
import Instagram from "./Instagram.svg"
import Line from "./Line.svg"
import Twitter from "./twitter.svg"
import Linkedin from "./LinkedIn.svg"
import Youtube from "./youtube.svg"
import Compfest from "./compfest-white.svg"


storiesOf("Footer").add("Default", () => <Footer Facebook={Facebook} Instagram={Instagram} Line={Line} Twitter={Twitter} LinkedIn={Linkedin} Youtube={Youtube} Compfest={Compfest} />)

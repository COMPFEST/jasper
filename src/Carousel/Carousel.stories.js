import React from "react"
import { storiesOf } from "@storybook/react"
import Carousel from "."

const content1 = "First Content"
const content2 = "Second Content"
const content3 = "Third Content"

storiesOf("Carousel").add("Default", () => <Carousel><div className="first-content">{content1}</div><div className="second-content">{content2}</div><div className="third-content">{content3}</div></Carousel>)

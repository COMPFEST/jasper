import React from "react"
import { storiesOf } from "@storybook/react"
import Carousel from "."

const content1 = "First Content"
const content2 = "Second Content"
const content3 = "Third Content"

storiesOf("Carousel").add("Default", () => <Carousel><div className="first-content" style={{ color: "white" }}>{ content1 }</div><div className="second-content" style={ { color: "white" } }>{ content2 }</div><div className="third-content" style={ { color: "white" } }>{ content3 }</div></Carousel>)

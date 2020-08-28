import React from "react"
import { storiesOf } from "@storybook/react"
import Carousel from "."

import next from './static/carousel_next.svg'
import prev from './static/carousel_prev.svg' 

const content1 = "First Content"
const content2 = "Second Content"
const content3 = "Third Content"

storiesOf("Carousel").add("Default", () => <Carousel nextButton={<img src={next} alt="next button"/>} prevButton={<img src={prev} alt="prev button"/>}><div className="first-content" style={{ color: "white" }}>{ content1 }</div><div className="second-content" style={ { color: "white" } }>{ content2 }</div><div className="third-content" style={ { color: "white" } }>{ content3 }</div></Carousel>)

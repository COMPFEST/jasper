import React from "react"
import { storiesOf } from "@storybook/react"
import Card from "."

// images
import PlaceholderImg from './img/placeholder.png'
import PlaceholderImg2 from './img/placeholder2.png'

// components
import Button from '../Button'

const title = "Card Title"
const content = "Hello! This is a sample text more catchy than the typical lorem ipsum text"
const linkContent = "CLICKABLE TEXT"
const href = "https://www.compfest.id/"
storiesOf("Card").add("Default", () => <Card title={title} text={content} linkContent={linkContent} href={href}/>)
storiesOf("Card").add(
  "large-card",
  () => <Card
    type='large-card'
    image={PlaceholderImg}
    title='Card Title That is Very Long to Decribe Something'
    miniTitle='Card Mini Title'
    text='COMPFEST is an annual one-stop IT event run by students of Faculty of Computer Science, University of Indonesia. Lorem ipsum dolor sit amet Lorem. COMPFEST is an annual one-stop IT event run by students of Faculty of Computer Science, University of Indonesia. Lorem ipsum dolor sit amet Lorem.'
    buttonTop={<Button> Hello </Button>}
    buttonBottom={<Button> Hello </Button>}/>
)
storiesOf("Card").add("article-card", () => <Card type="article-card" title="How To Choose Between Wireless and Wired Charging?" category="TECHNOLOGY" image={PlaceholderImg2}/>)
storiesOf("Card").add("carousel-card", () => <Card type="carousel-card" caption="Card Caption" image={PlaceholderImg2}/>)

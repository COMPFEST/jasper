import React from "react"
import { storiesOf } from "@storybook/react"
import Card from "."

const title = "Card Title"
const content = "Hello! This is a sample text more catchy than the typical lorem ipsum text"
const linkContent = "CLICKABLE TEXT"
const href = ""
storiesOf("Card").add("Default", () => <Card title={title} content={content} linkContent={linkContent} href={href}/>)

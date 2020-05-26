import React from "react"
import { storiesOf } from "@storybook/react"
import SmallNav from "."
import Card from "../Card"

const navItems = [
    {
        title: "navitem1",
        component: <Card title="Component1" content="Hello world, this is component1."/>
    },
    {
        title: "navitem2",
        component: <Card title="Component2" content="This is component2, just to make sure you actually changed the state."/>
    },
    {
        title: "navitem3",
        component: <Card title="Component3" content="Ooh, look! Another change"/>
    },
    {
        title: "navitem4",
        component: <Card title="Component4" content="Lorem ipsum dolor sit amet"/>
    },
]
storiesOf("SmallNav").add("Default", () => <SmallNav navItems={navItems}/>)

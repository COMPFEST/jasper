import React from "react"
import renderer from 'react-test-renderer'

import SmallNav from '.'
import Card from '../Card'

it('renders navItems correctly', () => {
  const navItems = [
    {
    title: "navitem1",
    component: <Card title="Component1" content="Hello world, this is component1" />
    },
    {
      title: "navitem2",
      component: <Card title="Component2" content="Hello world, this is component2" />
      }
  ]

  let tree = renderer
    .create(<SmallNav navItems={navItems} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
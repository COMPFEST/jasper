import React from "react"
import renderer from 'react-test-renderer'

import SmallNav from '.'

it('renders navItems correctly', () => {
  const navItems = [
    {
    title: "navitem1",
    component: <Card title="Component1" content="Hello world, this is component1" />
    },
  ]

  let tree = renderer
    .create(<SmallNav navItems={navItems} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
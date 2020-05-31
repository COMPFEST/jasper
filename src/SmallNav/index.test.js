import React from "react"
import renderer from 'react-test-renderer'

import SmallNav from '.'

it('renders navItems correctly', () => {
  const navItems = [
    {
      title: "navitem1",
      component: <div>Hello world, this is component1</div>
    },
    {
      title: "navitem2",
      component: <div>Hello world, this is component2</div>
    }
  ]

  const tree = renderer
    .create(<SmallNav navItems={navItems} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

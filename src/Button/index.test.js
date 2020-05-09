import React from 'react'
import Button from '.'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  let tree = renderer
    .create(<Button>Hello</Button>)
    .toJSON()
  expect(tree).toMatchSnapshot()

  tree = renderer
    .create(<Button href="https://www.compfest.id/">Hi</Button>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

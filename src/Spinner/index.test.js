import React from 'react'
import Spinner from '.'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  let tree = renderer
    .create(<Spinner />)
    .toJSON()
  expect(tree).toMatchSnapshot()
  
  tree = renderer
    .create(<Spinner variant="regular" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
  
  tree = renderer
    .create(<Spinner size="lg" />)
    .toJSON()
  expect(tree).toMatchSnapshot()

  tree = renderer
    .create(<Spinner speed="fast" />)
    .toJSON()
  expect(tree).toMatchSnapshot()

  tree = renderer
    .create(<Spinner animation="bouncy" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
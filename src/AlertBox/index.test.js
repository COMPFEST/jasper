import React from "react"
import { shallow } from 'enzyme'

import AlertBox from '.'

describe('AlertBox', () => {
  it('renders message correctly', () => {
    const message = "Are you really a cat?"
    const wrapper = shallow(
      <AlertBox message={message} />
    )
    expect(wrapper.contains(message)).toEqual(true)
  })
})

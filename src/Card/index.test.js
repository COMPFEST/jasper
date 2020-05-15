import React from "react"
import { shallow } from 'enzyme'
import Card from '.'

describe('Card', () => {
  it('renders title correctly', () => {
    const title = "Card Title Test"
    const content = "Card content test"
    const wrapper = shallow(
      <Card title={title} content={content}/>
    )
    expect(wrapper.contains(title)).toEqual(true)
  })

  it('renders content correctly', () => {
    const title = "Card Title Test"
    const content = "Card content test"
    const wrapper = shallow(
      <Card title={title} content={content}/>
    )
    expect(wrapper.contains(content)).toEqual(true)
  })

  it('renders link content correctly', () => {
    const title = "Card Title Test"
    const content = "Card content test"
    const linkContent = "Link content test"
    const wrapper = shallow(
      <Card title={title} content={content} linkContent={linkContent}/>
    )
    expect(wrapper.contains(linkContent)).toEqual(true)
  })

  it('renders href correctly', () => {
    const title = "Card Title Test"
    const content = "Card content test"
    const href = "https://www.compfest.id/"
    const wrapper = shallow(
      <Card title={title} content={content} href={href}/>
    )
    expect(wrapper.find('[href="https://www.compfest.id/"]').length).toBe(1)
  })
})

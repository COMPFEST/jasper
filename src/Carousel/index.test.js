import React from "react"
import { shallow } from "enzyme"
import Carousel from "."

describe('Carousel1', () => {
  it("renders correctly", () => {
    const wrapper = shallow(
      <Carousel>
        <div className="foo">
          Foo
        </div>
        <div className="bar">
          Bar
        </div>
        <div className="baz">
          Baz
        </div>
      </Carousel>
    )
    const divFoo = wrapper.find('.foo')
    const divBar = wrapper.find('.bar')
    const divBaz = wrapper.find('.baz')
    expect(divFoo.text()).toBe("Foo")
    expect(divBar.text()).toBe("Bar")
    expect(divBaz.text()).toBe("Baz")
  })
})

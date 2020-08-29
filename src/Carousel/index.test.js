import React from "react"
import { shallow } from "enzyme"
import Carousel from "."

import next from "./static/carousel_next.svg"
import prev from "./static/carousel_prev.svg"

describe('Carousel1', () => {
  it("renders correctly", () => {
    const wrapper = shallow(
      <Carousel
        prevButton={(<img src={prev} alt="prev button"/>)}
        nextButton={(<img src={next} alt="next button"/>)}
      >
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

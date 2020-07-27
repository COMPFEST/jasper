import React from "react"
import { shallow } from "enzyme"
import Input from "."

describe("Input.Text", () => {
  it("renders correctly", () => {
    const wrapper = shallow(
      <Input.Text name="input-name" placeholder="text placeholder" />
    )

    expect(wrapper).toMatchSnapshot()
  })
})

describe("Input.Radio", () => {
  it("renders correctly", () => {
    const wrapper = shallow(
      <Input.Radio name="input-name" value="input-value">
        Hello
      </Input.Radio>
    )

    expect(wrapper).toMatchSnapshot()
  })
})

describe("Input.Number", () => {
  it("renders correctly", () => {
    const wrapper = shallow(
      <Input.Number name="input-name" placeholder="number placeholder" />
    )

    expect(wrapper).toMatchSnapshot()
  })
})

describe("Input.TextArea", () => {
  it("renders correctly", () => {
    const wrapper = shallow(
      <Input.TextArea name="input-name" placeholder="placeholder" />
    )

    expect(wrapper).toMatchSnapshot()
  })
})

describe("Input.Phone", () => {
  it("renders correctly", () => {
    const wrapper = shallow(
      <Input.Phone name="input-name" placeholder="phone placeholder" />
    )

    expect(wrapper).toMatchSnapshot()
  })
})

describe("Input.Checkbox", () => {
  it("renders correctly", () => {
    const wrapper = shallow(
      <Input.Checkbox name="input-name">Hello</Input.Checkbox>
    )

    expect(wrapper).toMatchSnapshot()
  })
})

describe("Input.Dropdown", () => {
  const listDepartments = [
    "Finance",
    "Academy",
    "Competition",
    "Creative",
    "Event",
    "IT Dev",
    "Marketing",
    "Partnership",
    "Operational",
  ]

  it("renders correctly", () => {
    const wrapper = shallow(
      <Input.Dropdown
        placeholder={listDepartments[0]}
        choices={listDepartments}
        label="Departments"
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})

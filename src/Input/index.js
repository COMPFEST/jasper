import React from "react"
import { Field } from "formik"
import styled from "styled-components"

export const BaseInput = styled(Field)`
  width: calc(100% - 34px);
  padding: 10px 15px;
  color: #000;
  background-color: transparent;
  border: 2px solid #000;
  border-radius: 5px;
  font-family: inherit;
`

export const TextInput = (props) => (
  <BaseInput type={props.type || "text"} {...props} />
)

const RadioSpan = styled.span`
  display: block;

  &:before {
    content: "";
    display: inline-block;
    width: 1.2rem;
    height: 1.2rem;
    vertical-align: -0.25rem;
    border-radius: 1.2rem;
    border: 1px solid #000;
    margin-right: 0.6rem;
    transition: background 0.2s ease;
    box-shadow: inset 0 0 0 0.15rem #000;
  }
`

const RadioButton = styled(Field)`
  border: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;
  margin: 0;
  padding: 0;
  position: absolute;
  width: 1px;

  &:checked + ${RadioSpan}:before {
    background: #000;
  }
`

export const RadioInput = ({ name, value, children }) => (
  <label style={{ cursor: "pointer" }}>
    <RadioButton type="radio" name={name} value={value || children} />
    <RadioSpan>{children}</RadioSpan>
  </label>
)

export const NumberInput = (props) => <BaseInput type="number" {...props} />

export const TextAreaInput = (props) => (
  <BaseInput component="textarea" {...props} />
)

const PhoneSpan = styled.span`
  position: absolute;
  margin: 15px;

  &:after {
    content: "";
    position: absolute;
    top: -5px;
    display: block;
    left: 2.5rem;
    width: 1px;
    height: calc(1rem + 10px);
    background: #000;
  }
`

export const PhoneInput = (props) => (
  <div style={{ position: "relative" }}>
    <PhoneSpan>+62</PhoneSpan>
    <BaseInput
      style={{
        position: "relative",
        zIndex: 10,
        paddingLeft: "4.5rem",
        width: "calc(100% - 19px - 4.5rem)"
      }}
      type="text"
      {...props}
      validate={(value) => {
        let errorMessage
        if (!value.match(/^\d*$/)) {
          errorMessage = "Invalid phone number"
        }
        return errorMessage
      }}
    />
  </div>
)

export const CheckboxInput = ({ name, value, children }) => (
  <label style={{ cursor: "pointer" }}>
    <Field type="checkbox" name={name} value={value || children} />
    {children}
  </label>
)

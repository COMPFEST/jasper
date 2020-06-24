import React from "react"
import { Field } from "formik"
import {
  BaseInput,
  RadioButton,
  RadioSpan,
  PhoneSpan,
  CheckboxLabel
} from "./style"

export const TextInput = (props) => (
  <BaseInput type={props.type || "text"} {...props} />
)

export const RadioInput = ({ name, value, children, ...props }) => (
  <label style={{ cursor: "pointer" }}>
    <RadioButton
      type="radio"
      name={name}
      value={value || children}
      {...props}
    />
    <RadioSpan>{children}</RadioSpan>
  </label>
)

export const NumberInput = (props) => <BaseInput type="number" {...props} />

export const TextAreaInput = (props) => (
  <BaseInput component="textarea" {...props} />
)

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

export const CheckboxInput = ({ value, children, ...props }) => (
  <CheckboxLabel>
    <Field type="checkbox" value={value || children} {...props} />
    <span className="checkmark" />
    {children}
  </CheckboxLabel>
)

export default {
  Checkbox: CheckboxInput,
  Number: NumberInput,
  Phone: PhoneInput,
  Radio: RadioInput,
  Text: TextInput,
  TextArea: TextAreaInput
}

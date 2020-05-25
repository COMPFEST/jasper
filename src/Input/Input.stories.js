import React from "react"
import { Formik, Form } from "formik"
import {
  TextInput,
  RadioInput,
  NumberInput,
  TextAreaInput,
  PhoneInput,
  CheckboxInput
} from "./index"

export default { title: "Input" }

const TestFormik = ({ children }) => (
  <Formik
    initialValues={{}}
    onSubmit={(values, actions) => {
      window.alert(JSON.stringify(values, null, 2))
      actions.setSubmitting(false)
    }}
  >
    {({ errors }) => (
      <Form>
        {children}
        {Object.keys(errors).map((key) => (
          <span key={key}>
            {key}: {errors[key]}
          </span>
        ))}
        <button type="submit">Submit</button>
      </Form>
    )}
  </Formik>
)

export const Text = () => (
  <TestFormik>
    <TextInput name="TextInput" placeholder="Text Placeholder" />
  </TestFormik>
)

export const Radio = () => (
  <TestFormik>
    <RadioInput name="RadioInput" value="one">
      1
    </RadioInput>
    <RadioInput name="RadioInput" value="two">
      2
    </RadioInput>
  </TestFormik>
)

export const Number = () => (
  <TestFormik>
    <NumberInput name="NumberInput" placeholder="Number Placeholder" />
  </TestFormik>
)

export const TextArea = () => (
  <TestFormik>
    <TextAreaInput name="TextAreaInput" placeholder="TextArea Placeholder" />
  </TestFormik>
)

export const Phone = () => (
  <TestFormik>
    <PhoneInput name="PhoneInput" placeholder="Phone Placeholder" />
  </TestFormik>
)

export const Checkbox = () => (
  <TestFormik>
    <CheckboxInput name="CheckboxInput" value="one">
      1
    </CheckboxInput>
    <CheckboxInput name="CheckboxInput" value="two">
      2
    </CheckboxInput>
  </TestFormik>
)

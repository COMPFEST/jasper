import React from "react"
import { Formik, Form } from "formik"
import { TextInput, RadioInput, NumberInput, TextAreaInput } from "./index"

export default { title: "Input" }

const TestFormik = ({ children }) => (
  <Formik
    initialValues={{}}
    onSubmit={(values, actions) => {
      window.alert(JSON.stringify(values, null, 2))
      actions.setSubmitting(false)
    }}
  >
    <Form>
      {children}
      <button type="submit">Submit</button>
    </Form>
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

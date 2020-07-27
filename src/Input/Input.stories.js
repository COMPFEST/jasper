import React from "react"
import { Formik, Form } from "formik"
import Input from "."

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
    <Input.Text name="TextInput" placeholder="Text Placeholder" />
  </TestFormik>
)

export const Radio = () => (
  <TestFormik>
    <Input.Radio name="RadioInput" value="one">
      1
    </Input.Radio>
    <Input.Radio name="RadioInput" value="two">
      2
    </Input.Radio>
  </TestFormik>
)

export const Number = () => (
  <TestFormik>
    <Input.Number name="NumberInput" placeholder="Number Placeholder" />
  </TestFormik>
)

export const TextArea = () => (
  <TestFormik>
    <Input.TextArea name="TextAreaInput" placeholder="TextArea Placeholder" />
  </TestFormik>
)

export const Phone = () => (
  <TestFormik>
    <Input.Phone name="PhoneInput" placeholder="Phone Placeholder" />
  </TestFormik>
)

export const Checkbox = () => (
  <TestFormik>
    <Input.Checkbox name="CheckboxInput" value="one">
      1
    </Input.Checkbox>
    <Input.Checkbox name="CheckboxInput" value="two">
      2
    </Input.Checkbox>
  </TestFormik>
)

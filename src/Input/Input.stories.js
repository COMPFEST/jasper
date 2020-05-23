import React from "react"
import { Formik, Form } from "formik"
import Input from "./index"

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
    <Input.text name="TextInput" placeholder="Text Placeholder" />
  </TestFormik>
)

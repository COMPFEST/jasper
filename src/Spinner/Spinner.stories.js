import React from "react"
import { storiesOf } from "@storybook/react"
import Spinner from "."

storiesOf("Spinner").add("Default", () => <Spinner />)
storiesOf("Spinner").add("Variant - Regular", () => (
  <Spinner variant="regular" />
))
storiesOf("Spinner").add("Size - Extra Small", () => <Spinner size="xs" />)
storiesOf("Spinner").add("Size - Small", () => <Spinner size="sm" />)
storiesOf("Spinner").add("Size - Medium", () => <Spinner size="md" />)
storiesOf("Spinner").add("Size - Large", () => <Spinner size="lg" />)
storiesOf("Spinner").add("Size - Extra Large", () => <Spinner size="xl" />)
storiesOf("Spinner").add("Speed - Slow", () => (
  <Spinner variant="regular" speed="slow" />
))
storiesOf("Spinner").add("Speed - Normal", () => (
  <Spinner variant="regular" speed="normal" />
))
storiesOf("Spinner").add("Speed - Fast", () => (
  <Spinner variant="regular" speed="fast" />
))
storiesOf("Spinner").add("Animation - Linear", () => (
  <Spinner variant="regular" animation="linear" />
))
storiesOf("Spinner").add("Animation - Ease", () => (
  <Spinner variant="regular" animation="ease" />
))
storiesOf("Spinner").add("Animation - Bouncy", () => (
  <Spinner variant="regular" animation="bouncy" />
))

import React from "react"
import { ThemeProvider } from "styled-components"

const defaulTheme = {
  colors: {
    primary: "#f3f3f3",
    background: "#000"
  }
}

const testTheme = {
  colors: {
    primary:undefined,
    secondary:undefined,
    background:undefined,
    inputColor:undefined,
  }
}

const ThemeDecorator = (storyFn) => (
  <ThemeProvider theme={testTheme}>{storyFn()}</ThemeProvider>
)

export default ThemeDecorator

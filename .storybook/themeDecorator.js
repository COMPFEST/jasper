import React from "react"
import { ThemeProvider } from "styled-components"

const defaulTheme = {
  colors: {
    primary: "#f3f3f3",
    background: "#000"
  }
}

const ThemeDecorator = (storyFn) => (
  <ThemeProvider theme={defaulTheme}>{storyFn()}</ThemeProvider>
)

export default ThemeDecorator

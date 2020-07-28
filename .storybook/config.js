import { addDecorator } from "@storybook/react"
import themeDecorator from "./themeDecorator"

import "./global.css"

addDecorator(themeDecorator)

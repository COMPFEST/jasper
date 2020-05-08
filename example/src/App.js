import React, { Component } from 'react'

import { Button, AlertBox } from 'jasper'
import 'jasper/dist/index.css'

const exampleButton = (
  <Button>Hellow</Button>
)

const exampleAlertBox = (
  <AlertBox message="Are you sure?"></AlertBox>
)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toDisplay: "AlertBox"
    }
  }

  render() {
    const { toDisplay } = this.state

    if (toDisplay === "Button") return exampleButton
    if (toDisplay === "AlertBox") return exampleAlertBox
  }
}

export default App

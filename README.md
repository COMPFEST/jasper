# jasper-ui

> COMPFEST React Component Library

[![NPM](https://img.shields.io/npm/v/jasper-ui.svg)](https://www.npmjs.com/package/jasper-ui) ![Test](https://github.com/COMPFEST/jasper/workflows/Continuous%Integration/badge.svg) ![Deploy Docs](https://github.com/COMPFEST/jasper/workflows/Build%20and%20Deploy%20Documentation/badge.svg)

## Install

```bash
npm install --save jasper-ui
```

## Usage

```jsx
import React, { Component } from 'react'

import { Button } from 'jasper-ui'
import 'jasper-ui/dist/index.css'

class Example extends Component {
  render() {
    return (
      <Button>Yohohoho</Button>
    )
  }
}
```

## Local setup

To install jasper-ui:
- npm install

To install documentation page:
- cd docs && npm install

To run storybook:
- npm run storybook

To run documentation page:
- Run this in one terminal:
  - npm start
- Run this in another terminal:
  - cd docs && npm run develop


## License

MIT © [COMPFEST](https://github.com/COMPFEST)

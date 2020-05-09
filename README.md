# jasper-ui

> COMPFEST React Component Library

[![NPM](https://img.shields.io/npm/v/jasper-ui.svg)](https://www.npmjs.com/package/jasper-ui)
![CI](https://github.com/COMPFEST/jasper/workflows/CI/badge.svg)
![NPM Publish](https://github.com/COMPFEST/jasper/workflows/NPM%20Publish/badge.svg)
![Deploy Docs](https://github.com/COMPFEST/jasper/workflows/Deploy%20Docs/badge.svg)
[![codecov](https://codecov.io/gh/COMPFEST/jasper/branch/master/graph/badge.svg)](https://codecov.io/gh/COMPFEST/jasper)

## Docs

See the [documentation](https://compfest.github.io/jasper/) here.

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

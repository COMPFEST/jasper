# jasper-ui

> COMPFEST React Component Library

[![NPM](https://img.shields.io/npm/v/jasper-ui.svg)](https://www.npmjs.com/package/jasper-ui)
![Build](https://travis-ci.com/COMPFEST/jasper.svg?branch=master)
![CI](https://github.com/COMPFEST/jasper/workflows/CI/badge.svg)
![Deploy Docs](https://github.com/COMPFEST/jasper/workflows/Deploy%20Docs/badge.svg)
[![codecov](https://codecov.io/gh/COMPFEST/jasper/branch/master/graph/badge.svg)](https://codecov.io/gh/COMPFEST/jasper)

## Docs

See the [documentation](https://jasper.compfest.id/) here.

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
- cd docusaurus && npm install

To run storybook:
- npm run storybook

To run documentation page:
- Run this in one terminal:
  - npm start
- Run this in another terminal:
  - cd docusaurus && npm start


## Testing

To run all tests:
- npm test

To run test with coverage:
- npm run test:coverage

To run test and update snapshots:
- npm run test:watch


## License

MIT © [COMPFEST](https://github.com/COMPFEST)

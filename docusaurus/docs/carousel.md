---
id: carousel
title: Carousel
---

import { Carousel, Button, Card } from 'jasper-ui'

Carousel is a list of cards that can be shuffled to display different content in a single space.
Each card may consist of text, images, or both.

### Usage
Each card contains a different item that a user can browse from left and right.

### Code
```jsx
const content1 = "/img/carousel-card-img.png"
const content2 = "/img/carousel-card-img.png"
const content3 = "/img/carousel-card-img.png"

<Carousel>
<div className="first-content" style={{ color: "blue" }}>{ content1 }</div>
<div className="second-content" style={{ color: "yellow" }}>{ content2 }</div>
<div className="third-content" style={{ color: "red" }}>{ content3 }</div>
</Carousel>
```

### Result

### Props

| Prop name | Type   | Mandatory/Optional | Description                                  |
|-----------|--------|--------------------|----------------------------------------------|
| content#  | Object | Mandatory          | Carousel card (number determines card order) |

| Key       | Type   | Mandatory/Optional | Description                |
|-----------|--------|--------------------|----------------------------|
| style     | String | Optional           | Style of the card          |
| color     | String | Optional           | Color of the card          |
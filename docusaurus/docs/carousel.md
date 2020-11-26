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

<Carousel
    prevButton={(<img src="/img/carousel-prev.svg" alt="prev button"/>)}
    nextButton={(<img src="/img/carousel-next.svg" alt="next button"/>)}
>
<div className="first-content" style={{ color: "blue" }}><img src={content1} alt="content 1" /></div>
<div className="second-content" style={{ color: "yellow" }}><img src={content2} alt="content 2"/></div>
<div className="third-content" style={{ color: "red" }}><img src={content3} alt="content 3"/></div>
</Carousel>
```

### Result
<Carousel
    prevButton={(<img src="/img/carousel_prev.svg" alt="prev button"/>)}
    nextButton={(<img src="/img/carousel_next.svg" alt="next button"/>)}
>
<div className="first-content" style={{ color: "blue" }}>content 1</div>
<div className="second-content" style={{ color: "yellow" }}>content 2</div>
<div className="third-content" style={{ color: "red" }}>content 3</div>
</Carousel>

### Props

| Prop name | Type   | Mandatory/Optional | Description                                  |
|-----------|--------|--------------------|----------------------------------------------|
| content#  | Object | Mandatory          | Carousel card (number determines card order) |

| Key       | Type   | Mandatory/Optional | Description                |
|-----------|--------|--------------------|----------------------------|
| style     | String | Optional           | Style of the card          |
| color     | String | Optional           | Color of the card          |
---
id: card
title: Card
---
import { Button, Card } from 'jasper-ui'

Our design implement cards as a mean to display popping informations and divide sections, either individually or as a group. Cards are also used for pop-up and carousel components.

## Mini Information Card

### Usage
We use mini information cards to display information meant to be important. It is also used to group and organize simple informations for better display to user.

### Structure
An information card may consist of multiple components. The following are the general structure for a typical mini information card.

<img src='/img/card-example.svg' alt=''/>

### Code
```jsx
<Card
    title="Card Title"
    text="Hello! This is a sample text more catchy than the typical lorem ipsum text"
    linkContent="CLICKABLE TEXT"
    href="https://www.compfest.id/"
/>
```

### Result
<Card
    title="Card Title"
    text="Hello! This is a sample text more catchy than the typical lorem ipsum text"
    linkContent="CLICKABLE TEXT"
    href="https://www.compfest.id/"
/>

### Props

| Prop name   | Type   | Mandatory/Optional | Description                |
|-------------|--------|--------------------|----------------------------|
| title       | String | Mandatory          | Title of the card          |
| content     | String | Mandatory          | content of the card        |
| linkContent | String | Optional           | Displayed text of the link |
| href        | String | Optional           | Link url                   |

## Large Card

### Usage
We used large cards to differentiate sections in a page. It is also used to group and organize multiple related informations for more better and focused display to user.

### Structure
A large card may consist of multiple components. The following are the general structure for a typical large card.

<img src='/img/large-card-example.svg' alt=''/>

### Code
```jsx
<Card
    type='large-card'
    image="/img/large-card-img.png"
    title='Card Title That is Very Long to Decribe Something'
    miniTitle='Card Mini Title'
    text='COMPFEST is an annual one-stop IT event run by students of Faculty of Computer Science, University of Indonesia. Lorem ipsum dolor sit amet Lorem. COMPFEST is an annual one-stop IT event run by students of Faculty of Computer Science, University of Indonesia. Lorem ipsum dolor sit amet Lorem.'
    buttonTop={<Button> Hello </Button>}
    buttonBottom={<Button> Hello </Button>}
  />
```

### Result
<Card
    type='large-card'
    image="/img/large-card-img.png"
    title='Card Title That is Very Long to Decribe Something'
    miniTitle='Card Mini Title'
    text='COMPFEST is an annual one-stop IT event run by students of Faculty of Computer Science, University of Indonesia. Lorem ipsum dolor sit amet Lorem. COMPFEST is an annual one-stop IT event run by students of Faculty of Computer Science, University of Indonesia. Lorem ipsum dolor sit amet Lorem.'
    buttonTop=<Button> Hello </Button>
    buttonBottom=<Button> Hello </Button>
/>

### Props
| Prop name    | Type   | Mandatory/Optional | Description          |
|--------------|--------|--------------------|----------------------|
| title        | String | Mandatory          | Title of the card    |
| text         | String | Mandatory          | content of the card  |
| image        | String | Optional           | Displayed image      |
| miniTitle    | String | Optional           | Card mini title      |
| buttonTop    | Object | Optional           | Upper button section |
| buttonBottom | Object | Optional           | Lower button section |

## Article Card

### Usage
We used article card to display thumbnail of an article from Medium page. It is also used to group and organize multiple related articles for more better and focused display to user.

### Structure
An article card may consist of multiple components. The following are the general structure for a typical article card.

<img src='/img/article-card-example.svg' alt=''/>

### Code
```jsx
<Card
    type="article-card"
    title="How To Choose Between Wireless and Wired Charging?"
    category="TECHNOLOGY"
    image="/img/article-card-img.png"
/>
```
### Result
<Card type="article-card" title="How To Choose Between Wireless and Wired Charging?" category="TECHNOLOGY" image="/img/article-card-img.png"/>

### Props

| Prop name | Type   | Mandatory/Optional | Description          |
|-----------|--------|--------------------|----------------------|
| title     | String | Mandatory          | Title of the card    |
| category  | String | Mandatory          | Category of the card |
| image     | String | Mandatory          | Displayed image      |

## Carousel Card

### Usage
We used carousel cards to display multiple informations as a group. Typically, the information presented at carousel card are simple informations with small number of text, relying on assets.

### Structure
A carousel card may consist of multiple components. The following are the general structure for a typical carousel card.

<img src='/img/carousel-card-example.svg' alt=''/>

### Code
```jsx
<Card
    type="carousel-card"
    caption="Card Caption"
    image="/img/article-card-img.png"
/>
```
### Result
<Card
    type="carousel-card"
    caption="Card Caption"
    image="/img/article-card-img.png"
/>

### Props

| Prop name | Type   | Mandatory/Optional | Description         |
|-----------|--------|--------------------|---------------------|
| image     | String | Mandatory          | Displayed image     |
| caption   | String | Mandatory          | Caption of the card |
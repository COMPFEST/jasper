---
id: button
title: Button
---

import { Button } from 'jasper-ui'

Button is a component that can initiate certain action and has a customisable background, text and icon.

## Nude Button

### Usage
Nude Buttons contain important action but it emphasised lower than primary buttons.

### Structure
Nude Button only consists of text and doesn’t have background

<img src='/img/button-nude-example.svg' alt=''/>

### Code
```jsx
<div style={{ background: "#404040", borderRadius: "5px" }}>
  <Button className="nude">Text</Button>
</div>
```

### Result
<div style={{ background: "#404040", borderRadius: "5px" }}>
  <Button className="nude">Text</Button>
</div>

## Filled Button

### Usage
Filled Buttons are the highest emphasis button among any other buttons because it has color fill that can draw user attention and used for primary actions.

### Structure
<img src='/img/button-filled-example.svg' alt=''/>

### Code
```jsx
<Button>Filled Button</Button>
```

### Result
<Button>Filled Button</Button>

## Secondary Filled Button

### Code
```jsx
<Button className="secondary">Text</Button>
```

### Result
<Button className="secondary">Secondary Button</Button>

## Props and Class Names

| Prop name       | Type    | Mandatory/Optional | Description                |
|-----------------|---------|--------------------|----------------------------|
| Text (children) | Any     | Mandatory          | Text of the button         |
| href            | String  | Optional           | Make button as a link      |
| download        | Boolean | Optional           | Make a download button     |

| Class names     | Description      |
|-----------------|------------------|
| nude            | Nude button      |
| secondary       | Secondary button |
| bold            | Bold Text        |

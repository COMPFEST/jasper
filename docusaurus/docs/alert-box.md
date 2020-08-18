---
id: alert-box
title: Alert Box
---

import { AlertBox, Button } from 'jasper-ui'

Alert Box is a component that functions as an alert before proceeding to some action.

### Usage
Alert Box will fill the screen with its message, a proceed button, and a cancel button.

### Code
```jsx
const alertProceed = () => {
  console.log("Proceed")
}
const alertCancel = () => {
  console.log("Cancelled")
}

<AlertBox message="Example Message" cancel={alertCancel} proceed={alertProceed} />
```

## Props and Class Names

| Prop name       | Type     | Mandatory/Optional | Description                       |
|-----------------|----------|--------------------|-----------------------------------|
| message         | String   | Mandatory          | Alert message                     |
| cancel          | Function | Mandatory          | Function to call when cancelling  |
| proceed         | Function | Mandatory          | Function to call when proceeding  |

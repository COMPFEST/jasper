---
id: small-nav
title: Small Nav
---

import { SmallNav, Card } from 'jasper-ui'

Small Nav is a component for navigation. Small Nav act like Navbar but in the small version.

### Usage

Small Nav contain titles, each of them represent its own component that navigated by its own title.

### Code

```jsx
const navItems = [
  {
    title: "navitem1",
    component: <Card title="Component1" text="Hello world, this is component1." />
  },
  {
    title: "navitem2",
    component: <Card title="Component2" text="This is component2, just to make sure you actually changed the state." />
  },
  {
    title: "navitem3",
    component: <Card title="Component3" text="Ooh, look! Another change" />
  },
  {
    title: "navitem4",
    component: <Card title="Component4" text="Lorem ipsum dolor sit amet" />
  },
]

<SmallNav navItems={navItems} />
```

### Result

<SmallNav navItems={[
{
title: "navitem1",
component: <Card title="Component1" text="Hello world, this is component1." />
},
{
title: "navitem2",
component: <Card title="Component2" text="This is component2, just to make sure you actually changed the state." />
},
{
title: "navitem3",
component: <Card title="Component3" text="Ooh, look! Another change" />
},
{
title: "navitem4",
component: <Card title="Component4" text="Lorem ipsum dolor sit amet" />
},
]} />

## Props

| Prop name | Type   | Mandatory/Optional | Description                                                       |
| --------- | ------ | ------------------ | ----------------------------------------------------------------- |
| navItems  | Object | Mandatory          | Array of objects, that each object consist of title and component |

| Key       | Value Type | Description                                                                 |
| --------- | ---------- | --------------------------------------------------------------------------- |
| title     | String     | Text that act as navigation                                                 |
| component | Object     | The object that will be displayed when the title representing it is clicked |

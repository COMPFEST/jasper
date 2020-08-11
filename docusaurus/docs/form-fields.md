---
id: form-fields
title: Form Fields
---

Form fields are used in forms where input from user is required. They are part of the django form fields implemented on our web. Typically used for registration, login, and signup.

## Dropdown

import {Dropdown} from "jasper-ui"

### Usage

We implement dropdown input field to contain user input in a scenario where user is required to select one from multiple choices. Usually used for signup and registration.

### Code

```jsx
<Input.Dropdown
  placeholder="Finance"
  choices={["Finance", "Academy", "Competition"]}
  label="Departments"
  name="DropdownInput"
/>
```

### Result

<Dropdown
placeholder="Finance"
choices={["Finance", "Academy", "Competition"]}
label="Departments"
name="DropdownInput"
/>

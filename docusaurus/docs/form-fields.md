---
id: form-fields
title: Form Fields
---

<!-- import { Input } from "jasper-ui" -->

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

## Text Input

### Usage

Text input field is a commonly-defined single-line text field that a user can enter text into. Usually used for username in registration form.

### Code

```jsx
<Input.Text
  name="name"
  placeholder="text placeholder"
/>
```

<!-- ### Result

<Input.text name="input-name" placeholder="text placeholder" /> -->

## Radio Input

### Usage

We add Radio input field to display many options with only one radio can be selected at the same time.

### Code

```jsx
<Input.Radio name="name" value="text value">
  Hello
</Input.Radio>
```

<!-- ### Result

<Input.Radio name="name" value="text value">
Hello
</Input.Radio> -->

## Number Input

### Usage

Number input define a field for entering a number. Usually used to write down a price, or count.

### Code

```jsx
<Input.Number
  name="input-name" 
  placeholder="number placeholder"
/>
```

<!-- ### Result

<Input.Number name="input-name" placeholder="number placeholder" /> -->

## TextArea Input

### Usage

TextArea input is multi-line text field that usually used to collect user inputs like comments or reviews.

### Code

```jsx
<Input.TextArea
  name="input-name"
  placeholder="placeholder"
/>
```

<!-- ### Result

<Input.TextArea name="input-name" placeholder="placeholder" /> -->

## Phone Input

### Usage

We implement phone input field similiar to number input with a phone span. As the name said, it is used for a phone number input in a form.

### Code

```jsx
<Input.Phone
  name="input-name"
  placeholder="phone placeholder"
/>
```

<!-- ### Result

<Input.Phone name="input-name" placeholder="phone placeholder" /> -->

## Checkbox Input

### Usage

Checkbox input is used to display one or more options with the user and the user can select one or more from the options.

### Code

```jsx
<Input.Checkbox name="input-name">
  Hello
</Input.Checkbox>
```

<!-- ### Result

<Input.Checkbox name="input-name">Hello</Input.Checkbox> -->

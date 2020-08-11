---
id: spinner
title: Spinner
---

import { Spinner, Button } from 'jasper-ui'

Spinner is a component that functions as a progress indicator while some content is being loaded, useful to show the loading state in your projects.

## Animations

The animation style can be configured with the `animation` property. Specifying the `animation` property is optional and by default is set to `linear`.

### Linear Spinner - `linear`

<div style={{ display: "flex", height: "120px", width: "auto" }}>
    <Spinner animation="linear" />
</div>

```jsx
<Spinner animation="linear" />
```

### Ease Spinner - `ease`

<div style={{ display: "flex", height: "120px", width: "auto" }}>
    <Spinner animation="ease" />
</div>

```jsx
<Spinner animation="ease" />
```

### Bouncy Spinner - `bouncy`

<div style={{ display: "flex", height: "120px", width: "auto" }}>
    <Spinner animation="bouncy" />
</div>

```jsx
<Spinner animation="bouncy" />
```

## Variants

Two visual variants are available for all animation styles by setting the `variant` property.

<div style={{ display: "flex", height: "120px", width: "auto" }}>
    <Spinner variant="default" animation="linear" />
    <Spinner variant="regular" animation="linear" />
    <Spinner variant="default" animation="ease" />
    <Spinner variant="regular" animation="ease" />
    <Spinner variant="default" animation="bouncy" />
    <Spinner variant="regular" animation="bouncy" />
</div>

```jsx
<>
    <Spinner variant="default" animation="linear" />
    <Spinner variant="regular" animation="linear" />
    <Spinner variant="default" animation="ease" />
    <Spinner variant="regular" animation="ease" />
    <Spinner variant="default" animation="bouncy" />
    <Spinner variant="regular" animation="bouncy" />
</>
```

## Sizes

In addition to the standard size, additional preconfigured sizes are available by configuring the `size` property.

<div style={{ display: "flex", height: "240px", width: "auto" }}>
    <Spinner variant="default" size="sm" />
    <Spinner variant="default" size="lg" />
    <Spinner variant="regular" size="sm" />
    <Spinner variant="regular" size="lg" />
</div>

```jsx
<>
    <Spinner variant="default" size="sm" />
    <Spinner variant="default" size="lg" />
    <Spinner variant="regular" size="sm" />
    <Spinner variant="regular" size="lg" />
</>
```

## Speed

The rotation speed of a Spinner can be altered using the `speed` property.

<div style={{ display: "flex", height: "120px", width: "auto" }}>
    <Spinner speed="slow" animation="linear" />
    <Spinner speed="normal" animation="linear" />
    <Spinner speed="fast" animation="linear" />
    <Spinner speed="slow" animation="ease" />
    <Spinner speed="normal" animation="ease" />
    <Spinner speed="fast" animation="ease" />
    <Spinner speed="slow" animation="bouncy" />
    <Spinner speed="normal" animation="bouncy" />
    <Spinner speed="fast" animation="bouncy" />
</div>

```jsx
<>
    <Spinner speed="slow" animation="linear" />
    <Spinner speed="normal" animation="linear" />
    <Spinner speed="fast" animation="linear" />
    <Spinner speed="slow" animation="ease" />
    <Spinner speed="normal" animation="ease" />
    <Spinner speed="fast" animation="ease" />
    <Spinner speed="slow" animation="bouncy" />
    <Spinner speed="normal" animation="bouncy" />
    <Spinner speed="fast" animation="bouncy" />
</>
```

## Buttons

Spinner can also be used with buttons. To use this component out-of-the-box you just need to wrap it with a `Button` component.

<div style={{ display: "flex", height: "auto", width: "auto" }}>
    <Button>
        <Spinner variant="regular" animation="linear" />
    </Button>
</div>

```jsx
<>
    <Button>
        <Spinner variant="regular" animation="linear" />
    </Button>
</>
```

## API

### Spinner

```jsx
import { Spinner } from 'jasper-ui'
```

|     Name     |   Type   |  Default  |                                                           Description                                                                   |
|--------------|----------|-----------|-----------------------------------------------------------------------------------------------------------------------------------------|
| `variant`    | `String` | `default` | Customize Spinner theme between `default` and `regular`                                                                                 |
| `size`       | `String` | `md`      | Specify the size of Spinner using `xs`, `sm`, `md`, `lg`, or `xl`.                                                                      |
| `speed`      | `String` | `normal`  | Speed up or slow down Spinner rotating speed using `slow`, `normal`, or `fast`                                                          |
| `animation`  | `String` | `linear`  | Change Spinner animation type.<br/><br/>Spinner may use one of a variety of animation variants such as:<br/>`linear`, `ease`, `bouncy`. |

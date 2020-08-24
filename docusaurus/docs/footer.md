---
id: footer
title: Footer
---

import { Footer } from '../../src/Footer/Docusaurus'

Footer is a component that contains brief information about Compfest and also contacts that can be used to reach Compfest. There also an input field to contain user email, that can be used by users to subscribe to Compfest so will not get lost of updated news from Compfest.

### Usage

We use footer to tell user brief information about Compfest and which contact that can be used for users to reach Compfest.

### Code

```jsx
import Facebook from "../static/img/FooterAssets/Facebook.svg"
import Instagram from "../static/img/FooterAssets/Instagram.svg"
import Line from "../static/img/FooterAssets/Line.svg"
import Twitter from "../static/img/FooterAssets/twitter.svg"
import Linkedin from "../static/img/FooterAssets/LinkedIn.svg"
import Youtube from "../static/img/FooterAssets/youtube.svg"
import Compfest from "../static/img/FooterAssets/compfest-white.svg"

<Footer
  Facebook={Facebook}
  Instagram={Instagram}
  Line={Line}
  Twitter={Twitter}
  LinkedIn={Linkedin}
  Youtube={Youtube}
  Compfest={Compfest}
/>
```

### Result

<Footer Facebook="../static/img/FooterAssets/Facebook.svg" Instagram="../static/img/FooterAssets/Instagram.svg" Line="../static/img/FooterAssets/Line.svg" Twitter="../static/img/FooterAssets/twitter.svg" LinkedIn="../static/img/FooterAssets/LinkedIn.svg" Youtube="../static/img/FooterAssets/youtube.svg" Compfest="../static/img/FooterAssets/compfest-white.svg" />

## Props

| Prop name | Type   | Mandatory/Optional | Description                                                                                 |
| --------- | ------ | ------------------ | ------------------------------------------------------------------------------------------- |
| Facebook  | String | Mandatory          | Path of Facebook SVG file that navigates to the Facebook account of Compfest when clicked   |
| Instagram | String | Mandatory          | Path of Instagram SVG file that navigates to the Instagram account of Compfest when clicked |
| Line      | String | Mandatory          | Path of Line SVG file that navigates to the Line account of Compfest when clicked           |
| Twitter   | String | Mandatory          | Path of Twitter SVG file that navigates to the Twitter account of Compfest when clicked     |
| LinkedIn  | String | Mandatory          | Path of LinkedIn SVG file that navigates to the LinkedIn account of Compfest when clicked   |
| Youtube   | String | Mandatory          | Path of Youtube SVG file that navigates to the Youtube account of Compfest when clicked     |
| Compfest  | String | Mandatory          | Path of Compfest logo SVG file                                                              |

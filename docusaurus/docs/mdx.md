---
id: mdx
title: Powered by MDX
---

import { Button } from 'jasper-ui'
import 'jasper-ui/dist/index.css'

You can write JSX and use React components within your Markdown thanks to [MDX](https://mdxjs.com/).

export const Highlight = ({children, color}) => ( <span style={{
  backgroundColor: color,
  borderRadius: '2px',
  color: '#fff',
  padding: '0.2rem',
}}> {children} </span> );

<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">Facebook blue</Highlight> are my favorite colors.

<Button>Helloww</Button>

I can write **Markdown** alongside my _JSX_!

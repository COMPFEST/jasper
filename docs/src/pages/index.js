import React from "react"
import { Link } from "gatsby"
import { Button } from 'jasper-ui'
import 'jasper-ui/dist/index.css'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello guys</h1>
    <p>Welcome to Jasper.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">
      <Button>Go to page 2</Button>
    </Link>
    <br/><br/>
  </Layout>
)

export default IndexPage

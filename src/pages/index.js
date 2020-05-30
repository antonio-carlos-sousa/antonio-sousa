import React from "react"

import SEO from "../components/seo"
import Layout from "../components/Layout"
import HomeContent from "../components/HomeContent"
import About from "../components/About"

const IndexPage = () => (
  <Layout>
    <SEO title="António Sousa" />
    <HomeContent />
  </Layout>
)

export default IndexPage

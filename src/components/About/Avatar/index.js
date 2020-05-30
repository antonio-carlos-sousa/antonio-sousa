import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Container, Avatar } from "./styled"

const AvatarComponent = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "antonio_carlos_sousa.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Container>
      <Avatar fluid={image.childImageSharp.fluid} alt="António Sousa" />
    </Container>
  )
}

export default AvatarComponent

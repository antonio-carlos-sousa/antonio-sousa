import React from "react"

import { About } from "./styled"

import Avatar from "./Avatar"

const AboutComponent = () => (
  <About style={{padding: "100px"}}>
    <Avatar />
    <div>Conteudo</div>
  </About>
)

export default AboutComponent

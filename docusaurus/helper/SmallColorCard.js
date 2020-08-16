import React from "react"
import styled from "styled-components"

const Card = styled.div`
  width: 62px;
  height: 62px;
  background: ${props => props.hex};
  border-radius: 10px;
`

const SmallColorCard = ({ hex, ...props }) => {
  return <Card hex={hex} {...props} />
}

export default SmallColorCard

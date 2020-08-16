import React from "react"
import styled from "styled-components"
import SmallColorCard from "./SmallColorCard"

const RolesContainer = styled.div`
  display: flex;
  flex-direction: row;
  .title {
    margin-bottom: 6px;
    color: #747373;
  }
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`

const ColorRoles = ({ hex, description, ...props }) => {
  return (
    <RolesContainer {...props}>
      <SmallColorCard hex={hex} />
      <Column>
        <h6 className="title">{hex}</h6>
        <p>{description}</p>
      </Column>
    </RolesContainer>
  )
}

export default ColorRoles

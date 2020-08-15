import React from "react"
import styled from "styled-components"

const Container = styled.div`
  border-radius: 10px;
  width: 232px;
`

const Color = styled.div`
  background: ${props => props.hex};
  height: 150px;
  border-radius: 10px 10px 0px 0px;
`

const Description = styled.div`
  background: #f3f3f3;
  border-radius: 0px 0px 10px 10px;
  padding: 11px 14px;
`

const ColorCard = ({ colorName, hex, rgb, ...props }) => {
  return (
    <Container {...props} >
      <Color hex={hex} />
      <Description>
        <h3>{colorName}</h3>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ flex: "1"}}>
            <p>Hex</p>
            <p>{hex}</p>
          </div>
          <div style={{ flex: "1"}}>
            <p>RGB</p>
            <p>{rgb}</p>
          </div>
        </div>
      </Description>
    </Container>
  )
}

export default ColorCard

import React from "react"
import styled from "styled-components"

const Container = styled.div`
  border-radius: 10px;
  width: 188px;

  h3 {
    color: #000000;
  }

  p {
    color: #000000;
  }
`

const Color = styled.div`
  background: ${(props) => props.hex};
  height: 150px;
  border-radius: 10px 10px 0px 0px;
`

const Description = styled.div`
  background: #f3f3f3;
  border-radius: 0px 0px 10px 10px;
  padding: 11px 14px 0 14px;

  .title {
    margin-bottom: 6px;
    color: #747373;
  }
`

const ColorCard = ({ colorName, hex, rgb, ...props }) => {
  return (
    <Container {...props}>
      <Color hex={hex} />
      <Description>
        <h3>{colorName}</h3>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ flex: "1" }}>
            <h6 className="title">Hex</h6>
            <p>{hex}</p>
          </div>
          <div style={{ flex: "1" }}>
            <h6 className="title">RGB</h6>
            <p>{rgb}</p>
          </div>
        </div>
      </Description>
    </Container>
  )
}

export default ColorCard

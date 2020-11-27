import React from "react"
import styled from "styled-components"

const Card = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 142px;
  height: 142px;
  border-radius: 10px;
  background: linear-gradient(
    135deg,
    ${(props) => props.firstColor} 0%,
    ${(props) => props.secondColor} 100%
  );

  p {
    margin: 0;
    color: #ffffff;
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  ${Card} {
    margin-right: 10px;
  }
`

const GradientCard = ({
  title,
  colorList,
  firstColor,
  secondColor,
  ...props
}) => {
  return (
    <div {...props}>
      <h3>{title}</h3>
      <Row>
        {colorList.map((value, index) => (
          <Card
            firstColor={value.firstColor}
            secondColor={value.secondColor}
            key={index}
          >
            <p>{value.firstColor}</p>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <p>{value.secondColor}</p>
            </div>
          </Card>
        ))}
      </Row>
    </div>
  )
}

export default GradientCard

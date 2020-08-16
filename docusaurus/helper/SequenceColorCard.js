import React from "react"
import styled from "styled-components"
import SmallColorCard from "./SmallColorCard"

const SequenceContainer = styled.div`
  .title {
    margin-bottom: 6px;
    color: #747373;
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  * {
    margin-right: 10px;
  }
`

const SequenceColorCard = ({ colorName, hexList, ...props }) => {
  return (
    <SequenceContainer {...props}>
      <h6 className="title">{colorName}</h6>
      <Row>
        {hexList.map((value, index) => (
          <SmallColorCard key={index} hex={value} />
        ))}
      </Row>
    </SequenceContainer>
  )
}

export default SequenceColorCard

import styled from "styled-components"

const Style = styled.div`
  .small-nav {
    margin-top: 30px;
    padding-bottom: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    font-size: 1.2rem;
    overflow-x: auto;
    color: white;
  }

  .small-nav div {
    display: block;
    margin: 0 10px;
    cursor: pointer;
    white-space: nowrap;

    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }

  @media (max-width: 992px) {
    .small-nav {
      display: flex;
      justify-content: center;
    }
  }

  .nav-content {
    display: flex;
    justify-content: center;
  }
`

export default Style

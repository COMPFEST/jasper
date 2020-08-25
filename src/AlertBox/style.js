import styled from "styled-components"

export const MyStyle = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  position: fixed;
  z-index: 1000;
  background-color: ${props => props.theme.colors.background ? props.theme.colors.background : "#000"};
  overflow: hidden;
  padding-bottom: 500px;

  .container {
    width: 100%;
    text-align: center;
    align-self: center;
  }

  .info-message {
    margin: auto;
    max-width: 650px;
    width: 80%;
    padding-bottom: 30px;
    font-size: 20px;
    color: #fff;
  }

  button {
    margin-left: 8px;
    margin-right: 8px;
  }

  button:nth-of-type(1) {
    background: transparent;
    border: 1px solid #f4f4f4;
  }
`

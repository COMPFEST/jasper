import styled from "styled-components"

export const StyledButton = styled.button`
  background: ${props => props.theme.colors.primary ? props.theme.colors.primary : "linear-gradient(111.34deg, #D418B6 0%, #F1185E 100%)"};
  border-radius: 100px;
  border: none;
  padding: 12px 22px;
  cursor: pointer;
  color: white;
  font-size: 16px;

  &.secondary {
    background: transparent;
    border: 2px solid #f4f4f4;
    padding: 10px 20px;
    color: white;
  }

  &.nude {
    background: transparent;
  }

  &.bold {
    font-weight: bold;
  }

  &:hover {
    opacity: 0.75;
  }
`

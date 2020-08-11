import styled from "styled-components"

export const DropdownLabel = styled.label`
  font-weight: 500;
`

export const DropdownContainer = styled.div`
  p {
    margin: 0;
  }

  .rotated {
    transform-box: fill-box;
    transform-origin: center;
    transform: rotate(180deg);
  }

  .background-active {
    background: #f3f3f3;
  }
`

export const DropdownWrapper = styled.div`
  margin-top: 8px;
  width: fit-content;
`

export const DropdownButton = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #000000;
  border-radius: 5px;
  background: #dbdbdb;
  font-weight: 400;
  padding: 8px 12px;
  justify-content: space-between;
  width: 300px;
  box-sizing: border-box;
  &:active,
  &:focus {
    outline: 0;
  }
`

export const DropdownUl = styled.ul`
  list-style-type: none;
  height: fit-content;
  width: 300px;
  padding-left: 0;
  background: #f3f3f3;
  z-index: 100;
  overflow: auto;
  margin-top: 0;
  font-weight: 400;

  .accent-background {
    background: #e5e5e5;
  }
`

export const DropdownWrapperLi = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`

export const DropdownLi = styled.li`
  padding: 8px 12px;
  width: 100%;
`

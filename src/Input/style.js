import styled from "styled-components"
import { Field } from "formik"

export const BaseInput = styled(Field)`
  width: calc(100% - 34px);
  padding: 10px 15px;
  color: ${(props) => props.theme.colors.primary};
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 5px;
  font-family: inherit;

  &::placeholder {
    color: ${(props) => props.theme.colors.primary};
    opacity: 0.5;
  }
`

export const RadioSpan = styled.span`
  display: block;
  color: ${(props) => props.theme.colors.primary};

  &:before {
    content: "";
    display: inline-block;
    width: 1.2rem;
    height: 1.2rem;
    vertical-align: -0.25rem;
    border-radius: 1.2rem;
    border: 1px solid ${(props) => props.theme.colors.primary};
    margin-right: 0.6rem;
    transition: background 0.2s ease;
    box-shadow: inset 0 0 0 0.3rem ${(props) => props.theme.colors.background};
  }
`

export const RadioButton = styled(Field)`
  border: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;
  margin: 0;
  padding: 0;
  position: absolute;
  width: 1px;

  &:checked + ${RadioSpan}:before {
    background: ${(props) => props.theme.colors.primary};
  }
`

export const PhoneSpan = styled.span`
  position: absolute;
  margin: 15px;
  color: ${(props) => props.theme.colors.primary};

  &:after {
    content: "";
    position: absolute;
    top: -5px;
    display: block;
    left: 2.5rem;
    width: 1px;
    height: calc(1rem + 10px);
    background: ${(props) => props.theme.colors.primary};
  }
`

export const CheckboxLabel = styled.label`
  color: ${(props) => props.theme.colors.primary};
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  /* Hide the browser's default checkbox */
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    border: 1px solid ${(props) => props.theme.colors.primary};
    border-radius: 2px;
  }

  /* On mouse-over, add a grey background color */
  &:hover input ~ .checkmark {
    background-color: rgba(0, 0, 0, 0.1);
  }

  /* When the checkbox is checked, add a blue background */
  input:checked ~ .checkmark {
    background-color: ${(props) => props.theme.colors.primary};
  }

  /* Style the checkmark/indicator */
  .checkmark:after {
    content: "";
    display: none;
    position: absolute;
    left: 7px;
    top: 3px;
    width: 5px;
    height: 10px;
    border: solid ${(props) => props.theme.colors.background};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }

  /* Show the checkmark when checked */
  input:checked ~ .checkmark:after {
    display: block;
  }
`

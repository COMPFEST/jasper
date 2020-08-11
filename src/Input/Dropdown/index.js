import React, { useState, useEffect, useRef } from "react"

import {
  DropdownLabel,
  DropdownLi,
  DropdownContainer,
  DropdownButton,
  DropdownUl,
  DropdownWrapperLi,
  DropdownWrapper
} from "./style"

// arrow SVG Button
const ArrowDropdown = ({ active }) => (
  <svg
    width="15"
    height="7"
    viewBox="0 0 15 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={active ? "rotated" : undefined}
  >
    <path
      d="M12.853 1H1.71826L7.28561 6L12.853 1Z"
      fill="#252C29"
      stroke="#252C29"
    />
  </svg>
)

const Dropdown = ({ field, form: { setFieldValue }, ...props }) => {
  const [show, setShow] = useState(false)
  const [value, setValue] = useState(props.placeholder)

  const node = useRef()

  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      return
    }
    setShow(false)
  }

  const _handleChange = (e) => {
    if (props.onChange) {
      props.onChange(e)
    }
    setShow(false)
    setValue(e)
    setFieldValue(field.name, e)
  }

  useEffect(() => {
    if (show) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [show])

  useEffect(() => {
    setFieldValue(field.name, value)
  }, [props.defaultValue])

  return (
    <DropdownContainer>
      <DropdownLabel>{props.label}</DropdownLabel>
      <DropdownWrapper
        ref={node}
        className={show ? "background-active" : undefined}
      >
        <DropdownButton onClick={(e) => setShow(!show)}>
          <p>{value}</p>
          <ArrowDropdown active={show} />
        </DropdownButton>
        {show && (
          <DropdownUl>
            {props.choices.map((value, idx) => (
              <DropdownWrapperLi
                key={value.index || value.id}
                onClick={() => _handleChange(value)}
              >
                <DropdownLi
                  key={value.index || value.id}
                  value={value.value}
                  className={idx % 2 !== 0 ? "accent-background" : undefined}
                >
                  <p>{value}</p>
                </DropdownLi>
              </DropdownWrapperLi>
            ))}
          </DropdownUl>
        )}
      </DropdownWrapper>
    </DropdownContainer>
  )
}

export default Dropdown

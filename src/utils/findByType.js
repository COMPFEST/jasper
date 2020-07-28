import React from 'react'

const findByType = (children, component) => {
  const result = []
  const type = Array.of(component.displayName || component.name)

  React.Children.forEach(children, child => {
    const childType = child && child.type && (child.type.displayName || child.type.name)
    if (type.includes(childType)) {
      result.push(child)
    }
  })
  /* Then we go through each React children, if one of matches the name of the sub-component we’re looking for we put it in the result array */
  return result
}

export default findByType

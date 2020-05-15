import React from 'react'
import PropTypes from "prop-types"

import Style from './style'

const Card = props => {
  return (
    <Style>
      <div id="card-body">
        <h1 id="title">{props.title}</h1>
        <p id="content">{props.content}</p>
        <a id="link" href={props.href}>{props.linkContent}</a>
      </div>
    </Style>
  )
}

Card.propTypes = {
  //title and content props is mandatory
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,

  //linkContent and href is optional
  linkContent: PropTypes.string,
  href: PropTypes.string,
}

export default Card

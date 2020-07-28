import React from 'react'
import PropTypes from "prop-types"

import Style from './style'

const Card = props => {
  const miniInformationCard = (title, content, linkContent, href) => {
    return (
      <div id="mini-information-card">
        <div id="card-body">
          <h1 id="title">{title}</h1>
          <p id="content">{content}</p>
          <a id="link" href={href}>{linkContent}</a>
        </div>
      </div>
    )
  }

  const largeCard = (title, text, image, miniTitle, buttonTop, buttonBottom) => {
    return (
      <div id="large-card">
        <div id="card-body">
          <div id='img-container'>
            <img src={image} alt=''/>
          </div>
          <div id='body'>
            <h3 id='mini-title'>{miniTitle}</h3>
            <h1 id='title'>{title}</h1>
            <div className="btn-container">
              {buttonTop}
            </div>
            <p id='text'>{text}</p>
            {buttonBottom}
          </div>
        </div>
      </div>
    )
  }

  const articleCard = (title, category, image) => {
    return (
      <div id="article-card">
        <div id="card-body">
          <div id="img-container">
            <img src={image} alt='' />
          </div>
          <h2>{category}</h2>
          <h1>{title}</h1>
        </div>
      </div>
    )
  }

  const renderCardType = props => {
    switch (props.type) {
      case 'large-card':
        return largeCard(props.title, props.text, props.image, props.miniTitle, props.buttonTop, props.buttonBottom)
      case 'article-card':
        return articleCard(props.title, props.category, props.image)
      default:
        return miniInformationCard(props.title, props.content, props.linkContent, props.href)
    }
  }

  return (
    <Style>
      {renderCardType(props)}
    </Style>
  )
}

Card.propTypes = {
  // title and content props is mandatory
  content: PropTypes.string.isRequired,

  // linkContent and href is optional
  linkContent: PropTypes.string,
  href: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
}

// Card.defaultProps = {
// }

export default Card

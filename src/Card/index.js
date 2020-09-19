import React from 'react'
import PropTypes from "prop-types"

import Style from './style'

const Card = props => {
  const miniInformationCard = ({ title, text, linkContent, href, id, ...other }) => {
    return (
      <div id="mini-information-card" {...other}>
        <div id="card-body">
          <h1 id="title">{title}</h1>
          <p id="content">{text}</p>
          <a id="link" href={href}>{linkContent}</a>
        </div>
      </div>
    )
  }

  const largeCard = ({ title, text, image, miniTitle, buttonTop, buttonBottom, id, ...other }) => {
    return (
      <div id="large-card" {...other} >
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

  const articleCard = ({ title, category, image, id, ...props }) => {
    return (
      <div id="article-card" {...props}>
        <div id="card-body">
          <div id="img-container">
            <img src={image} alt=''/>
          </div>
          <h2>{category}</h2>
          <h1>{title}</h1>
        </div>
      </div>
    )
  }

  const carouselCard = ({ caption, image, id, ...other }) => {
    return (
      <div id="carousel-card" {...other}>
        <div id="card-body">
          <div id="img-container">
            <img src={image} alt='' />
          </div>
          <h1 id="title">{caption}</h1>
        </div>
      </div>
    )
  }

  const renderCardType = (props) => {
    switch (props.type) {
      case 'large-card':
        return largeCard(props)
      case 'article-card':
        return articleCard(props)
      case 'carousel-card':
        return carouselCard(props)
      default:
        return miniInformationCard(props)
    }
  }

  return (
    <Style>
      {renderCardType(props)}
    </Style>
  )
}

Card.propTypes = {
  text: PropTypes.string,
  linkContent: PropTypes.string,
  href: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  caption: PropTypes.string,
  miniTitle: PropTypes.string,
  buttonTop: PropTypes.object,
  buttonBottom: PropTypes.object,
}

export default Card

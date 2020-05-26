import React, { Component } from 'react'
import PropTypes from "prop-types"

import Style from './style'

class SmallNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0
    }
  }

  render() {
    const navItems = this.props.navItems
    return (
      <Style>
        <div className="small-nav">
          {navItems.map((navItem, index) => (
            <div
              key={index}
              onClick={() => this.setState({ index: index })}
              style={{
                fontWeight:
                  this.state.index === index ? "bold" : "normal",
              }}
            >
              {navItem.title}
            </div>
          ))}
        </div>
        <div className="nav-content">
          {navItems[this.state.index].component}
        </div>
      </Style>
    )
  }
}

SmallNav.propTypes = {
  navItems: PropTypes.array.isRequired
}

export default SmallNav

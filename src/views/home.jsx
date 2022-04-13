import React, { Component } from 'react'
import Common from '../components/home/common'
import './home.less'

export default class home extends Component {
  render() {
    return (
      <div className='home'>
        <Common {...this.props}></Common>
      </div>
    )
  }
}

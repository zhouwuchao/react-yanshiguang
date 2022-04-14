import React, { Component } from 'react'
import {
  InfoCircleOutlined
} from '@ant-design/icons'
import './noData.less'

export default class noData extends Component {
  render() {
    return (
      <div className='noData'>
        <InfoCircleOutlined />
        <div className='string'>No Data</div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import { Row, Col } from 'antd'
import './news.less'
import {
  AlignLeftOutlined,
  EditOutlined,
  RightCircleOutlined
} from '@ant-design/icons'

export default class news extends Component {
  render() {
    return (
      <div className='news'>
        <Row justify="space-between">
          <Col flex="0 0 48%">
            <div className="boxOne container">
              <div className="title">
                <AlignLeftOutlined className='iconStyle'/>
                <span className='name'>新闻动态</span>
                <RightCircleOutlined className='iconStyle iconAction' onClick={this.openSelectIcon}/>
              </div>
              <div className="content"></div>
            </div>
          </Col>
          <Col flex="0 0 48%">
            <div className="boxTwo container">
              <div className="title">
                <EditOutlined className='iconStyle'/>
                <span className='name'>通知公告</span>
                <RightCircleOutlined className='iconStyle iconAction' onClick={this.openSelectIcon}/>
              </div>
              <div className="content"></div>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

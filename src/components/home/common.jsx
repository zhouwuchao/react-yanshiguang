import React, { Component } from 'react'
import { Row, Col, Modal, Button } from 'antd'
import {
  AppstoreOutlined,
  BellOutlined,
  SettingOutlined,
  RightCircleOutlined
} from '@ant-design/icons'
import 'antd/dist/antd.css'
import './common.less'

console.log('@icon')

export default class common extends Component {

  state = {
    visible: false,
    icons: [
      {
        name: '住院医生站',
        path: require('../../images/icons/01.png'),
        start: true
      },
      {
        name: '住院EMR',
        path: require('../../images/icons/02.png'),
        start: true
      },
      {
        star: false,
        name: "护理EMR",
        path: require('../../images/icons/03.png')
      },
      {
        star: true,
        name: "门诊医生站",
        path: require('../../images/icons/04.png')
      },
      {
        star: false,
        name: "急诊护理",
        path: require('../../images/icons/05.png')
      },
      {
        star: false,
        name: "急诊EMR",
        path: require('../../images/icons/06.png')
      },
      {
        star: true,
        name: "BI决策分析",
        path: require('../../images/icons/07.png')
      },
      {
        star: false,
        name: "院感系统",
        path: require('../../images/icons/08.png')
      },
      {
        star: true,
        name: "住院医嘱",
        path: require('../../images/icons/09.png')
      },
      {
        star: true,
        name: "门诊医嘱",
        path: require('../../images/icons/10.png')
      },
      {
        star: false,
        name: "数据集成平台监控",
        path: require('../../images/icons/11.png')
      },
      {
        star: false,
        name: "数据监控平台",
        path: require('../../images/icons/12.png')
      },
      {
        star: true,
        name: "单病种上报",
        path: require('../../images/icons/13.png')
      },
      {
        star: true,
        name: "患者360",
        path: require('../../images/icons/14.png')
      },
      {
        star: false,
        name: "传染病系统",
        path: require('../../images/icons/15.png')
      },
      {
        star: false,
        name: "物资领情",
        path: require('../../images/icons/16.png')
      },
      {
        star: false,
        name: "影像系统",
        path: require('../../images/icons/17.png')
      },
      {
        star: false,
        name: "检验系统",
        path: require('../../images/icons/18.png')
      },
      {
        star: false,
        name: "OA系统",
        path: require('../../images/icons/19.png')
      },
      {
        star: false,
        name: "手麻系统",
        path: require('../../images/icons/20.png')
      },
      {
        star: false,
        name: "号源系统",
        path: require('../../images/icons/21.png')
      },
      {
        star: false,
        name: "排班系统",
        path: require('../../images/icons/22.png')
      },
      {
        star: false,
        name: "输血系统",
        path: require('../../images/icons/23.png')
      },
      {
        star: false,
        name: "闭环管理系统",
        path: require('../../images/icons/24.png')
      },
      {
        star: false,
        name: "ICU重症系统",
        path: require('../../images/icons/25.png')
      },
      {
        star: false,
        name: "预约系统",
        path: require('../../images/icons/26.png')
      },
      {
        star: false,
        name: "门诊EMR",
        path: require('../../images/icons/27.png')
      },
      {
        star: true,
        name: "员工360",
        path: require('../../images/icons/28.png')
      }
    ]
  }
  
  render() {
    const { visible, icons } = this.state
    console.log(icons)
    return (
      <div className='common'>
        <Row justify="space-between">
          <Col span={6}>
            <div className="application container">
              <div className="title">
                <AppstoreOutlined className='iconStyle'/>
                <span className='name'>常用应用</span>
                <RightCircleOutlined className='iconStyle iconAction' onClick={this.openSelectIcon}/>
              </div>
            </div>
          </Col>
          <Col span={10}>
            <div className="unredMessage container">
              <div className="title">
                <BellOutlined className='iconStyle'/>
                <span className='name'>待阅消息</span>
                <RightCircleOutlined className='iconStyle iconAction' onClick={this.seeMoreMessage}/>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="phone container">
              <div className="title">
                <SettingOutlined className='iconStyle'/>
                <span className='name'>通讯录</span>
              </div>
            </div>
          </Col>
        </Row>
        <Modal
          title="全部应用系统"
          centered
          visible={visible}
          cancelText="取消"
          okText="确定"
          onOk={() => this.setState({visible: false})}
          onCancel={() => this.setState({visible: false})}
          width={1000}
        >
          {/* 设置每个元素左边距和右边距总和为10,行与行间距为10 */}
          <Row gutter={[10, 10]}>
            {
              icons.map((ele, index) => (
                <Col key={ele.name} flex="0 0 14.28571%">
                  <div className="iconBox" style={{width: '100%', height: '100px', backgroundColor: 'yellow'}}></div>
                </Col>
              ))
            }
          </Row>
        </Modal>
      </div>
    )
  }

  openSelectIcon = () => {
    this.setState({
      visible: true
    })
  }

  seeMoreMessage = () => {
    this.props.history.push('/table')
  }
}

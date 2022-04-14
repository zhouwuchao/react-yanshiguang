import React, { Component } from 'react'
import { Row, Col, Modal } from 'antd'
import {
  AppstoreOutlined,
  BellOutlined,
  SettingOutlined,
  RightCircleOutlined
} from '@ant-design/icons'
import 'antd/dist/antd.css'
import './common.less'
import store from '../../store'
import unlove from '../../images/icons/unlove.png'
import love from '../../images/icons/love.png'
import Nodata from '../../tool/noData'

export default class common extends Component {

  state = {
    visible: false,
    iconArr: [],
    starIconArr: []
  }

  componentDidMount() {
    this.getStarIsTrueApplication()
    this.getDefaultSystemApplication()
  }
  
  render() {
    const { visible, iconArr, starIconArr } = this.state
    console.log(starIconArr)
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
              <div className="content">
                <Row gutter={[10, 10]}>
                  {
                    starIconArr.length > 0?
                    starIconArr.map(ele => (
                      <Col key={ele.name} flex="0 0 23%">
                        <div
                          className="iconBox"
                          style={{
                            width: '100%',
                            height: '100px',
                            borderRadius: '10px',
                            position: 'relative',
                            overflowY: 'hidden'
                          }}
                        >
                          <img
                            src={ele.path}
                            style={{
                              width: '50px',
                              height: '50px',
                              position: 'absolute',
                              left: '50%',
                              top: '50%',
                              transform: 'translate(-50%, -70%)'
                            }}
                            alt="icon"
                          />
                          <div
                            style={{
                              textAlign: 'center',
                              position: 'absolute',
                              bottom: '4px',
                              width: '100%',
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis'
                            }}
                            title={ele.name}
                          >{ ele.name }</div>
                        </div>
                      </Col>
                    )):
                    <Nodata></Nodata>
                  }
                </Row>
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
          onOk={() => this.modalAction('ok')}
          onCancel={() => this.modalAction('cancel')}
          width={1000}
        >
          {/* 设置每个元素左边距和右边距总和为10,行与行间距为10 */}
          <Row gutter={[10, 10]}>
            {
              iconArr.map((ele, index) => (
                <Col key={ele.name} flex="0 0 14.28571%">
                  <div
                    className="iconBox"
                    style={{
                      width: '100%',
                      height: '100px',
                      border: '1px solid #ccc',
                      borderRadius: '10px',
                      position: 'relative'
                    }}
                  >
                    <img
                      src={ele.path}
                      style={{
                        width: '50px',
                        height: '50px',
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -70%)'
                      }}
                      alt="icon"
                    />
                    <img
                      src={ele.star? love: unlove}
                      alt="star"
                      style={{
                        float: 'right',
                        marginRight: '15px',
                        marginTop: '10px',
                        cursor: 'pointer'
                      }}
                      onClick={() => this.changeStar(index)}
                    />
                    <div style={{textAlign: 'center', position: 'absolute', bottom: '4px', width: '100%'}}>{ ele.name }</div>
                  </div>
                </Col>
              ))
            }
          </Row>
        </Modal>
      </div>
    )
  }

  getDefaultSystemApplication() {
    this.setState({
      iconArr: store.getState().icons
    })
  }

  getStarIsTrueApplication() {
    this.setState({
      starIconArr: store.getState().icons.filter(ele => ele.star)
    })
  }

  modalAction(action) {
    if (action === 'cancel') {
      this.getDefaultSystemApplication()
    } else {
      store.dispatch({
        type: 'changeAllSystemApplication',
        data: this.state.iconArr
      })
    }
    this.setState({
      visible: false
    })
  }

  openSelectIcon = () => {
    this.setState({
      visible: true
    })
  }

  seeMoreMessage = () => {
    this.props.history.push('/table')
  }

  changeStar(index) {
    this.setState({
      iconArr: this.state.iconArr.map((ele, currentIndex) => {
        return currentIndex === index? { ...ele, star: !ele.star }: ele
      })
    })
  }
}

import React, { Component } from 'react'
import { Row, Col, Modal } from 'antd'
import {
  AppstoreOutlined,
  BellOutlined,
  SettingOutlined,
  RightCircleOutlined,
  RightOutlined
} from '@ant-design/icons'
import 'antd/dist/antd.css'
import './common.less'
import store from '../../store'
import unlove from '../../images/icons/unlove.png'
import love from '../../images/icons/love.png'
import alarm from '../../images/icons/alarm.png'
import normal from '../../images/icons/normal.png'
import Nodata from '../../tool/noData'

export default class common extends Component {
  state = {
    visible: false,
    iconArr: [],
    starIconArr: [],
    unreadMessage: [
      {
        typeName: "危急值",
        type: 'danger',
        time: "2021-10-20 11:35:29.028",
        message: "危急值通知: xx科,张三患者,男,48岁,就诊号3654760,于2021-10-20 11:15:32做的血常规中存在高级别危急值结果，结果为xxx，请相关临床负责人立即予以接报处理。",
      },
      {
        typeName: "体温异常",
        type: 'normal',
        time: "2021-10-20 10:55:22.365",
        message: "注意: 05床,xx患者,于2021-10-20 10:55时,测量体温38.5℃,体温异常,请注意监测。",
      },
      {
        typeName: "护理提示",
        type: 'normal',
        time: "2021-10-20 10:15:29.022",
        message: "值班护士请注意,05床,xx患者,明日起护理等级调整为二级护理。",
      },
      {
        typeName: "体温异常",
        type: 'normal',
        time: "2021-10-20 10:39:29.128",
        message: "注意: 01床,xx患者,于2021-10-20 10:37时,测量体温37.9℃,体温异常,请注意监测。",
      },
      {
        typeName: "病历质控",
        type: 'normal',
        time: "2021-10-20 10:15:29.026",
        message: "值班护士请注意,08床,xx患者,缺少10点体温测量记录,请及时测量并登记。",
      }
    ]
  }
  componentDidMount() {
    this.getStarIsTrueApplication()
    this.getDefaultSystemApplication()
  }
  render() {
    const { visible, iconArr, starIconArr, unreadMessage } = this.state
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
              <div className="content">
                {
                  unreadMessage.map(ele => (
                    <div
                      className="messageBopx"
                      key={ele.time}
                      style={{
                        background: ele.type === 'danger'?
                        'linear-gradient(265deg, rgba(215, 84, 84, 0.04) 0%, rgba(215, 84, 84, 0.04) 100%)':
                        'linear-gradient(265deg, rgba(77, 147, 159, 0.04) 0%, rgba(77, 147, 159, 0.04) 100%)',
                        display: 'flex'
                      }}>
                        <div
                          className="left"
                          style={{
                            width: '60px',
                            height: '60px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                          }}
                        >
                          <img
                            src={ ele.type === 'danger'? alarm: normal }
                            alt="icon"
                          />
                        </div>
                        <div className="middle" style={{flex: '1', overflow: 'hidden'}}>
                          <div style={{marginTop: '10px'}}>
                            <span
                              style={{
                                color: ele.type === 'danger'? 'rgb(223, 45, 45)': 'rgb(27, 154, 178)',
                                background: ele.type === 'danger'? 'rgba(215, 84, 84, 0.1)': 'rgb(227, 241, 243)',
                                marginRight: '10px'
                              }}
                            >
                              { ele.typeName }
                            </span>
                            <span style={{fontSize: '14px', fontWeight: '700'}}>{ ele.time }</span>
                          </div>
                          <div
                            style={{
                              whiteSpace: 'nowrap',
                              textOverflow: 'ellipsis',
                              width: '100%',
                              overflow: 'hidden',
                              color: '#647288'
                            }}>
                            { ele.message }
                          </div>
                        </div>
                        <div className="right" style={{width: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer'}}>
                          <RightOutlined />
                        </div>
                    </div>
                  ))
                }
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
      iconArr: store.getState().allSystemApplication.icons
    })
  }
  getStarIsTrueApplication() {
    this.setState({
      starIconArr: store.getState().allSystemApplication.icons.filter(ele => ele.star)
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
    store.dispatch({
      type: 'changeMenuKey',
      data: 'table'
    })
  }
  changeStar(index) {
    this.setState({
      iconArr: this.state.iconArr.map((ele, currentIndex) => {
        return currentIndex === index? { ...ele, star: !ele.star }: ele
      })
    })
  }
}

import React, { Component } from 'react'
import { Row, Col, Modal, Pagination, Radio, Input } from 'antd'
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
import startWhite from '../../images/icons/startWhite.png'
import starYellow from '../../images/icons/starYellow.png'

const { Search } = Input

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
        message: "危急值通知: xx科,张三患者,男,48岁,就诊号3654760,于2021-10-20 11:15:32做的血常规中存在高级别危急值结果,结果为xxx,请相关临床负责人立即予以接报处理。"
      },
      {
        typeName: "体温异常",
        type: 'normal',
        time: "2021-10-20 10:55:22.365",
        message: "注意: 05床,xx患者,于2021-10-20 10:55时,测量体温38.5℃,体温异常,请注意监测。"
      },
      {
        typeName: "护理提示",
        type: 'normal',
        time: "2021-10-20 10:15:29.022",
        message: "值班护士请注意,05床,xx患者,明日起护理等级调整为二级护理。"
      },
      {
        typeName: "体温异常",
        type: 'normal',
        time: "2021-10-20 10:39:29.128",
        message: "注意: 01床,xx患者,于2021-10-20 10:37时,测量体温37.9℃,体温异常,请注意监测。"
      },
      {
        typeName: "病历质控",
        type: 'normal',
        time: "2021-10-20 10:15:29.026",
        message: "值班护士请注意,08床,xx患者,缺少10点体温测量记录,请及时测量并登记。"
      },
      {
        typeName: "体温异常",
        type: 'normal',
        time: "2022-10-20 10:56:22.365",
        message: "注意: 07床,xx患者,于2022-10-20 10:56时,测量体温39℃,体温异常,请注意监测。"
      },
      {
        typeName: "危急值",
        type: 'danger',
        time: "2022-04-18 11:35:29.028",
        message: "危急值通知: xx科,张三患者,男,48岁,就诊号3654760,于2022-04-18 11:21:32做的血常规中存在高级别危急值结果,结果为xxx,请相关临床负责人立即予以接报处理。"
      }
    ],
    currentPage: 1,
    radioValue: 1,
    address: [
      {
        name: '任美书',
        phone: '17758775627',
        duty: false,
        collection: false
      },
      {
        name: '张舒美',
        phone: '17858785628',
        duty: false,
        collection: false
      },
      {
        name: '于向西',
        phone: '17958795629',
        duty: true,
        collection: false
      },
      {
        name: '周之花',
        phone: '18058805630',
        duty: true,
        collection: true
      },
      {
        name: '纪岩红',
        phone: '18158815631',
        duty: true,
        collection: true
      }
    ]
  }
  componentDidMount() {
    this.getStarIsTrueApplication()
    this.getDefaultSystemApplication()
  }
  componentDidUpdate() {
  }
  render() {
    console.log('render')
    const { visible, iconArr, starIconArr, unreadMessage, currentPage, radioValue, address } = this.state
    let addressValue
    switch (radioValue) {
      case 1:
        addressValue = address.filter(ele => ele.collection)
        break;
      // case 3:
      //   addressValue = address
      //   break;
      case 4:
        addressValue = address.filter(ele => ele.duty)
        break;
      default:
        addressValue = address
        break;
    }
    let currentUnreadMessage = unreadMessage.slice((currentPage - 1) * 5, 5 * currentPage)
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
                        <div className="iconBox">
                          <img src={ele.path} alt="icon"/>
                          <div title={ele.name}>{ ele.name }</div>
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
                  currentUnreadMessage.map(ele => (
                    <div className={ele.type === 'danger'? 'dangerBox': 'normalBox'} key={ele.time}>
                      <div className="left">
                        <img src={ ele.type === 'danger'? alarm: normal } alt="icon"/>
                      </div>
                      <div className="middle">
                        <div style={{marginTop: '10px'}}>
                          <span className={ele.type === 'danger'? 'dangerSpan': 'normalSpan'}>
                            { ele.typeName }
                          </span>
                          <span className='timeSpan'>{ ele.time }</span>
                        </div>
                        <div className='notice'>
                          { ele.message }
                        </div>
                      </div>
                      <div className="right">
                        <RightOutlined />
                      </div>
                    </div>
                  ))
                }
                <Pagination
                  defaultCurrent={1}
                  total={unreadMessage.length}
                  hideOnSinglePage={true}
                  pageSize={5}
                  pageSizeOptions={5}
                  onChange={this.changeCurrentPage}
                />
              </div>
            </div>
          </Col>
          <Col span={7}>
            <div className="phone container">
              <div className="title">
                <SettingOutlined className='iconStyle'/>
                <span className='name'>通讯录</span>
              </div>
              <div className="content">
                <span>选择分组：</span>
                <Radio.Group onChange={this.changeRadio} value={radioValue} compact={true}>
                  <Radio value={1} style={{color: radioValue === 1? 'rgba(52, 132, 147, 1)': '#000'}}>收藏</Radio>
                  {/* <Radio value={2} style={{color: radioValue === 2? 'rgba(52, 132, 147, 1)': '#000'}}>科室</Radio> */}
                  <Radio value={3} style={{color: radioValue === 3? 'rgba(52, 132, 147, 1)': '#000'}}>全院</Radio>
                  <Radio value={4} style={{color: radioValue === 4? 'rgba(52, 132, 147, 1)': '#000'}}>值班</Radio>
                </Radio.Group>
                <Search
                  placeholder="输入联系方式模糊搜索"
                  allowClear
                  enterButton="搜索"
                  size="middle"
                  onSearch={this.onSearch}
                />
                <ul>
                  {
                    addressValue.map(ele => (
                      <li key={ele.phone}>
                        <span>{ele.name}</span>
                        <span>{ele.phone}</span>
                        <img src={ele.collection? starYellow: startWhite} alt="icon" onClick={() => this.changeCollection(ele.phone)}/>
                      </li>
                    ))
                  }
                </ul>
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
    setTimeout(() => {
      this.setState({
        visible: true
      })
    }, 0)
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
  changeCurrentPage = page => {
    this.setState({currentPage: page})
  }
  changeRadio = e => this.setState({radioValue: e.target.value})
  onSearch = v => console.log(v)
  changeCollection(phone) {
    this.setState({
      address: this.state.address.map(ele => ele.phone === phone? { ...ele, collection: !ele.collection }: ele)
    })
  }
}
 
import React, { Component } from 'react'
import { Row, Col } from 'antd'
import './news.less'
import {
  AlignLeftOutlined,
  EditOutlined,
  RightCircleOutlined
} from '@ant-design/icons'

export default class news extends Component {
  state = {
    news: [
      {
        title: '英雄归来 | 不懈追求的航天梦',
        date: '2022年04月17日 16:17',
        url: 'https://news.cctv.com/2022/04/17/ARTIxXYoRehdcmuh0mTJUF8n220415.shtml'
      },
      {
        title: '严格落实常态化疫情防控措施',
        date: '2022年04月18日 00:00',
        url: 'https://wap.peopleapp.com/article/6635472/6510858'
      },
      {
        title: '中国空间站将于今年完成在轨建造',
        date: '2022年04月17日 22:43',
        url: 'https://h.xinhuaxmt.com/vh512/share/10738410'
      },
      {
        title: '一季度中国经济开局总体平稳',
        date: '2022年04月18日 10:01',
        url: 'http://www.news.cn/fortune/2022-04/18/c_1128569670.htm'
      },
      {
        title: '坚持"动态清零" 不犹豫不动摇',
        date: '2022年04月17日 06:33',
        url: 'https://kepu.gmw.cn/2022-04/17/content_35664701.htm'
      },
      {
        title: '31省区市昨日新增本土"2723+20639" 其中上海"2417+19831"',
        date: '2022年04月17日 06:33',
        url: 'https://kepu.gmw.cn/2022-04/17/content_35664701.htm'
      }
    ],
    notice: [
      {
        title: '关于恢复口腔科、眼科、耳鼻喉科正常门诊的通知',
        date: '2022年04月13日',
        url: 'https://www.jsatcm.com/news/content/id/262/pid/10356.shtml'
      },
      {
        title: '应急支援上海、镇江核酸采样',
        date: '2022年04月12日',
        url: 'https://mp.weixin.qq.com/s/FMbxGb1bEQxmdMsUwfqOXg'
      },
      {
        title: '南京市第一医院全面恢复日常诊疗工作',
        date: '2022年04月13日',
        url: 'https://mp.weixin.qq.com/s/QR0YAcGwghUxSnlQCXxMSQ'
      },
      {
        title: '南京最大"方舱医院"将由南京市第一医院运行管理',
        date: '2022年04月13日',
        url: 'https://mp.weixin.qq.com/s/_gguW0rkpz8w4VdgdaqALA'
      },
      {
        title: '南儿驰援 苏沪齐心',
        date: '2022年04月02日',
        url: 'https://www.njch.com.cn/news/detail.asp?ID=8162'
      },
      {
        title: '我院举行新冠隔离点危重患儿抢救演练',
        date: '2022年04月06日',
        url: 'https://www.njch.com.cn/news/detail.asp?ID=8163'
      }
    ]
  }
  render() {
    const { news, notice } = this.state
    return (
      <div className='news'>
        <Row justify="space-between">
          {/* <Col flex="0 0 48%"> */}
          <Col span={11}>
            <div className="boxOne container">
              <div className="title">
                <AlignLeftOutlined className='iconStyle'/>
                <span className='name'>新闻动态</span>
                {/* <RightCircleOutlined className='iconStyle iconAction' onClick={this.openSelectIcon}/> */}
              </div>
              <div className="content">
                <ul>
                  {
                    news.map(ele => (
                      <li key={ele.title} onClick={() => this.seeNews(ele.url)}>
                        <span>
                          <div className="circle"></div>
                        </span>
                        <span>{ele.title}</span>
                        <span>{ele.date}</span>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </Col>
          {/* <Col flex="0 0 48%"> */}
          <Col span={11}>
            <div className="boxTwo container">
              <div className="title">
                <EditOutlined className='iconStyle'/>
                <span className='name'>通知公告</span>
                {/* <RightCircleOutlined className='iconStyle iconAction' onClick={this.openSelectIcon}/> */}
              </div>
              <div className="content noticeContent">
              <ul>
                  {
                    notice.map(ele => (
                      <li key={ele.title} onClick={() => this.seeNews(ele.url)}>
                        <span>
                          <div className="circle"></div>
                        </span>
                        <span>{ele.title}</span>
                        <span>{ele.date}</span>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
  seeNews(url) {
    window.open(url)
  }
}

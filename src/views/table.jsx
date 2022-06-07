import React, { Component } from 'react'
import * as echarts from 'echarts'
import { Row, Col, Modal, Pagination, Radio, Input } from 'antd'
import './table.less'

export default class table extends Component {
  state = {
    dataOne: [
      { value: 103, name: '今日入院' },
      { value: 83, name: '今日出院' },
      { value: 253, name: '当前在院' }
    ],
    dataTwo: [
      { value: 363, name: '当前已使用床位' },
      { value: 95, name: '当前空闲床位' },
      // { value: 253, name: '当前在院' }
    ]
  }
  render() {
    return (
      <div className='table'>
        <Row justify="space-around">
          <Col span={24}>
            <div className="application container">
              <div className="title">
                <span className='name'>医疗资源占用信息</span>
              </div>
              <Row>
                <Col span={12}>
                  <div className="content">
                    <div id="pieOne" style={ { width: '100%', height: '345px'} }></div>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="content">
                    <div id="pieTwo" style={ { width: '100%', height: '345px'} }></div>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="body">
              <Row>
                <Col span={24}>
                  <div className="title">
                    <span className='name'>医院客流量信息</span>
                  </div>
                  <Row>
                    <Col span={24}>
                      <div className="content">
                        <div id="lineOne" style={ { width: '100%', height: '345px'} }></div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
  componentDidMount() {
    const myChartOne = echarts.init(document.getElementById('pieOne'))
    const myChartTwo = echarts.init(document.getElementById('pieTwo'))
    const myChartLineOne = echarts.init(document.getElementById('lineOne'))
    window.onresize = () => {
      myChartOne.resize({
        width: document.getElementsByClassName('content')[0].clientWidth
      })
      myChartTwo.resize({
        width: document.getElementsByClassName('content')[1].clientWidth
      })
    }
    myChartOne.setOption({
      /* 标题名称以及坐标 */
      title: {
        text: '医院病人情况',
        top: '20px',
        left: 'center'
      },
      /* 鼠标悬停在扇形图的信息提示框 */
      tooltip: {
        /* show: true  默认值为true */
        // formatter: `类型: {b}</br>人数: {c}</br>占比: {d}%`,
        formatter: p => `
          <div style="color: ${p.color}">类别: ${p.name}</div>
          <div style="color: ${p.color}">人数: ${p.value}</div>
          <div style="color: ${p.color}">占比: ${p.percent}%</div>
        `
      },
      /* 图例的坐标 */
      legend: {
        orient: 'vertical',
        left: '20px',
        top: '30px'
      },
      series: [
        {
          type: 'pie',
          width: '100%',
          height: '100%',
          top: '20px',
          radius: ['40%', '70%'],
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 1
          },
          data: this.state.dataOne,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          /* 显示数据信息 */
          label: {
            position: 'outside',
            formatter: '{c}人'
          }
        }
      ]
    })
    myChartTwo.setOption({
      /* 标题名称以及坐标 */
      title: {
        text: '医院病床使用情况',
        top: '20px',
        left: 'center'
      },
      /* 鼠标悬停在扇形图的信息提示框 */
      tooltip: {
        /* show: true  默认值为true */
        // formatter: `类型: {b}</br>人数: {c}</br>占比: {d}%`,
        formatter: p => `
          <div style="color: ${p.color}">类别: ${p.name}</div>
          <div style="color: ${p.color}">人数: ${p.value}</div>
          <div style="color: ${p.color}">占比: ${p.percent}%</div>
        `
      },
      /* 图例的坐标 */
      legend: {
        orient: 'vertical',
        left: '20px',
        top: '30px'
      },
      series: [
        {
          type: 'pie',
          width: '100%',
          height: '100%',
          top: '20px',
          radius: ['40%', '70%'],
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 1
          },
          data: this.state.dataTwo,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          /* 显示数据信息 */
          label: {
            position: 'outside',
            formatter: '{c}个'
          }
        }
      ]
    })
    myChartLineOne.setOption({
      xAxis: {
        name: '日期',
        nameTextStyle: {
          color: 'orange',
        },
        data: [
          '2022-05-01',
          '2022-05-02',
          '2022-05-03',
          '2022-05-04',
          '2022-05-05',
          '2022-05-06',
          '2022-05-07',
          '2022-05-08',
          '2022-05-09',
          '2022-05-10',
          '2022-05-11',
          '2022-05-12',
          '2022-05-13',
          '2022-05-14',
          '2022-05-15',
          '2022-05-16',
          '2022-05-17',
          '2022-05-18',
          '2022-05-19',
          '2022-05-20',
          '2022-05-21',
          '2022-05-22',
          '2022-05-23',
          '2022-05-24',
          '2022-05-25',
          '2022-05-26',
          '2022-05-27',
          '2022-05-28',
          '2022-05-29',
          '2022-05-30',
          '2022-05-31',
          '2022-06-01',
          '2022-06-02',
          '2022-06-03',
          '2022-06-04',
          '2022-06-05',
          '2022-06-06'
        ],
        // minInterval: 1,
        // axicTick: {
        //   alignWithLabel: true
        // },
        axisLabel: { 
          interval: 0,
          /* 坐标颜色交替显示 */
          color: (value, index) => index % 2 === 0? '#5470c6': '#91cc75',
          // color: (value, index) => console.log(value),
          rotate: 30,
          fontSize: 12,

          // margin: 50
          // hideOverlap: true
          // rotate: 90,
          // inside: false,
          // width: '40px'
          // align: 'center'
        }
        // type: 'time'
      },
      yAxis: {
        name: '人数',
        nameTextStyle: {
          color: 'orange',
          padding: [0, 55, 0, 0]
        },
        /* y轴左侧显示还是右侧显示 */
        position: 'left',
        // offset: 0
      },
      /* 开启缩放,当x轴数据过多时 */
      dataZoom: [
        {
          type: 'slider',
          start: 30,
          end: 80
        }
      ],
      series: [
        {
          type: 'bar',
          data: [5, 8, 18, 22, 23, 20, 25, 50, 85, 120, 90, 85, 100, 110, 150, 200, 302, 450, 755, 450, 420, 502, 600, 1000, 1203, 955, 1500, 2003, 3500, 3402, 2850, 2900, 3006, 3100, 2950, 2986, 2876],
          label: {
            show: true,
            position: 'top',
            color: '#5470c6'
          }
        },
        {
          type: 'bar',
          data: [7, 10, 18, 25, 27, 28, 27, 55, 90, 125, 92, 88, 105, 112, 155, 205, 355, 500, 800, 483, 440, 535, 622, 1100, 1300, 975, 1800, 2200, 3600, 3500, 2900, 2950, 3150, 3200, 2958, 3015, 2900],
          label: {
            show: true,
            position: 'top',
            color: '#91cc75',
            offset: [0, -20]
          }
        }
      ]
    })
  }
}

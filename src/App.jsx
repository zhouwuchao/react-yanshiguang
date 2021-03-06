import React, { Component, Suspense } from 'react'
import { Layout, Menu } from 'antd'
import {
  HomeOutlined,
  CommentOutlined,
  DatabaseOutlined,
} from '@ant-design/icons'
import 'antd/dist/antd.css'
import './App.less'
import { withRouter, Switch, Route, Redirect } from 'react-router-dom'
import { routers } from './router'
import store from './store'
// import * as echarts from 'echarts/core'
// import { BarChart } from 'echarts/charts'

// import {
//   TitleComponent,
//   TooltipComponent,
//   GridComponent,
//   DatasetComponent,
//   TransformComponent
// } from 'echarts/components'

// import { LabelLayout, UniversalTransition } from 'echarts/features'
// import { CanvasRenderer } from 'echarts/renderers'

// echarts.use([
//   TitleComponent,
//   TooltipComponent,
//   GridComponent,
//   DatasetComponent,
//   TransformComponent,
//   BarChart,
//   LabelLayout,
//   UniversalTransition,
//   CanvasRenderer
// ])

const { Header, Content, Footer } = Layout

class App extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <Layout className="layout">

        <Header>
          <div className="logo" />
          <Menu onClick={this.handleClick} selectedKeys={[store.getState().menuKey.key]} mode="horizontal">
            <Menu.Item key="home" icon={<HomeOutlined className='iconfontFontSize'/>}>
              首页
            </Menu.Item>
            <Menu.Item key="table" icon={<DatabaseOutlined className='iconfontFontSize'/>}>
              工作台
            </Menu.Item>
            <Menu.Item key="message" icon={<CommentOutlined className='iconfontFontSize'/>}>
              消息
            </Menu.Item>
          </Menu>
        </Header>

        <Content>
          <Switch>
            <Suspense fallback={<>loading...</>}>
              {
                routers.map(router => (
                  <Route path={router.path} component={props => <router.component {...props} />} key={router.path}></Route>
                ))
              }
              <Redirect to={`/home`} />
            </Suspense>
          </Switch>
        </Content>

        <Footer style={{ textAlign: 'center' }}>webpack-react ©2022 Created by ZhouWuChao</Footer>
        
      </Layout>
    )
  }
  handleClick = item => {
    store.dispatch({
      type: 'changeMenuKey',
      data: item.key
    })
    this.props.history.push(`/${item.key}`)
  }
}

export default withRouter(App)
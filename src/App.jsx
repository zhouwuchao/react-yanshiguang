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

const { Header, Content, Footer } = Layout

class App extends Component {

  state = {
    current: 'home',
  }

  render() {

    const { current } = this.state

    return (

      <Layout className="layout">

        <Header>
          <div className="logo" />
          <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
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
                  // <Route path={router.path} component={() => router.component} key={router.path}></Route>
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
    this.setState({current: item.key})
    this.props.history.push(`/${item.key}`)
  }
}

export default withRouter(App)
// export default () => (
//   <ConfigProvider>
//     withRouter(App)
//   </ConfigProvider>
// )
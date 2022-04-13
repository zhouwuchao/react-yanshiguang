import React, { lazy } from 'react'

const Home = lazy(() => import(/* webpackPrefetch: true, webpackChunkName: 'home' */'../views/home'))
const Table = lazy(() => import(/* webpackPrefetch: true, webpackChunkName: 'table' */'../views/table'))
const Message = lazy(() => import(/* webpackPrefetch: true, webpackChunkName: 'message' */'../views/message'))

export const routers = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/table',
    component: Table
  },
  {
    path: '/message',
    component: Message
  }
]
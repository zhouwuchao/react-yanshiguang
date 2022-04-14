import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { HashRouter } from 'react-router-dom'
import store from './store'

ReactDOM.render(
  <HashRouter>
    <App></App>
  </HashRouter>,
  document.getElementById('app')
)

store.subscribe(() => {
  ReactDOM.render(
    <HashRouter>
      <App></App>
    </HashRouter>,
    document.getElementById('app')
  )
})
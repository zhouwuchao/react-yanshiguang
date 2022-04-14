import { createStore, combineReducers, applyMiddleware } from "redux"
import allSystemApplication from "../reducer/allSystemApplication"
import menuKey from "../reducer/menuKey"
import thunk from 'redux-thunk'

const mergeReducers = combineReducers({
  allSystemApplication,
  menuKey
})

export default createStore(mergeReducers, applyMiddleware(thunk))
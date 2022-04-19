import { createStore, combineReducers, applyMiddleware } from "redux"
import allSystemApplication from "../reducer/allSystemApplication"
import menuKey from "../reducer/menuKey"
import addressvalue from "../reducer/addressvalue"
import thunk from 'redux-thunk'

const mergeReducers = combineReducers({
  allSystemApplication,
  menuKey,
  addressvalue
})

export default createStore(mergeReducers, applyMiddleware(thunk))
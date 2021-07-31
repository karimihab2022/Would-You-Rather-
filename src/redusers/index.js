import { combineReducers } from "redux";
import {curUser} from "./CurUser"
import {users} from "./Users"
import {questions} from "./Questions"
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
    curUser,
    users,
    questions,
    loadingBar: loadingBarReducer,
  })
  
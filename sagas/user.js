import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  TESTCALL_REQUEST,
  TESTCALL_SUCCESS,
  TESTCALL_FAILURE,
  //
  USERLIST_REQUEST,
  USERLIST_SUCCESS,
  USERLIST_FAILURE,
  //
  GET_LOGIN_USER_REQUEST,
  GET_LOGIN_USER_SUCCESS,
  GET_LOGIN_USER_FAILURE,
} from "../reducers/user";

// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************

function testAPI() {
  return axios.get(`http://localhost:4000/call/test`);
}

function* test() {
  try {
    const result = yield call(testAPI);

    yield put({
      type: TESTCALL_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: TESTCALL_FAILURE,
      error: err.response.data,
    });
  }
}

// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************

function userListAPI() {
  return axios.get(`http://localhost:4000/api/user/list`);
}

function* userList() {
  try {
    const result = yield call(userListAPI);

    yield put({
      type: USERLIST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: USERLIST_FAILURE,
      error: err.response.data,
    });
  }
}

// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************

function getLoginUserAPI(data) {
  return axios.post(`http://localhost:4000/api/user/get/one`, data);
}

function* getLoginUser(action) {
  try {
    const result = yield call(getLoginUserAPI, action.data);

    yield put({
      type: GET_LOGIN_USER_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: GET_LOGIN_USER_FAILURE,
      error: err.response.data,
    });
  }
}

// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

function* watchTestCall() {
  yield takeLatest(TESTCALL_REQUEST, test);
}

function* watchUserList() {
  yield takeLatest(USERLIST_REQUEST, userList);
}

function* watchGetLoginUser() {
  yield takeLatest(GET_LOGIN_USER_REQUEST, getLoginUser);
}

//////////////////////////////////////////////////////////////
export default function* testSaga() {
  yield all([
    fork(watchTestCall),
    fork(watchUserList),
    fork(watchGetLoginUser),
    //
  ]);
}

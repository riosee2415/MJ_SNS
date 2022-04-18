import produce from "immer";

export const initState = {
  userList: [],
  me: null,

  st_testCallLoading: false,
  st_testCallDone: false,
  st_testCallError: null,
  //
  st_userListLoading: false,
  st_userListDone: false,
  st_userListError: null,
  //
  st_getLoginUserLoading: false,
  st_getLoginUserDone: false,
  st_getLoginUserError: null,
};

export const TESTCALL_REQUEST = "TESTCALL_REQUEST";
export const TESTCALL_SUCCESS = "TESTCALL_SUCCESS";
export const TESTCALL_FAILURE = "TESTCALL_FAILURE";

export const USERLIST_REQUEST = "USERLIST_REQUEST";
export const USERLIST_SUCCESS = "USERLIST_SUCCESS";
export const USERLIST_FAILURE = "USERLIST_FAILURE";

export const GET_LOGIN_USER_REQUEST = "GET_LOGIN_USER_REQUEST";
export const GET_LOGIN_USER_SUCCESS = "GET_LOGIN_USER_SUCCESS";
export const GET_LOGIN_USER_FAILURE = "GET_LOGIN_USER_FAILURE";

const reducer = (state = initState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case TESTCALL_REQUEST:
        draft.st_testCallLoading = true;
        draft.st_testCallDone = false;
        draft.st_testCallError = null;
        break;

      case TESTCALL_SUCCESS:
        draft.st_testCallLoading = false;
        draft.st_testCallDone = true;
        draft.st_testCallError = null;
        break;

      case TESTCALL_FAILURE:
        draft.st_testCallLoading = false;
        draft.st_testCallDone = false;
        draft.st_testCallError = "에러를 저장할꺼야!";
        break;

      //////////////////////////////////////////////////////////////////

      case USERLIST_REQUEST:
        draft.st_userListLoading = true;
        draft.st_userListDone = false;
        draft.st_userListError = null;
        break;

      case USERLIST_SUCCESS:
        draft.st_userListLoading = false;
        draft.st_userListDone = true;
        draft.st_userListError = null;
        draft.userList = action.data;
        break;

      case USERLIST_FAILURE:
        draft.st_userListLoading = false;
        draft.st_userListDone = false;
        draft.st_userListError = action.error;
        break;

      //////////////////////////////////////////////////////////////////

      case GET_LOGIN_USER_REQUEST:
        draft.st_getLoginUserLoading = true;
        draft.st_getLoginUserDone = false;
        draft.st_getLoginUserError = null;
        break;

      case GET_LOGIN_USER_SUCCESS:
        draft.st_getLoginUserLoading = false;
        draft.st_getLoginUserDone = true;
        draft.st_getLoginUserError = null;
        draft.me = action.data;
        break;

      case GET_LOGIN_USER_FAILURE:
        draft.st_getLoginUserLoading = false;
        draft.st_getLoginUserDone = false;
        draft.st_getLoginUserError = action.error;
        break;

      //////////////////////////////////////////////////////////////////

      default:
        break;
    }
  });

export default reducer;

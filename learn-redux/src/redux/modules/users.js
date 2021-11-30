import axios from "axios";
// 앣션 타입 정의
export const GET_USERS_START = "redux-start/users/GET_USERS_START";
export const GET_USERS_SUCCESS = "redux-start/users/GET_USERS_SUCCESS";
export const GET_USERS_FAIL = "redux-start/users/GET_USERS_FAIL";
export const GET_USERS = "redux-start/users/GET_USERS";
export const GET_USERS_PENDING = "redux-start/users/GET_USERS_PENDING";
export const GET_USERS_FULLFILED = "redux-start/users/GET_USERS_FULLFILED";
export const GET_USERS_REJECTED = "redux-start/users/GET_USERS_REJECTED";

// 액션 생성 함수
export function getUsersStart() {
  return {
    type: GET_USERS_START,
  };
}

export function getUsersSuccess(data) {
  return {
    type: GET_USERS_SUCCESS,
    data,
  };
}

export function getUsersFail(error) {
  return {
    type: GET_USERS_FAIL,
    error,
  };
}

//초기값
const initialState = {
  loading: false,
  data: [],
  error: null,
};

// reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_START || GET_USERS_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case GET_USERS_FULLFILED:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_USERS_FAIL:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.error,
      };
    case GET_USERS_REJECTED:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// redux-promise-middleware
export function getUsersPromise() {
  return {
    type: GET_USERS,
    payload: async () => {
      const res = await axios.get("https://api.github.com/users");
      return res.data;
    },
  };
}

// redux-thunk
export function getUsersThunk() {
  return async (dispatch, getState, { history }) => {
    try {
      console.log(history);
      dispatch(getUsersStart());
      // sleep
      await sleep(2000);
      const res = await axios.get("https://api.github.com/users");
      dispatch(getUsersSuccess(res.data));
      history.push("/");
    } catch (error) {
      dispatch(getUsersFail(error));
    }
  };
}

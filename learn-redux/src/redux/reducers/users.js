import {
  GET_USERS_FAIL,
  GET_USERS_FULLFILED,
  GET_USERS_PENDING,
  GET_USERS_REJECTED,
  GET_USERS_START,
  GET_USERS_SUCCESS,
} from "../action";

const initialState = {
  loading: false,
  data: [],
  error: null,
};

export default function users(state = initialState, action) {
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

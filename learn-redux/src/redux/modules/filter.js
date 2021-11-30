// 액션 타입 정의
export const SHOW_ALL = "redux-start/filter/SHOW_ALL";
export const SHOW_COMPLETE = "redux-start/filter/SHOW_COMPLETE";

// 액션 생성 함수
export function showAll() {
  return {
    type: SHOW_ALL,
  };
}

export function showComplete() {
  return {
    type: SHOW_COMPLETE,
  };
}

// 초기 값
const initialState = "ALL";

// reducer
export default function reducer(previousState = initialState, action) {
  switch (action.type) {
    case SHOW_COMPLETE:
      return "COMPLETE";
    case SHOW_ALL:
      return "ALL";
    default:
      return previousState;
  }
}

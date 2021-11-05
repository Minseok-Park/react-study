import { SHOW_COMPLETE, SHOW_ALL } from "../action";

const initialState = "ALL";

export default function filter(previousState = initialState, action) {
  switch (action.type) {
    case SHOW_COMPLETE:
      return "COMPLETE";
    case SHOW_ALL:
      return "ALL";
    default:
      return previousState;
  }
}

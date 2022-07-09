import { createAction, handleActions } from "redux-actions";

const GET_USER = "user/GET_USER";
const IS_LOADED = "meeting/UPDATE_MEETING_INFO";

export const loadUser = createAction(GET_USER, (user) => user);
export const isLoad = createAction(IS_LOADED, (loaded) => loaded);

const user = handleActions(
  {
    [GET_USER]: (state, action) => ({
      user: action.payload,
    }),
    [IS_LOADED]: (state, { payload: loaded }) => ({
      ...state,
      is_loaded: loaded,
    }),
  },
  {
    user: [],
  }
);
export default user;

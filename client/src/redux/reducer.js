/* eslint-disable import/no-anonymous-default-export */
import { SET_USER, SET_BALANCE } from "./actionsTypes";

const initialState = {
  user: {},
  balance: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case SET_BALANCE: {
      return {
        ...state,
        balance: action.payload,
      };
    }
    default:
      return state;
  }
};

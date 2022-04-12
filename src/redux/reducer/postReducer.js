import { GET_POST, CREATE_POST, EDIT_POST, DELETE_POST } from "../types";

const initialState = {
  data: [],
  isLoading: true,
  error: null,
};

const userReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case `${GET_POST}_LOADING`:
      return {
        ...state,
      };
    case `${GET_POST}_FULFILLED`:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case `${GET_POST}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error: error,
      };

    case `${CREATE_POST}_LOADING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${CREATE_POST}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
      };
    case `${CREATE_POST}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error: error,
      };
    case `${EDIT_POST}_LOADING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${EDIT_POST}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
      };
    case `${EDIT_POST}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error: error,
      };
    case `${DELETE_POST}_LOADING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${DELETE_POST}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
      };
    case `${DELETE_POST}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error: error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;

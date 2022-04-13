import axios from "axios";
import { GET_POST_BY_ID } from "../types";

export const getPostByID = (id) => {
  return (dispatch) => {
    dispatch({ type: `${GET_POST_BY_ID}_LOADING` });

    axios({
      method: "GET",
      url: `http://localhost:3001/article/${id}`,
    })
      .then((response) => {
        dispatch({
          type: `${GET_POST_BY_ID}_FULFILLED`,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: `${GET_POST_BY_ID}_ERROR`,
          error: error.message,
        });
      });
  };
};

export const savePostByID = (action) => {
  return (dispatch) => {
    dispatch({
      type: `${GET_POST_BY_ID}_FULFILLED`,
      payload: action,
    });
  };
};

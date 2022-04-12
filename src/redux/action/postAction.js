import axios from "axios";
import { GET_POST, CREATE_POST, EDIT_POST, DELETE_POST } from "../types";

export const getPost = () => {
  return (dispatch) => {
    dispatch({ type: `${GET_POST}_LOADING` });

    axios({
      method: "GET",
      url: "http://localhost:3001/article",
    })
      .then((response) => {
        dispatch({
          type: `${GET_POST}_FULFILLED`,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: `${GET_POST}_ERROR`,
          error: error.message,
        });
      });
  };
};

export const createPost = (data) => {
  return (dispatch) => {
    dispatch({ type: `${CREATE_POST}_LOADING` });

    axios({
      method: "POST",
      url: "http://localhost:3001/article",
      data,
    })
      .then(() => {
        dispatch({
          type: `${CREATE_POST}_FULFILLED`,
          // payload: response.data,
        });
        dispatch(getPost());
      })
      .catch((error) => {
        dispatch({
          type: `${CREATE_POST}_ERROR`,
          error: error.message,
        });
      });
  };
};

export const editPost = (id, data) => {
  return (dispatch) => {
    dispatch({ type: `${EDIT_POST}_LOADING` });

    axios({
      method: "PUT",
      url: `http://localhost:3001/article/${id}`,
      data,
    })
      .then(() => {
        dispatch({
          type: `${EDIT_POST}_FULFILLED`,
          // payload: response.data,
        });
        dispatch(getPost());
      })
      .catch((error) => {
        dispatch({
          type: `${EDIT_POST}_ERROR`,
          error: error.message,
        });
      });
  };
};

export const deletePost = (id) => {
  return (dispatch) => {
    dispatch({ type: `${DELETE_POST}_LOADING` });

    axios({
      method: "DELETE",
      url: `http://localhost:3001/article/${id}`,
    })
      .then(() => {
        dispatch({
          type: `${DELETE_POST}_FULFILLED`,
        });
        dispatch(getPost());
      })
      .catch((error) => {
        dispatch({
          type: `${DELETE_POST}_ERROR`,
          error: error.message,
        });
      });
  };
};

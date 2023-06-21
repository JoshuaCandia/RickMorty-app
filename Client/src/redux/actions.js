import axios from "axios";

import {
  ADD_FAV,
  REMOVE_FAV,
  REMOVE_ALL_FAV,
  FILTER,
  ORDER,
} from "./action-types";

export const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return (dispatch) => {
    axios.post(endpoint, character).then(({ data }) => {
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    });
  };
};

export const removeFav = (id) => {
  const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
  return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    });
  };
};

export const removeAllFav = () => {
  return {
    type: REMOVE_ALL_FAV,
  };
};

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};

export const orderCards = (order) => {
  return { type: ORDER, payload: order };
};

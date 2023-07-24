import axios from "axios";

import {
  ADD_FAV,
  REMOVE_FAV,
  REMOVE_ALL_FAV,
  FILTER,
  ORDER,
} from "./action-types";

const localhost = "/rickandmorty/";

export const addFav = (character) => {
  try {
    const endpoint = `${localhost}/fav`;
    return async (dispatch) => {
      const { data } = await axios.post(endpoint, character);
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    };
  } catch (error) {
    console.error(error.message);
  }
};

export const removeFav = (id) => {
  const endpoint = `${localhost}fav/${id}`;

  return async (dispatch) => {
    const { data } = await axios.delete(endpoint);
    return dispatch({
      type: REMOVE_FAV,
      payload: data,
    });
  };
};

export const removeAllFav = () => {
  const endpoint = `${localhost}fav`;
  return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
      return dispatch({
        type: REMOVE_ALL_FAV,
        payload: data,
      });
    });
  };
};

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};

export const orderCards = (order) => {
  return { type: ORDER, payload: order };
};

import { ADD_FAV, REMOVE_FAV, REMOVE_ALL_FAV } from "./action-types";

const initialState = {
  characters: [],
  myFavorites: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHARACTER_DETAIL:
      return { ...state };

    case ADD_FAV:
      return { ...state, myFavorites: [...state.myFavorites, payload] };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((fav) => fav.id !== payload),
      };

    case REMOVE_ALL_FAV:
      return {
        myFavorites: [],
      };

    default:
      return { ...state };
  }
};

export default reducer;

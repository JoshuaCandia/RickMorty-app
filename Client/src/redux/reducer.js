import {
  ADD_FAV,
  REMOVE_FAV,
  REMOVE_ALL_FAV,
  FILTER,
  ORDER,
} from "./action-types";

const initialState = {
  allCharacters: [],
  myFavorites: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return { ...state, myFavorites: payload, allCharacters: payload };

    case REMOVE_FAV:
      return { ...state, myFavorites: payload };

    case REMOVE_ALL_FAV:
      return {
        myFavorites: [],
        allCharacters: [],
      };

    case FILTER:
      const allCharactersFiltered = state.allCharacters.filter(
        (character) => character.gender === payload
      );
      if (payload === "") {
        return {
          ...state,
          myFavorites: state.allCharacters,
        }; // Esto es para que cada vez que entro a la ruta /favorites se muestren todos los personajes favoritos
      }
      return {
        ...state,
        myFavorites: allCharactersFiltered,
      };

    case ORDER:
      const allCharactersAllFavCopy = [...state.allCharacters];
      const updatedFavorites = state.myFavorites.filter((fav) =>
        allCharactersAllFavCopy.some((char) => char.id === fav.id)
      );

      const sortedFavorites =
        payload === "A"
          ? updatedFavorites.sort((a, b) => a.id - b.id)
          : updatedFavorites.sort((a, b) => b.id - a.id);
      return {
        ...state,
        myFavorites: sortedFavorites,
      };

    default:
      return { ...state };
  }
};

export default reducer;

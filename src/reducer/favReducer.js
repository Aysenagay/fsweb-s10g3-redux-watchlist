import { LISTEME_EKLE, LISTEMDEN_CIKAR } from "../actions/action";

const initialState = {
  favMovies: [],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case LISTEME_EKLE: {
      return {
        ...state,
        favMovies: [...state.favMovies, action.payload],
      };
    }
    case LISTEMDEN_CIKAR: {
      return {
        ...state,
        favMovies: state.favMovies.filter((item) => item.id !== action.payload),
      };
    }
    default:
      return state;
  }
}

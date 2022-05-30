import {
  FETCH_CATS, TOGGLE_CAT_TO_FAVOURITES,
} from '../../constants';

const initialState = {
  allCats: [],
  favouriteCats: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATS:
      return {
        ...state,
        allCats: action.payload,
      };
    case TOGGLE_CAT_TO_FAVOURITES:
      return {
        ...state,
        allCats: state.allCats.map((joke) => {
          if (joke.favourited && joke.id === action.jokeId) {
            return {
              ...joke,
              favourited: false,
            };
          }

          if (!joke.favourited && joke.id === action.jokeId) {
            return {
              ...joke,
              favourited: true,
            };
          }

          return joke;
        }),
        favouriteCats: state.allCats.filter((joke) => joke.favourited),
      };
    default:
      return state;
  }
};

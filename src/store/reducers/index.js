import {
  CHANGE_CURRENT_PAGE_NUMBER,
  CHANGE_FETCHING_STATUS,
  FETCH_CATS, TOGGLE_CAT_TO_FAVOURITES,
} from '../../constants';

const initialState = {
  allCats: [],
  favouriteCats: [],
  currentPage: 1,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATS:
      return {
        ...state,
        allCats: [...state.allCats || [], ...action.payload],
      };
    case CHANGE_FETCHING_STATUS:
      return {
        ...state,
        fetchingStatus: action.payload,
      };
    case CHANGE_CURRENT_PAGE_NUMBER:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    case TOGGLE_CAT_TO_FAVOURITES:
      return {
        ...state,
        allCats: state.allCats.map((cat) => {
          if (cat.favourite && cat.id === action.catId) {
            return {
              ...cat,
              favourite: false,
            };
          }

          if (!cat.favourite && cat.id === action.catId) {
            return {
              ...cat,
              favourite: true,
            };
          }

          return cat;
        }),
        favouriteCats: state.allCats.filter((cat) => cat.favourite),
      };
    default:
      return state;
  }
};

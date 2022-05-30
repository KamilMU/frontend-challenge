import axios from 'axios';
import {
  CHANGE_CURRENT_PAGE_NUMBER,
  CHANGE_FETCHING_STATUS,
  FETCH_CATS, TOGGLE_CAT_TO_FAVOURITES,
} from '../../constants';

export const fetchCats = (currentPage) => async (dispatch) => {
  let response;

  if (!response) dispatch({ type: FETCH_CATS, payload: [] });
  response = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&page==${currentPage}&order=Desc`);
  console.log(response.data, 'res');
  dispatch({ type: FETCH_CATS, payload: response.data });
};

export const changeFetchingStatus = (fetchingStatus) => ({
  type: CHANGE_FETCHING_STATUS,
  payload: fetchingStatus,
});

export const changeCurrentPageNumber = () => ({
  type: CHANGE_CURRENT_PAGE_NUMBER,
});

export const toggleCatToFavourites = (catId, cat) => ({
  type: TOGGLE_CAT_TO_FAVOURITES,
  catId,
  cat,
});

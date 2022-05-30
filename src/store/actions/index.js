import axios from 'axios';
import {
  FETCH_CATS, TOGGLE_CAT_TO_FAVOURITES,
} from '../../constants';

export const fetchCats = () => async (dispatch) => {
  let response;

  if (!response) dispatch({ type: FETCH_CATS, payload: [] });
  response = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=5&page=10&order=Desc`);
  console.log(response.data, 'res');
  dispatch({ type: FETCH_CATS, payload: response.data });
};

export const toggleCatToFavourites = (catId, cat) => ({
  type: TOGGLE_CAT_TO_FAVOURITES,
  catId,
  cat,
});

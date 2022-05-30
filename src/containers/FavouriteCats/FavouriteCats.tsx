import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../types';
import Loader from '../../components/Loader/Loader';
import CatContainer from '../CatContainer/CatContainer';

function FavouriteCats() {
  const favoriteCats = useSelector((state: IRootState) => state.favouriteCats);

  useEffect(() => {
    console.log(favoriteCats, 'favoriteCats');
  }, [favoriteCats]);

  return (
    <div className="cats-list-container">
      {favoriteCats?.length && favoriteCats ? favoriteCats.map((cat) => (
        <CatContainer
          cat={cat}
          key={cat.id}
        />
      )) : (
        <Loader />
      )}
    </div>
  );
}

export default FavouriteCats;

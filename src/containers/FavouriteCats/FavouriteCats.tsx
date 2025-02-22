import React from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '../../types';
import Loader from '../../components/Loader/Loader';
import CatContainer from '../CatContainer/CatContainer';

function FavouriteCats() {
  const favoriteCats = useSelector((state: IRootState) => state.favouriteCats);

  return (
    <div className="cats-list-container">
      {favoriteCats?.length ? favoriteCats.map((cat) => (
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

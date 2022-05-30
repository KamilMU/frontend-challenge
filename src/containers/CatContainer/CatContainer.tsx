import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Cat from '../../components/Cat/Cat';
import { toggleCatToFavourites } from '../../store/actions';
import { CatType } from '../../types';

interface Props {
  cat: CatType,
}

export default function CatContainer({ cat }: Props) {
  const [isAddedToFav, setIsAddedToFav] = useState(false);
  const dispatch = useDispatch();

  function addCatToFavoutiteList() {
    dispatch(toggleCatToFavourites(cat.id, cat));
    setIsAddedToFav(!isAddedToFav);
  }

  return (
    <Cat
      cat={cat}
      onFavouriteClick={addCatToFavoutiteList}
    />
  );
}

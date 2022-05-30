import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Cat from '../../components/Cat/Cat';
import { toggleCatToFavourites } from '../../store/actions';
import { CatType } from '../../types';

interface Props {
  cat: CatType,
}

export default function JokeContainer({ cat }: Props) {
  const [isAddedToFav, setIsAddedToFav] = useState(false);
  const [catStatus, setCatStatus] = useState('');
  const dispatch = useDispatch();

  function addJokeToFavoutiteList() {
    dispatch(toggleCatToFavourites(cat.id, cat));
    setIsAddedToFav(!isAddedToFav);

    if (!isAddedToFav) {
      setTimeout(() => setCatStatus('added to favorites!'), 0);
      setTimeout(() => setCatStatus(''), 1000);
    }
    if (isAddedToFav) {
      setTimeout(() => setCatStatus('removed from favorites!'), 0);
      setTimeout(() => setCatStatus(''), 1000);
    }
  }

  return (
    <Cat
      cat={cat}
      onFavouriteClick={addJokeToFavoutiteList}
      catStatus={catStatus}
    />
  );
}

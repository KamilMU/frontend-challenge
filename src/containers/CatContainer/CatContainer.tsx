import React, { useEffect, useState } from 'react';
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

  useEffect(() => {
    console.log(isAddedToFav, 'isAddedToFav');
  }, [isAddedToFav]);

  useEffect(() => {
    dispatch(toggleCatToFavourites(cat.id, cat))
  }, [isAddedToFav]);

  async function addCatToFavoutiteList() {
    setIsAddedToFav(!isAddedToFav);
  }

  return (
    <Cat
      cat={cat}
      onFavouriteClick={addCatToFavoutiteList}
    />
  );
}

import React from 'react';
import { CatType } from '../../types';
import './styles.scss';

interface Props {
  cat: CatType,
  onFavouriteClick: () => void,
}

export default function Cat({ cat, onFavouriteClick }: Props) {
  return (
    <div className="cat-container" data-testid="cat-item">
      <img src={cat.url} alt="" />
      <div>
        <span
          role="button"
          className="cat-container__fav-icon"
          onClick={onFavouriteClick}
          aria-hidden="true"
          style={{ opacity: cat?.favourite ? .3 : 1 }}
        >
          <img src={
            cat?.favourite ? (
              require("../../icons/not_fav.png")
            ) : (
              require("../../icons/fav.png")
            )
          } alt="" />
        </span>
      </div>
    </div>
  );
}

import React from 'react';
import { CatType } from '../../types';
import './styles.scss';

interface Props {
  cat: CatType,
  onFavouriteClick: () => void,
  catStatus: string,
}

export default function Joke({ cat, onFavouriteClick, catStatus }: Props) {
  return (
    <div className="cat-container" data-testid="cat-item">
      <img src={cat.url} alt="" />
      <div>
        <span
          role="button"
          className="cat-container__fav-icon"
          onClick={onFavouriteClick}
          aria-hidden="true"
          style={{ opacity: cat?.favourited ? 1 : 0.3 }}
        >
          ⭐
        </span>
        <div className="cat-cat-status">{catStatus}</div>
      </div>
    </div>
  );
}

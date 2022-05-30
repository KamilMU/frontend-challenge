import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCurrentPageNumber, fetchCats } from '../../store/actions';
import { IRootState } from '../../types';
import CatContainer from '../CatContainer/CatContainer';
import './styles.scss';
import SkeletonList from '../SkeletonList/SkeletonList';

export default function AllCats() {
  const allCats = useSelector((state: IRootState) => state.allCats);
  const [fetching, setFetching] = useState(false);
  const currentPage = useSelector((state: IRootState) => state.currentPage);
  const dispatch = useDispatch();

  function scrollHandler(e: any) {
    if (e.target.documentElement.scrollHeight - (
      e.target.documentElement.scrollTop + window.innerHeight) < 100) {
      setFetching(true);
    }
  }

  useEffect(() => {
    if (fetching) {
      dispatch(changeCurrentPageNumber());
      dispatch(fetchCats(currentPage + 1));
      setTimeout(() => setFetching(false), 1000);
    } // eslint-disable-next-line
  }, [fetching])

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <>
      <div className="cats-list-container">
        {allCats?.length ? allCats.map((cat) => (
          <CatContainer
            cat={cat}
            key={cat.id}
          />
        )) : (
          <SkeletonList />
        )}
      </div>
      {fetching && <div className="loader-text">...загружаем еще котиков...</div>}
    </>
  );
}

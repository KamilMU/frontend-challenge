import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCats } from '../../store/actions';
import { IRootState } from '../../types';
import Loader from '../../components/Loader/Loader';
import CatContainer from '../CatContainer/CatContainer';
import './styles.scss';

export default function AllCats() {
  const allCats = useSelector((state: IRootState) => state.allCats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCats());
  }, []);

  useEffect(() => {
    console.log(allCats, 'allCats');
  }, [allCats]);

  return (
    <div className="cats-list-container">
      {allCats?.length && allCats ? allCats.map((cat) => (
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

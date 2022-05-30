import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import App from '../../components/App/App';
import { fetchCats } from '../../store/actions';
import { IRootState } from '../../types';

export default function AppContainer() {
  const currentPage = useSelector((state: IRootState) => state.currentPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCats(currentPage)); // eslint-disable-next-line
    console.log('1');
    
  }, [])

  return <App />
}
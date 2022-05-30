import React from 'react';
import { NavLink } from 'react-router-dom'
import './styles.scss';

interface Props {
  navbar: boolean
}

export default function Header({ navbar }: Props) {
  return (
    <header className={navbar ? 'header scrolled-header' : 'header'}>
      <NavLink to="/">Все котики</NavLink>
      <NavLink to="/favourite_cats">Любимые котики</NavLink>
    </header>
  );
}

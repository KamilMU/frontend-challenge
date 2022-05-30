import React from 'react';
import { NavLink } from 'react-router-dom'
import './styles.scss';

interface Props {
  navbar: boolean
}

export default function Header({ navbar }: Props) {
  return (
    <header className={navbar ? 'header scrolled-header' : 'header'}>
      <NavLink exact to="/" className="link" activeClassName='active'>Все котики</NavLink>
      <NavLink exact to="/favourite_cats" className="link" activeClassName='active'>Любимые котики</NavLink>
    </header>
  );
}

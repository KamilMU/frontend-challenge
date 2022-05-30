import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';

export default function HeaderContainer() {
  // navbar scroll when active state
  const [navbar, setNavbar] = useState(false);

  // navbar scroll changeBackground function
  const changeBackground = () => {
    if (document.querySelector('.app').scrollTop >= 67) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    document.querySelector('.app').addEventListener('scroll', changeBackground);
  }, [navbar]);

  return (
    <Header navbar={navbar} />
  );
}

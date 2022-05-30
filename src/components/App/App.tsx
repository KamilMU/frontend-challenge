import * as React from 'react';
import './styles.scss';
import { navigation } from '../../navigation';

export default function App() {
  return (
    <div className="app">
      {navigation}
    </div>
  );
}

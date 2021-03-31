//npm install react-bootstrap bootstrap
//npm install --save styled-component
import React from 'react';

import { Counter } from './features/counter/Counter';
import './App.css';
import Mynavbar from './components/my-navbar/my-navbar.component';
function App() {
  return (
    <div>
      <Mynavbar />
      My Portfolio
    </div>
  );
}

export default App;

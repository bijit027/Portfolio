//npm install react-bootstrap bootstrap
//npm install --save styled-component
//use netlify.com for deploy this project
//npm install typewriter-effect
import React from 'react';

import { Counter } from './features/counter/Counter';
import './App.css';
import Mynavbar from './components/my-navbar/my-navbar.component';
import MyCarousal from './components/my-carousal/my-carousal.component.jsx';
import TitleMessage from './components/title-message/title-message.component';

function App() {
  return (
    <div>
      <Mynavbar />
      <MyCarousal />
      <TitleMessage />
    
    </div>
  );
}

export default App;

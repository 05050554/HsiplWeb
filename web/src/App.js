import React from 'react';
import './App.css';
import Hamburger from './components/Hamburger'
import HomePage from './components/HomePage1';
import { LabDirector } from './components/LabDirector';

import Introduction from './components/Introduction';

import Professor from './components/Professor';

import Members from './components/Members1';
import Equipment from './components/Equipment';
import Research_interests from './components/Research_interests'
import Research_Posters from './components/Research_Posters'

function App() {
  return (
    <div className="App">
      <Hamburger/>
      <HomePage></HomePage>
      <LabDirector></LabDirector>
      <Introduction></Introduction>
      <Professor></Professor>
      <Members></Members>
      <Equipment></Equipment>
      <Research_interests/>
      <Research_Posters/>
    </div>
  );
}

export default App;

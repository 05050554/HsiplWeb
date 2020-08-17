import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import { LabDirector } from './components/LabDirector';

import Introduction from './components/Introduction';

import Professor from './components/Professor';

import Members from './components/Members';


function App() {
  return (
    <div className="App">
      <HomePage></HomePage>
      <LabDirector></LabDirector>
      <Introduction></Introduction>
      <Professor></Professor>
      <Members></Members>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import { LabDirector } from './components/LabDirector';

import Introduction from './components/Introduction';

import Professor from './components/Professor';


function App() {
  return (
    <div className="App">
      <HomePage></HomePage>
      <LabDirector></LabDirector>
      <Introduction></Introduction>
      <Members></Members>
      <Professor></Professor>
    </div>
  );
}

export default App;

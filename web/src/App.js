import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import { LabDirector } from './components/LabDirector';
import Members from './components/Members';

import { LabDirector } from './components/LabDirector';
import Introduction from './components/Introduction';
import Homepage from './components/HomePage';
import Professor from './components/Professor';

function App() {
  return (
    <div className="App">
      <HomePage></HomePage>
      <LabDirector></LabDirector>
      <Members></Members>
      <Homepage></Homepage>
      <LabDirector></LabDirector>
      <Introduction></Introduction>
      <Professor></Professor>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import { LabDirector } from './components/LabDirector';

import Introduction from './components/Introduction';

import Professor from './components/Professor';

import Members from './components/Members';
import Equipment from './components/Equipment';
import Research_interests from './components/Research_interests'

function App() {
  return (
    <div className="App">
      <HomePage></HomePage>
      <LabDirector></LabDirector>
      <Introduction></Introduction>
      <Professor></Professor>
      <Members></Members>
      <Equipment></Equipment>
      <Research_interests></Research_interests>
    </div>
  );
}

export default App;

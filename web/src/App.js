import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import { LabDirector } from './components/LabDirector';
import Members from './components/Members';

import Introduction from './components/Introduction';


function App() {
  return (
    <div className="App">
      <HomePage></HomePage>
      <LabDirector></LabDirector>
      <Introduction></Introduction>
      <Members></Members>
    </div>
  );
}

export default App;

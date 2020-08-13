import React from 'react';
import './App.css';

import { LabDirector } from './components/LabDirector';
import Introduction from './components/Introduction';
import Homepage from './components/HomePage';
import Professor from './components/Professor';

function App() {
  return (
    <div className="App">
      <Homepage></Homepage>
      <LabDirector></LabDirector>
      <Introduction></Introduction>
      <Professor></Professor>
    </div>
  );
}

export default App;

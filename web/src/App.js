import React from 'react';
import './App.css';

import { LabDirector } from './components/LabDirector';
import Introduction from './components/Introduction';


function App() {
  return (
    <div className="App">
      <LabDirector></LabDirector>
      <Introduction></Introduction>
    </div>
  );
}

export default App;

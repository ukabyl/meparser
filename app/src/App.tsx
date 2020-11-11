import React, { useState } from 'react';
import './App.scss';

import { CustomParser } from './components/custom-parser';
import { Wolfram } from './components/wolfram';

const App: React.FC = () => {

  const [content, setContent] = useState(true)

  return (
    <div className="app">
      <div className="header">
        <button
          onClick={() => setContent(true)}
          className={`${content ? 'active' : ''}`}  
        >Custom math parser</button>
        <button 
          onClick={() => setContent(false)}
          className={`${content ? '' : 'active'}`}
        >Wolfram</button>
      </div>
      <div className="content">
        {
          content ? <CustomParser /> : <Wolfram />
        }
      </div>
    </div>
  );
}

export default App;

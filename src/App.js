import React, { useState } from 'react';
import './App.css';
import TextEditor from './components/textEditor';
import StatisticsBoard from './components/statsBoard';
import StringReplacer from './components/stringReplacer';

function App() {
  const [text, setText] = useState('');

  return (
    <div className="App">
      <div className="editor-stats-container">
        <TextEditor text={text} setText={setText} />
        <StatisticsBoard text={text} />
      </div>
      <StringReplacer text={text} setText={setText} />
    </div>
  );
}

export default App;

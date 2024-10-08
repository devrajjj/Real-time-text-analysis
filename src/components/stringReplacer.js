import React, { useState } from 'react';
import './stringReplacer.css';

const StringReplacer = ({ text, setText }) => {
  const [searchString, setSearchString] = useState('');
  const [replaceString, setReplaceString] = useState('');

  const handleReplace = () => {
    if (searchString === '') {
      alert('Please enter a string to search for.');
      return;
    }
    if (replaceString === '') {
      const confirmDelete = window.confirm('Replacement string is empty. This will remove all occurrences. Do you want to proceed?');
      if (!confirmDelete) return;
    } 
    const escapedSearch = searchString.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  
    const regex = new RegExp(escapedSearch, 'g');
    const newText = text.replace(regex, (match) => `<span class="highlight">${replaceString}</span>`);
    
    setText(newText);
  };
  

  return (
    <div className="string-replacer">
      <h3>String Replacement</h3>
      <div className="input-group">
        <label htmlFor="search">Search String:</label>
        <input
          type="text"
          id="search"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          placeholder="Enter text to search..."
        />
      </div>
      <div className="input-group">
        <label htmlFor="replace">Replace With:</label>
        <input
          type="text"
          id="replace"
          value={replaceString}
          onChange={(e) => setReplaceString(e.target.value)}
          placeholder="Enter replacement text..."
        />
      </div>
      <button onClick={handleReplace} className="replace-button">Replace All</button>
    </div>
  );
};
export default StringReplacer;
import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './textEditor.css'; 

const TextEditor = ({ text, setText }) => {

  const handleTextChange = (value) => {
    setText(value);
  };

  return (
    <div className="text-editor-container">
      <h2>Text Editor</h2>
      <ReactQuill 
        value={text} 
        onChange={handleTextChange} 
        placeholder="Type your text here..." 
        theme="snow"
        className="text-editor" 
      />
    </div>
  );
};

export default TextEditor;


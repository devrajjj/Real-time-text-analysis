import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './statsBoard.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const StatisticsBoard = ({ text }) => {
  const [uniqueWordCount, setUniqueWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [totalWordCount, setTotalWordCount] = useState(0);

  useEffect(() => {
    const plainText = text.replace(/<[^>]+>/g, ' ');
    const wordsArray = plainText.toLowerCase().match(/\b\w+\b/g);
    const totalWords = wordsArray ? wordsArray.length : 0;
    const uniqueWords = wordsArray ? new Set(wordsArray).size : 0;

    setTotalWordCount(totalWords);
    setUniqueWordCount(uniqueWords);

    const chars = plainText.replace(/[^a-zA-Z0-9]/g, '');
    setCharCount(chars.length);
  }, [text]);

  const data = {
    labels: ['Total Words', 'Unique Words', 'Characters (Excl. Spaces & Punctuation)'],
    datasets: [
      {
        label: 'Text Statistics',
        data: [totalWordCount, uniqueWordCount, charCount],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div className="statistics-board">
      <h2>Real-Time Statistics</h2>
      {/* <p><strong>Total Words:</strong> {totalWordCount}</p> */}
      <p><strong>Unique Words:</strong> {uniqueWordCount}</p>
      <p><strong>Characters (Excl. Spaces & Punctuation):</strong> {charCount}</p>
      
      <div className="chart-container">
        <Pie data={data} />
      </div>
    </div>
  );
};

export default StatisticsBoard;


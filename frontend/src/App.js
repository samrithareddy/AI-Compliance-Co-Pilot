
import React, { useState } from 'react';
import './App.css';

function App() {
  const [documentText, setDocumentText] = useState('');
  const [analysisResult, setAnalysisResult] = useState('');

  // Use the absolute URL for the backend API
  const BACKEND_API_URL = 'https://5000-iurk96bsd8ju60yczp65z-ced68d3a.manusvm.computer/api/analyze';

  const handleAnalyze = async () => {
    try {
      const response = await fetch(BACKEND_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: documentText }),
      });
      const data = await response.json();
      setAnalysisResult(data.result);
    } catch (error) {
      console.error('Error analyzing document:', error);
      setAnalysisResult('Error analyzing document.');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>AI-Compliance-Co-Pilot Frontend</h1>
        <textarea
          rows="10"
          cols="50"
          placeholder="Enter document text for analysis..."
          value={documentText}
          onChange={(e) => setDocumentText(e.target.value)}
        ></textarea>
        <button onClick={handleAnalyze}>Analyze Document</button>
        {analysisResult && (
          <div>
            <h2>Analysis Result:</h2>
            <p>{analysisResult}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;



import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TranscriptUpload from './TranscriptUpload';
import GeneratedTickets from './GeneratedTickets';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/upload-transcript" element={<TranscriptUpload />} />
        <Route path="/tickets" element={<GeneratedTickets />} />
      </Routes>
    </Router>
  );
}

export default App;
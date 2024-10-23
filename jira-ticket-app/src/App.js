import React, { useState } from 'react';
import axios from 'axios';  // We'll use axios to make HTTP requests

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [transcriptText, setTranscriptText] = useState('');
  const [response, setResponse] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleTextChange = (event) => {
    setTranscriptText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    // If a file is uploaded, use that
    if (selectedFile) {
      formData.append('file', selectedFile);
    } else {
      // Otherwise, send the pasted text
      formData.append('transcript', transcriptText);
    }

    try {
      const res = await axios.post('http://127.0.0.1:8000/upload-transcript/', formData);
      setResponse(res.data);  // Store the response (parsed tickets)
    } catch (error) {
      console.error('Error uploading transcript', error);
    }
  };

  const handleApprove = (ticket) => {
    console.log('Approved ticket:', ticket);
  };
  
  const handleReject = (ticket) => {
    console.log('Rejected ticket:', ticket);
  };

  return (
    <div className="App">
    <h1>Upload or Paste Transcript</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Upload Transcript File:</label>
        <input type="file" onChange={handleFileChange} />
      </div>
      <div>
        <label>Or Paste Transcript Text:</label>
        <textarea rows="10" cols="50" value={transcriptText} onChange={handleTextChange}></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>

    {response && (
      <div>
        <h2>Parsed Tickets</h2>
        {response.tickets.map((ticket, index) => (
          <div key={index} className="ticket">
            <p>{ticket}</p>
            <button onClick={() => handleApprove(ticket)}>Approve</button>
            <button onClick={() => handleReject(ticket)}>Reject</button>
          </div>
        ))}
      </div>
    )}
  </div>
  );
}

export default App;
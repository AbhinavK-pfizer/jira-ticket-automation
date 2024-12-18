import React, { useState } from 'react';
import axios from 'axios';
import './index.css';
import { useNavigate } from 'react-router-dom';

function TranscriptUpload() {
  const [transcriptFile, setTranscriptFile] = useState(null);
  const [transcriptText, setTranscriptText] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [uploadType, setUploadType] = useState('text');
  const navigate = useNavigate();

  const handleFileUpload = (event) => {
    setTranscriptFile(event.target.files[0]);
  };

  const handleTextUpload = (event) => {
    setTranscriptText(event.target.value);
  }

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    if (transcriptText === '') {
      setIsFocused(false);
    }
  }

  const handleSwitch = () => {
    setUploadType((prevType) => (prevType === 'text' ? 'file' : 'text'));
  };

  const handleSubmit = async () => {
    const transcript = new FormData();

    if (uploadType === "text" && transcriptText.trim() !== "") {
      transcript.append('transcriptText', transcriptText);
    } else if (uploadType === "file" && transcriptFile) {
      transcript.append('transcriptFile', transcriptFile);
    } else {
      console.error("No input found");
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/upload-transcript/", transcript, {
        headers: {"Content-Type": "multipart/form-data"}
      });

      console.log("Response from Backend: ", response.data);
    } catch (error) {
      console.error("Error submitting transcript: ", error);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-4'>
      <div className='max-w-md w-full bg-light-gray rounded-lg shadow-lg p-6 space-y-6'>
        <div className='font-bold text-pfizer-blue font-notoSans text-2xl text-center mt-4'>
          Upload or Paste Transcript
        </div>
        <div className='flex items-center justify-center'>
          <span className={`mr-2 font-semibold font-notoSans text-lg transition duration-300 
            ${uploadType === 'file' ? 'text-dark-gray' : 'text-black'}`}>Text
          </span>
          <div className='relative inline-block w-16 h-8 cursor-pointer' onClick={handleSwitch}>
            <div className='absolute inset-0 rounded-full bg-gray-300'></div>
            <div className={`relative justify-center top-1 w-6 h-6 bg-dark-gray rounded-full shadow-md transition-transform duration-300 transform 
              ${uploadType === 'text' ? 'translate-x-2' : 'translate-x-8'}`}>
            </div>
          </div>
          <span className={`ml-2 font-semibold font-notoSans text-lg transition duration-300 
            ${uploadType === 'text' ? 'text-dark-gray' : 'text-black'}`}>File
          </span>
        </div>
        <div className='flex items-center justify-center'>
          <div className={`${uploadType === 'file' 
            ? 'relative inline-block w-96 h-64 border border-dashed border-dark-gray border-spacing-4 rounded-md cursor-pointer hover:border-black transition' 
            : 'relative inline-block w-96 h-64 border border-solid border-dark-gray rounded-md hover:border-black transition'}`}
          >
            <div className={`${uploadType === 'file' 
              ? 'flex text-center justify-center items-center h-full font-notoSans text-lg font-semibold text-dark-gray hover:text-black' 
              : 'flex text-left justify-left h-full w-full align-top font-notoSans text-md font-normal text-dark-gray'}`}
            >
              {uploadType === 'file' 
                ? (
                  <>              
                    <span>Upload Transcript (PDF, DOC, DOCX)</span>
                    <input
                      type='file'
                      id='transcript'
                      value={transcriptFile}
                      className='absolute inset-0 opacity-0 cursor-pointer'
                      onChange={handleFileUpload}
                    />
                  </>
                ) 
                : (
                  <>
                    {!isFocused && transcriptText === '' && (
                      <span className='p-2 whitespace-nowrap'>Paste Transcript Here</span>
                    )}
                    <textarea
                      id='transcript'
                      value={transcriptText}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      onChange={handleTextUpload}
                      className='flex h-full w-full text-left p-2 justify-left align-top text-md font-normal text-dark-gray border-none bg-light-gray'
                    />
                  </>
                )
              }
            </div>
          </div>
        </div>
        <button onClick={handleSubmit} className='flex w-full items-center justify-center bg-dark-gray rounded-md p-2 text-white transition duration-300 hover:bg-pfizer-blue'>
            Generate Jira Tickets
        </button>
      </div>
    </div>
  );
}

export default TranscriptUpload;
import React, { useState } from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
import Epic from './images/epic.svg';
import Story from './images/story.svg';
import Cross from './images/cross.svg';
import Check from './images/check.svg';
import Pencil from './images/pencil.svg';
import Back from './images/back.svg';

function GeneratedTickets() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
      };
    
    return (
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-4'>
            <div className='flex-col justify-center max-w-md w-full min-h-[90vh] bg-light-gray rounded-lg shadow-lg p-6'>
                <button onClick={handleBack} className='relative inline-block flex w-60 h-10 ml-0 mb-0'>
                    <img src={Back} alt="Back Icon" className="absolute top-0.5 left-0 w-6 h-6" />
                    <div className='absolute top-0 left-6 font-notoSans text-lg font-bold text-black'>Return to Transcript</div>
                </button>
                <div className='relative inline-block flex w-96 h-40 justify-center items-center bg-creamish transition duration-300 hover:bg-ticket-hover fade-in-up rounded-lg shadow-lg p-6 mb-6'>
                    <img src={Epic} alt="Epic Icon" className="absolute top-3 left-3 w-8 h-8" />
                    <img src={Cross} alt="Cross Icon" className="absolute top-3 right-3 w-6 h-6" />
                    <img src={Check} alt="Check Icon" className="absolute top-3 right-12 w-6 h-6" />
                    <img src={Pencil} alt="Pencil Icon" className="absolute top-2 right-20 w-8 h-8" />
                    <span className='absolute top-3 left-14 flex inline-block font-bold font-notoSans text-lg'>Career Exploration C...</span>
                    <div className='absolute top-10 p-3 text-left font-normal text-md'><span className='font-semibold'>Description:</span> This project aims to create a system that connects early-career professionals with mentors at Pfizer for career exploration chats. The system will include collecting participant data...</div>
                </div>
                <div className='relative inline-block flex w-96 h-40 justify-center items-center bg-creamish transition duration-300 hover:bg-ticket-hover fade-in-up rounded-lg shadow-lg p-6 mb-6'>
                    <img src={Story} alt="Epic Icon" className="absolute top-3 left-3 w-8 h-8" />
                    <img src={Cross} alt="Cross Icon" className="absolute top-3 right-3 w-6 h-6" />
                    <img src={Check} alt="Check Icon" className="absolute top-3 right-12 w-6 h-6" />
                    <img src={Pencil} alt="Pencil Icon" className="absolute top-2 right-20 w-8 h-8" />
                    <span className='absolute top-3 left-14 flex inline-block font-bold font-notoSans text-lg'>Create Form to Colle...</span>
                    <div className='absolute top-10 p-3 text-left font-normal text-md'><span className='font-semibold'>Description:</span> Develop a Microsoft Form that collects information from mentors who are open to career exploration chats. The form should gather personal introductions, LinkedIn links, and...</div>
                </div>
                <div className='flex w-96 h-40 justify-center items-center bg-creamish transition duration-300 hover:bg-ticket-hover fade-in-up rounded-lg shadow-lg p-6 mb-6'>
                <img src={Story} alt="Epic Icon" className="absolute top-3 left-3 w-8 h-8" />
                    <img src={Cross} alt="Cross Icon" className="absolute top-3 right-3 w-6 h-6" />
                    <img src={Check} alt="Check Icon" className="absolute top-3 right-12 w-6 h-6" />
                    <img src={Pencil} alt="Pencil Icon" className="absolute top-2 right-20 w-8 h-8" />
                    <span className='absolute top-3 left-14 flex inline-block font-bold font-notoSans text-lg'>Create Form to Colle...</span>
                    <div className='absolute top-10 p-3 text-left font-normal text-md'><span className='font-semibold'>Description:</span> Develop a separate Microsoft Form for mentees (early-career professionals) who want to participate in career exploration chats. The form should collect their interests, educational...</div>
                </div>
                <div className='flex w-96 h-40 justify-center items-center bg-creamish transition duration-300 hover:bg-ticket-hover fade-in-up rounded-lg shadow-lg p-6 mb-6'>
                <img src={Story} alt="Epic Icon" className="absolute top-3 left-3 w-8 h-8" />
                    <img src={Cross} alt="Cross Icon" className="absolute top-3 right-3 w-6 h-6" />
                    <img src={Check} alt="Check Icon" className="absolute top-3 right-12 w-6 h-6" />
                    <img src={Pencil} alt="Pencil Icon" className="absolute top-2 right-20 w-8 h-8" />
                    <span className='absolute top-3 left-14 flex inline-block font-bold font-notoSans text-lg'>Build Dashboard for...</span>
                    <div className='absolute top-10 p-3 text-left font-normal text-md'><span className='font-semibold'>Description:</span> Develop a simple user interface (dashboard) where mentees can view available mentors, either by random selection or by filtering based on shared interests or education.</div>
                </div>
                <div className='flex w-96 h-40 justify-center items-center bg-creamish transition duration-300 hover:bg-ticket-hover fade-in-up rounded-lg shadow-lg p-6 mb-6'>
                    <img src={Story} alt="Epic Icon" className="absolute top-3 left-3 w-8 h-8" />
                    <img src={Cross} alt="Cross Icon" className="absolute top-3 right-3 w-6 h-6" />
                    <img src={Check} alt="Check Icon" className="absolute top-3 right-12 w-6 h-6" />
                    <img src={Pencil} alt="Pencil Icon" className="absolute top-2 right-20 w-8 h-8" />
                    <span className='absolute top-3 left-14 flex inline-block font-bold font-notoSans text-lg'>Implement Mentor-M...</span>
                    <div className='absolute top-10 p-3 text-left font-normal text-md'><span className='font-semibold'>Description:</span> Develop an algorithm to match mentees with mentors based on criteria such as interests, educational background, and the number of prior chats. <span className='font-semibold'>Acceptance Criteria:</span>...</div>
                </div>
                <div className='flex w-96 h-40 justify-center items-center bg-creamish transition duration-300 hover:bg-ticket-hover fade-in-up rounded-lg shadow-lg p-6 mb-6'>
                    <img src={Story} alt="Epic Icon" className="absolute top-3 left-3 w-8 h-8" />
                    <img src={Cross} alt="Cross Icon" className="absolute top-3 right-3 w-6 h-6" />
                    <img src={Check} alt="Check Icon" className="absolute top-3 right-12 w-6 h-6" />
                    <img src={Pencil} alt="Pencil Icon" className="absolute top-2 right-20 w-8 h-8" />
                    <span className='absolute top-3 left-14 flex inline-block font-bold font-notoSans text-lg'>Create Mechanism to...</span>
                    <div className='absolute top-10 p-3 text-left font-normal text-md'><span className='font-semibold'>Description:</span> Implement a feature that allows for scheduling meetings between matched mentors and mentees, with calendar integration to handle time zone differences. <span className='font-semibold'>Acceptance Criteria:</span>...</div>
                </div>
                <div className='flex w-96 h-40 justify-center items-center bg-creamish transition duration-300 hover:bg-ticket-hover fade-in-up rounded-lg shadow-lg p-6 mb-2'>
                    <img src={Story} alt="Epic Icon" className="absolute top-3 left-3 w-8 h-8" />
                    <img src={Cross} alt="Cross Icon" className="absolute top-3 right-3 w-6 h-6" />
                    <img src={Check} alt="Check Icon" className="absolute top-3 right-12 w-6 h-6" />
                    <img src={Pencil} alt="Pencil Icon" className="absolute top-2 right-20 w-8 h-8" />
                    <span className='absolute top-3 left-14 flex inline-block font-bold font-notoSans text-lg'>Build Power App Inte...</span>
                    <div className='absolute top-10 p-3 text-left font-normal text-md'><span className='font-semibold'>Description:</span> Create a Power App interface for mentors and mentees to interact with the system, sign up, and manage their career exploration chats. <span className='font-semibold'>Acceptance Criteria:</span> (a) Develop a Power...</div>
                </div>
            </div>
        </div>
    );
}

export default GeneratedTickets;
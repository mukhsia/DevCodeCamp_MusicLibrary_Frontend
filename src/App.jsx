import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import axios from 'axios';

const fetchMusic = async () => {
    try {
        const response = await axios.get('https://localhost:7215/api/Songs');
    } catch (error) {
        console.warn('Error in fetching music.', error);
    }
};

function App() {
    useEffect(() => {
        fetchMusic();
    }, []);

    return (
        <div className='App'>
            <Header />
        </div>
    );
}

export default App;

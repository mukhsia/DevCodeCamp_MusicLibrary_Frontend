import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import MusicTable from './components/MusicTable/MusicTable';

function App() {
    const [songs, setSongs] = useState([]);
    const [searchFilter, setSearchFilter] = useState('');

    const fetchMusic = async () => {
        try {
            const response = await axios.get(
                'https://localhost:7215/api/Songs'
            );
            setSongs(response.data);
        } catch (error) {
            console.warn('Error in fetching music.', error);
        }
    };

    useEffect(() => {
        fetchMusic();
    }, []);

    return (
        <div className='App'>
            <Header />
            <div>
                <div>
                    <MusicTable songs={songs} searchFilter='' />
                </div>
            </div>
        </div>
    );
}

export default App;

import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import MusicTable from './components/MusicTable/MusicTable';
import SearchField from './components/SearchField/SearchField';
import NewMusicForm from './components/NewMusicForm/NewMusicForm';

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
            <div className='body-div p-5 d-flex justify-content-between flex-column'>
                <div className='flex-container px-5 py-4 background-color-1'>
                    <SearchField
                        searchFilter={searchFilter}
                        onChange={setSearchFilter}
                    />
                    <MusicTable
                        songs={songs}
                        searchFilter={searchFilter}
                        onMusicDelete={fetchMusic}
                    />
                </div>
                <div className='flex-container px-5 py-4 mt-5 background-color-2'>
                    <NewMusicForm onNewMusic={fetchMusic} />
                </div>
            </div>
        </div>
    );
}

export default App;

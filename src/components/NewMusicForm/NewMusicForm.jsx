import React, { useState } from 'react';
import TextField from '../TextField/TextField';
import axios from 'axios';
import './NewMusicForm.css';

const NewMusicForm = ({ onNewMusic }) => {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [genre, setGenre] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            title,
            artist,
            album,
            releaseDate,
            genre,
        };

        try {
            const response = await axios.post(
                'https://localhost:7215/api/Songs',
                formData
            );
            if (response.status === 201) {
                onNewMusic();
            }
        } catch (error) {
            console.warn('Error submitting NewMusicForm:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className='form-group'>
            <h4>Add to Music Library</h4>
            <div className='py-2'>
                <TextField label='Title' value={title} onChange={setTitle} />
                <TextField label='Artist' value={artist} onChange={setArtist} />
                <TextField label='Album' value={album} onChange={setAlbum} />

                <div className='mb-2'>
                    <label>Release Date</label>
                    <input
                        type='datetime-local'
                        value={releaseDate}
                        onChange={(e) => setReleaseDate(e.target.value)}
                        className='datetime'
                    />
                </div>

                <TextField label='Genre' value={genre} onChange={setGenre} />
                <div className='d-flex justify-content-end'>
                    <button type='submit' className='btn btn-primary mt-3'>
                        Add Song
                    </button>
                </div>
            </div>
        </form>
    );
};

export default NewMusicForm;

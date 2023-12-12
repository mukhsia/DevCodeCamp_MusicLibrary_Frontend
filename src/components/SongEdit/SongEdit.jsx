import axios from 'axios';
import TextField from '../TextField/TextField';
import React, { useState } from 'react';

const SongEdit = ({ song = [], onMusicUpdate }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleShowModal = (e) => {
        setIsModalOpen(!isModalOpen);
    };

    const [title, setTitle] = useState(song.title);
    const [artist, setArtist] = useState(song.artist);
    const [album, setAlbum] = useState(song.album);
    const [releaseDate, setReleaseDate] = useState(song.releaseDate);
    const [genre, setGenre] = useState(song.setGenre);

    const handleEditPut = async (e) => {
        e.preventDefault();

        const formData = {
            Id: song.id,
            title,
            artist,
            album,
            releaseDate,
            genre,
        };

        try {
            const response = await axios.put(
                `https://localhost:7215/api/Songs/${song.id}`,
                formData
            );
            if (response.status === 201) {
                onMusicUpdate();
            }
        } catch (error) {
            console.warn('Error submitting NewMusicForm:', error);
        }
    };

    return <div></div>;
};

export default SongEdit;

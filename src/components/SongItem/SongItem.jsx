import axios from 'axios';

const SongItem = ({ song = [], onMusicDelete }) => {
    const handleDelete = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.delete(
                `https://localhost:7215/api/Songs/${song.id}`
            );
            if (response.status === 204) {
                onMusicDelete();
            }
        } catch (error) {
            console.warn('Error deleting Song:', error);
        }
    };

    return (
        <tr>
            <td>{song.title}</td>
            <td>{song.artist}</td>
            <td>{song.album}</td>
            <td>{song.releaseDate}</td>
            <td>{song.genre}</td>
            <td>{song.likes}</td>
            <td>
                <form onSubmit={handleDelete} className='flex-item'>
                    <button type='submit'>Delete</button>
                </form>
            </td>
        </tr>
    );
};

export default SongItem;

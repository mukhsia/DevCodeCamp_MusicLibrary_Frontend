import SongItem from '../SongItem/SongItem';

const MusicTable = ({ songs = [], searchFilter = '', onMusicUpdate }) => {
    let songItems = songs;
    if (searchFilter) {
        songItems = songItems.filter(
            (song) =>
                song.title.includes(searchFilter) ||
                song.artist.includes(searchFilter) ||
                song.album.includes(searchFilter) ||
                song.genre.includes(searchFilter) ||
                song.releaseDate.includes(searchFilter) ||
                (parseInt(searchFilter) &&
                    song.likes === parseInt(searchFilter))
        );
    }
    songItems = songItems.map((song) => (
        <SongItem song={song} key={song.id} onMusicUpdate={onMusicUpdate} />
    ));

    return (
        <div>
            <table className='table music-table'>
                <thead className='thead-light'>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Release Date</th>
                        <th>Genre</th>
                        <th>Likes</th>
                        <th />
                    </tr>
                </thead>
                <tbody>{songItems}</tbody>
            </table>
        </div>
    );
};

export default MusicTable;

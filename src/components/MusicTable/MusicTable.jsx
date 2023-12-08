import SongItem from '../SongItem/SongItem';

const MusicTable = ({ songs = [] }) => {
    const songItems = songs.map((song) => (
        <SongItem song={song} key={song.id} />
    ));
    return (
        <div>
            <h2>Music Table</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Release Date</th>
                        <th>Genre</th>
                        <th>Likes</th>
                    </tr>
                </thead>
                <tbody>{songItems}</tbody>
            </table>
        </div>
    );
};

export default MusicTable;

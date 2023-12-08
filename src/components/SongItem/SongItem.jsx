const SongItem = ({ song } = []) => {
    return (
        <tr>
            <td>{song.title}</td>
            <td>{song.artist}</td>
            <td>{song.album}</td>
            <td>{song.releaseDate}</td>
            <td>{song.genre}</td>
            <td>{song.likes}</td>
        </tr>
    );
};

export default SongItem;

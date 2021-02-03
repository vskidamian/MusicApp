import React from 'react';

const LibrarySong = ({ song, setSongs, songs, currentSong, setCurrentSong }) => {
    const songSelectHandler = () => {
        setCurrentSong(song);

        const newSongs = songs.map((thisSong) => {
            if (thisSong.id === song.id) {
                return {
                    ...thisSong, active: true
                };
            } else {
                return {
                    ...thisSong, active: false
                }
            };
        });

        setSongs(newSongs);
    }


    return (
        <div onClick={songSelectHandler} className={`library-song ${song.id === currentSong.id ? "selected" : ""} `}>
            <img src={song.cover} alt={song.name} />
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
}



export default LibrarySong;
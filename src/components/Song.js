import React from 'react';
import { SongStyles } from '../styles/_song';

const Song = ({ currentSong }) => {
    return (
        <div className="song-container">
            <SongStyles />
            <img src={currentSong.cover} alt={currentSong.name} />
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
        </div>
    );
}



export default Song;
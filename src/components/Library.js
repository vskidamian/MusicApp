import React from 'react';
import LibrarySong from "./LibrarySong";
import { LibraryStyles } from '../styles/_library';

const Library = ({ libraryStatus, songs, setSongs, setCurrentSong, currentSong }) => {
    return (
        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
            <LibraryStyles />
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map(song => <LibrarySong setSongs={setSongs} currentSong={currentSong} setCurrentSong={setCurrentSong} songs={songs} song={song} key={song.id} />)}
            </div>
        </div>
    )
}

export default Library;
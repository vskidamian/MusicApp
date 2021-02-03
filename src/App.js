import React, { useState } from "react";
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import songsData from "./util";
//Styles
import { lightTheme, darkTheme } from './theme';
//Components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";


function App() {
  const [theme, setTheme] = useState('light');
  const [songs, setSongs] = useState(songsData());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} theme={theme} setTheme={setTheme} />
      <div className={`music-player ${libraryStatus ? 'music-player-active' : ''}`}>
        <Song
          currentSong={currentSong} />
        <Player
          setIsPlaying={setIsPlaying}
          isPlaying={isPlaying}
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
          setSongs={setSongs}
          songs={songs}
        />
      </div>
      <Library libraryStatus={libraryStatus} setSongs={setSongs} songs={songs} currentSong={currentSong} setCurrentSong={setCurrentSong} />
    </ThemeProvider>
  );
}

export default App;

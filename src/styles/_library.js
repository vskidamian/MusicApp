import { createGlobalStyle } from 'styled-components';

export const LibraryStyles = createGlobalStyle`
.library {
    position: fixed;
    box-shadow: 2px 2px 50px ${({ theme }) => theme.libraryShadow};
    top: 0;
    left: 0;
    width: 20rem;
    height: 100%;
    overflow: scroll;
    background: ${({ theme }) => theme.body};
    transform: translateX(-100%);
    transition: all 0.5s ease;
    opacity: 0;
    color: ${({ theme }) => theme.text};
    h2 {
      color: ${({ theme }) => theme.text};
      padding: 2rem;
    }
  }
  
  .library-song {
    display: flex;
    align-items: center;
    padding: 1rem 2rem 1rem 2rem;
    cursor: pointer;
    transition: all 0.75s ease-out;
  
    img {
      width: 30%;
    }
    &:hover {
      background: ${({ theme }) => theme.librarySong};
    }
  }
  .song-description {
    padding-left: 1rem;
    h3 {
      color: ${({ theme }) => theme.text};
      font-size: 1rem;
    }
    h4 {
        color: ${({ theme }) => theme.text};
      font-size: 0.7rem;
    }
  }
  
  /* The emerging W3C standard
     that is currently Firefox-only */
  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(155, 155, 155, 0.7) transparent;
  }
  
  /* Works on Chrome/Edge/Safari */
  *::-webkit-scrollbar {
    width: 5px;
  }
  *::-webkit-scrollbar-track {
    background: transparent;
  }
  *::-webkit-scrollbar-thumb {
    background-color: rgba(155, 155, 155, 0.7);
    border-radius: 20px;
    border: transparent;
  }
  
  .selected {
    background: ${({ theme }) => theme.selectedSong};
  }
  .active-library {
    transform: translateX(0%);
    opacity: 1;
  }
  
  @media screen and (max-width: 768px) {
    .library {
      width: 100%;
    }
  }
`
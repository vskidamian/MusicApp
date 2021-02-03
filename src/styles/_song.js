import { createGlobalStyle } from 'styled-components';

export const SongStyles = createGlobalStyle`
.song-container {
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 25%;
      border-radius: 50%;
      transition: all 2s ease;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    h2 {
      padding: 3rem 1rem 1rem 1rem;
      color: ${({ theme }) => theme.text};
    }
    h3 {
      font-size: 1rem;
      color: ${({ theme }) => theme.text};
    }
  }
  
  @media screen and (max-width: 768px) {
    .song-container {
      img {
        width: 60%;
      }
    }
  }
  
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  .rotateSong {
    animation: rotate 20s linear forwards infinite;
  }



`
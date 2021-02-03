import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Lato", sans-serif;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  .App {
    transition: all 0.5s ease;
  }
  .library-active {
    margin-left: 30%;
  }
  .music-player {
    transform: translateX(0%);
    transition: all 0.5s ease;
    width: 80%;
    margin: auto;
  }
  .music-player-active {
    transform: translateX(10%);
  }
  h1 {
    font-size: 1rem;
  }
  h2 {
    color: rgb(51, 51, 51);
  }
  h3,
  h4 {
    color: rgb(100, 100, 100);
    font-weight: 400;
  }
  
  
`
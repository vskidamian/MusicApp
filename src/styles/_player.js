import { createGlobalStyle } from 'styled-components';

export const PlayerStyles = createGlobalStyle`
.player {
    min-height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    
  }
  
  .time-control {
    width: 50%;
    display: flex;
    align-items: center;
    input {
      width: 100%;
      -webkit-appearance: none;
      background: transparent;
      cursor: pointer;
    }
  
    p {
      padding: 1rem;
    }
  }
  .play-control {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  
    width: 40%;
    svg {
      cursor: pointer;
    }
  }
  
  .track {
    width: 100%;
    height: 1rem;
    position: relative;
    overflow: hidden;
    border-radius: 1rem;
  }
  .animate-track {
    background: rgb(204, 204, 204);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(0%);
    padding: 1rem;
    pointer-events: none;
  }
  
  input[type="range"]:focus {
    outline: none;
  }
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 16px;
    width: 16px;
  }
  input[type=range]::-moz-focus-outer {
    border: 0;
  }
  input[type="range"]::-moz-range-thumb {
    -webkit-appearance: none;
    background: transparent;
    border: none;
  }

  @media screen and (max-width: 768px) {
    .time-control {
      width: 90%;
    }
    .play-control {
      width: 80%;
    }
  }
`
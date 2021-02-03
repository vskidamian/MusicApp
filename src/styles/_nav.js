import { createGlobalStyle } from 'styled-components';

export const NavStyles = createGlobalStyle`
nav {
    width: 80%;
    margin: auto;
    min-height: 10vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    button {
      background: ${({ theme }) => theme.body};
      cursor: pointer;
      padding: 0.5rem;
      border: 2px solid ${({ theme }) => theme.text};
      border-radius: 20px;
      transition: all 0.3s ease;
      color:  ${({ theme }) => theme.text};
      &:hover {
        background: ${({ theme }) => theme.text};
        color: ${({ theme }) => theme.body};
      }
    }
  }
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }
  
  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #999;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 40px;
    width: 40px;
    left: 0px;
    bottom: 4px;
    top: 0;
    bottom: 0;
    margin: auto 0;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    box-shadow: 0 0px 15px #2020203d;
    background: white url('https://i.ibb.co/7JfqXxB/sunny.png');
    background-repeat: no-repeat;
    background-position: center;
  }
  
  input:checked + .slider {
    background-color: #999;
  }
  
  input:focus + .slider {
    box-shadow: 0 0 1px rgba(155, 155, 155, 0.7)
  }
  
  input:checked + .slider:before {
    -webkit-transform: translateX(24px);
    -ms-transform: translateX(24px);
    transform: translateX(24px);
    background: black url('https://i.ibb.co/FxzBYR9/night.png');
    background-repeat: no-repeat;
    background-position: center;
  }
  
  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }
  
  .slider.round:before {
    border-radius: 50%;
  }

  @media screen and (max-width: 768px) {
    nav {
      button {
        z-index: 10;
      }
    }
  }
`
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons"
import { NavStyles } from '../styles/_nav';

const Nav = ({ libraryStatus, setLibraryStatus, theme, setTheme }) => {

    const toggleThemeHandler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }

    return (
        <nav>
            <NavStyles />
            <h1>Waves</h1>
            <label id="switch" className="switch">
                <input type="checkbox" onChange={() => toggleThemeHandler()} id="slider" />
                <span className="slider round"></span>
            </label>
            <button onClick={() => setLibraryStatus(!libraryStatus)}>
                Library
                <FontAwesomeIcon icon={faMusic} />
            </button>
        </nav>
    )
}

export default Nav;
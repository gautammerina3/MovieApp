import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="movie-header">
            <div className="movie-header-content">
                <Link to="/">
                    <img className="rmdb-logo" src="./images/reactMovie_logo.png" alt="movie-logo"
                    />
                </Link>
                <img className="rmdb-tmdb-logo" src="./images/tmdb_logo.png" alt="tmdb-logo" />
            </div>
        </div>
    )
}

export default Header;
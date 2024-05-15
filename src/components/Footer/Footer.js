import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="footer-title">
                The Generics
            </div>
            <div className="footer-icons">
                <ul>
                    <li>
                        <a href="https://www.youtube.com">
                            <img src="youtubelogo.jpg" alt="YouTube"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://spotify.com">
                            <img src="SpotifyLogo.png" alt="Spotify"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://facebook.com">
                            <img src="fblogo.png" alt="Facebook"/>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;

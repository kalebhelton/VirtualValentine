import {useState, useEffect, React} from 'react';
import "./SpotifyPage.css";
import {useNavigate} from "react-router-dom";
import Gif from "../Images/HappyDance.gif";

function SpotifyPage(){
    return(
        <div className = "page-wrapper">
            <div id = "page"></div>
                <div className = "spotify">
                <iframe
                    className = "spotify"
                    src = "https://open.spotify.com/embed/playlist/06qKKgO7Z3MWIMmD6opYVh?utm_source=generator&theme=0"
                    allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading = "lazy"
                    title = "Spotify Embed"
                ></iframe>

                </div>
        </div>
    );
} export default SpotifyPage;

import React from "react";
import { useNavigate} from "react-router-dom";
import Gif from "../Images/Hearts.gif"
import "./HomePage.css";

function Title(){
    return(
        <p className = "title">
            Happy Valentine's Day
        </p>
    );
}

function Button(){
    const navigate = useNavigate();
    return(
        <div className = "button-wrapper">
            <button onClick = {() => navigate("/question")} className = "button">
                Start Here
            </button>
        </div>
    );
}

function Page(){
    return(
        <div className = "page-wrapper">
            <div className = "title-wrapper">
                <img 
                    src = {Gif} 
                    alt = "Hearts"
                    className = "heartsGif"
                />
                <Title />
                <img 
                    src = {Gif} 
                    alt = "Hearts"
                    className = "heartsGif"
                />
            </div>
            <Button />
        </div>
    );
}

function HomePage(){
    return(
        <div className = "home-page">
            <Page />
        </div>
    );
} export default HomePage;
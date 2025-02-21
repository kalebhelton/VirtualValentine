import React from "react";
import Gif from "../Images/Hearts.gif"
import "./HomePage.css";

function Title(){
    return(
        <div className = "title-wrapper">
            <p className = "title">
                Happy Valentine's Day
            </p>
        </div>
    );
}

function Page(){
    return(
        <div className = "page-wrapper">
            <img 
                src = {Gif} 
                alt = "Hearts"
                className = "heartsGif1"
            />
            <Title />
            <img 
                src = {Gif} 
                alt = "Hearts"
                className = "heartsGif2"
            />
        </div>
    )
}

function HomePage(){
    return(
        <div className = "home-page">
            <Page />
        </div>
    );
} export default HomePage;
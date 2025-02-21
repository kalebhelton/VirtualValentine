import React from "react";
import {useNavigate} from "react-router-dom";
import Gif from "../Images/Please.gif";
import "./QuestionPage.css";

function Question(){
    return(
        <div className = "question-wrapper">
            <p className = "line1">
                Will you be mine on the 14th?
            </p>
        </div>
    );
}

function Buttons(){
    const navigate = useNavigate();
    return(
        <div className = "buttons">
            <button onClick = {() => navigate("/YesPage")}>Yes</button>
            <button onClick = {() => navigate("/NoPage")}>No</button>
        </div>
    );
}

function Page(){
    return(
        <div className = "page-wrapper">
            <div id = "page"></div>
            <img 
                src = {Gif} 
                alt = "Please"
                className = "questionGif"
            />
            <Question />
            <Buttons />
        </div>
    );
}

function QuestionPage(){
    return(
        <div className = "question-page">
          <Page />
        </div>
      );
} export default QuestionPage;
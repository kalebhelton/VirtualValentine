import {useState, useEffect, React} from 'react';
import "./YesPage.css";
import {useNavigate} from "react-router-dom";
import Gif from "../Images/HeartExploding.gif";

function Button(){
    const navigate = useNavigate();
    return(
        <div className = 'button-wrapper'>
            <button onClick = {() => navigate("/letter")} className = "button">
                Love Letter
            </button>
        </div>
    );
}

function Image(){
    return(
        <div nameClass = "gif-wrapper">
            <img 
                src = {Gif} 
                alt = "HeartExploding" 
                className = "gif" 
            />
        </div>
    );
}

function GifSequence(){
    const[currentStep, setCurrentStep] = useState(1);
    

    useEffect(() => {
        const timers = [];

        timers.push(setTimeout(() => setCurrentStep(2), 7000));
        return () => timers.forEach(clearTimeout);
    }, []);

    return(
        <div className = "sequence-container">
            {currentStep === 1 && (<Image />)} 
            {currentStep === 2 && (<Button />)}
        </div>
    );
}

function YesPage(){
    return(
        <div id = "page">
            <div className = "page-wrapper">
                <GifSequence />
            </div>
        </div>
    );
} export default YesPage;
import {useState, useEffect, React} from 'react';
import "./NoPage.css";
import {useNavigate} from "react-router-dom";
import Gif from "../Images/SobbingCat.gif";

function GifSequence(){
    const[currentStep, setCurrentStep] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        const timers = [];

        timers.push(setTimeout(() => setCurrentStep(2), 9000));
        return () => timers.forEach(clearTimeout);
    }, []);

    return(
        <div className = "sequence-container">
            {currentStep === 1 
            && 
            <img 
                src = {Gif} 
                alt = "SobbingCat" 
                className = "gif" 
            />}
            {currentStep === 2
            &&
            (
                <button onClick = {() => navigate("/question")} className = "button">
                        Try Again
                </button>
            )}
        </div>
    );
}

function NoPage(){
    return(
        <div className = "page-wrapper">
            <div id = "page"></div>
            <GifSequence />
        </div>
    );
} export default NoPage;
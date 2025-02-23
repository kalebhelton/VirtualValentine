import {useState, useEffect, React} from 'react';
import "./YesPage.css";
import {useNavigate} from "react-router-dom";
import Gif from "../Images/HeartExploding.gif";

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
                alt = "HeartExploding" 
                className = "gif" 
            />}
            {currentStep === 2
            &&
            (
                <button onClick = {() => navigate("/letter")} className = "button">
                        Love Letter
                </button>
            )}
        </div>
    );
}

function YesPage(){
    return(
        <div className = "page-wrapper">
            <div id = "page"></div>
            <GifSequence />
        </div>
    );
} export default YesPage;
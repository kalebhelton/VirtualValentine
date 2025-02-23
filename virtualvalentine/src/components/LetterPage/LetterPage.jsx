import {useState, useEffect, React} from "react";
import {useNavigate} from "react-router-dom";
import "./LetterPage.css";


function Hearts(){
    return(
        <div className = "hearts">
            <div className = "heart A1"></div>
            <div className = "heart A2"></div>
            <div className = "heart A3"></div>
            <div className = "heart A4"></div>
            <div className = "heart A5"></div>
            <div className = "heart A6"></div>
            <div className = "heart A7"></div>
        </div>
    );
}

function Letter(){
    return(
        <div className = "letter">
            <p className = "word Line1">  {/* words to make him swoon <3 */}
                My Sal,
            </p>
            <p className = "word Line2">
                You're the STAR that brightens my day!
            </p>
            <p className = "word Line3">
                Make my day brighter by saying you'll be mine?
            </p>
            <p className = "word Line4">
                Yours,
            </p>
            <p className = "word Line5">
                Kaleb
            </p>
        </div>
    );
}

function Envelope() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className = " envelope-wrapper">
            <div
                id = "envelope"
                className = {isOpen ? "open" : "close"}
                onClick = {() => setIsOpen(!isOpen)}
            >
                <div className = "front flap"></div>
                <div className = "front pocket"></div>
                <Letter />
                <Hearts />
            </div>
        </div>
    );
}

function GifSequence(){
    const[currentStep, setCurrentStep] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        const timers = [];

        timers.push(setTimeout(() => setCurrentStep(2), 10000));
        return () => timers.forEach(clearTimeout);
    }, []);

    return(
        <div className = "sequence-container">
            {currentStep === 1
            &&
            (
                <Envelope />
            )}
            {currentStep === 2
            &&
            (
                <div className = "text1-wrapper">
                    <p className = "text1">
                        Here's Some Tunes That Make Me Think Of You
                    </p>
                    <div className = "button-wrapper">
                        <button onClick = {() => navigate("/spotify")} className = "button">
                            S.A.L.: Songs Abt Love
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

function LetterPage() {
    return (
        <div className = "letter-page">
            <GifSequence />
        </div>
    );
} export default LetterPage;
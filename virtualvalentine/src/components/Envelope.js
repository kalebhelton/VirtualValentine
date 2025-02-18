import React, {useState} from "react";
import Letter from "./Letter";  // import the letter opject
import Hearts from "./Hearts";  // import the heart object
import "../styles.css";  // import existing styles

const Envelope = () => {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className = "envelope-wrapper"> {/*  class: way to reference something in the code */}
            <div 
                id = "envelope" 
                className = {isOpen ? "open" : "close"} 
                onClick = {() => {setIsOpen(!isOpen)}}  /*  this is the envelope & the actions of opening & closeing the envelope on click */
            >  
                <div className = "front flap"></div> {/*  this is the envelope front flap that will open + close */}
                <div className = "front pocket"></div> {/*  this is where the letter will sit in the envelope */}
                <Letter />  {/* renders the letter w/in the envelope */}
                <Hearts />  {/* renders the hearts w/in the envelope */}
            </div>
        </div>
    );
}; export default Envelope;
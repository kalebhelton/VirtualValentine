import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import QuestionPage from "./components/QuestionPage/QuestionPage";
import LetterPage from "./components/LetterPage/LetterPage";
import YesPage from "./components/YesPage/YesPage";
import NoPage from "./components/NoPage/NoPage";
import SpotifyPage from "./components/SpotifyPage/SpotifyPage";

function App(){
    return(
        <Router>
            <Routes>
                <Route 
                    path = "/"
                    element = {<HomePage />} />
                <Route
                    path = "/question"
                    element = {<QuestionPage />} />                    
                <Route 
                    path = "/letter"
                    element = {<LetterPage />} />
                <Route 
                    path = "/yes"
                    element = {<YesPage />} />
                    <Route
                        path = "/no"
                        element = {<NoPage />} />
                    <Route 
                        path = "/spotify"
                        element = {<SpotifyPage />} />
            </Routes>
        </Router>
    );
}; export default App;
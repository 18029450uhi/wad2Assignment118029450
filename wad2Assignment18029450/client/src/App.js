import QuestionPage from './pages/QuestionPage';
import SignUpIn from './pages/SignUpIn'
import Home from './pages/Home'
import QuestionList from './pages/QuestionList'
import NavBar from './components/NavBar';
import ALevelQuestions from "./components/ALevelComputing";

import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation
} from "react-router-dom";


function App() {
    return (
        <Router>
        <NavBar/>
            {/*//<Navigation />*/}
            <Routes>
                <Route path="/q/:qid" element={<QuestionPage/>}/>
                <Route path="/login" element={<SignUpIn/>}/>
                <Route path="/qlist" element={<QuestionList/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/a-level" element={<ALevelQuestions/>}/>
            </Routes>
        </Router>
    );
}

//function Navigation() {
    //const location = useLocation();
    //return location.pathname !== '/a-level' ? <NavBar/> : null;
//}

export default App;

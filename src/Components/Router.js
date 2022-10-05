import React from 'react';
// 👇️ import Routes instead of Switch 👇️
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "../Pages/Home";
import About from "../Pages/About";
import Error from "../Pages/Error";


function RouterApp() {
    return (
        <Router>
            <div>
                {/* enveloper le composant Route dans le parent composant Routes pour la new version react */}
                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/error" element={<Error />} />
                </Routes>
            </div>
        </Router>
    );
}

export default RouterApp

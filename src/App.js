import React from 'react';
// 👇️ import Routes instead of Switch 👇️
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Error from "./Pages/Error";




export default function App() {
    return (
        <Router>
            <div>
                {/* 👇️ Wrap your Route Components in a Routes component */}
                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/error" element={<Error />} />
                </Routes>
            </div>
        </Router>
    );
}


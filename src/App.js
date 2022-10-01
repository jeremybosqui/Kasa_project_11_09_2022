import React from 'react';
// 👇️ import Routes instead of Switch 👇️
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Error from "./components/Error";


export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/error">Not Found</Link>
                        </li>
                    </ul>
                </nav>

                {/* 👇️ Wrap your Route components in a Routes component */}
                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/error" element={<Error />} />
                </Routes>
            </div>
        </Router>
    );
}


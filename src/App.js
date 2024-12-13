import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import GlobalStyle from "./GlobalStyle"; // Import the global styles

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // For testing, set to true

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsLoggedIn(!!user);
        });
        return () => unsubscribe();
    }, []);

    return (
        <>
            {/* Apply global styles */}
            <GlobalStyle />
            <div className="App">
                <Router>
                    <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/home" element={<Home />} />
                    </Routes>
                </Router>
            </div>
        </>
    );
}

export default App;

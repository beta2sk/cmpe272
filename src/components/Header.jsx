import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import "./Header.css";

function Header({ isLoggedIn, setIsLoggedIn }) {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setIsLoggedIn(false);
            navigate("/");
        } catch (error) {
            console.error("Logout Error:", error.message);
        }
    };

    return (
        <header className="header">
            <h1 className="company-name">The Desi Market Place</h1>
            {isLoggedIn && (
                <button onClick={handleLogout} className="logout-btn">
                    Logout
                </button>
            )}
        </header>
    );
}

export default Header;

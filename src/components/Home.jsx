import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Home.css";

function Home() {
    const location = useLocation();
    const [visitCounts, setVisitCounts] = useState({
        fineDine: 0,
        statifyAnalytics: 0,
        blazingPhoenix: 0,
        wanderlustTravel: 0,
    });

    const name = location.state?.name || "User"; // Fallback to "User" if no name is provided

    const handleButtonClick = (buttonKey, url) => {
        setVisitCounts((prevCounts) => ({
            ...prevCounts,
            [buttonKey]: prevCounts[buttonKey] + 1,
        }));
        window.open(url, "_blank");
    };

    return (
        <div className="home-container">
            <h1>Welcome, {name}!</h1>
            <div className="button-section">
                <button
                    onClick={() => handleButtonClick("fineDine", "https://manujain.xyz/")}
                >
                    FINE DINE
                </button>
                <button
                    onClick={() =>
                        handleButtonClick("statifyAnalytics", "http://deepatidarr.42web.io/")
                    }
                >
                    Statify Analytics
                </button>
                <button
                    onClick={() =>
                        handleButtonClick(
                            "blazingPhoenix",
                            "http://svwaroopananda.infinityfreeapp.com/blazing_phoenix/"
                        )
                    }
                >
                    Blazing Phoenix Decorations
                </button>
                <button
                    onClick={() =>
                        handleButtonClick(
                            "wanderlustTravel",
                            "https://ksbhat.lovestoblog.com/"
                        )
                    }
                >
                    Wanderlust Travel Agency
                </button>
            </div>
            <div className="visit-counts">
                <h2>Website Visit Counts</h2>
                <p>FINE DINE: {visitCounts.fineDine}</p>
                <p>Statify Analytics: {visitCounts.statifyAnalytics}</p>
                <p>Blazing Phoenix Decorations: {visitCounts.blazingPhoenix}</p>
                <p>Wanderlust Travel Agency: {visitCounts.wanderlustTravel}</p>
            </div>
            <footer className="footer">
                <p>© {new Date().getFullYear()} The Desi Market Place. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;

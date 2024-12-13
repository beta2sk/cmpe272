import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "./Login.css"; // Import the new CSS file for styling

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log("User logged in:", userCredential.user);
            navigate("/home", { state: { id: email } });
        } catch (error) {
            alert("Invalid credentials. Please try again.");
            console.error("Login Error:", error.message);
        }
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <h1>The Desi Market Place</h1>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Submit</button>
                </form>
                <p>OR</p>
                <Link to="/signup" className="link">Signup Page</Link>
            </div>
        </div>
    );
}

export default Login;

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* Import Google Fonts */
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

    /* Global styles */
    body {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
        background: linear-gradient(to bottom, #e8f5e9, #c8e6c9); /* Light green gradient */
        color: #333;
        box-sizing: border-box;
    }

    h1, h2, h3 {
        margin: 0;
    }

    a {
        color: #0d6efd;
        text-decoration: none;
        transition: color 0.3s ease-in-out;
    }

    a:hover {
        color: #0056b3;
    }

    button {
        background-color: #0d6efd;
        color: white;
        border: none;
        padding: 10px 15px;
        font-size: 1rem;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease-in-out, transform 0.2s;
    }

    button:hover {
        background-color: #0056b3;
        transform: scale(1.05);
    }

    /* Add global padding to ensure fixed header does not overlap content */
    #root {
        padding-top: 80px; /* Match the header height */
    }
`;

export default GlobalStyle;

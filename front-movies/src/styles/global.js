import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    body {
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_FULL};
        color: ${({theme}) => theme.COLORS.WHITE};

        -webkit-font-smothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto Slab', serif;
        font-size: 14px;
        outline: none;
    }
    
    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }
`;

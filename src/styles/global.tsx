import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
    background-color: #c0392b;
}
body {
    display: flex;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
}
`;

export { GlobalStyle };

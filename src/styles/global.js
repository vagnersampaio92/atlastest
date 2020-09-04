import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0 ;
        padding: 0;
        box-sizing: border-box;

    }
    
    body{
        background: white ;
        text-rendering: optimizeLegibility !important;
        margin: 0 ;
        height:100vh;
        background:#F8FAFB;
    }
    a{
        color:black !important;
        text-decoration:none;
    }
    
`;

export default GlobalStyle;
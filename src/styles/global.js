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

    }
    a{
        color:black !important;
  
    }
    
`;

export default GlobalStyle;
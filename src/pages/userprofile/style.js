import styled from 'styled-components'
export const Container = styled.div`
width:100%;
height:100vh;
display:flex;

flex-direction: column;
align-items: center;


`

export const Align = styled.div`
 width: 100%;
 max-width: 860px;
 height:100vh;

display:flex;
flex-direction:column;

background:white;
@media (min-width: 768px) {
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
    margin-top:30px;
  

    }
 
`;
import styled from 'styled-components'
export const Align = styled.div`
 width: 100%;

display:flex;
justify-content: center;
 
`;

export const Container = styled.div`
width: 100%;
max-width: 860px;

display: flex;
flex-direction: column;
flex-flow:row wrap;
background:white;


@media (min-width: 768px) {
    justify-content: center;
    flex-direction: row;
    margin-top:100px;

    }
`;
export const Line = styled.div`
 margin: 0 10px;
 width:100%;
 border-bottom: 0.5px solid #90A4AE;
 padding:5px 0;
 :last-child {
    border-bottom:none;
}
 @media (min-width: 768px) {
    border-bottom:none;    
    margin: 0;
    width: 140px;
    height: 215px;

    }
 
`;



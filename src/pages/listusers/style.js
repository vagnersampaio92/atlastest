import styled from 'styled-components'
export const Align = styled.div`
 width: 100%;
display:flex;
flex-direction:column;
justify-content: center;
@media (min-width: 768px) {
   
    flex-direction: row;
  

    }
 
`;

export const Input = styled.div`
background: #FFFFFF;
box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
border-radius: 5px;
margin: 30px 20px;
display:flex;
padding:4px 5px;
color: #EDEDED;
width:100%;
input{
    width:100%;
    border:none;
    margin-left:4px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
/* or 167% */
    display: flex;
    align-items: center;
    color: #000000;
}

@media (min-width: 768px) {
  
   width: 245px;
    height: 35px;
    align-items: center;
   }

`;

export const Alignsearch = styled.div`
display:flex;
width:100%;


p{
    display:none;
    @media (min-width: 768px) {
        display:block;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 30px;
        line-height: 36px;
        /* or 121% */
        color: #000000;

    }
}
@media (min-width: 768px) {
    width:90%;
    margin:0 52px 0 52px;
    justify-content: space-between;
    align-items:center;
    border-bottom: 1px solid #EDEDED;
}
`;

export const Containerexternal = styled.div`
width: 100%;
max-width: 860px;
display: flex;
flex-direction: column;
background:white;
padding-bottom:50px;


@media (min-width: 768px) {
    justify-content: center;
    filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
    margin-top:50px;

    }

`;

export const Container = styled.div`
width: 100%;
max-width: 860px;
display: flex;
flex-direction: column;
flex-flow:row wrap;
background:white;
margin-top:5px;
@media (min-width: 768px) {
    justify-content: center;
    flex-direction: row;
    padding:0 30px;
    margin-top:30px;

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



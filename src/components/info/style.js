import styled from 'styled-components'
export const Img= styled.img`
width: 140px;
height: 140px;

`;
export const Container= styled.div`

`;
export const Menu= styled.div`
display: flex;
width:100%;
font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 22px;
background: #F7F9FA;
margin-top:30px;
cursor: pointer;
`;
export const Menuoption= styled.div`
display: flex;
width:100%;
justify-content:center;
align-items:center;

height: 50px;
border-right: 1px solid #DAE5F0;
:last-child {
    border-right:none;
}
`;
export const Menuoptionselected= styled.div`
display: flex;
width:100%;
justify-content:center;
align-items:center;

height: 50px;
border-bottom: 3px solid #5C97D2;
border-right: 1px solid #DAE5F0;
:last-child {
    border-right:none;
}
`;

export const Content= styled.div`
background-color:white;
padding:  20px;

`;
export const Bio= styled.div`
font-family: Montserrat;
font-style: normal;
background-color:white;
h3{
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    color: #162668;
    margin-bottom:20px;
}
p{
    font-size: 16px;
    line-height: 22px;
    color: #263238;
    margin-bottom:20px;
    }
div{
  
    font-weight: 600;
    font-size: 16px;
    line-height: 40px;
    color: #162668;
    svg{
        margin-right:10px;
    }
}

`;
export const Repos= styled.div`

`;
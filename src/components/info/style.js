import styled from 'styled-components'
export const Img = styled.img`
width: 140px;
height: 140px;

`;
export const Container = styled.div`
@media (min-width: 768px) {
    display:flex;
    background:white;
   

    }

`;
export const Menu = styled.div`
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
@media (min-width: 768px) {
    flex-direction:column;
    max-width:30%;
    height:100vh;
    background: white;
  

    }
`;
export const Menuoption = styled.div`
display: flex;
width:100%;
justify-content:center;
align-items:center;

height: 50px;
border-right: 1px solid #DAE5F0;
background: #F7F9FA;



`;

export const Menuoptionselected = styled.div`
display: flex;
width:100%;
justify-content:center;
align-items:center;

height: 50px;
border-bottom: 3px solid #5C97D2;
border-right: 1px solid #DAE5F0;
@media (max-width: 767px) {
    :last-child {
    border-right:none;
    }
}
@media (min-width: 768px) {
    background: #F7F9FA;
    border-right: 3px solid #5C97D2;
    border-bottom: 1px solid #DAE5F0;
    :last-child {
    border-bottom:none;
    border-top: 1px solid #DAE5F0;
    }
}
`;

export const Content = styled.div`
background-color:white;
padding:  20px;
@media (min-width: 768px) {
    
    border-left: 1px solid #CECECE;

}

`;
export const Bio = styled.div`
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
export const Repos = styled.div`

`;
export const Loading = styled.h1`
font-style: normal;
font-weight: 600;
font-size: 15px;
line-height: 36px;
color: #162668;
margin-top:10px;
text-align:center;
width:100%;
font-family: Montserrat;
`
export const End = styled.h1`
font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 15px;
line-height: 36px;
color: #162668;
margin-top:10px;
text-align:center;
width:100%;
`
import styled from 'styled-components'


export const Container = styled.div`
width:100%;
display: flex;
flex-direction: column;
max-width:450px;
@media (min-width: 768px) {
        
    }
input{
    margin-top: 20px;
    border:solid 1px #90A4AE;
    border-radius: 4px;
    padding:4px;
    height:30px;
    color:#90A4AE;
    @media (min-width: 768px) {
        height:40px;
    }
}
`;

export const Alignbutton= styled.div`
  display: flex;
    justify-content: space-between;
    margin-top: 20px;

`;
export const Buttonall = styled.div`
width: 120px;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
background:#344FA5;
color: white;
border-radius: 4px;
font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 22px;
cursor: pointer;
@media (min-width: 481px) {
    width: 180px;
   
    }

@media (min-width: 768px) {
    width: 200px;
    }
`;
export const Buttonsearch = styled.div`
width: 120px;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
background:#6FCF97;
color: white;
border-radius: 4px;
font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 22px;
cursor: pointer;
@media (min-width: 481px) {
    width: 180px;
   
    }
@media (min-width: 768px) {
    width: 200px;
    }
`;
import styled from 'styled-components'

export const Container = styled.div`
margin-bottom:10px;
font-family: Montserrat;
font-style: normal;
font-weight: 600;
padding:7px;
border-bottom: 0.5px solid rgba(0, 0, 0, 0.5);
:last-child {
    border-bottom:none;
}
div{
    display:flex;
    justify-content: space-between;
   
}
`;
export const Description = styled.div`
font-size: 10px;
line-height: 21px;
color: #586069;
margin-left:10px;

`;
export const Title = styled.div`
font-size: 14px;
line-height: 21px;
color: #0366D6;

`;
export const Language = styled.div`
font-size: 8px;
line-height: 21px;
color: #586069;
svg{
    margin-top:-2px;
    margin-right:4px;
}

`;
export const Date = styled.div`
font-size: 8px;
line-height: 21px;
color: #586069;

`;
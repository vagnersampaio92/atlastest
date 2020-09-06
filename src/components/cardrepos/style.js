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
export const Javascript = styled.span`
color:#f1e05a;
`;
export const Java = styled.span`
color:#b07219;
`;
export const Php = styled.span`
color:#BD0000;
`;
export const Dart = styled.span`
color:#31BD00;
`;
export const Cpp = styled.span`
color:#00B2BD;
`;
export const Default = styled.span`
color:#586069;
`;
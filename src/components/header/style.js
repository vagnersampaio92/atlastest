import styled from 'styled-components'


export const Container = styled.div`
border-bottom: 1px solid #90A4AE;
margin: 0 10px;
display:flex;
height: 50px;
align-items: center;

@media (min-width: 481px) {
    height: 60px;
    }
@media (min-width: 768px) {
    border-bottom: none;
    margin: 0;
    background: white;
    height: 60px;
    filter: drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.05));
    
}
`;
export const Icon= styled.div`
display:flex;
color: #90A4AE;
p{
    margin-left:14px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: #263238;
    }
    @media (min-width: 768px) {
        display:none;
    }
`;

export const Img= styled.div`


`;
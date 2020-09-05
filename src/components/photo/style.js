import styled from 'styled-components'
import bgimg from '../../assets/bg.png'

// 4096 × 2731

export const Container = styled.div`

height:300px;
color: #162668;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
@media (min-width: 768px) {
   
}
`
export const Bgimg = styled.div`
background: blue;
z-index:1;
grid-column:1/11;
grid-row:1/9;
display:flex;
justify-content: center;
background: url(${bgimg} )   no-repeat center;
background-size: 590px 530px;
background-position: center -380px;
@media (min-width: 768px) {
    grid-row:1/9;
    background-size: 100% 1030px;
    background-position: center -730px;
}
`
export const Photo = styled.div`
z-index:2;
grid-column:4/8;
grid-row:3/7;
display:flex;
justify-content: center;
@media (min-width: 768px) {
    grid-column:1/4;
    grid-row:7/11;
}
`
export const Cards = styled.div`

z-index:3;
grid-column:1/11;
grid-row:9/11;
display:flex;
justify-content: center;
@media (min-width: 768px) {
    grid-column:6/12;
    grid-row:8/9;
}

`
export const Information = styled.div`

width:30%;
display: flex;
flex-direction:column;
justify-content: space-between;

padding:10px;
div{
    display: flex;
    width:100%;
    h3{
        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        
    }
    p{
        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
       
        margin-left: 3px;
    }
}
@media (min-width: 480px) {
   margin-left:33px;
}
@media (min-width: 768px) {
    width:12%;
    height:15%;
}
`;

export const Name = styled.div`
z-index:2;
grid-column:1/11;
grid-row:8/9;
display:flex;

flex-direction: column;
text-align: center;

p{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    
    @media (min-width: 768px) {
            text-align: right;
        }
   
}
div{
    
    p{
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        color: #90A4AE;
        @media (min-width: 768px) {
            text-align: right;
        }
    }
    
}
@media (min-width: 768px) {
grid-column:3/6;
grid-row:8/9;
}
`

export const Img = styled.img`
width:120px;
height:120px;
border-radius:50%;
background: linear-gradient(180deg, #162668 0%, #20276A 4%, #663279 30%, #9D3985 54%, #C53F8D 74%, #DD4392 90%, #E64494 100%);
/* Base Colors / Background grey */
border: 5px solid #ECEFF1;
@media (min-width: 768px) {
    width:170px;
    height:170px;
}

`;



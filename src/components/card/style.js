import styled from 'styled-components'

export const Container = styled.div`
/* width: 140px;
height: 215px; */
    width: 100%;
    height: 50px;
    display: flex;
   align-items: center;
   margin: 0 10px;
  
 
   @media (min-width: 768px) {
        flex-direction: column;
        width: 140px;
        height: 230px;
        justify-content: center;
        /* border:  0.5px solid #90A4AE; */
        margin: 0 0;
    }
   
img{
    width: 50px;
    height: 50px;
    background:  linear-gradient(180deg, #162668 0%, #20276A 4%, #663279 30%, #9D3985 54%, #C53F8D 74%, #DD4392 90%, #E64494 100%);
    @media (min-width: 768px) {
        width: 100px;
        height: 100px;
        
    }
    border: 5px solid #F2F2F2;
    border-radius:50%;
}
p{
    justify-content: center;
    align-items: center;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
 
    text-overflow: ellipsis;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: #162668;
    word-wrap: break-word;
    margin-left:20px;
    @media (min-width: 768px) {
        font-size: 20px;
        margin-left:0px;
        max-width:136px;
        
    }
}

`;

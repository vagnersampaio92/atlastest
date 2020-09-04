import React from 'react';
import { Container, Img } from "./style"
import Homelogo from '../../components/homelogo/index'
import Homeinput from '../../components/homeinput/index'
const Home= () => {

    return (
       
           <Container>
                <Homelogo />
                <Homeinput />
            </Container>

      
    )
}

export default Home
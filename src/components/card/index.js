import React from 'react';
import { Container } from "./style"

const listusers = ({obj}) => {

    return (
        
           <Container>
               <img src={obj.foto}></img>
               <p>{obj.name}</p>
            </Container>

        
    )
}

export default listusers 
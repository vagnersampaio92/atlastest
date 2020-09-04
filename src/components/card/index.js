import React from 'react';
import { Container } from "./style"

const listusers = ({obj}) => {

    return (
        
           <Container>
               <img src={obj.avatar_url}></img>
               <p>{obj.login}</p>
            </Container>

        
    )
}

export default listusers 
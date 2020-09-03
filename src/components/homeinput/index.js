import React from 'react';
import { Container,Buttonall, Buttonsearch,Alignbutton } from "./style"
import Logo from '../../assets/logogit.png'

const Homeinput = () => {

    return (
        <>
            <Container>
                    
                   <input value="Pesquisar..." ></input> 
                    <Alignbutton >
                        <Buttonall>Ver Todos</Buttonall>
                       <Buttonsearch>Buscar</Buttonsearch>
                   </Alignbutton >
            
            </Container>

        </>
    )
}

export default Homeinput
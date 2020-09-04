import React from 'react';
import { Container, Img,  Icon } from "./style"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
const Header = () => {

    return (
        <>
            <Container>
               
                   <Icon>
                   <ArrowBackIcon />
                   <p>Lista de Usuários</p>
                   </ Icon>
                
            </Container>

        </>
    )
}

export default Header 
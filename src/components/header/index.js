import React from 'react';
import { Container, Img, Icon } from "./style"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Logo from '../../assets/logogit.png'
import { Backdrop } from '@material-ui/core';

const Header = () => {
    function back(){
        
        window.history.back()
    }

    return (
      
            <Container>

                <Icon>
                    <ArrowBackIcon onClick={() => back()}/>
                    <p>Lista de Usuários</p>
                </ Icon>
                <Img >
                    <img src={Logo} alt="logo git" ></img>
                    <p>GitSearch</p>
                </Img>

            </Container>

       
    )
}

export default Header 
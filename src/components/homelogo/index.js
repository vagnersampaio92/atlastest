import React from 'react';
import { Container, Img } from "./style"
import Logo from '../../assets/logogit.png'

const Homelogo = () => {

    return (
        <>
            <Container>
                <div>
                    <Img src={Logo} alt="logo git" ></Img>
                    <p>GitSearch</p>
                </div>
            </Container>

        </>
    )
}

export default Homelogo
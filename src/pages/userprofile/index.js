import React, { useContext, useState, useEffect } from 'react'
import { Align, Container } from "./style"
import Header from '../../components/header/index'
import api from '../../services/api'
import Photo from '../../components/photo/index'

const Userprofile = () => {
    let [perfil, setperfil] = useState({})
    useEffect(() => {
        load()
    }, []);
    async function load() {
        try {
            const response = await api.get('users/diego3g')
            let obj = {}
            obj = response.data
            setperfil(obj)
        } catch (err) {
        }

    }
    console.log(perfil)
    return (
        <>
            <Header page="Perfil" />
            <Container>
                
                <Align>
                <Photo obj={perfil} />
                {perfil.name}
                </Align>
            </Container>

        </>

    )
}
export default Userprofile
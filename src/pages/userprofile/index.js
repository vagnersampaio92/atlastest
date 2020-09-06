import React, { useContext, useState, useEffect } from 'react'
import { Align, Container } from "./style"
import Header from '../../components/header/index'
import api from '../../services/api'
import Photo from '../../components/photo/index'
import Info from '../../components/info/index'
import { SearchContext } from '../../store/index'
import { useHistory } from 'react-router-dom';

const Userprofile = () => {
    let [perfil, setperfil] = useState({})
    const { selected } = useContext(SearchContext)
    const history = useHistory();
    useEffect(() => {
        if(selected==''){
            history.push("/");
        }else{
            load()
        }
        
    }, []);
    async function load() {
        try {
            const response = await api.get('users/'+selected)
            let obj = {}
            obj = response.data
            setperfil(obj)
        } catch (err) {
        }

    }
    
    return (
        <>
            <Header page="Perfil" />
            <Container>
                
                <Align>
                <Photo obj={perfil} />
                <Info obj={perfil}/>
                </Align>
            </Container>

        </>

    )
}
export default Userprofile
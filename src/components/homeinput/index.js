import React, { useContext, useState } from 'react'
import { SearchContext } from '../../store/index'
import { Container, Buttonall, Buttonsearch, Alignbutton } from "./style"
import { Link } from 'react-router-dom'



const Homeinput = () => {
    const { searchobj } = useContext(SearchContext)
    const { hendlesearch } = useContext(SearchContext)

    function searchall() {
        hendlesearch({ ...searchobj, ["type"]: 'all' })

    }
    function search() {
        hendlesearch({ ...searchobj, ["type"]: 'user' })

    }
    function clear(){
        hendlesearch({ ...searchobj, ["name"]: '' })
    }

    return (
       
            <Container>
                <input onChange={e => { hendlesearch({ ...searchobj, ["name"]: e.target.value }) }} value={searchobj.name} onClick={()=>{clear()}} ></input>
                <Alignbutton >
                    <Link to='listusers' onClick={() => searchall()}>
                        <Buttonall >Ver Todos</Buttonall>
                    </Link>
                    <Link to='listusers' onClick={() => search()}>
                        <Buttonsearch>Buscar</Buttonsearch>
                    </Link>
                </Alignbutton >

            </Container>

       
    )
}

export default Homeinput
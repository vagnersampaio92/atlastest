import React, { useContext, useState, useEffect } from 'react'
import { SearchContext } from '../../store/index'
import { Line, Container, Align, Input, Containerexternal, Alignsearch } from "./style"
import api from '../../services/api'
import Header from '../../components/header/index'
import Card from '../../components/card/index'
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom'

const Listusers = () => {

    const { searchobj } = useContext(SearchContext)
    const { hendleselected } = useContext(SearchContext)

    let [items, setitems] = useState([{}])
    let [search, setsearch] = useState([{}])

    useEffect(() => {
        load()
    }, []);
    function load() {
        if (searchobj.type == 'user') {
            user(searchobj.name)
        } else {
            all(searchobj.name)
        }

    }
    async function user(name) {
        try {
            const response = await api.get('users/' + name)

            let array = []
            array[0] = response.data
            setitems(array)
        } catch (err) {
        }
    }
    async function all(name) {
        try {
            const response = await api.get('search/users?q=' +name + '&page=' + 0)
            setitems(response.data.items)
        } catch (err) {
        }
    }
    function searchdetail(login) {
        hendleselected(login)

    }

    return (
        <>
            <Header page="Lista de Usuários" />
            
                <Align>
                    <Containerexternal>
                        <Alignsearch>
                            <p>Search Results</p>
                            <Input>
                                <SearchIcon onClick={()=>{all(search)}} />
                                <input onChange={e => { setsearch(e.target.value) }}></input>
                            </Input>
                        </Alignsearch>
                        {items.length > 0 &&
                        <Container >

                            {items.map((i) => (
                                <Link onClick={() => searchdetail(i.login)} to="userprofile">
                                    <Line >
                                        <Card obj={i} />
                                    </Line>
                                </Link>
                            ))
                            }

                        </Container>
                        }
                    </Containerexternal>
                </Align>


            



        </>
    )
}

export default Listusers


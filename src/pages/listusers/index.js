import React, { useContext, useState, useEffect } from 'react'
import { SearchContext } from '../../store/index'
import { Line, Container, Align, Input, Containerexternal, Alignsearch } from "./style"
import api from '../../services/api'
import Header from '../../components/header/index'
import Card from '../../components/card/index'
import SearchIcon from '@material-ui/icons/Search';

const perfil = [
    {
        foto: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
        name: 'Vagner',
        id: 1
    },
    {
        foto: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
        name: 'Diego',
        id: 2
    },
    {
        foto: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
        name: 'Pamella',
        id: 3
    },
    {
        foto: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
        name: 'Vagner',
        id: 4
    },
    {
        foto: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
        name: 'Diego',
        id: 5
    },
    {
        foto: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
        name: 'Pamella',
        id: 6
    },
    {
        foto: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
        name: 'Vagner',
        id: 7
    },
    {
        foto: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
        name: 'Diego',
        id: 8
    },
    {
        foto: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
        name: 'Pamella',
        id: 9
    },
    {
        foto: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
        name: 'Vagner',
        id: 9
    },
    {
        foto: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
        name: 'Diego',
        id: 11
    },
    {
        foto: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
        name: 'Pamella',
        id: 12
    }
]

const Listusers = () => {

    const { searchobj } = useContext(SearchContext)
    const { setsearchobj } = useContext(SearchContext)
    let [items, setitems] = useState([{}])

    useEffect(() => {
        load()
    }, []);
    function load() {
        if (searchobj.type == 'user') {
            user()
        } else {
            all()
        }

    }
    async function user() {
        try {
            const response = await api.get('users/' + searchobj.name)
            console.log(response)
            let array = []
            array[0]=response.data
            setitems(array)
        } catch (err) {
        }
    }
    async function all() {
        try {
            const response = await api.get('search/users?q=' + searchobj.name + '&page=' + 0)
            setitems(response.data.items)
        } catch (err) {
        }
    }
    function searchdetail(id) {
        console.log(id)
    }
    console.log(items)
    return (
        <>
            <Header page="Lista de Usuários" />
            {items.length >0 &&
                <Align>
                    <Containerexternal>
                        <Alignsearch>
                            <p>Search Results</p>
                            <Input>
                                <SearchIcon />
                                <input></input>
                            </Input>
                        </Alignsearch>

                        <Container >

                            {items.map((i) => (
                                <Line onClick={() => searchdetail(i.id)}>
                                    <Card obj={i} />
                                </Line>
                            ))
                            }

                        </Container>
                    </Containerexternal>
                </Align>


            }



        </>
    )
}

export default Listusers


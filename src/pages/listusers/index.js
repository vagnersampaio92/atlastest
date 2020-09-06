import React, { useContext, useState, useEffect } from 'react'
import { SearchContext } from '../../store/index'
import { Line, Container, Align, Input, Containerexternal, Alignsearch, Loading, End } from "./style"
import api from '../../services/api'
import Header from '../../components/header/index'
import Card from '../../components/card/index'
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom'
import InfiniteScroll from "react-infinite-scroll-component";

const Listusers = () => {

    const { searchobj } = useContext(SearchContext)
    const { hendleselected } = useContext(SearchContext)

    let [items, setitems] = useState([{}])
    let [search, setsearch] = useState([{}])
    let [page, setpage] = useState(0)
    let [end, setend] = useState(true)

    useEffect(() => {
        load()
    }, []);
    function load() {
        if (searchobj.type == 'user') {
            user(searchobj.name)
            setsearch(searchobj.name)
        } else {
            all(searchobj.name)
            setsearch(searchobj.name)
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
            const response = await api.get('search/users?q=' + name + '&page=' + page + '&per_page=10')
            setitems(response.data.items)
            
            
        } catch (err) {
        }
    }
    function searchdetail(login) {
        hendleselected(login)

    }

    async function fetchMoreData() {
        const x = page + 1
        const response = await api.get('search/users?q=' + search + '&page=' + x + '&per_page=10')
        if ((response.data.total_count / 10) > items.length) {
            setpage(page + 1)
            setitems([...items, ...response.data.items])
        }else{
            setend(false)
        }
    };
  console.log(end)

    return (
        <>
            <Header page="Lista de Usuários" />

            <Align>
                <Containerexternal>
                    <Alignsearch>
                        <p>Search Results</p>
                        <Input>
                            <SearchIcon onClick={() => { all(search) }} />
                            <input onChange={e => { setsearch(e.target.value) }}></input>
                        </Input>
                    </Alignsearch>
                    {items.length > 0 &&
                        <Container >

                            <InfiniteScroll
                                dataLength={items.length}
                                next={() => { fetchMoreData() }}
                                hasMore={end}
                                loader={<Loading>Pesquisando ...</Loading>}
                                endMessage={<End>Não há mais resultados</End>}
                            >
                                {items.map((i, index) => (
                                    <Link onClick={() => searchdetail(i.login)} to="userprofile" key={index}>
                                        <Line >
                                            <Card obj={i} />
                                        </Line>
                                    </Link>
                                ))
                                }
                            </InfiniteScroll>

                        </Container>
                    }
                </Containerexternal>
            </Align>






        </>
    )
}

export default Listusers


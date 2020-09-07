import React, { useContext, useState, useEffect } from 'react'
import { SearchContext } from '../../store/index'
import { Line, Container, Align, Input, Containerexternal, Alignsearch, Loading, End,Animation } from "./style"
import api from '../../services/api'
import Header from '../../components/header/index'
import Card from '../../components/card/index'
import SearchIcon from '@material-ui/icons/Search';
import InfiniteScroll from "react-infinite-scroll-component";
import { useHistory } from 'react-router-dom';


const Listusers = () => {

    const { searchobj } = useContext(SearchContext)
    const { hendleselected } = useContext(SearchContext)

    let [items, setitems] = useState([{}])
    let [search, setsearch] = useState([{}])
    let [page, setpage] = useState(1)
    let [end, setend] = useState(true)
    let [animationflag, setanimationflag] = useState(true)

    const history = useHistory();

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
            setanimationflag(false)
        } catch (err) {
        }
    }
    async function all(name) {
        try {
            const response = await api.get('search/users?q=' + name + '&page=' + page + '&per_page=10')
            setitems(response.data.items)
            setanimationflag(false)
            
        } catch (err) {
        }
    }
    function searchdetail(login) {

        hendleselected(login)
        history.push("userprofile");

    }

    async function fetchMoreData() {
        if (searchobj.type != 'user') {
            const response = await api.get('search/users?q=' + search + '&page=' + (page+1) + '&per_page=10')
            if ((response.data.total_count / 10) > items.length) {
                setpage(page + 1)
                setitems([...items, ...response.data.items])
                setanimationflag(false)
            } else {
                setend(false)
            }
        }


    };


    return (
        <>
            <Header page="Lista de Usuários" />

            <Align>
                <Containerexternal>
                    <Alignsearch>
                        <p>Search Results</p>
                        <Input>
                            <SearchIcon onClick={() => { all(search) }} />
                            <input onChange={e => { setsearch(e.target.value) }} ></input>
                        </Input>
                    </Alignsearch>
            
                   
                    {animationflag == true?
                    <Animation>
                        Carregando<span>...</span>
                    </Animation>:<>
                    
                    {searchobj.type == 'user' ?
                        <Container >
                            <Line onClick={() => searchdetail(searchobj.name)}>
                                <Card obj={items[0]} />
                            </Line>
                        </Container> : <>
                            {items.length > 0 &&
                                <InfiniteScroll
                                    dataLength={items.length}
                                    next={() => { fetchMoreData() }}
                                    hasMore={end}
                                    scrollThreshold="1px"
                                    scrollableTarget={Align}
                                    loader={<Loading>Pesquisando ...</Loading>}
                                    endMessage={<End>Não há mais resultados</End>}
                                >
                                    <Container >
                                        {items.map((i, index) => (

                                            <Line onClick={() => searchdetail(i.login)} key={index}>
                                                <Card obj={i} />
                                            </Line>

                                        ))
                                        }

                                    </Container>
                                </InfiniteScroll>
                            }
                        </>

                    }
                    
                    </>
                    }

                </Containerexternal>
            </Align>






        </>
    )
}

export default Listusers


import React, { useContext, useState, useEffect } from 'react'
import { SearchContext } from '../../store/index'
import api from '../../services/api'
import Header from '../../components/header/index'

const Home = () => {

    const { searchobj } = useContext(SearchContext)
    const { setsearchobj } = useContext(SearchContext)

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
   async function user(){
        try {
            const response = await api.get('users/' + searchobj.name)
            console.log(response)
        } catch (err) {
        }
    }
    async function all(){
        try {
            const response = await api.get('search/users?q=' + searchobj.name+'&page='+0)
            console.log(response)
        } catch (err) {
        }
    }
    return (
        <>
            <Header />
            {searchobj.name}
            {searchobj.type}
        </>
    )
}

export default Home

// import ArrowBackIcon from '@material-ui/icons/ArrowBack';

// window.history.back()
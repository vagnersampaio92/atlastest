import React, { useState, createContext, useContext } from 'react';
import { array } from 'prop-types';


export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
    let [searchobj, setsearchobj] = useState({
        type: '',
        name: 'Pesquisar...'
    }
    )
    let [selected, setselected] = useState('')

    const hendlesearch = Escolha => {
        // escolha=JSON.parse(JSON.stringify(escolha))
        setsearchobj(Escolha)
    }
    const hendleselected= Escolha => {
        // escolha=JSON.parse(JSON.stringify(escolha))
        setselected(Escolha)
    }
    return (
        <SearchContext.Provider value={{ searchobj, hendlesearch,selected, hendleselected }}>
            {children}
        </SearchContext.Provider>
    )

}
export default SearchProvider
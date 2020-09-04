import React, { useState, createContext, useContext  } from 'react';
import { array } from 'prop-types';


export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
    let [searchobj, setsearchobj] = useState({
        type:'',
        name:'Pesquisar...'
        }
         )

    const hendlesearch = Escolha => {
        // escolha=JSON.parse(JSON.stringify(escolha))
        setsearchobj(Escolha)
    }

    return(
        <SearchContext.Provider value={{searchobj,hendlesearch}}>
        { children }
    </SearchContext.Provider>
    )
    
}
export default SearchProvider
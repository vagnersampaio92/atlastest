import React, {useContext, useState, useEffect } from 'react';
import { Img, Container, Menu, Content, Menuoptionselected, Menuoption, Bio, Repos } from "./style"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faLaptop } from '@fortawesome/free-solid-svg-icons'
import Cardrepos from '../cardrepos/index'
import api from '../../services/api'
import { SearchContext } from '../../store/index'

const Info = ({ obj }) => {
    let [repos, setrepos] = useState([{}])
    let [menu, setmenu] = useState(1)
    const { selected } = useContext(SearchContext)
    useEffect(() => {
        loadrepos()
    }, []);
    async function loadrepos() {
        try {
            
            const response = await api.get('users/'+selected+'/repos')
            let obj = {}
            obj = response.data
            setrepos(obj)
        } catch (err) {
        }
    }
   
    return (
        <Container>
            <Menu>
                {menu == 1 ? <Menuoptionselected>Sobre</Menuoptionselected> : <Menuoption onClick={() => { setmenu(1) }}>Sobre</Menuoption>}
                {menu == 2 ? <Menuoptionselected>Projetos</Menuoptionselected> : <Menuoption onClick={() => { setmenu(2) }}>Projetos</Menuoption>}
            </Menu>
            <Content>
                {menu == 1 &&
                    <Bio>
                        <h3>Bio</h3> 
                        <p>{obj.bio}</p>
                        <div> 
                            <span>
                                <FontAwesomeIcon icon={faHome} />
                            </span>
                            {obj.location}
                        </div>
                        <div><FontAwesomeIcon icon={faLaptop} />{obj.blog}</div>
                    </Bio>}
                {menu == 2 &&
                    <Repos>
                        {repos.length>0&&
                        <>
                             {repos.map((repo) => (
                                <Cardrepos repo={repo}/>
                            ))
                            }
                        </>
                        }
                   </Repos>
                }
            </Content>
        </Container>
    )
}

export default Info
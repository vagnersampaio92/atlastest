import React, { useState, useEffect } from 'react';
import { Img, Container, Menu, Content, Menuoptionselected, Menuoption, Bio, Repos } from "./style"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faLaptop } from '@fortawesome/free-solid-svg-icons'

const Info = ({ obj }) => {
    let [repos, setrepos] = useState({})
    let [menu, setmenu] = useState(1)
    useEffect(() => {
        loadrepos()
    }, []);
    async function loadrepos() {

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
                        repos
                   </Repos>}
            </Content>
        </Container>
    )
}

export default Info
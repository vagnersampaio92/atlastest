import React from 'react';
import { Container, Bgimg, Photo, Cards, Img, Name, Information } from "./style"
import PersonIcon from '@material-ui/icons/Person';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faFolderOpen, faMale } from '@fortawesome/free-solid-svg-icons'

const Homelogo = ({ obj }) => {

    return (

        <Container>
            <Bgimg />
            <Cards>
                <Information>
                    <div>
                        <FontAwesomeIcon icon={faMale} />
                        <p>{obj.following}</p>
                    </div>
                    <div>
                        <h3>
                            Seguindo
                        </h3>
                    </div>
                </Information>
                <Information>
                    <div>
                        <FontAwesomeIcon icon={faFolderOpen} />
                        <p>{obj.public_repos}</p>
                    </div>
                    <div>
                        <h3>
                            Projetos
                        </h3>
                    </div>
                </Information>
                <Information>
                    <div>
                        <FontAwesomeIcon icon={faUsers} />
                        <p>{obj.followers}</p>
                    </div>
                    <div>
                        <h3>
                            Seguidores
                        </h3>
                    </div>
                </Information>

            </Cards>
            <Photo>
                <Img src={obj.avatar_url} alt="foto de perfil" ></Img>
            </Photo>
            <Name>
                <p>{obj.name}</p>
                <div>
                    <p><span><PersonIcon /></span>{obj.login}</p>
                </div>
            </Name>
        </Container>


    )
}

export default Homelogo
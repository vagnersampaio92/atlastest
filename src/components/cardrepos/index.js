import React from 'react';
import { Container,Date, Language,  Title,  Description } from "./style"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle} from '@fortawesome/free-solid-svg-icons'

const listusers = ({repo}) => {


// updated_at

    return (
        
           <Container>
             <Title>{repo.name}</Title>
             <Description>{repo.description}
             </Description>
                <div>
                    <Language>
                    <p><FontAwesomeIcon icon={faCircle}/>{repo.language}</p>
                    </Language>
                    <Date>
                        
                        {/* a função a baixo serve para formatar a data, ele divide a string em varias vezes e vai concatenando */}
                        <p>Atualizado em {(repo.updated_at.split('T')[0]).split('-')[2].concat('/').concat((repo.updated_at.split('T')[0]).split('-')[1]).concat('/').concat((repo.updated_at.split('T')[0]).split('-')[0])}</p>
                    </Date>
                </div>
            </Container>

        
    )
}

export default listusers 
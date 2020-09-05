import React from 'react';
import { Container,Date, Language,  Title,  Description } from "./style"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle} from '@fortawesome/free-solid-svg-icons'

const listusers = ({repo}) => {
let date='21/12/2020';

    return (
        
           <Container>
             <Title>{repo.name}</Title>
             <Description>{repo.description}
             </Description>
                <div>
                    <Language>
                    <p><FontAwesomeIcon icon={faCircle} />{repo.language}</p>
                    </Language>
                    <Date>
                        <p>Atualizado em {date}</p>
                        
                    </Date>
                </div>
            </Container>

        
    )
}

export default listusers 
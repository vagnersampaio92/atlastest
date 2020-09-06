import React from 'react';
import { Container, Date, Language, Title, Description, Javascript, Java, Php, Dart, Cpp, Default } from "./style"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

const listusers = ({ repo }) => {
    function color() {

        switch (repo.language) {
            case 'JavaScript':
                return <Javascript><FontAwesomeIcon icon={faCircle} /></Javascript>

            case 'Java':
                return <Java><FontAwesomeIcon icon={faCircle} /></Java>
            case 'Php':
                return <Php><FontAwesomeIcon icon={faCircle} /></Php>

            case 'Dart':
                return <Dart><FontAwesomeIcon icon={faCircle} /></Dart>
            case 'C++':
                return <Cpp><FontAwesomeIcon icon={faCircle} /></Cpp>

            default:
                return <Default><FontAwesomeIcon icon={faCircle} /></Default>
        }
    }

    // updated_at
    {/* <FontAwesomeIcon icon={faCircle}/> */ }

    return (

        <Container>
            <Title>{repo.name}</Title>
            <Description>{repo.description}
            </Description>
            <div>
                <Language>
                    <p>{color()}{repo.language}</p>
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
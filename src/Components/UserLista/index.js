// CSS
import './Userlista.css';

// REACT
import { useEffect, useState } from 'react';

function UserLista(props) {
    const [userGithub, setUserGithub] = useState([]);

    // API github retorna usuarios do usuário
    // Método: GET
    const getUserGithub = () => {
        const URL = `https://api.github.com/users/${props.nome}`;
        console.log(`LOG: ${URL}`);
        
        fetch(URL)
            .then(request => request.json())
            .then((data) => {
                // cria array auxiliar
                let array = [];
                array.push(data);
                // atualiza estado
                setUserGithub(array);
            })
            .catch(error => console.error(`ERROR CALLING API: ${error}`));
    }

    useEffect(() => {
        // chamada API github
        getUserGithub();
    }, [])
    
    return(
        <>
            <section className='default-container'>
                <div className='bg-userlista'>
                    {userGithub.map((usuario, key) => {
                        return(
                            <>
                            <h3>USUÁRIO</h3>
                            <ul key={key}>
                                <li>{usuario.id}</li>
                                <li>{usuario.name}</li>
                                <li>{usuario.location}</li>
                                <li>{usuario.login}</li>
                                <li>{usuario.blog}</li>
                            </ul>
                            </>
                        )
                    })}
                </div>
                <br></br>
            </section>
        </>
    )
}

export default UserLista;

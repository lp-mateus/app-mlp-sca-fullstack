// CSS
import './Userlista.css';

// SERVICES
import { useEffect, useState } from "react";
import getUsersGithub from "../../Services/getUsersGithub";

function UserLista() {
    const [dadosUsuario, setDadosUsuario] = useState([]);
    
    useEffect(() => {
        // chamada método GET - API Github
        getUsersGithub("lp-mateus");
        
        // atualiza estado dos dados 
        const handleDados = () => {
            let array = [];
            let aux = JSON.parse(localStorage.getItem('dadosUsuarioGithub'));
            array.push(aux);

            // atualiza estado
            setDadosUsuario(array);
        }
        handleDados();

    }, []);

    return(
        <>
            <section className='default-container'>
                <div className='bg-userlista'>
                    {dadosUsuario.map((dado) => {
                        return(
                            <>
                            <h3>USUÁRIO</h3>
                            <ul>
                                <li>{dado.id}</li>
                                <li>{dado.name}</li>
                                <li>{dado.location}</li>
                                <li>{dado.login}</li>
                                <li>{dado.blog}</li>
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

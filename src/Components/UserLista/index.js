// CSS

// SERVICES
import { useEffect, useState } from "react";
import getUsersGithub from "../../Services/getUsersGithub";

function UserLista() {
    const [dadosUsuario, setDadosUsuario] = useState([]);
    
    useEffect(() => {
        // chamada método GET - API Github
        getUsersGithub("lp-mateus");
    });

    // método dados localstorage
    const handleDadosUsuario = () => {
        // manipula dados
        let array = [];
        let aux = JSON.parse(localStorage.getItem('dadosUsuarioGithub'));
        array.push(aux);

        console.log(`ARRAY AUX: ${aux}`);

        // atualiza estado
        setDadosUsuario(array);
    }

    return(
        <>
            <section>
                <div>
                    <h3>Informações usuários</h3>
                    {dadosUsuario.map((dado, key) => {
                        return(
                            <ul key={key}>
                                <li>{dado.name}</li>
                            </ul>
                        )
                    })}
                </div>
                <br></br>
                <button onClick={handleDadosUsuario}>GET</button>
            </section>
        </>
    )
}

export default UserLista;

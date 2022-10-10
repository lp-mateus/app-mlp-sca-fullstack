// CSS
import './Userinfo.css';

function UserInfo(props) {
    const dados = [
        {id: 1, nome: "Mateus Leite Pedrosa", nascimento: "13-12-1998", cpf: "0123456789", status: true},
        {id: 2, nome: "Mateus Leite Pedrosa", nascimento: "13-12-1998", cpf: "0123456789", status: false},
        {id: 3, nome: "Mateus Leite Pedrosa", nascimento: "13-12-1998", cpf: "0123456789", status: true},
        {id: 4, nome: "Mateus Leite Pedrosa", nascimento: "13-12-1998", cpf: "0123456789", status: false},
        {id: 5, nome: "Mateus Leite Pedrosa", nascimento: "13-12-1998", cpf: "0123456789", status: true},
    ];

    return(
        <>
            {dados.map((usuario, key) => {
                if(usuario.nome === props.nome){
                    return(
                        <div key={key} className='info-container'>
                            <ul>
                                <li style={{color: usuario.status ? "green" : "red"}}>
                                    {usuario.status ? "ATIVO" : "INATIVO"}
                                </li>
                                <li>{usuario.nome}</li>
                                <li>{usuario.nascimento}</li>
                                <li>{usuario.cpf}</li>
                            </ul>
                        </div>
                    )
                }else{
                    return null
                }
            })}
        </>
    )

}

export default UserInfo;

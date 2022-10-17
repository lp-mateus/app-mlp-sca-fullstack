// CSS
import './Cadastro.css';

// Components
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

// REACT
import { Link } from 'react-router-dom';

const spanColor = {
    color: "#2B88D9",
}

function PageCadastro() {
    return(
        <>
            <Header />
            <br></br>
            <main>
                <h1><span style={spanColor}>FORMULÁRIO</span></h1>            
                <h3>Realize seu cadastro a seguir</h3>    
            </main>

            <section>
                <form id="form-cadastro" name="form-cadastro" className="form-container">
                    <label>Nome completo:</label>
                    <input id="nome" name="nome" type="text" placeholder="Insira seu nome completo..." required></input>
                    <br></br>

                    <label>Data de nascimento:</label>
                    <input id="birth" name="birth" type="datetime-local" required></input>
                    <br></br>

                    <label>E-mail:</label>
                    <input id="email" name="email" type="email" placeholder="Exemplo: fulano.silva@email.com" required></input>
                    <br></br>

                    <label>Senha:</label>
                    <input id="senha" name="senha" type="password" placeholder="Insira uma senha com 8 digitos..." minlength="8" required></input>
                    <br></br>
                </form>
                <br></br>                
                <button form="form-cadastro" type="submit">Cadastrar</button>
                <p>Esqueci minha senha...</p>
            </section>

            <br></br>

            <section>            
                <Link to='/menu'>    
                    <button>Login</button>
                </Link>
                <p>Já possui cadastro? Então é só realizar o login...</p>
            </section>
            <Footer />
        </>
    )
}

export default PageCadastro;

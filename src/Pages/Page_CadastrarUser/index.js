// CSS
import './Cadastrar.css';

// COMPONENTS
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

// REACT
import { useState } from 'react';

const spanColor = {
    color: "#2B88D9",
}

function PageCadastrarUser() {
    const [nameInput, setNameInput] = useState("");

    // método input
    const handleInput = (event) => {
        event.preventDefault();
        console.log("INPUT FINAL: " + nameInput);
    }

    return(
        <>
            <Header />
            <br></br>
                <main>
                <h1><span style={spanColor}>CADASTRAR</span></h1>
                <h3>Insira as informações do seu cliente a seguir...</h3>
                </main>
                <br></br>
                <section>
                    <form id='form-cadastrar' name='form-cadastrar' className='form-cadastrar-container' onSubmit={handleInput}>
                        <label>Nome completo do cliente:</label>
                        <input 
                            id='nome-usuario' 
                            name='nome-usuario' 
                            type='text' 
                            placeholder="Maria da Silva..." 
                            required
                            onChange={(event) => setNameInput(event.target.value)}
                        >
                        </input>
                        <label>Data de nascimento do cliente:</label>
                        <input 
                            id='data-nascimento' 
                            name='data-nascimento' 
                            type='date'
                        >
                        </input>
                        <label>E-mail do cliente:</label>
                        <input 
                            id='email-usuario' 
                            name='email-usuario' 
                            type='email' 
                            placeholder="Ex.: maria.silva@email.com" 
                            required
                            onChange={(event) => setNameInput(event.target.value)}
                        >
                        </input>
                        <label>Informações do cliente:</label>
                        <input 
                            id='info-usuario' 
                            name='info-usuario' 
                            type='text' 
                            placeholder="Insira as informações do cliente..." 
                            required
                            onChange={(event) => setNameInput(event.target.value)}
                        >
                        </input>
                    </form>
                    <button type='submit' form='form-cadastrar'>Cadastrar</button>
                </section>
            <Footer />
        </>
    )
}

export default PageCadastrarUser;

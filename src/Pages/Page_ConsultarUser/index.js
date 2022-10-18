// CSS
import './Consultar.css';

// COMPONENTS
import UserLista from '../../Components/UserLista';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

// REACT
import { useState } from 'react';

const spanColor = {
    color: "#2B88D9",
}

function PageConsultarUser() {
    const [flag, setFlag] = useState(false);
    const [nameInput, setNameInput] = useState("");

    // método input
    const handleInput = (event) => {
        event.preventDefault();
        console.log("INPUT FINAL: " + nameInput);
        setFlag(flag === false ? true : false);
    }

    return(
        <>
            <Header />
            <br></br>
                <main>
                <h1><span style={spanColor}>CONSULTAR</span></h1>
                <h3>Pesquise o nome do seu cliente a seguir...</h3>
                </main>
                <br></br>
                <section>
                    <form id='form-consultar' name='form-consultar' className='form-consultar-container' onSubmit={handleInput}>
                        <label>Nome completo do usuário:</label>
                        <input 
                            id='nome-consultar' 
                            name='nome-consultar' 
                            type='text' 
                            placeholder="Maria da Silva..." 
                            required
                            onChange={(event) => setNameInput(event.target.value)}
                        >
                        </input>
                    </form>
                    <br></br>
                    <button type='submit' form='form-consultar'>Consultar</button>
                </section>
                <br></br>
                <br></br>
                <br></br>
                {flag === false ? console.log("NULL") : <UserLista nome={nameInput}/>}
                <br></br>
                <br></br>
                <br></br>
            <Footer />
        </>
    )
}

export default PageConsultarUser;

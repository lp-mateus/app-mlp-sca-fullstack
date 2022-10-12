// CSS
import './Consultar.css';

// COMPONENTS
import UserLista from '../../Components/UserLista';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';


const spanColor = {
    color: "#2B88D9",
}

function PageConsultarUser() {
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
                <form id='form-consultar' name='form-consultar' className='form-consultar-container'>
                    <label>Nome completo do usuário:</label>
                    <input id='nome-consultar' name='nome-consultar' type='text' placeholder="Fulando da Silva..." required></input>
                </form>
                <button type='submit' form='form-consultar'>Consultar</button>
            </section>
            <br></br>
            <UserLista />
            <Footer />
        </>
    )
}

export default PageConsultarUser;

// CSS
import './Menu.css';

// COMPONENTS
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Card from '../../Components/Card';

const spanColor = {
    color: "#2B88D9",
}

function PageMenu() {
    return(
        <>
            <Header />
            <br></br>
            <main>
            <h1><span style={spanColor}>MENU</span></h1>
            <h3>Acesse o menu de opções a seguir</h3>
            </main>
            <br></br>
            <section className='cards-container'>
                <Card titulo="Cadastrar usuário" />
                <Card titulo="Consultar usuário" />
                <Card titulo="Gerenciar usuário" />
            </section>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Footer />
        </>
    )
}

export default PageMenu;

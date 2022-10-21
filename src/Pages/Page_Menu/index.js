// CSS
import './Menu.css';
import ICON_CREATE from '../../Assets/icon-create.png';
import ICON_SEARCH from '../../Assets/icon-search.png';
import ICON_CONFIG from '../../Assets/icon-config.png';

// COMPONENTS
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Card from '../../Components/Card';
import { Link } from 'react-router-dom';

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
                <Link to='/usuario/cadastrar' className='link'>
                    <Card titulo="Cadastrar usuário" image={ICON_CREATE} description="Realize o cadastro dos seus clientes"/>
                </Link>

                <Link to='/usuario/consultar' className='link'>
                    <Card titulo="Consultar usuário" image={ICON_SEARCH} description="Realize o cadastro dos seus clientes"/>
                </Link>

                <Card titulo="Gerenciar usuário" image={ICON_CONFIG} description="Realize o cadastro dos seus clientes"/>
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

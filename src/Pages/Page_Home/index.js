// Components
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import BG_HOME from "../../Assets/bg-main.jpg";
import BG_ICON from "../../Assets/bg-icon.jpg";

// CSS
import './Home.css';

const spanColor = {
    color: "#2B88D9",
}

function PageHome() {
    return(
        <> 
            <Header />

            <main className='container-default'>
                <h1>MLP<span style={spanColor}>SCA</span> sistema de <span style={spanColor}>cadastro e autenticação</span></h1>
                <img src={BG_HOME} alt="Background da página home" className='img-resize'></img>
            </main>

            <section className='container-button'>
                <button>ACESSAR</button>
            </section>

            <section className='container-card'>
                <div>
                    <h3>LOREM IPSUM</h3>
                    <p>
                        Knee joint replacement is a surgery to replace a knee joint with a man-made artificial joint.
                    </p>
                </div>
                <img src={BG_ICON} alt="Background de icone" className='card-img-resize'></img>
            </section>

            <section className='container-card'>
                <img src={BG_ICON} alt="Background de icone" className='card-img-resize'></img>
                <div>
                    <h3>LOREM IPSUM</h3>
                    <p>
                        Knee joint replacement is a surgery to replace a knee joint with a man-made artificial joint.
                    </p>
                </div>                
            </section>

            <section className='container-card'>
                <div>
                    <h3>LOREM IPSUM</h3>
                    <p>
                        Knee joint replacement is a surgery to replace a knee joint with a man-made artificial joint.
                    </p>
                </div>
                <img src={BG_ICON} alt="Background de icone" className='card-img-resize'></img>
            </section>

            <Footer />
        </>
    )
}

export default PageHome;

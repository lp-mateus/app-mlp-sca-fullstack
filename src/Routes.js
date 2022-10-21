// Configurações react-router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import your route components
import PageHome from "./Pages/Page_Home";
import PageCadastro from "./Pages/Page_Cadastro";
import PageMenu from "./Pages/Page_Menu";
import PageConsultarUser from "./Pages/Page_ConsultarUser";
import PageCadastrarUser from "./Pages/Page_CadastrarUser";

function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<h1>404 - PAGE NOT FOUND</h1>} />
                <Route path="/" element={<PageHome />} />
                <Route path="/cadastro" element={<PageCadastro />} />
                <Route path="/menu" element={<PageMenu />} />
                {/* ROTAS DO USUARIO */}
                <Route path="/usuario/cadastrar" element={<PageCadastrarUser />} />
                <Route path="/usuario/consultar" element={<PageConsultarUser />} />
                <Route path="/teste" element={<PageHome />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;

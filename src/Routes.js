// Configurações react-router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import your route components
import PageHome from "./Pages/Page_Home";
import PageCadastro from "./Pages/Page_Cadastro";
import PageMenu from "./Pages/Page_Menu";

function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageHome />} />
                <Route path="/cadastro" element={<PageCadastro />} />
                <Route path="/menu" element={<PageMenu />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;

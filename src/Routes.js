// Configurações react-router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import your route components
import PageHome from "./Pages/Page_Home";
import PageCadastro from "./Pages/Page_Cadastro";

function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageHome />} />
                <Route path="/cadastro" element={<PageCadastro />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;

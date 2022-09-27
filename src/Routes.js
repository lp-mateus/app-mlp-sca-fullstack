// Configurações react-router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import your route components
import PageHome from "./Pages/Page_Home";

function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageHome />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;

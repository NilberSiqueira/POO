import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListaCliente from "./componentes/listaCliente";
import ListaProduto from "./componentes/listaProduto";
import FormularioCadastroCliente from "./componentes/formularioCadastroCliente";
import FormularioCadastroProduto from "./componentes/formularioCadastroProduto";
import Listagens from "./componentes/Listagens";
import RegistroDeConsumo from "./componentes/registroDeConsumo";

export function App(){

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ListaCliente/>} />
                <Route path="/lista-de-produtos" element={<ListaProduto/>}/>
                <Route path="/cadastro-de-clientes" element={<FormularioCadastroCliente/>}/>
                <Route path="/cadastro-de-produtos" element={<FormularioCadastroProduto/>}/>
                <Route path="/registro-de-consumo" element={<RegistroDeConsumo/>}/>
                <Route path="/listagens" element={<Listagens/>}/>
            </Routes>
        </BrowserRouter>
    )
}
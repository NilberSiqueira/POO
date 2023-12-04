// App.tsx

import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListaCliente from "./componentes/listaCliente";
import ListaProduto from "./componentes/listaProduto";
import FormularioCadastroCliente from "./componentes/formularioCadastroCliente";
import FormularioCadastroProduto from "./componentes/formularioCadastroProduto";
import Listagens from "./componentes/Listagens";
import RegistroDeConsumo from "./componentes/registroDeConsumo";

export function App() {
  const [clientes, setClientes] = useState<Array<{
    id: number;
    nome: string;
    sobrenome: string;
    telefone: string;
    email: string;
  }>>(
    JSON.parse(localStorage.getItem("clientes") ?? "[]")
  );

  const [produtos, setProdutos] = useState<Array<{
    nome: string;
    preco: string;
    // Outras propriedades necessárias para produtos
  }>>(
    JSON.parse(localStorage.getItem("produtos") ?? "[]")
  );

  useEffect(() => {
    localStorage.setItem("clientes", JSON.stringify(clientes));
  }, [clientes]);

  useEffect(() => {
    localStorage.setItem("produtos", JSON.stringify(produtos));
  }, [produtos]);

  const adicionarCliente = (novoCliente: {
    id: number;
    nome: string;
    sobrenome: string;
    telefone: string;
    email: string;
  }) => {
    setClientes([...clientes, novoCliente]);
  };

  const adicionarProduto = (novoProduto: {
    nome: string;
    preco: string;
    // Outras propriedades necessárias para produtos
  }) => {
    setProdutos([...produtos, novoProduto]);
  };

  const handleEditarCliente = (id: number) => {
    console.log(`Editar cliente com ID ${id}`);
  };

  const handleExcluirCliente = (id: number) => {
    setClientes(clientes.filter((cliente) => cliente.id !== id));
  };

  const handleEditarProduto = (index: number, novosDados: {
    nome: string;
    preco: string;
  }) => {
    setProdutos((prevProdutos) => {
      const newProdutos = [...prevProdutos];
      newProdutos[index] = { ...newProdutos[index], ...novosDados };
      return newProdutos;
    });
  };

  const handleExcluirProduto = (index: number) => {
    setProdutos((prevProdutos) => prevProdutos.filter((_, i) => i !== index));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ListaCliente
              clientes={clientes}
              onEditarCliente={handleEditarCliente}
              onExcluirCliente={handleExcluirCliente}
            />
          }
        />
        <Route
          path="/lista-de-produtos"
          element={
            <ListaProduto
              produtos={produtos}
              onEditarProduto={handleEditarProduto}
              onExcluirProduto={handleExcluirProduto}
            />
          }
        />
        <Route
          path="/cadastro-de-clientes"
          element={
            <FormularioCadastroCliente
              adicionarCliente={adicionarCliente}
            />
          }
        />
        <Route
          path="/cadastro-de-produtos"
          element={
            <FormularioCadastroProduto adicionarProduto={adicionarProduto} />
          }
        />
        <Route
          path="/registro-de-consumo"
          element={<RegistroDeConsumo clientes={clientes} produtos={produtos} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

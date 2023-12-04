// RegistroDeConsumo

import React, { useState } from 'react';
import {
  Box,
  Input,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Center,
} from '@chakra-ui/react';
import BarraNavegacao from './barraNavegacao';

interface RegistroDeConsumoProps {
  clientes: Array<{
    id: number;
    nome: string;
    sobrenome: string;
    telefone: string;
    email: string;
  }>;
  produtos: Array<{
    nome: string;
    preco: string;
    // Outras propriedades necessárias para produtos
  }>;
}

interface RegistroConsumo {
  id: number;
  cliente: string;
  produto: string;
  quantidade: number;
  data: string; // Pode ser uma string representando a data ou outro tipo adequado
}

const RegistroDeConsumo: React.FC<RegistroDeConsumoProps> = ({ clientes, produtos }) => {
  const [clienteSelecionado, setClienteSelecionado] = useState<string>('');
  const [produtoSelecionado, setProdutoSelecionado] = useState<string>('');
  const [quantidade, setQuantidade] = useState<number | null>(null);

  const handleRegistrarConsumo = () => {
    if (!clienteSelecionado || !produtoSelecionado || quantidade === null) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Criar um novo registro
    const novoRegistro: RegistroConsumo = {
      id: Date.now(), // ID único baseado no timestamp
      cliente: clienteSelecionado,
      produto: produtoSelecionado,
      quantidade: quantidade,
      data: new Date().toISOString(), // Data atual em formato ISO
    };

    // Obter registros existentes do localStorage
    const registrosAntigos = JSON.parse(localStorage.getItem('registrosDeConsumo') || '[]');

    // Adicionar o novo registro à lista existente
    const novosRegistros = [...registrosAntigos, novoRegistro];

    // Salvar os registros atualizados no localStorage
    localStorage.setItem('registrosDeConsumo', JSON.stringify(novosRegistros));

    // Limpar os campos após o registro
    setClienteSelecionado('');
    setProdutoSelecionado('');
    setQuantidade(null);
  };

  return (
    <Box>
      <BarraNavegacao />
      <Center mt="8">
        <Box
          width="50%"
          p="8"
          borderWidth="2px"
          borderColor="#3182CE"
          borderRadius="lg"
          boxShadow="lg"
        >
          <Input
            type="text"
            placeholder="Cliente"
            onChange={(e) => setClienteSelecionado(e.target.value)}
            value={clienteSelecionado}
            mb="4"
          />

          <Input
            type="text"
            placeholder="Produto"
            onChange={(e) => setProdutoSelecionado(e.target.value)}
            value={produtoSelecionado}
            mb="4"
          />

          <Input
            type="number"
            placeholder="Quantidade"
            onChange={(e) => setQuantidade(Number(e.target.value))}
            value={quantidade || ''}
            mb="4"
          />

          <Button onClick={handleRegistrarConsumo} colorScheme="teal">
            Registrar Consumo
          </Button>
        </Box>
      </Center>
    </Box>
  );
};

export default RegistroDeConsumo;

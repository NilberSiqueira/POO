// ListaCliente.tsx

import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Center,
  Button,
  Input,
  FormControl,
} from "@chakra-ui/react";
import BarraNavegacao from "./barraNavegacao";

interface ListaClienteProps {
  clientes: Array<{
    id: number;
    nome: string;
    sobrenome: string;
    telefone: string;
    email: string;
  }>;
  onEditarCliente: (id: number, novosDados: {
    nome: string;
    sobrenome: string;
    telefone: string;
    email: string;
  }) => void;
  onExcluirCliente: (id: number) => void;
}

const ListaCliente: React.FC<ListaClienteProps> = ({
  clientes,
  onEditarCliente,
  onExcluirCliente,
}) => {
  const [clienteEditando, setClienteEditando] = useState<number | null>(null);
  const [novosDadosCliente, setNovosDadosCliente] = useState({
    nome: "",
    sobrenome: "",
    telefone: "",
    email: "",
  });

  useEffect(() => {
    // Save to local storage if needed
  }, [clientes]);

  const handleEditarCliente = (id: number) => {
    setClienteEditando(id);
    const clienteSelecionado = clientes.find((cliente) => cliente.id === id);
    if (clienteSelecionado) {
      setNovosDadosCliente({
        nome: clienteSelecionado.nome,
        sobrenome: clienteSelecionado.sobrenome,
        telefone: clienteSelecionado.telefone,
        email: clienteSelecionado.email,
      });
    }
  };

  const handleSalvarEdicao = () => {
    if (clienteEditando !== null) {
      onEditarCliente(clienteEditando, novosDadosCliente);
      setClienteEditando(null);
    }
  };

  const handleCancelarEdicao = () => {
    setClienteEditando(null);
  };

  const handleExcluirCliente = (id: number) => {
    onExcluirCliente(id);
  };

  return (
    <Box>
      <BarraNavegacao />
      <Center mt="8">
        <Box
          marginTop="50px"
          width="40%"
          p="8"
          style={{ border: "2px solid #CBD5E0" }}
          borderRadius="lg"
          boxShadow="lg"
        >
          <Text fontSize="xl" fontWeight="bold" mb="4">
            Lista de Clientes
          </Text>
          <Box>
            <Box className="collection">
              {clientes.map((cliente) => (
                <Box key={cliente.id} className="collection-item">
                  {clienteEditando === cliente.id ? (
                    <Box>
                      <FormControl mb="2">
                        <Input
                          placeholder="Nome"
                          value={novosDadosCliente.nome}
                          onChange={(e) =>
                            setNovosDadosCliente((prev) => ({
                              ...prev,
                              nome: e.target.value,
                            }))
                          }
                        />
                      </FormControl>
                      <FormControl mb="2">
                        <Input
                          placeholder="Sobrenome"
                          value={novosDadosCliente.sobrenome}
                          onChange={(e) =>
                            setNovosDadosCliente((prev) => ({
                              ...prev,
                              sobrenome: e.target.value,
                            }))
                          }
                        />
                      </FormControl>
                      <FormControl mb="2">
                        <Input
                          placeholder="Telefone"
                          value={novosDadosCliente.telefone}
                          onChange={(e) =>
                            setNovosDadosCliente((prev) => ({
                              ...prev,
                              telefone: e.target.value,
                            }))
                          }
                        />
                      </FormControl>
                      <FormControl mb="2">
                        <Input
                          placeholder="Email"
                          value={novosDadosCliente.email}
                          onChange={(e) =>
                            setNovosDadosCliente((prev) => ({
                              ...prev,
                              email: e.target.value,
                            }))
                          }
                        />
                      </FormControl>
                      <Button
                        colorScheme="teal"
                        size="sm"
                        mr="2"
                        onClick={handleSalvarEdicao}
                      >
                        Salvar
                      </Button>
                      <Button
                        colorScheme="gray"
                        size="sm"
                        onClick={handleCancelarEdicao}
                      >
                        Cancelar
                      </Button>
                    </Box>
                  ) : (
                    <Box>
                      <Text>
                        <strong>Nome:</strong> {cliente.nome}{" "}
                        {cliente.sobrenome}
                      </Text>
                      <Text>
                        <strong>Telefone:</strong> {cliente.telefone}
                      </Text>
                      <Text>
                        <strong>Email:</strong> {cliente.email}
                      </Text>
                      <Button
                        colorScheme="teal"
                        size="sm"
                        mr="2"
                        onClick={() => handleEditarCliente(cliente.id)}
                      >
                        Editar
                      </Button>
                      <Button
                        colorScheme="red"
                        size="sm"
                        onClick={() => handleExcluirCliente(cliente.id)}
                      >
                        Excluir
                      </Button>
                    </Box>
                  )}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Center>
    </Box>
  );
};

export default ListaCliente;

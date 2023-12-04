// ListaProduto.tsx

import 'materialize-css/dist/css/materialize.min.css';
import React, { useState, useEffect } from "react";
import { Box, Text, Center, Button, Input, FormControl } from "@chakra-ui/react";
import BarraNavegacao from './barraNavegacao';

interface ListaProdutoProps {
  produtos: Array<{
    nome: string;
    preco: string;
  }>;
  onEditarProduto: (index: number, novosDados: {
    nome: string;
    preco: string;
  }) => void;
  onExcluirProduto: (index: number) => void;
}

const ListaProduto: React.FC<ListaProdutoProps> = ({
  produtos,
  onEditarProduto,
  onExcluirProduto,
}) => {
  const [produtoEditando, setProdutoEditando] = useState<number | null>(null);
  const [novosDadosProduto, setNovosDadosProduto] = useState({
    nome: "",
    preco: "",
  });

  useEffect(() => {
    // Save to local storage if needed
  }, [produtos]);

  const handleEditarProduto = (index: number) => {
    setProdutoEditando(index);
    const produtoSelecionado = produtos[index];
    if (produtoSelecionado) {
      setNovosDadosProduto({
        nome: produtoSelecionado.nome,
        preco: produtoSelecionado.preco,
      });
    }
  };

  const handleSalvarEdicao = () => {
    if (produtoEditando !== null) {
      onEditarProduto(produtoEditando, novosDadosProduto);
      setProdutoEditando(null);
    }
  };

  const handleCancelarEdicao = () => {
    setProdutoEditando(null);
  };

  const handleExcluirProduto = (index: number) => {
    onExcluirProduto(index);
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
            Lista de Produtos
          </Text>
          <Box>
            <Box className="collection">
              {produtos.map((produto, index) => (
                <Box key={index} className="collection-item">
                  {produtoEditando === index ? (
                    <Box>
                      <FormControl mb="2">
                        <Input
                          placeholder="Nome"
                          value={novosDadosProduto.nome}
                          onChange={(e) =>
                            setNovosDadosProduto((prev) => ({
                              ...prev,
                              nome: e.target.value,
                            }))
                          }
                        />
                      </FormControl>
                      <FormControl mb="2">
                        <Input
                          placeholder="Preço"
                          value={novosDadosProduto.preco}
                          onChange={(e) =>
                            setNovosDadosProduto((prev) => ({
                              ...prev,
                              preco: e.target.value,
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
                        <strong>Nome:</strong> {produto.nome}
                      </Text>
                      <Text>
                        <strong>Preço:</strong> {produto.preco}
                      </Text>
                      <Button
                        colorScheme="teal"
                        size="sm"
                        mr="2"
                        onClick={() => handleEditarProduto(index)}
                      >
                        Editar
                      </Button>
                      <Button
                        colorScheme="red"
                        size="sm"
                        onClick={() => handleExcluirProduto(index)}
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

export default ListaProduto;

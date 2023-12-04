import React, { Component } from 'react';
import {
  Box,
  Select,
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

class RegistroDeConsumo extends React.Component {
  render() {
    return (
      <Box>
        <BarraNavegacao />
        <Center mt="8">
          <Box
            width="50%"
            p="8"
            borderWidth="2px"
            borderColor="#3182CE"  // Cor primária azul
            borderRadius="lg"
            boxShadow="lg"
          >
            <Text fontSize="xl" fontWeight="bold" mb="4" color="#2D3748"> {/* Cor de texto escura */}
              Registro de Consumo de Produtos por Clientes
            </Text>

            <Select
              placeholder="Selecione o Cliente"
              mb={4}
              variant="filled"
              colorScheme="teal"  // Cor do botão e da borda do input
            >
              {/* Renderize opções de clientes aqui */}
            </Select>

            <Select
              placeholder="Selecione o Produto"
              mb={4}
              variant="filled"
              colorScheme="teal"
            >
              {/* Renderize opções de produtos aqui */}
            </Select>

            <Input
              type="number"
              mb={4}
              placeholder="Quantidade"
              variant="filled"
              colorScheme="teal"
            />

            <Button colorScheme="teal" mb={4} size="md">
              Adicionar Consumo
            </Button>

            <Table variant="simple" size="md" colorScheme="teal">
              <Thead>
                <Tr>
                  <Th>Cliente</Th>
                  <Th>Produto</Th>
                  <Th>Quantidade</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>João</Td>
                  <Td>Shampoo</Td>
                  <Td>2</Td>
                </Tr>
                <Tr>
                  <Td>Pedro</Td>
                  <Td>Gel de cabelo</Td>
                  <Td>1</Td>
                </Tr>
                <Tr>
                  <Td>Marcia</Td>
                  <Td>Unha postiça</Td>
                  <Td>10</Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
        </Center>
      </Box>
    );
  }
}

export default RegistroDeConsumo;

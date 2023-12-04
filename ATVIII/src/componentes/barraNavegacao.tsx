/* eslint-disable jsx-a11y/anchor-is-valid */
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";



 const BarraNavegacao = ()=> {
        return (
          <Box
        bg={"#2c3e50"}
        width={"100%"}
        height={"4.5rem"}
        display={"flex"}
        justifyContent="space-around"
        alignItems="center"
        boxShadow="md"
      >
        <Link to="/">
          <Text color={"#ecf0f1"} _hover={{ color: "#3498db" }}>
            Lista de Clientes
          </Text>
        </Link>
        <Link to="/lista-de-produtos">
          <Text color={"#ecf0f1"} _hover={{ color: "#3498db" }}>
            Lista de Produtos
          </Text>
        </Link>
        <Link to="/cadastro-cliente">
          <Text color={"#ecf0f1"} _hover={{ color: "#3498db" }}>
            Cadastrar Cliente
          </Text>
        </Link>
        <Link to="/cadastro-produto">
          <Text color={"#ecf0f1"} _hover={{ color: "#3498db" }}>
            Cadastrar Produto
          </Text>
        </Link>
        <Link to="/registrar-consumo">
          <Text color={"#ecf0f1"} _hover={{ color: "#3498db" }}>
            Registrar Consumo
          </Text>
        </Link>
        <Link to="/listagens">
          <Text color={"#ecf0f1"} _hover={{ color: "#3498db" }}>
            Listagens
          </Text>
        </Link>
      </Box>
        );
      }

export default BarraNavegacao;
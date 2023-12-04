import { Box, Button, Center, Input, Table, Tbody, Td, Th, Thead, Tr, Text, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react"
import BarraNavegacao from "./barraNavegacao"
import { useEffect, useState } from "react";

export const RegistroDeConsumo = () =>{
    
    const [cliente, setCliente] = useState<string>('');
    const [produto, setProduto] = useState<string>('');
    const [quantidade, setQuantidade] = useState<number>(0);
    const [clientes, setClientes] = useState<string[]>(['João', 'Pedro', 'Marcia']); // Exemplo de array de clientes
    const [produtos, setProdutos] = useState<string[]>(['Shampoo', 'Gel de cabelo', 'Unha postiça']); // Exemplo de array de produtos
    const [consumos, setConsumos] = useState<Array<{ cliente: string; produto: string; quantidade: number }>>([]);

        // Exemplo de useEffect para demonstração
        useEffect(() => {
            console.log('Estado atual:', { cliente, produto, quantidade });
        }, [cliente, produto, quantidade]);

        const adicionarConsumo = () => {
            // Adiciona o novo consumo ao estado
            setConsumos([...consumos, { cliente, produto, quantidade }]);
            // Limpa os campos após adicionar
            setCliente('');
            setProduto('');
            setQuantidade(0);
          };
    
    return (

        <Box>
        <BarraNavegacao />
        <Center mt="20">
          <Box
            width="50%"
            p="8"
            borderWidth="2px"
            borderColor="#3182CE"  // Cor primária azul
            borderRadius="lg"
          >
            <Menu>
            <MenuButton as={Button} mb={4} variant="filled" colorScheme="teal" marginRight="25px">
              {cliente || 'Selecione o Cliente'}
            </MenuButton>
            <MenuList>
              {clientes.map((c) => (
                <MenuItem key={c} onClick={() => setCliente(c)}>
                  {c}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton as={Button} mb={4} variant="filled" colorScheme="teal">
              {produto || 'Selecione o Produto'}
            </MenuButton>
            <MenuList>
              {produtos.map((p) => (
                <MenuItem key={p} onClick={() => setProduto(p)}>
                  {p}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
            
            <Text fontSize="xl" fontWeight="bold" mb="4" color="#2D3748"> 
              Registro de Consumo de Produtos por Clientes
            </Text>
        

            <Input
              type="number"
              mb={4}
              placeholder="Quantidade"
              variant="filled"
              colorScheme="teal"
              value={quantidade}
              onChange={(e) => setQuantidade(Number(e.target.value))}
            />

            <Button colorScheme="teal" mb={4} size="md" onClick={adicionarConsumo}>
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
              {consumos.map((consumo, index) => (
                <Tr key={index}>
                    <Td>{consumo.cliente}</Td>
                    <Td>{consumo.produto}</Td>
                    <Td>{consumo.quantidade}</Td>
                </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </Center>
        
      </Box>
      
    )
}
import React from "react";
import {
  Box,
  Center,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
} from "@chakra-ui/react";
import BarraNavegacao from "./barraNavegacao";

interface Consumo {
  cliente: number;
  produto: number;
  quantidade: number;
}

interface Cliente {
  id: number;
  nome: string;
  sobrenome: string;
}

interface Produto {
  nome: string;
  preco: string;
}

interface ListagensProps {
  clientes: Cliente[];
  consumos: Consumo[];
  produtos: Produto[];
}

class Listagens extends React.Component<ListagensProps> {
  calcularConsumoTotal = (clienteId: number) => {
    const { consumos } = this.props;
    return consumos
      .filter((consumo) => consumo.cliente === clienteId)
      .reduce((total, consumo) => total + consumo.quantidade, 0);
  };

  calcularGastoTotal = (clienteId: number) => {
    const { consumos, produtos } = this.props;
    return consumos
      .filter((consumo) => consumo.cliente === clienteId)
      .reduce(
        (total, consumo) =>
          total +
          consumo.quantidade *
            parseFloat(produtos[consumo.produto]?.preco.replace(",", ".")),
        0
      );
  };

  render() {
    const { clientes, consumos, produtos } = this.props;

    // Ordenar clientes pelo consumo total
    const clientesMaisConsumiram = clientes
      .map((cliente) => ({
        ...cliente,
        consumoTotal: this.calcularConsumoTotal(cliente.id),
      }))
      .sort((a, b) => b.consumoTotal - a.consumoTotal);

    // Ordenar clientes pelo consumo total em ordem ascendente
    const clientesMenosConsumiram = clientesMaisConsumiram.slice().reverse();

    // Ordenar clientes pelo gasto total
    const clientesMaisGastaram = clientes
      .map((cliente) => ({
        ...cliente,
        gastoTotal: this.calcularGastoTotal(cliente.id),
      }))
      .sort((a, b) => b.gastoTotal - a.gastoTotal);

    // Ordenar produtos pelo total consumido
    const produtosMaisConsumidos = produtos
      .map((produto, index) => ({
        ...produto,
        totalConsumido: consumos
          .filter((consumo) => consumo.produto === index)
          .reduce((total, consumo) => total + consumo.quantidade, 0),
      }))
      .sort((a, b) => b.totalConsumido - a.totalConsumido);

    return (
      <Box>
        <BarraNavegacao />
        <Center mt="8">
          <Box
            width="80%"
            p="8"
            borderWidth="2px"
            borderColor="#3182CE"
            borderRadius="lg"
            boxShadow="lg"
          >
            <Text fontSize="xl" fontWeight="bold" mb="4" color="#2D3748">
              Listagens
            </Text>

            <Text fontSize="lg" fontWeight="bold" mb="2" color="#2D3748">
              Clientes que mais consumiram produtos:
            </Text>
            <Table variant="simple" size="md" colorScheme="teal">
              <Thead>
                <Tr>
                  <Th>Nome</Th>
                  <Th>Consumo Total</Th>
                </Tr>
              </Thead>
              <Tbody>
                {clientesMaisConsumiram.map((cliente) => (
                  <Tr key={cliente.id}>
                    <Td>{`${cliente.nome} ${cliente.sobrenome}`}</Td>
                    <Td>{cliente.consumoTotal}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>

            {/* Adicione as outras listagens semelhantes aqui */}

          </Box>
        </Center>
      </Box>
    );
  }
}

export default Listagens;

/* eslint-disable jsx-a11y/anchor-is-valid */
import 'materialize-css/dist/css/materialize.min.css'
import BarraNavegacao from "./barraNavegacao";
import { Box, Center, Text } from '@chakra-ui/react';




const ListaCliente = () =>{
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
                <Box className="collection-item">Cliente 1</Box>
                <Box className="collection-item">Cliente 2</Box>
                <Box className="collection-item">Cliente 3</Box>
                <Box className="collection-item">Cliente 4</Box>
              </Box>
            </Box>
          </Box>
        </Center>
      </Box> 
        )
}

export default ListaCliente;
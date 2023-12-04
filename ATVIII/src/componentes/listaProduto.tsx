import 'materialize-css/dist/css/materialize.min.css'
import React from "react";
import BarraNavegacao from './barraNavegacao';
import { Box, Center, Text } from '@chakra-ui/react';



const ListaProduto = () => {
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
                  <Box className="collection-item">Produto 1</Box>
                  <Box className="collection-item">Produto 2</Box>
                  <Box className="collection-item">Produto 3</Box>
                  <Box className="collection-item">Produto 4</Box>
                </Box>
              </Box>
            </Box>
          </Center>
        </Box>
        )
    }

export default ListaProduto;
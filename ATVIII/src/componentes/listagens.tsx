import { Box, Button, Center, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import BarraNavegacao from "./barraNavegacao"

export const Listagens = () => {
    return(
        <Box>
        <BarraNavegacao />
        <Center mt="8">
          <Menu>
            <MenuButton
              as={Button}
              width={"8rem"}
              height={"4rem"}
              bg={"#3182CE"}  // Cor primária azul
              borderRadius={"0.5rem"}
              _hover={{ bg: "#2C5282" }}  // Cor do hover um tom mais escuro
            >
              Listagens
            </MenuButton>
            <MenuList>
              <MenuItem bg={"#3182CE"} borderRadius={"0.5rem"}>
                Clientes que mais consumiram produtos
              </MenuItem>
              <MenuItem bg={"#3182CE"} borderRadius={"0.5rem"}>
                Clientes que menos consumiram produtos
              </MenuItem>
              <MenuItem bg={"#3182CE"} borderRadius={"0.5rem"}>
                Clientes que mais gastaram
              </MenuItem>
              <MenuItem bg={"#3182CE"} borderRadius={"0.5rem"}>
                Clientes por gênero
              </MenuItem>
              <MenuItem bg={"#3182CE"} borderRadius={"0.5rem"}>
                Produtos mais consumidos
              </MenuItem>
              <MenuItem bg={"#3182CE"} borderRadius={"0.5rem"}>
                Produtos mais consumidos por gênero
              </MenuItem>
            </MenuList>
          </Menu>
        </Center>
      </Box>
    )
}
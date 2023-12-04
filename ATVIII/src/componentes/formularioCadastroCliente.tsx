import { Box, Button, Center, Input } from "@chakra-ui/react"
import BarraNavegacao from "./barraNavegacao"


export const FormularioCadastroCliente = () =>{
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
            <form>
              <Box mb="4">
                <Input
                  variant="filled"
                  placeholder="Nome"
                  size="md"
                  borderRadius="md"
                />
              </Box>
              <Box mb="4">
                <Input
                  variant="filled"
                  placeholder="Sobrenome"
                  size="md"
                  borderRadius="md"
                />
              </Box>
              <Box mb="4">
                <Input
                  variant="filled"
                  placeholder="Telefone"
                  size="md"
                  borderRadius="md"
                />
              </Box>
              <Box mb="4">
                <Input
                  variant="filled"
                  placeholder="E-mail"
                  size="md"
                  borderRadius="md"
                />
              </Box>
              <Center>
                <Button
                  type="submit"
                  colorScheme="teal"
                  size="sm"
                  width="50%"
                  borderRadius="md"
                  rightIcon={<i className="material-icons">send</i>}
                >
                  Cadastrar
                </Button>
              </Center>
            </form>
          </Box>
        </Center>
      </Box>
    )

}
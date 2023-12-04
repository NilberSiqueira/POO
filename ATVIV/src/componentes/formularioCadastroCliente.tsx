// FormularioCadastroCliente.tsx
import React, { ChangeEvent, FormEvent } from "react";
import BarraNavegacao from "./barraNavegacao";
import { Input, Button, Box, Center } from "@chakra-ui/react";

interface FormularioCadastroClienteProps {
  adicionarCliente: (novoCliente: any) => void;
}

interface FormularioCadastroClienteState {
  nome: string;
  sobrenome: string;
  telefone: string;
  email: string;
}

export default class FormularioCadastroCliente extends React.Component<
  FormularioCadastroClienteProps,
  FormularioCadastroClienteState
> {
  constructor(props: FormularioCadastroClienteProps) {
    super(props);
    this.state = {
      nome: "",
      sobrenome: "",
      telefone: "",
      email: "",
    };
  }

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ [event.target.name]: event.target.value } as Pick<
      FormularioCadastroClienteState,
      keyof FormularioCadastroClienteState
    >);
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const novoCliente = {
      nome: this.state.nome,
      sobrenome: this.state.sobrenome,
      telefone: this.state.telefone,
      email: this.state.email,
    };

    this.props.adicionarCliente(novoCliente);

    this.setState({
      nome: "",
      sobrenome: "",
      telefone: "",
      email: "",
    });
  };

  render() {
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
            <form onSubmit={this.handleSubmit}>
              <Box mb="4">
                <Input
                  name="nome"
                  value={this.state.nome}
                  onChange={this.handleInputChange}
                  variant="filled"
                  placeholder="Nome"
                  size="md"
                  borderRadius="md"
                />
              </Box>
              <Box mb="4">
                <Input
                  name="sobrenome"
                  value={this.state.sobrenome}
                  onChange={this.handleInputChange}
                  variant="filled"
                  placeholder="Sobrenome"
                  size="md"
                  borderRadius="md"
                />
              </Box>
              <Box mb="4">
                <Input
                  name="telefone"
                  value={this.state.telefone}
                  onChange={this.handleInputChange}
                  variant="filled"
                  placeholder="Telefone"
                  size="md"
                  borderRadius="md"
                />
              </Box>
              <Box mb="4">
                <Input
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
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
    );
  }
}

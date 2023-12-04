// FormularioCadastroProduto.tsx

import React, { ChangeEvent, FormEvent } from "react";
import BarraNavegacao from "./barraNavegacao";
import { Button, Input, Box, Center } from "@chakra-ui/react";

interface FormularioCadastroProdutoProps {
  adicionarProduto: (novoProduto: any) => void;
}

interface FormularioCadastroProdutoState {
  nome: string;
  preco: string;
}

export default class FormularioCadastroProduto extends React.Component<
  FormularioCadastroProdutoProps,
  FormularioCadastroProdutoState
> {
  constructor(props: FormularioCadastroProdutoProps) {
    super(props);
    this.state = {
      nome: "",
      preco: "",
    };
  }

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ [event.target.name]: event.target.value } as Pick<
      FormularioCadastroProdutoState,
      keyof FormularioCadastroProdutoState
    >);
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const novoProduto = {
      nome: this.state.nome,
      preco: this.state.preco,
    };

    this.props.adicionarProduto(novoProduto);

    this.setState({
      nome: "",
      preco: "",
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
                  placeholder="Produto"
                  size="md"
                  borderRadius="md"
                />
              </Box>
              <Box mb="4">
                <Input
                  name="preco"
                  value={this.state.preco}
                  onChange={this.handleInputChange}
                  variant="filled"
                  placeholder="Preço"
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

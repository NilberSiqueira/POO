import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import RG from "../modelo/rg";
import Empresa from "../modelo/empresa"
import Produto from "../modelo/produto";
import ListagemProdutos from "../negocio/ListagemProdutos";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroProduto from "../negocio/cadastroProduto";
import ListagemClientes from "../negocio/listagemClientes";
import casual from 'casual';
import ListagemProdutosMaisConsumidos from "../negocio/listagemProdutosMaisConsumidos";


console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
const listagemProdutosMaisConsumidos = new ListagemProdutosMaisConsumidos(empresa.getClientes);
const listagemClientesMenosConsumidos = new ListagemClientes(empresa.getClientes);
const listagemClientesValor = new ListagemClientes(empresa.getClientes);

// Loop para criar 30 clientes com nomes fictícios
for (let i = 1; i <= 30; i++) {
  const nome = casual.full_name;
  const nomeSocial = casual.first_name;
  const sexo = i % 2 === 0 ? "F" : "M"; // Alternando entre Masculino e Feminino
  const cpf = new CPF("1234567890" + i, new Date(`2020-03-${i < 10 ? '0' + i : i}`));
  const rg = new RG("12345678" + i, new Date(`2020-03-${i < 10 ? '0' + i : i}`));
  const telefoneNumero = "129123457" + i;

  // Adaptação para manter o atributo telefone como uma string
  const telefone = "(" + telefoneNumero.substring(0, 2) + ") " + telefoneNumero.substring(2, 7) + "-" + telefoneNumero.substring(7);

  const cliente = new Cliente(nome, nomeSocial, sexo, cpf, rg, telefone);

  // Adicione o cliente à lista da empresa
  empresa.getClientes.push(cliente);
}

// Loop para criar 20 produtos fictícios
for (let i = 1; i <= 20; i++) {
  const nomeProduto = casual.title;
  const preco = casual.integer(1, 100); // Gera um preço fictício entre 1 e 100

  const produto = new Produto(nomeProduto, preco);

  // Adicione o produto à lista da empresa
  empresa.getProdutos.push(produto);
}

let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Editar cliente`);
    console.log(`4 - Excluir cliente`);
    console.log(`5 - Cadastrar produto`);
    console.log(`6 - Listar todos os produtos`);
    console.log(`7 - Editar produto`);
    console.log(`8 - Excluir produto`);
    console.log(`9 - Consumir produto`);
    console.log(`11 - Listar Top 10 clientes que mais consumiram produtos`);
    console.log(`12 - Listar clientes por gênero`);
    console.log(`13 - Listar produtos mais consumidos`);
    console.log(`14 - Listar clientes que menos consumiram produtos`);
    console.log(`15 - Listar produtos mais consumidos por gênero`);
    console.log(`16 - Listar clientes que mais gastaram`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastroCliente = new CadastroCliente(empresa.getClientes)
            cadastroCliente.cadastrar()
            break;
        case 2:
            let listagemClientes = new ListagemClientes(empresa.getClientes)
            listagemClientes.listarTodos()
            break;
        case 3:
            const idEditarCliente = entrada.receberNumero("Digite o ID do cliente que deseja editar: ");
            const clienteExistente = empresa.getClientes.find((cliente) => cliente.getId === idEditarCliente);

            if (clienteExistente) {
              const nomeNovo = entrada.receberTexto(`Digite o novo nome (${clienteExistente.getNome}): `) || clienteExistente.getNome;
              const nomeSocialNovo = entrada.receberTexto(`Digite o novo nome social (${clienteExistente.getNomeSocial}): `) || clienteExistente.getNomeSocial;
              const telefoneNovo = entrada.receberTexto(`Digite o novo telefone (${clienteExistente.getTelefones}): `);

            // Ajuste do tipo para string
              let listaTelefonesNovos: string = '';

            // Adiciona o novo telefone à string se um novo telefone for fornecido
            if (telefoneNovo && telefoneNovo.trim() !== '') {
                const dddNovo = entrada.receberTexto(`Informe o DDD do novo telefone: `);
                listaTelefonesNovos = `(${dddNovo}) ${telefoneNovo}`;
            }

            // Atualiza os dados do cliente diretamente
            clienteExistente.atualizarDados(nomeNovo, nomeSocialNovo, listaTelefonesNovos);

            console.log("Cliente atualizado com sucesso!");
        } else {
        console.log(`Cliente com ID ${idEditarCliente} não encontrado.`);
        }
        break;

          
        case 4:
            const idExcluirCliente = entrada.receberNumero("Digite o ID do cliente que deseja excluir: ");
            const clienteIndex = empresa.getClientes.findIndex((cliente) => cliente.getId === idExcluirCliente);
                  
            if (clienteIndex !== -1) {
                const clienteExcluido = empresa.getClientes.splice(clienteIndex, 1)[0];
                console.log(`Cliente com ID ${clienteExcluido.getId} foi excluído com sucesso.`);
                    } else {
                console.log(`Cliente com ID ${idExcluirCliente} não encontrado.`);
                    }
                    break;
        case 5:
            let cadastroProduto = new CadastroProduto(empresa.getProdutos)
            cadastroProduto.cadastrar()
            break;
        case 6:
            let listagemProdutos = new ListagemProdutos(empresa.getProdutos)
            listagemProdutos.listar()
            break;
        case 7:
            const idEditarProduto = entrada.receberNumero("Digite o ID do produto que deseja editar: ");
            const produtoExistente = empresa.getProdutos.find((produto) => produto.getId === idEditarProduto);
              
            if (produtoExistente) {
                const nomeNovo = entrada.receberTexto(`Digite o novo nome (${produtoExistente.getNome}): `) || produtoExistente.getNome;
                const precoNovo = entrada.receberNumero(`Digite o novo preço (${produtoExistente.getPreco}): `) || produtoExistente.getPreco;
              
                // Atualize os dados do produto diretamente
                produtoExistente.atualizarDados(nomeNovo, precoNovo);
              
                  console.log("Produto atualizado com sucesso!");
                } else {
                  console.log(`Produto com ID ${idEditarProduto} não encontrado.`);
                }
                break;
        case 8: 
        const idExcluirProduto = entrada.receberNumero("Digite o ID do produto que deseja excluir: ");
        const produtoIndex = empresa.getProdutos.findIndex((produto) => produto.getId === idExcluirProduto);
              
        if (produtoIndex !== -1) {
            const produtoExcluido = empresa.getProdutos.splice(produtoIndex, 1)[0];
            console.log(`Produto com ID ${produtoExcluido.getId} foi excluído com sucesso.`);
                } else {
            console.log(`Produto com ID ${idExcluirProduto} não encontrado.`);
                }
                break;
        case 9:
            const idCliente = entrada.receberNumero(`Digite o id do cliente que irá consumir um produto: `);
            const clienteExist = empresa.getClientes.find((cliente) => cliente.getId === idCliente);
                  
              if (clienteExist) {
                const produtoId = entrada.receberNumero(`Digite o ID do produto que deseja adicionar ao cliente: `);
                const produto = empresa.getProdutos.find((p) => p.getId === produtoId);
                  
                  if (produto) {
                    clienteExist.adicionarProduto(produto); 
                    console.log(`Produto adicionado ao cliente com sucesso.`);
                    } else {
                      console.log(`Produto não encontrado.`);
                      }
                    } else {
                      console.log(`Cliente não encontrado.`);
                    }
                    break;
        case 11:
          let listagemTop10Clientes = new ListagemClientes(empresa.getClientes);
          listagemTop10Clientes.listar10ClientesPorConsumo();
          break;
        case 12:
          const listagemClientesGen = new ListagemClientes(empresa.getClientes);
          const generoSelecionado = entrada.receberTexto("Digite o gênero (M para Masculino ou F para Feminino): ");
            if (generoSelecionado === "M" || generoSelecionado === "F") {
              listagemClientesGen.listarClientesPorGenero(generoSelecionado);
    }       else {
        console.log("Gênero inválido. Use 'M' para Masculino ou 'F' para Feminino.");
    }
          break;
        case 13:
          listagemProdutosMaisConsumidos.listarProdutosMaisConsumidos();
          break;
        case 14:
          listagemClientesMenosConsumidos.listarClientesMenosConsumidores();
          break;
        case 15:
          const generoSelec = entrada.receberTexto("Digite o gênero (M para Masculino ou F para Feminino): ");
            if (generoSelec === "M" || generoSelec === "F") {
          const listagemProdutosMaisConsumidos = new ListagemProdutosMaisConsumidos(empresa.getClientes);
          listagemProdutosMaisConsumidos.listarProdutosMaisConsumidosPorGenero(generoSelec);
      }     else {
              console.log("Gênero inválido. Use 'M' para Masculino ou 'F' para Feminino.");
            }
          break;
        case 16:
          listagemClientesValor.listarTop5ClientesPorValorConsumido();
          break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}

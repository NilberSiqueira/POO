import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listarTodos(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Id: ` + cliente.getId);
            console.log(`Nome: ` + cliente.getNome);
            console.log(`Nome social: ` + cliente.getNomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`RG: ` + cliente.getRgs.getValor);
            console.log(`Sexo: ` + cliente.sexo);
            console.log(`Data de Cadastro: ${cliente.getDataCadastro.toLocaleString()}`); // Formata a data de cadastro
            // Imprimir telefones
            console.log(`Telefones:` + cliente.getTelefones + " ||");
            

            console.log(`Produtos consumidos: \n`);
            cliente.getProdutosConsumidos.forEach(produto => {
            console.log(`ID: ${produto.getId}, Nome: ${produto.getNome}, Preço: ${produto.getPreco}`);
            console.log(`-------------------------------------- \n`);
        });
    });
    console.log(`\n`);
    }

    public listar10ClientesPorConsumo(): void{
        // Classifique os clientes com base na quantidade de produtos consumidos em ordem decrescente.
        const clientesOrdenados = this.clientes.slice().sort((a, b) => {
            return b.getProdutosConsumidos.length - a.getProdutosConsumidos.length;
        });

        // Pegue os 10 primeiros clientes da lista classificada.
        const top10Clientes = clientesOrdenados.slice(0, 10);

        console.log(`\nTop 10 clientes que mais consumiram produtos:`);
        top10Clientes.forEach((cliente, index) => {
            console.log(`#${index + 1} - Nome: ${cliente.getNome}, Quantidade de Produtos Consumidos: ${cliente.getProdutosConsumidos.length}`);
        });
    }

    public listarTop5ClientesPorValorConsumido(): void {
        // Classifique os clientes com base no valor total dos produtos consumidos em ordem decrescente.
        const clientesOrdenados = this.clientes.slice().sort((a, b) => {
            const valorTotalA = a.getProdutosConsumidos.reduce((total, produto) => total + produto.getPreco, 0);
            const valorTotalB = b.getProdutosConsumidos.reduce((total, produto) => total + produto.getPreco, 0);
            return valorTotalB - valorTotalA;
        });
    
        // Pegue os top 5 clientes da lista classificada.
        const top5Clientes = clientesOrdenados.slice(0, 5);
    
        console.log(`\nTop 5 clientes que mais consumiram produtos por valor:`);
        top5Clientes.forEach((cliente, index) => {
            const valorTotal = cliente.getProdutosConsumidos.reduce((total, produto) => total + produto.getPreco, 0);
            console.log(`#${index + 1} - Nome: ${cliente.getNome}, Valor Total Consumido: R$ ${valorTotal}`);
        });
    }

    public listarClientesMenosConsumidores(): void {
        // Classifique os clientes com base na quantidade de produtos consumidos em ordem crescente.
        const clientesOrdenados = this.clientes.slice().sort((a, b) => {
            return a.getProdutosConsumidos.length - b.getProdutosConsumidos.length;
        });

        // Pegue os 10 primeiros clientes da lista classificada, que são os que menos consumiram produtos.
        const clientesMenosConsumidores = clientesOrdenados.slice(0, 10);

        console.log(`\nTop 10 clientes que menos consumiram produtos:`);
        clientesMenosConsumidores.forEach((cliente, index) => {
            console.log(`#${index + 1} - Nome: ${cliente.getNome}, Quantidade de Produtos Consumidos: ${cliente.getProdutosConsumidos.length}`);
        });
    }

    public listarClientesPorGenero(genero: string): void {
        const clientesPorGenero = this.clientes.filter(cliente => cliente.sexo === genero);

        console.log(`Clientes do gênero ${genero}:`);
        clientesPorGenero.forEach(cliente => {
            console.log(`Nome: ${cliente.getNome}`);
            console.log(`Nome Social: ${cliente.getNomeSocial}`);
            console.log(`CPF: ${cliente.getCpf.getValor}`);
            console.log(`Sexo: ${cliente.sexo}`);
            console.log(`Telefone: ${cliente.getTelefones}`);
            console.log(`--------------------------------------`);
        });
    }
}
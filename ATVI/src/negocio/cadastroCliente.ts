import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import RG from "../modelo/rg";
import Cadastro from "./cadastro";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);

        // CADASTRO NOME
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        if (!nome || nome.trim() === '') {
            console.log("Nome inválido. Por favor, forneça um nome válido.");
            return;
        }
        // CADASTRO NOME SOCIAL E SEXO
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        let sexo = this.entrada.receberTexto(`Por favor informe seu sexo (M para masculino F para feminino): `)
        if (sexo !== 'M' && sexo !== 'F') {
            console.log("Sexo inválido. Informe 'M' para masculino ou 'F' para feminino.");
            return;
        }
        // CADASTRO CPF
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        const cpfNumerico = valor.replace(/\D/g, '');
        if (cpfNumerico.length !== 11) {
            console.log("CPF inválido. Deve conter exatamente 11 dígitos numéricos.");
            return;
        }
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do CPF no padrão dd/mm/yyyy: `);
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataNascimento = new Date(ano, mes, dia)

        // CADASTRO DE RG
        let rg = this.entrada.receberTexto(`Por favor informe o número do RG: `);
        let emissaoRg = this.entrada.receberTexto(`Informe a data de emissão do RG no padrão dd/mm/yyyy:: `);
        let partesData2 = emissaoRg.split('/')
        let ano2 = new Number(partesData2[2].valueOf()).valueOf()
        let mes2 = new Number(partesData2[1].valueOf()).valueOf()
        let dia2 = new Number(partesData2[0].valueOf()).valueOf()
        let dataEmissaoRg = new Date(ano2, mes2, dia2)
        let RGs = new RG(rg, dataEmissaoRg);

        // CADASTRO DE TELEFONE(S)
        let telefones: string = ''; // Alterado para uma string única

        // Permitir o cadastro de múltiplos telefones
        while (true) {
            let telefoneNumero = this.entrada.receberTexto(`Por favor, informe um telefone para contato sem o DDD (ou deixe em branco para finalizar): `);
            if (!telefoneNumero || telefoneNumero.trim() === '') {
                if (!telefones) {
                    console.log("Pelo menos um telefone deve ser informado. Tente novamente.");
                    continue;
                }
                break;
            }
        // Adicionar telefone à lista de telefones
        let ddd = this.entrada.receberTexto(`Informe o DDD do telefone: `);
        telefones += `(${ddd}) ${telefoneNumero}, `; // Adiciona o telefone à string
        }

        let cpf = new CPF(valor, dataNascimento);
        let cliente = new Cliente(nome, nomeSocial, sexo, cpf, RGs, telefones);
        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);
    }
}
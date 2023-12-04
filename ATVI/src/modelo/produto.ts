let proximoId = 1;

export default class Produto {
    private id: number
    private nome: string
    private preco:number

    constructor(nome:string, preco:number){
        this.id = proximoId++
        this.nome = nome;
        this.preco = preco;
    }

    public get getId(): number{
        return this.id
    }
    public get getNome(): string{
        return this.nome
    }
    public get getPreco(): number{
        return this.preco
    }

    public atualizarDados(nome: string, preco: number){
        this.nome = nome;
        this.preco = preco
    }
}
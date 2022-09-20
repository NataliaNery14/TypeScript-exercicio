class Funcionario {
    private nome: string;

    constructor ( nome: string){
        this.nome = nome;
    }

    public MudarNome ( nome: string, codigoAutorizacao: number): string {
        if (codigoAutorizacao = 123456) {
            this.nome = nome;
            return 'Nome alterado com sucesso !'
        } else {
            return 'Operação não autorizada !'
        }
    }

    public GetNome(){
        return this.nome;
    }
}    

const nome = prompt('Digite o nome do Funcionario: ');
const funcionario = new Funcionario(nome);

console.log(funcionario.GetNome());
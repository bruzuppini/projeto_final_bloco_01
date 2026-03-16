import { Produto } from "../model/Produto";
import { Repository } from "../repository/Repository";

export class Controller implements Repository{

    private listaProdutos: Array<Produto> = new Array<Produto>();
    numero: number = 0;

    procurarPorID(id: number): void {
        for(let produto of this.listaProdutos){
            if(produto.id == id){
                produto.visualizar();
                return;
            }
        }

        console.log("Produto não encontrado!");
    }

    listarTodos(): void {
        for(let produto of this.listaProdutos){
            produto.visualizar();
        }
    }

    cadastrar(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log("Produto cadastrado com sucesso!");
    }

    atualizar(produto: Produto): void {
        for(let i = 0; i < this.listaProdutos.length; i++){

            let prod = this.listaProdutos[i];

            if(prod && prod.id == produto.id){
                this.listaProdutos[i] = produto;
                console.log("Produto atualizado!");
                return; 
            }
        }

        console.log("Produto não encontrado!");
    }

    deletar(id: number): void {
        for(let i = 0; i < this.listaProdutos.length; i++){

            let prod = this.listaProdutos[i];

            if(prod && prod.id == id){
                this.listaProdutos.splice(i, 1);
                console.log("Produto deletado!");
                return;
            }
        }
        
        console.log("Produto não encontrado!")
    }

    public buscarNoArray(id: number): Produto | undefined {

    for(let produto of this.listaProdutos){
        if(produto.id == id){
            return produto;
        }
    }

    return undefined;

    }  

}


import { Produto } from "./Produto";

export class Jogo extends Produto{
    private _genero: string;
    private _plataforma: string;

    constructor(id: number, nome: string, preco: number, estoque: number, genero: string, plataforma: string){
        super(id, nome, preco, estoque);

        this._genero = genero;
        this._plataforma = plataforma;
    }

    public get genero(){
        return this._genero;
    }

    public set genero(genero: string){
        this._genero = genero;
    }

    public get plataforma(){
        return this._plataforma;
    }

    public set plataforma(plataforma: string){
        this._plataforma = plataforma;
    }

    public visualizar(): void {
        super.visualizar();

        console.log(`Gênero: ${this._genero}`);
        console.log(`Plataforma: ${this._plataforma}`);
    }
}
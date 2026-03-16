import readlinesync = require('readline-sync');
import { colors } from './src/util/Colors';
import { Jogo } from './src/model/Jogo';
import { Controller } from './src/controller/Controller';

 const controller = new Controller();

    let jogo1 = new Jogo(1, "Outer Wilds", 70, 100, "Aventura", "PC");
    let jogo2 = new Jogo(2, "Hollow Knight", 70, 100, "Metroidvania", "PC");
    let jogo3 = new Jogo(3, "The Case of the Golden Idol", 20, 100, "Quebra-Cabeça", "PC");

    controller.cadastrar(jogo1);
    controller.cadastrar(jogo2);
    controller.cadastrar(jogo3);

export function main(){

    let opcao: number;
    let carrinho: Array<Jogo> = new Array<Jogo>();

    while(true){

        console.log(colors.bg.black, colors.fg.yellow, "=================================");
        console.log("                                 ");
        console.log("      LOJA DE JOGOS INDIES       ");
        console.log("                                 ");
        console.log("=================================");
        console.log("                                 ");
        console.log("     1 - Ver todos os jogos      ");
        console.log("     2 - Buscar jogo por ID      ");
        console.log("     3 - Comprar jogo        ");
        console.log("     4 - Ver carrinho      ");
        console.log("     5 - Sair      ");
        console.log("                                 ");
        console.log("=================================", colors.reset);

        try{
            console.log("\nEntre com a opção desejada: ");
            opcao = readlinesync.questionInt("");
        }catch(error){
            console.log(colors.fg.redstrong, "Entrada inválida! Digite um número.", colors.reset);

            keyPress()
            continue;
        }   

        if(opcao == 5){
            console.log(colors.fg.greenstrong, "\nObrigado por comprar conosco!")
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch(opcao){
            case 1:
                console.log(colors.fg.whitestrong, "\n\nVer todos os jogos\n\n", colors.reset);
                controller.listarTodos();

                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong, "\n\nBuscar jogo por ID\n\n", colors.reset);
                
                console.log("Digite o ID do Jogo: ");

                try{
                    let id = readlinesync.questionInt("");
                    controller.procurarPorID(id);
                }catch(error){
                    console.log(colors.fg.redstrong, "ID inválido!", colors.reset);
                }
                    keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, "\n\nComprar jogo\n\n", colors.reset);

                console.log("Digite o ID do Jogo: ");
                let idCompra = readlinesync.questionInt("");

                let produto = controller.buscarNoArray(idCompra);

               
                if(produto != null){
                    let jogo = produto as Jogo;

                    console.log("\nJogo encontrado!\n");
                    jogo.visualizar();
                
                    carrinho.push(jogo);
                    console.log("\nJogo adicionado ao carrinho!")
                }else{
                    console.log("\nID inválido! Jogo não encontrado!");
                }

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong, "\n\nVer carrinho\n\n", colors.reset);

                if(carrinho.length == 0){
                    console.log("Seu carrinho está vazio.");
                }else{
                    for(let jogo of carrinho){
                        jogo.visualizar();
                    }
                }

                keyPress()
                break;
            default:
                console.log(colors.fg.redstrong, "\n\nOpção inválida!\n\n", colors.reset);

                keyPress()
                break;
        }
    }
}

export function sobre(): void{
    console.log("\n========================================================");
    console.log("Projeto desenvolvido por: ");
    console.log("Bruna Zuppini Bacchiega - brunazuppini@gmail.com")
    console.log("https://github.com/bruzuppini/projeto_final_bloco_01")
    console.log("========================================================");
}

function keyPress(): void{
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();	
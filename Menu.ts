import readlinesync = require('readline-sync');
import { colors  } from './src/util/Colors';
import { realpath } from 'node:fs';

export function main(){
    let opcao: number;
    
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

        console.log("\nEntre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if(opcao == 5){
            console.log(colors.fg.greenstrong, "\nObrigado por comprar conosco!")
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch(opcao){
            case 1:
                console.log(colors.fg.whitestrong, "\n\nVer todos os jogos\n\n", colors.reset);

                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong, "\n\nBuscar jogo por ID\n\n", colors.reset);

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, "\n\nComprar jogo\n\n", colors.reset);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong, "\n\nVer carrinho\n\n", colors.reset);

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
    console.log(\n"Pressione enter para continuar...");
    readlinesync.prompt();
}

main();	
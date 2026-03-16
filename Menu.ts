import readlinesync = require('readline-sync');

export function main(){
    let opcao: number;
    
    while(true){
        console.log("=================================");
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
        console.log("=================================");

        console.log("\nEntre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if(opcao == 5){
            console.log("\nObrigado por comprar conosco!")
            sobre();
            process.exit(0);
        }

        switch(opcao){
            case 1:
                console.log("\n\nVer todos os jogos\n\n");

                break;
            case 2:
                console.log("\n\nBuscar jogo por ID\n\n");

                break;
            case 3:
                console.log("\n\nComprar jogo\n\n");

                break;
            case 4:
                console.log("\n\nVer carrinho\n\n");

                break;
            default:
                console.log("\n\nOpção inválida!\n\n");

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

main();	
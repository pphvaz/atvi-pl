import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cadastroCliente";
import ExclusaoCliente from "../negocio/exclusaoCliente";
import ListagemClientes from "../negocio/listagemClientes";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinárias`);
let empresa = new Empresa();
let execucao = true;

while (execucao) {
    console.log(`Categorias:`);
    console.log(`1 - Cliente`);
    console.log(`2 - Pet`);
    console.log(`3 - Produto`);
    console.log(`4 - Serviço`);
    console.log(`5 - Listar`);
    console.log(`0 - Sair`);

    let entrada = new Entrada();
    let categoria = entrada.receberNumero(`Por favor, escolha uma categoria: `);

    if (categoria === 0) {
        execucao = false;
        console.log(`Até mais`);
        break;
    }

    switch (categoria) {
        case 1: // Cliente
            console.log(`Ações:`);
            console.log(`1 - Cadastrar`);
            console.log(`2 - Excluir`);
            console.log(`3 - Atualizar Dados`);
            console.log(`0 - Voltar`);

            let acaoCliente = entrada.receberNumero(`Escolha uma ação para Cliente: `);
            switch (acaoCliente) {
                case 1:
                    let cadastro = new CadastroCliente(empresa.getClientes);
                    cadastro.cadastrar();
                    break;
                case 2:
                    let exclusao = new ExclusaoCliente(empresa.getClientes);
                    exclusao.excluir();
                    break;
                case 3:
                    console.log(`Atualizar dados do cliente`);
                    break;
                case 0:
                    break;
                default:
                    console.log(`Ação não entendida :(`);
            }
            break;

        case 2: // Pet
            console.log(`Ações:`);
            console.log(`1 - Cadastrar`);
            console.log(`2 - Excluir`);
            console.log(`3 - Atualizar Dados`);
            console.log(`0 - Voltar`);

            let acaoPet = entrada.receberNumero(`Escolha uma ação para Pet: `);
            switch (acaoPet) {
                case 1:
                    console.log(`Cadastrar pet`);
                    break;
                case 2:
                    console.log(`Excluir pet`);
                    break;
                case 3:
                    console.log(`Atualizar dados do pet`);
                    break;
                case 0:
                    break;
                default:
                    console.log(`Ação não entendida :(`);
            }
            break;

        case 3: // Produto
            console.log(`Ações:`);
            console.log(`1 - Cadastrar`);
            console.log(`2 - Excluir`);
            console.log(`0 - Voltar`);

            let acaoProduto = entrada.receberNumero(`Escolha uma ação para Produto: `);
            switch (acaoProduto) {
                case 1:
                    console.log(`Cadastrar produto`);
                    break;
                case 2:
                    console.log(`Excluir produto`);
                    break;
                case 3:
                    console.log(`Atualizar dados do produto`);
                    break;
                case 0:
                    break;
                default:
                    console.log(`Ação não entendida :(`);
            }
            break;

        case 4: // Serviço
            console.log(`Ações:`);
            console.log(`1 - Cadastrar`);
            console.log(`2 - Excluir`);
            console.log(`0 - Voltar`);

            let acaoServico = entrada.receberNumero(`Escolha uma ação para Serviço: `);
            switch (acaoServico) {
                case 1:
                    console.log(`Cadastrar serviço`);
                    break;
                case 0:
                    break;
                default:
                    console.log(`Ação não entendida :(`);
            }
            break;

        case 5: // Listar
            console.log(`Listar:`);
            console.log(`1 - Clientes`);
            console.log(`2 - Pets`);
            console.log(`3 - Produtos`);
            console.log(`4 - Serviços`);
            console.log(`0 - Voltar`);

            let listarOpcao = entrada.receberNumero(`Escolha o que deseja listar: `);
            switch (listarOpcao) {
                case 1:
                    let listagemClientes = new ListagemClientes(empresa.getClientes);
                    listagemClientes.listar();
                    break;
                case 2:
                    console.log(`Listar pets`);
                    break;
                case 3:
                    console.log(`Listar produtos`);
                    break;
                case 4:
                    console.log(`Listar serviços`);
                    break;
                case 0:
                    break;
                default:
                    console.log(`Opção não entendida :(`);
            }
            break;

        default:
            console.log(`Categoria não entendida :(`);
    }
}
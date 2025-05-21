import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cadastroCliente";
import ExclusaoCliente from "../negocio/exclusaoCliente";
import ListagemClientes from "../negocio/listagemClientes";
import CadastroPet from "../negocio/cadastroPet";
import ExclusaoPet from "../negocio/exclusaoPet";
import CadastroProduto from "../negocio/cadastroProduto";
import CadastroServico from "../negocio/cadastroServico";
import RegistroConsumo from "../negocio/registroConsumo";
import ListagemConsumo from "../negocio/listagemConsumo";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinárias`);
let empresa = new Empresa();
let execucao = true;

while (execucao) {
    console.log(`\nCategorias:`);
    console.log(`1 - Cliente`);
    console.log(`2 - Pet`);
    console.log(`3 - Produto`);
    console.log(`4 - Serviço`);
    console.log(`5 - Consumo`);
    console.log(`6 - Listagens`);
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
            console.log(`\nAções:`);
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
            console.log(`\nAções:`);
            console.log(`1 - Cadastrar`);
            console.log(`2 - Excluir`);
            console.log(`0 - Voltar`);

            let acaoPet = entrada.receberNumero(`Escolha uma ação para Pet: `);
            switch (acaoPet) {
                case 1:
                    let cadastroPet = new CadastroPet(empresa.getClientes);
                    cadastroPet.cadastrar();
                    break;
                case 2:
                    let exclusaoPet = new ExclusaoPet(empresa.getClientes);
                    exclusaoPet.excluir();
                    break;
                case 0:
                    break;
                default:
                    console.log(`Ação não entendida :(`);
            }
            break;

        case 3: // Produto
            console.log(`\nAções:`);
            console.log(`1 - Cadastrar`);
            console.log(`2 - Excluir`);
            console.log(`0 - Voltar`);

            let acaoProduto = entrada.receberNumero(`Escolha uma ação para Produto: `);
            switch (acaoProduto) {
                case 1:
                    let cadastroProduto = new CadastroProduto(empresa);
                    cadastroProduto.cadastrar();
                    break;
                case 2:
                    console.log(`Excluir produto`);
                    break;
                case 0:
                    break;
                default:
                    console.log(`Ação não entendida :(`);
            }
            break;

        case 4: // Serviço
            console.log(`\nAções:`);
            console.log(`1 - Cadastrar`);
            console.log(`2 - Excluir`);
            console.log(`0 - Voltar`);

            let acaoServico = entrada.receberNumero(`Escolha uma ação para Serviço: `);
            switch (acaoServico) {
                case 1:
                    let cadastroServico = new CadastroServico(empresa);
                    cadastroServico.cadastrar();
                    break;
                case 2:
                    console.log(`Excluir serviço`);
                    break;
                case 0:
                    break;
                default:
                    console.log(`Ação não entendida :(`);
            }
            break;

        case 5: // Consumo
            console.log(`\nAções:`);
            console.log(`1 - Registrar Consumo`);
            console.log(`0 - Voltar`);

            let acaoConsumo = entrada.receberNumero(`Escolha uma ação para Consumo: `);
            switch (acaoConsumo) {
                case 1:
                    let registroConsumo = new RegistroConsumo(empresa);
                    registroConsumo.registrar();
                    break;
                case 0:
                    break;
                default:
                    console.log(`Ação não entendida :(`);
            }
            break;

        case 6: // Listagens
            console.log(`\nListagens:`);
            console.log(`1 - Top 10 Clientes por Quantidade`);
            console.log(`2 - Top 5 Clientes por Valor`);
            console.log(`3 - Produtos Mais Consumidos`);
            console.log(`4 - Serviços Mais Consumidos`);
            console.log(`5 - Consumo por Tipo e Raça de Pet`);
            console.log(`0 - Voltar`);

            let listagemOpcao = entrada.receberNumero(`Escolha o tipo de listagem: `);
            let listagemConsumo = new ListagemConsumo(empresa);
            
            switch (listagemOpcao) {
                case 1:
                    listagemConsumo.listarTop10ClientesPorQuantidade();
                    break;
                case 2:
                    listagemConsumo.listarTop5ClientesPorValor();
                    break;
                case 3:
                    listagemConsumo.listarProdutosMaisConsumidos();
                    break;
                case 4:
                    listagemConsumo.listarServicosMaisConsumidos();
                    break;
                case 5:
                    listagemConsumo.listarConsumoPorTipoRaca();
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
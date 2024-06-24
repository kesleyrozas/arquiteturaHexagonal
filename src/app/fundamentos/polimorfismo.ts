import Ferrai from "@/core/fundamentos/Ferrari";
import TerminalUtil from "../util/TerminalUtil";
import Fusca from "@/core/fundamentos/Fusca";
import Carro from "@/core/fundamentos/Carro";

export default async function polimorfismo() {
    TerminalUtil.titulo('Polimorfismo')

    const [tipoCarro] = await TerminalUtil.selecao('Tipo de Carro?', ['Ferrai', 'Fusca'])
    const carro: Carro = tipoCarro === 0 ? new Ferrai() : new Fusca()

    while(true){
        TerminalUtil.limpar()

        TerminalUtil.exibirChaveValor('Valocidade Máxima: ', `${carro.velocidadeMaxima} km/h`)
        TerminalUtil.exibirChaveValor('Valocidade Atual: ', `${carro.velocidadeAtual} km/h`)

        const [opcao] = await TerminalUtil.selecao("Qual opção?", ['Acelerar', 'Frear'])

        opcao === 0 ? carro.acelerar() : carro.frear()

        const continuar = await TerminalUtil.confirmacao('Deseja continuar')
        if(!continuar) return
    }
}
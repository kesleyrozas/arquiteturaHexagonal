
import corrida from "@/core/fundamentos/Corrida";
import TerminalUtil from "../util/TerminalUtil";
import Carro from "@/core/fundamentos/Carro";
import Ferrai from "@/core/fundamentos/Ferrari";
import Fusca from "@/core/fundamentos/Fusca";
import { terminal } from "terminal-kit";

export default async function dip() {
    TerminalUtil.titulo('DIP')
    const [tipo] = await TerminalUtil.selecao('Tipos de Carro?',['Ferrari', 'Fusca'])

    let carro: Carro

    switch(tipo){
        case 0: carro = new Ferrai() 
            break
        default: carro = new Fusca() 
            break
    }

    corrida(carro, terminal.red)
    await TerminalUtil.esperarEnter()
    
}
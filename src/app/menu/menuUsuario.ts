import TerminalUtil from "@/app/util/TerminalUtil";
import polimorfismo from "../fundamentos/polimorfismo";
import registrarUsuario from "../usuario/registrarUsuario";

export default async function menuUsuario(){
    TerminalUtil.titulo('Usuario')

    const [indice] = await TerminalUtil.menu([
        '1. Registrar Usuario',
        'Voltar',
    ])

    switch(indice){
        case 0: await registrarUsuario(); break
        default: return
    }

    await menuUsuario()
}
import Usuario from "@/core/usuario/model/Usuario";
import TerminalUtil from "../util/TerminalUtil";
import RegistrarUsuario from "@/core/usuario/service/RegistrarUsuario";
import SenhaCripto from "@/adapters/auth/SenhaCripto";
import RepositorioPg from "@/adapters/db/RepositorioPg";

export default async function registrarUsuario() {
    const { campoRequerido, titulo, sucesso, erro, esperarEnter } = TerminalUtil
    titulo('registrarUsuario')

    const nome = await campoRequerido('nome: ', '')
    const email = await campoRequerido('email: ', '')
    const senha = await campoRequerido('senha: ', '')

    const usuario: Usuario = {nome, email, senha}

    const repositorio = new RepositorioPg
    const provedorCripto = new SenhaCripto()
    const casoDeUso = new RegistrarUsuario(repositorio,provedorCripto)

    await casoDeUso.executar(usuario)

    sucesso('Usuario registrado com sucesso')
    await esperarEnter()
    
    try {
        await casoDeUso.executar(usuario)
    } catch (e: any) {
        erro(e.message)
        await esperarEnter()
    }
}
import ProvedorCriptografia from "@/core/usuario/service/ProvedorCriptografia";
import bcrypt from 'bcrypt'
import { text } from "stream/consumers";

export default class SenhaCripto implements ProvedorCriptografia{
    
    criptografar(texto: string): string {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(texto, salt)
    }
}
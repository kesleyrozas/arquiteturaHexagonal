// Na arquitetura hexagonal está interface e uma porta!
// A porta faz parte do core da aplicação
export default interface ProvedorCriptografia{
    criptografar(texto: string): string
}
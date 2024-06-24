import Carro from "./Carro";

export default class Ferrai implements Carro{
    constructor(
        readonly velocidadeMaxima: number = 324,
        private _velocidadeAtual: number = 0
    ){}

    acelerar(): void {
        this._velocidadeAtual = Math.min(
            this._velocidadeAtual + 4,
            this.velocidadeMaxima
        )
    }

    frear(): void {
        this._velocidadeAtual = Math.max(
            this._velocidadeAtual - 4,
            0
        )
    }

    get velocidadeAtual(){
        return this._velocidadeAtual
    }
}
import { Injectable } from "@angular/core";
import { IEstadoDados } from "../requests/models/estadoDados";

@Injectable({
  providedIn: 'root'
})
export class EstadoDadosService {
    dados!: IEstadoDados;

    constructor(){
      this.dados = {
        token: '',
        usuarioLogado: {}
      }
    }

    get estadosDados(){
      return this.dados
    }

    set estadosDados(a){
      this.dados = a
    }
}

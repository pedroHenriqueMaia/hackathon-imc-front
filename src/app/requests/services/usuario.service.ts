import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { EstadoDadosService } from "src/app/utils/estadoDados.service";
import { ENDPOINTS } from "../endpoints";
import { IHttpResponse } from "../models/httpResponse";
import { IIMC } from "../models/imc";
import { IUsuario } from "../models/usuario";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private httpOptions = {}
  constructor(private http: HttpClient, private estadoDadosService: EstadoDadosService) {}

  setarHttpOption() {
    let usuarioLogadoObj2;
    const usuarioLogadoStr2 = localStorage.getItem("token");
    if(usuarioLogadoStr2){
      usuarioLogadoObj2 = usuarioLogadoStr2
    }
    if(usuarioLogadoObj2){
      this.httpOptions =  {
        headers: {
          "Content-type": "application/json",
          "Content-Security-Policy": "self",
          Authorization:
          `Bearer ${usuarioLogadoObj2}`,
        },
      };
    }else{
      this.httpOptions =  {
        headers: {
          "Content-type": "application/json",
          "Content-Security-Policy": "self"
        },
      };
    }
  }

  executarReqParaListarTodosOsUsuarios() {
    this.setarHttpOption()
    return this.http.get<IHttpResponse>(
      ENDPOINTS.USERS,
      this.httpOptions
      ) as Observable<IHttpResponse>;
    }
    
    executarReqParaListarUsuarioPorId(id: number) {
    this.setarHttpOption()
    return this.http.get<IHttpResponse>(
      `${ENDPOINTS.USERS}/${id}`,
      this.httpOptions
    ) as Observable<IHttpResponse>;
  }

    executarReqCadastrarUmNovoUsuario(entrada: IUsuario) {
    this.setarHttpOption()
    return this.http.post<IHttpResponse>(
      ENDPOINTS.USERS,
      entrada,
      this.httpOptions
    ) as Observable<IHttpResponse>;
  }

    executarReqParaListarALunosDoProfessionalLogado() {
    this.setarHttpOption()
    let usuarioLogadoObj;
    const usuarioLogadoStr = localStorage.getItem("usuarioLogado");
    if(usuarioLogadoStr){
      usuarioLogadoObj = JSON.parse(usuarioLogadoStr)
    }
    console.log(this.httpOptions )
    return this.http.get<IHttpResponse>(
      `${ENDPOINTS.IMC}?profissionalId=${usuarioLogadoObj.user_id}`,
      this.httpOptions
    ) as Observable<IHttpResponse>;
  }
  executarReqParaListarALunosDoAlunoLogado(data1?: string, data2?:string) {
    this.setarHttpOption()
    let usuarioLogadoObj;
    const usuarioLogadoStr = localStorage.getItem("usuarioLogado");
    if(usuarioLogadoStr){
      usuarioLogadoObj = JSON.parse(usuarioLogadoStr)
    }
    let rota = `${ENDPOINTS.IMC}?clientId=${usuarioLogadoObj.user_id}`;

    if(data1 && data2){
      rota = `${ENDPOINTS.IMC}?clientId=${usuarioLogadoObj.user_id}&initialDate=${data1}&finalDate=${data2}`;
    }
    return this.http.get<IHttpResponse>(
      rota,
      this.httpOptions
    ) as Observable<IHttpResponse>;
  }

    executarReqParaCriarUmNovoIMC(entrada: IIMC) {
    this.setarHttpOption()
    console.log(this.httpOptions )
    return this.http.post<IHttpResponse>(
      ENDPOINTS.IMC,
      entrada,
      this.httpOptions
    ) as Observable<IHttpResponse>;
  }
  
}

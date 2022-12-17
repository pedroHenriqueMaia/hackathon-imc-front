import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { EstadoDadosService } from "src/app/utils/estadoDados.service";
import { ENDPOINTS } from "../endpoints";
import { IHttpResponse } from "../models/httpResponse";
import { IUsuario } from "../models/usuario";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private httpOptions = {}
  constructor(private http: HttpClient, private estadoDadosService: EstadoDadosService) {}

  setarHttpOption() {
    let usuarioLogadoObj;
    const usuarioLogadoStr = localStorage.getItem("token");
    if(usuarioLogadoStr){
      usuarioLogadoObj = usuarioLogadoStr
    }
    if(usuarioLogadoObj){
      this.httpOptions =  {
        headers: {
          "Content-type": "application/json",
          "Content-Security-Policy": "self",
          Authorization:
          `Bearer ${usuarioLogadoObj}`,
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
  
}

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { EstadoDadosService } from "src/app/utils/estadoDados.service";
import { ENDPOINTS } from "../endpoints";
import { IHttpResponse } from "../models/httpResponse";
import { ILogin } from "../models/login";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private httpOptions = {}
  constructor(private http: HttpClient, estadoDadosService: EstadoDadosService) {
    if(estadoDadosService.dados.token){
      this.httpOptions =  {
        headers: {
          "Content-type": "application/json",
          "Content-Security-Policy": "self",
          Authorization:
          `Bearer ${estadoDadosService.dados.token}`,
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

  executar() {
    return this.http.get<IHttpResponse>(
      ENDPOINTS.USERS,
      this.httpOptions
    ) as Observable<IHttpResponse>;
  }
  
}

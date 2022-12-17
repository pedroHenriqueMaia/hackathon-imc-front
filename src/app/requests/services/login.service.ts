import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ENDPOINTS } from "../endpoints";
import { IHttpResponse } from "../models/httpResponse";
import { ILogin } from "../models/login";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private httpOptions = {}
  constructor(private http: HttpClient) {
    this.httpOptions =  {
      headers: {
        "Content-type": "application/json",
        "Content-Security-Policy": "self"
      },
    };
  }

  executar(entrada: ILogin) {
    return this.http.post<IHttpResponse>(
      ENDPOINTS.LOGIN,
      entrada,
      this.httpOptions
    ) as Observable<any>;
  }
  
}

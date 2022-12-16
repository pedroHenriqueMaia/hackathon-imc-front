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
        "Content-Security-Policy": "self",
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2NzEyMjg1ODcsImlzcyI6ImFjYWRlbXkuY29tLmJyIiwibmJmIjoxNjcxMjI4NTg3LCJleHAiOjE2NzEyNjQ1ODcsImRhdGEiOnsidXNlcl9pZCI6MTIsInR5cGUiOiJhZG1pbiJ9fQ.TMEN4l5-3aqNyznG9XmpGzTtC8Qdo3OLvdOepQblVwnGGrMILv-kpcj39IpG5gRIfDUbaNT1-WY5eaOivK62fg",
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

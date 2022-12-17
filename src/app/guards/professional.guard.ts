import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { EstadoDadosService } from "../utils/estadoDados.service";

@Injectable()
export class ProfessionalGuard implements CanActivate {
  
  constructor(private estadoDadosService:EstadoDadosService){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let usuarioLogadoObj;
    const usuarioLogadoStr = localStorage.getItem("usuarioLogado");
    if(usuarioLogadoStr){
      usuarioLogadoObj = JSON.parse(usuarioLogadoStr)
    }
    if(usuarioLogadoObj.type == 'professional'){
      return true;
    }
    return false;
  }

}
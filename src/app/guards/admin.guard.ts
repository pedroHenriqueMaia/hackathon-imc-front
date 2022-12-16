import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { EstadoDadosService } from "../utils/estadoDados.service";

@Injectable()
export class AdminGuard implements CanActivate {
  
  constructor(private estadoDadosService:EstadoDadosService){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.estadoDadosService.dados.usuarioLogado.tipo == 'admin'){
      return true;
    }
    return false;
  }

}
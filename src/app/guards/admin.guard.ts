import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { EstadoDadosService } from "../utils/estadoDados.service";

@Injectable()
export class AdminGuard implements CanActivate {
  
  constructor(private estadoDadosService:EstadoDadosService, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let usuarioLogadoObj;
    const usuarioLogadoStr = localStorage.getItem("usuarioLogado");
    if(usuarioLogadoStr){
      usuarioLogadoObj = JSON.parse(usuarioLogadoStr)
    }
    if(usuarioLogadoObj?.type == 'admin'){
      return true;
    }
    this.router.navigate([''])
    return false;
  }

}
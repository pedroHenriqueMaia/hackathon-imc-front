import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { IHttpResponse } from 'src/app/requests/models/httpResponse';
import { LoginService } from 'src/app/requests/services/login.service';
import { EstadoDadosService } from 'src/app/utils/estadoDados.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private estadoDadosService: EstadoDadosService, private route: Router) {}

  cpf!: string;
  senha!: string;

  ngOnInit(): void {
  }

  fazerLogin():void {
    this.loginService.executar({login: '12345678900', password: 'admin'}).subscribe((res: IHttpResponse) => {
      this.estadoDadosService.estadosDados.token = res.data.token;
      this.decodificarJWT(res);
      this.redirecionarUsuario()
    })
  }

  decodificarJWT(res: IHttpResponse) {
    const teste:any = jwtDecode(res.data.token)
    this.estadoDadosService.estadosDados.usuarioLogado.id = teste.data.user_id
    this.estadoDadosService.estadosDados.usuarioLogado.tipo = teste.data.type
  }

  redirecionarUsuario() {
    switch(this.estadoDadosService.estadosDados.usuarioLogado.tipo) {
      case "admin": this.route.navigate(['/administrador']);
      break;
      case "professional": this.route.navigate(['/professional']);
      break;
      case "client": this.route.navigate(['/aluno']);
      break;
      default: this.route.navigate(['/login']);
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { IHttpResponse } from 'src/app/requests/models/httpResponse';
import { LoginService } from 'src/app/requests/services/login.service';
import { UsersService } from 'src/app/requests/services/usuario.service';
import { EstadoDadosService } from 'src/app/utils/estadoDados.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private loginService: LoginService, 
    private estadoDadosService: EstadoDadosService, 
    private route: Router,
    private usersService: UsersService
    ) {}

  cpf!: string;
  senha!: string;
  mostrarMensagemErro: boolean = false

  ngOnInit(): void {
  }

  fazerLogin():void {
    this.loginService.executar({login: this.cpf, password: this.senha}).subscribe((res: IHttpResponse) => {
      localStorage.setItem("token", res.data.token);
      this.estadoDadosService.estadosDados.token = res.data.token
      this.decodificarJWT(res);
      this.redirecionarUsuario()
    },
    (err) => this.mostrarMensagemErro = true) 
  }

  decodificarJWT(res: IHttpResponse) {
    const teste:any = jwtDecode(res.data.token)
    localStorage.setItem("usuarioLogado", JSON.stringify(teste.data))
  }

  redirecionarUsuario() {
    let usuarioLogadoObj;
    const usuarioLogadoStr = localStorage.getItem("usuarioLogado");
    if(usuarioLogadoStr){
      usuarioLogadoObj = JSON.parse(usuarioLogadoStr)
    }

    switch(usuarioLogadoObj.type) {
      case "admin": this.route.navigate(['/administrador']);
      break;
      case "professional": this.route.navigate(['/professional']);
      break;
      case "client": this.route.navigate(['/aluno']);
      break;
      default: this.route.navigate(['/login']);
    }
  }

  // fazerReqDasInfosUsuarioLogado(id: number){
  //   this.usersService.executarReqParaListarUsuarioPorId(id).subscribe((res) => console.log(res.data))
  // }

}

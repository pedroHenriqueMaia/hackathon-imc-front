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

  constructor(
    private loginService: LoginService, 
    private estadoDadosService: EstadoDadosService, 
    private route: Router
    ) {}

  cpf!: string;
  senha!: string;
  mostrarMensagemErro: boolean = false

  ngOnInit(): void {
  }

  fazerLogin():void {
    const cpf = this.desformatarCpf()
    this.loginService.executar({login: cpf, password: this.senha}).subscribe((res: IHttpResponse) => {
      localStorage.setItem("token", res.data.token);
      this.estadoDadosService.estadosDados.token = res.data.token
      this.decodificarJWT(res);
      this.redirecionarUsuario()
    },
    (err) => this.mostrarMensagemErro = true) 
  }

  desformatarCpf() {
    return this.cpf.replace('.', '').replace('.', '').replace('-', '')
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

  cpfMask(value:any) {
    this.cpf = value.target.value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
  }

}

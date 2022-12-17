import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/requests/services/usuario.service';
import { MOCK_ADMIN } from 'src/app/utils/mocks';

@Component({
  selector: 'app-admin-cadastro',
  templateUrl: './admin-cadastro.component.html',
  styleUrls: ['./admin-cadastro.component.scss']
})
export class AdminCadastroComponent implements OnInit {

  constructor(private usersService: UsersService, private router: Router) {}
  
  user!: string;
  nome!:string; 
  cpf!:string; 
  tipo: "professional" | "client" = 'professional';
  senha!:string;
  mensagemErro: boolean = false;
  ngOnInit(): void {
    this.user = MOCK_ADMIN.name;
  }

  cadastrar(): void {
    this.usersService.executarReqCadastrarUmNovoUsuario(
      {cpf: this.cpf, name:this.nome, type: this.tipo, password: this.senha}
    ).subscribe(
      (res) => this.router.navigate(['/administrador']),
      (err) => this.mensagemErro = true 
      )
  }
  
  cpfMask(event: any) {
    this.cpf = event.target.value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado ma
  }
}

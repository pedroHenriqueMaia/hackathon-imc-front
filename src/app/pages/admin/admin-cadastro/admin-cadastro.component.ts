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
}

import { Component, OnInit } from '@angular/core';
import { MOCK_ADMIN } from 'src/app/utils/mocks';

@Component({
  selector: 'app-admin-cadastro',
  templateUrl: './admin-cadastro.component.html',
  styleUrls: ['./admin-cadastro.component.scss']
})
export class AdminCadastroComponent implements OnInit {

  user!: string;
  nome!:string; 
  cpf!:string; 
  tipo: "profissional" | "aluno" = 'profissional';
  senha!:string;

  ngOnInit(): void {
    this.user = MOCK_ADMIN.name;
  }

  cadastrar(): void {
    console.log(this.nome)
    console.log(this.cpf)
    console.log(this.tipo)
    console.log(this.senha)
  }
}

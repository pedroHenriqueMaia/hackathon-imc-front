import { Component, OnInit } from '@angular/core';
import { MOCK_ADMIN } from 'src/app/utils/mocks';

@Component({
  selector: 'app-profissional-cadastro',
  templateUrl: './profissional-cadastro.component.html',
  styleUrls: ['./profissional-cadastro.component.scss']
})
export class ProfissionalCadastroComponent implements OnInit {
  
  user!: string;
  peso!:string; 
  altura!:string; 
  aluno:string = 'profissional';
  senha!:string;

  ngOnInit(): void {
    this.user = MOCK_ADMIN.name;
  }

  cadastrar(): void {
    console.log(this.peso)
    console.log(this.altura)
    console.log(this.aluno)
  }
}

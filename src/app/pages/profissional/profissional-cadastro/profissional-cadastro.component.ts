import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUsuario } from 'src/app/requests/models/usuario';
import { UsersService } from 'src/app/requests/services/usuario.service';
import { MOCK_ADMIN } from 'src/app/utils/mocks';

@Component({
  selector: 'app-profissional-cadastro',
  templateUrl: './profissional-cadastro.component.html',
  styleUrls: ['./profissional-cadastro.component.scss']
})
export class ProfissionalCadastroComponent implements OnInit {
  
  user!: string;
  peso!:number; 
  altura!:number; 
  aluno!:number;
  senha!:string;
  mensagemErro: boolean = false;

  constructor(private usersService: UsersService, private route: Router) {}

  alunos: IUsuario[] = [];

  ngOnInit(): void {
    this.usersService.executarReqParaListarTodosOsUsuarios().subscribe((res) => {
      res.data.map((i: IUsuario) => {
        if(i.type == 'client' || i.type == 'CLIENT') {
          this.alunos.push(i);
        }
      })
      this.aluno = this.alunos[0].id ? this.alunos[0].id : this.aluno 
    })
    this.user = MOCK_ADMIN.name;
  }

  cadastrar(): void {
    let usuarioLogadoObj;
    const usuarioLogadoStr = localStorage.getItem("usuarioLogado");
    if(usuarioLogadoStr){
      usuarioLogadoObj = JSON.parse(usuarioLogadoStr)
    }
    let resultado = this.peso / (this.altura * this.altura)
    this.usersService.executarReqParaCriarUmNovoIMC(
      {clientId: this.aluno, height:this.altura, weight:this.peso, profissionalId:usuarioLogadoObj.user_id, result: resultado}
      ).subscribe(
        (res) => this.route.navigate(['/professional']),
        (err) => this.mensagemErro = true
        )
  }
}

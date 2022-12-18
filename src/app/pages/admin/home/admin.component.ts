import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUsuario } from 'src/app/requests/models/usuario';
import { UsersService } from 'src/app/requests/services/usuario.service';
import { MOCK_ADMIN } from 'src/app/utils/mocks';
import { UtilsService } from 'src/app/utils/utils';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private usersService: UsersService, private router: Router) {}

 colunasProfissionais: string[] = [
  'ID',
  'Nome',
  'CPF',
 ]

 colunasAlunos: string[] = [
  'ID',
  'Nome',
  'CPF'
 ]

  user!: string;
  dataTableProfissionais:IUsuario[] = [];
  dataTableAlunos:IUsuario[] = [];
  botaoSelecionado: boolean = true

  usuarioNaoFiltrados: IUsuario[] = [];
  professionaisFiltrados: IUsuario[] = [];
  alunosFiltrados: IUsuario[] = [];

  ngOnInit(): void {
    this.usersService.executarReqParaListarTodosOsUsuarios().subscribe((res) => this.filtrarUsuarios(res.data));
    this.listarTabelaProfissionais();
    this.user = MOCK_ADMIN.name;
  }

  filtrarUsuarios(usuarioNaoFiltrados:IUsuario[]) {
    usuarioNaoFiltrados.map((i) => {
      if(i.type == 'professional'){
        i.cpf = UtilsService.formatarCpf(i.cpf);
        this.professionaisFiltrados.push(i)
      }
      
      if(i.type == 'client'){
        i.cpf = UtilsService.formatarCpf(i.cpf);
        this.alunosFiltrados.push(i)
      }
    })
  }
  
  listarTabelaProfissionais():void {
    this.dataTableProfissionais = [];
    this.dataTableProfissionais = this.professionaisFiltrados;
    this.botaoSelecionado = true;
  }
  
  listarTabelaAlunos():void {
    this.dataTableAlunos = [];
    this.dataTableAlunos = this.alunosFiltrados;
    this.botaoSelecionado = false;
  }

  redirecionar() {
    this.router.navigate(['administradorcadastro'])
  }


}

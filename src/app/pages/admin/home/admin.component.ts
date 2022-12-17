import { Component, OnInit } from '@angular/core';
import { IUsuario } from 'src/app/requests/models/usuario';
import { UsersService } from 'src/app/requests/services/usuario.service';
import { MOCK_ADMIN } from 'src/app/utils/mocks';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private usersService: UsersService) {}

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
    console.log(usuarioNaoFiltrados)
    usuarioNaoFiltrados.map((i) => {
      if(i.type == 'professional'){
        this.professionaisFiltrados.push(i)
      }

      if(i.type == 'client'){
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


}

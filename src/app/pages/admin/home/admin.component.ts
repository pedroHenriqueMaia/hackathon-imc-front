import { Component, OnInit } from '@angular/core';
import { MOCK_ADMIN, MOCK_DATA_TABLE_ALUNO, MOCK_DATA_TABLE_PROFISSIONAIS } from 'src/app/utils/mocks';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

 colunasProfissionais: string[] = [
  'Nome',
  'CPF',
  'Alunos'
 ]

 colunasAlunos: string[] = [
  'Nome',
  'CPF',
  'IMCs'
 ]

  user!: string;
  dataTableProfissionais:any;
  dataTableAlunos:any;
  botaoSelecionado: boolean = true

  ngOnInit(): void {
    this.user = MOCK_ADMIN.name;
    this.dataTableAlunos = MOCK_DATA_TABLE_ALUNO;
    this.dataTableProfissionais = MOCK_DATA_TABLE_PROFISSIONAIS;
  }
  
  listarTabelaProfissionais():void {
    this.dataTableProfissionais = [];
    this.dataTableProfissionais = MOCK_DATA_TABLE_PROFISSIONAIS;
    this.botaoSelecionado = true;
  }
  
  listarTabelaAlunos():void {
    this.dataTableAlunos = [];
    this.dataTableAlunos = MOCK_DATA_TABLE_ALUNO;
    this.botaoSelecionado = false;
  }


}

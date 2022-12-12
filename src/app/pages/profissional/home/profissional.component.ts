import { Component, OnInit } from '@angular/core';
import { MOCK_ADMIN, MOCK_DATA_TABLE_ALUNO, MOCK_DATA_TABLE_IMC } from 'src/app/utils/mocks';

@Component({
  selector: 'app-profissional',
  templateUrl: './profissional.component.html',
  styleUrls: ['./profissional.component.scss']
})
export class ProfissionalComponent implements OnInit {

  colunasImc: string[] = [
    'Aluno',
    'Altura',
    'Peso',
    'Resultado',
    'Data',
   ]
  
   colunasAlunos: string[] = [
    'Nome',
    'CPF',
    'IMCs'
   ]
  
    user!: string;
    dataTableImc:any;
    dataTableAlunos:any;
    botaoSelecionado: boolean = true
  
    ngOnInit(): void {
      this.user = MOCK_ADMIN.name;
      this.dataTableAlunos = MOCK_DATA_TABLE_ALUNO;
      this.dataTableImc = MOCK_DATA_TABLE_IMC;
    }

  listarTabelaProfissionais():void {
    this.dataTableImc = [];
    this.dataTableImc = MOCK_DATA_TABLE_IMC;
    this.botaoSelecionado = true;
  }
  
  listarTabelaAlunos():void {
    this.dataTableAlunos = [];
    this.dataTableAlunos = MOCK_DATA_TABLE_ALUNO;
    this.botaoSelecionado = false;
  }

}

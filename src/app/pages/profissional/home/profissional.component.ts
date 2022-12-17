import { Component, OnInit } from '@angular/core';
import { IIMC, IIMC_PROFESSIONAL } from 'src/app/requests/models/imc';
import { UsersService } from 'src/app/requests/services/usuario.service';
import { MOCK_ADMIN, MOCK_DATA_TABLE_ALUNO, MOCK_DATA_TABLE_IMC } from 'src/app/utils/mocks';

@Component({
  selector: 'app-profissional',
  templateUrl: './profissional.component.html',
  styleUrls: ['./profissional.component.scss']
})
export class ProfissionalComponent implements OnInit {

  constructor(private usersService:UsersService) {}

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
    dataTableImc:IIMC[] = [];
    dataTableAlunos:any;
    botaoSelecionado: boolean = true
  
    ngOnInit(): void {
      this.usersService.executarReqParaListarALunosDoProfessionalLogado().subscribe((res) => {
        this.dataTableImc = res.data
        this.dataTableImc.map((i) => i.type = 'imc')
      })
    }

  listarTabelaProfissionais():void {
    // this.dataTableImc = [];
    // this.dataTableImc = MOCK_DATA_TABLE_IMC;
    this.botaoSelecionado = true;
  }
  
  listarTabelaAlunos():void {
    // this.dataTableAlunos = [];
    // this.dataTableAlunos = MOCK_DATA_TABLE_ALUNO;
    this.botaoSelecionado = false;
  }

}

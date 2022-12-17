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
    'Qtd. IMCs'
   ]
  
    user!: string;
    dataTableImc:IIMC[] = [];
    dataTableAlunos:{nome:string, cpf: string, qtd:number, type: string}[] = [];
    botaoSelecionado: boolean = true
  
    ngOnInit(): void {
      this.usersService.executarReqParaListarALunosDoProfessionalLogado2().subscribe((res) => {
        this.dataTableAlunos = res.data
        this.dataTableAlunos.map((i) => i.type = 'client-professional')
      })
      this.usersService.executarReqParaListarALunosDoProfessionalLogado().subscribe((res) => {
        this.dataTableImc = res.data
        this.dataTableImc.map((i) => i.type = 'imc')
      })
    }

    listarTabelaImc():void {
    this.dataTableImc = [];
    this.usersService.executarReqParaListarALunosDoProfessionalLogado().subscribe((res) => {
      this.dataTableImc = res.data
      this.dataTableImc.map((i) => i.type = 'imc')
    })
    this.botaoSelecionado = false;
  }
  
  listarTabelaAlunos():void {
    this.dataTableAlunos = [];
    this.usersService.executarReqParaListarALunosDoProfessionalLogado2().subscribe((res) => {
      this.dataTableAlunos = res.data
      this.dataTableAlunos.map((i) => i.type = 'client-professional')
    })
    this.botaoSelecionado = true;
  }

}

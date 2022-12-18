import { Component, OnInit } from '@angular/core';
import { TableService } from 'src/app/component/table/table.service';
import { IIMC } from 'src/app/requests/models/imc';
import { UsersService } from 'src/app/requests/services/usuario.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.scss']
})
export class AlunoComponent implements OnInit {

  constructor(private usersService: UsersService, private tableService: TableService) { }
  colunas: string[] = [
    'Profissional',
    'Altura',
    'Peso',
    'Resultado',
    'Data',
   ]

  dataTable: IIMC[] = [];
  data1!: string;
  data2!: string;
  ngOnInit(): void {
    this.usersService.executarReqParaListarALunosDoAlunoLogado().subscribe((res) => {
      this.dataTable = res.data
      this.dataTable.map((i) => i.type = 'aluno')
    })
  }
  
  pesquisar() {
    this.usersService.executarReqParaListarALunosDoAlunoLogado(this.data1, this.data2).subscribe((res) => {
      this.dataTable = res.data
      this.dataTable.map((i) => i.type = 'aluno')
    })
  }

  redirecionarGraficoComID(){
    let usuarioLogadoObj;
    const usuarioLogadoStr = localStorage.getItem("usuarioLogado");
    if(usuarioLogadoStr){
      usuarioLogadoObj = JSON.parse(usuarioLogadoStr)
    }
    this.tableService.redirecionarGraficoComID(usuarioLogadoObj.user_id)
  }

}

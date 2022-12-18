import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { IIMC } from '../requests/models/imc';
import { UsersService } from '../requests/services/usuario.service';
import { EstadoDadosService } from '../utils/estadoDados.service';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.scss']
})
export class GraficoComponent implements OnInit {

  constructor(private usersService:UsersService) { }
  data1!: string;
  data2!: string;
  dataTable:any[] = [];
  profissionais: string[] = [];
  resultados_alunos: any[] = [];

  @ViewChild('grafico', { static: true }) elemento!: ElementRef;
  ngOnInit(): void {
    const usuario = localStorage.getItem('usuarioGrafico');
    if(usuario){
      this.usersService.executarReqParaListarALunosDoAlunoLogado('', '', +usuario).subscribe((res) => {
        res.data.map((i: IIMC) => {
          if(i.createdAt && i.profissionalName){
            this.profissionais.push(i.createdAt)
            this.resultados_alunos.push(i.result)
          }
        })
        const labels = this.profissionais;
        const data = {
          labels: labels,
          datasets: [{
            label: 'IMC',
            data: this.resultados_alunos,
            fill: true,
            borderColor: 'rgb(11, 37, 69)',
            tension: 0.2
          }]}
    
        new Chart(this.elemento.nativeElement, {type:'line', data:data});
      })
    }
  }

  pesquisar(){

  }

}

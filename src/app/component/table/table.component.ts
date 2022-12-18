import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUsuario } from 'src/app/requests/models/usuario';
import { UsersService } from 'src/app/requests/services/usuario.service';
import { TableService } from './table.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  constructor(private tableService: TableService) { }

  @Input() dataTable!: any;
  @Input() colunas!: string[];

  redirecionarGrafico(cpf: any){
    this.tableService.redirecionarGrafico(cpf)
  }

}

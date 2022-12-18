import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUsuario } from 'src/app/requests/models/usuario';
import { UsersService } from 'src/app/requests/services/usuario.service';


@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private router: Router, private usersService: UsersService) { }

  redirecionarGrafico(cpf: any){
    let idEncontrado:number;
    this.usersService.executarReqParaListarTodosOsUsuarios().subscribe((res) => {
      res.data.map((i:IUsuario) => {
        let cpfDesformatado = this.desformatarCpf(cpf)
        if(i.cpf == cpfDesformatado && i.id){
          idEncontrado = +i.id;
        }
      })
      this.usersService.executarReqParaListarUsuarioPorId(idEncontrado).subscribe((res) => {
        localStorage.setItem('usuarioGrafico', res.data.id);
        this.router.navigate(['/grafico']);
      })
    })
  }
  redirecionarGraficoComID(id: any){
    this.usersService.executarReqParaListarUsuarioPorId(id).subscribe((res) => {
      localStorage.setItem('usuarioGrafico', res.data.id);
      this.router.navigate(['/grafico']);
    })
  }

  desformatarCpf(cpf: any) {
    return cpf.replace('.', '').replace('.', '').replace('-', '')
  }
}

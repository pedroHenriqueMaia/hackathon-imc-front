import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  user!: string | null;

  ngOnInit(): void {
    this.user = localStorage.getItem("nameUsuarioLogado")
    console.log(this.user)
  }

  sair() {
    localStorage.clear();
  }

}

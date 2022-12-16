import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCadastroComponent } from './pages/admin/admin-cadastro/admin-cadastro.component';
import { AdminComponent } from './pages/admin/home/admin.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfissionalComponent } from './pages/profissional/home/profissional.component';
import { ProfissionalCadastroComponent } from './pages/profissional/profissional-cadastro/profissional-cadastro.component';

const routes: Routes = [
  {
    path: 'administrador',
    component: AdminComponent
  },
  {
    path: 'administrador/cadastro',
    component: AdminCadastroComponent
  },
  {
    path: 'professional',
    component: ProfissionalComponent
  },
  {
    path: 'professional/cadastro',
    component: ProfissionalCadastroComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

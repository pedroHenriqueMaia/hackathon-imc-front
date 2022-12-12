import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCadastroComponent } from './pages/admin/admin-cadastro/admin-cadastro.component';
import { AdminComponent } from './pages/admin/home/admin.component';
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
    path: 'profissional',
    component: ProfissionalComponent
  },
  {
    path: 'profissional/cadastro',
    component: ProfissionalCadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

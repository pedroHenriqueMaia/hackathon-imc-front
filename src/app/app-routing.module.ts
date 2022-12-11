import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCadastroComponent } from './pages/admin/admin-cadastro/admin-cadastro.component';
import { AdminComponent } from './pages/admin/home/admin.component';

const routes: Routes = [
  {
    path: 'administrador',
    component: AdminComponent
  },
  {
    path: 'administrador/cadastro',
    component: AdminCadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

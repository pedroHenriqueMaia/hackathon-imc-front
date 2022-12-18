import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraficoComponent } from './grafico/grafico.component';
import { AdminGuard } from './guards/admin.guard';
import { AlunoGuard } from './guards/aluno.guard';
import { ProfessionalGuard } from './guards/professional.guard';
import { AdminCadastroComponent } from './pages/admin/admin-cadastro/admin-cadastro.component';
import { AdminComponent } from './pages/admin/home/admin.component';
import { AlunoComponent } from './pages/aluno/aluno.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfissionalComponent } from './pages/profissional/home/profissional.component';
import { ProfissionalCadastroComponent } from './pages/profissional/profissional-cadastro/profissional-cadastro.component';

const routes: Routes = [
  {
    path: 'administrador',
    component: AdminComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'administrador/cadastro',
    component: AdminCadastroComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'professional',
    component: ProfissionalComponent,
    canActivate: [ProfessionalGuard]
  },
  {
    path: 'professional/cadastro',
    component: ProfissionalCadastroComponent,
    canActivate: [ProfessionalGuard]
  },
  {
    path: 'aluno',
    component: AlunoComponent,
    canActivate: [AlunoGuard]
  },
  {
    path: 'grafico',
    component: GraficoComponent
  },
  {
    path: '',
    component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

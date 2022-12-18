import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './pages/admin/home/admin.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { TableComponent } from './component/table/table.component';
import { AdminCadastroComponent } from './pages/admin/admin-cadastro/admin-cadastro.component';
import { FormsModule } from '@angular/forms';
import { ProfissionalComponent } from './pages/profissional/home/profissional.component';
import { ProfissionalCadastroComponent } from './pages/profissional/profissional-cadastro/profissional-cadastro.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminGuard } from './guards/admin.guard';
import { ProfessionalGuard } from './guards/professional.guard';
import { EstadoDadosService } from './utils/estadoDados.service';
import { CommonModule } from '@angular/common';
import { AlunoComponent } from './pages/aluno/aluno.component';
import { AlunoGuard } from './guards/aluno.guard';
import { GraficoComponent } from './grafico/grafico.component';
import { TableService } from './component/table/table.service';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NavbarComponent,
    TableComponent,
    AdminCadastroComponent,
    ProfissionalComponent,
    ProfissionalCadastroComponent,
    LoginComponent,
    AlunoComponent,
    GraficoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [AdminGuard, ProfessionalGuard, AlunoGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

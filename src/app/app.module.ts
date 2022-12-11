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


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NavbarComponent,
    TableComponent,
    AdminCadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

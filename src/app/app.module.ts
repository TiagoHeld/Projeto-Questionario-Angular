import { IntegracoesService } from './services/integracoes.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';
import { QuestoesComponent } from './questoes/questoes.component';

import { SobreComponent } from './sobre/sobre.component';
import { ProjetoComponent } from './sobre/projeto/projeto.component';
import { EquipeComponent } from './sobre/equipe/equipe.component';
import { LoginComponent } from './login/login.component';
import { FormLoginComponent } from './login/form-login/form-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginGuardGuard } from './guards/login-guard.guard';
import { ListagemComponent } from './dashboard/listagem/listagem.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BannerComponent,
    QuestoesComponent,
    SobreComponent,
    ProjetoComponent,
    EquipeComponent,
    LoginComponent,
    FormLoginComponent,
    DashboardComponent,
    ListagemComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [IntegracoesService,LoginGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

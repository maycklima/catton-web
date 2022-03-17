import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CadastroComponent } from './pages/usuario/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/usuario/login/login.component';
import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ItensComponent } from './pages/home/itens/itens.component';
import { PerfilComponent } from './pages/home/perfil/perfil.component';
import { BannerComponent } from './pages/home/banner/banner.component';
import { ToolbarComponent } from './pages/home/toolbar/toolbar.component';
import { RecuperacaoComponent } from './usuario/recuperacao/recuperacao.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    HomeComponent,
    ItensComponent,
    PerfilComponent,
    BannerComponent,
    ToolbarComponent,
    RecuperacaoComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule ,
    BrowserAnimationsModule,
    MaterialModule,
    routing,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

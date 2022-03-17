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
import { PerfilComponent } from './pages/home/perfil/perfil.component';
import { BannerComponent } from './pages/home/banner/banner.component';
import { ToolbarComponent } from './pages/home/toolbar/toolbar.component';
import { RecuperacaoComponent } from './usuario/recuperacao/recuperacao.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AreaLojasComponent } from './pages/loja/area-lojas/area-lojas.component';
import { LojaIncluirEditarComponent } from './pages/loja/loja-incluir-editar/loja-incluir-editar.component';
import { LojaDetalheComponent } from './pages/loja/loja-detalhe/loja-detalhe.component';
import { ItemDetalheComponent } from './pages/item/item-detalhe/item-detalhe.component';
import { ItemIncluirEditarComponent } from './pages/item/item-incluir-editar/item-incluir-editar.component';
import { ItensComponent } from './pages/item/itens/itens.component';


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
    RecuperacaoComponent,
    AreaLojasComponent,
    LojaDetalheComponent,
    LojaIncluirEditarComponent,
    ItemDetalheComponent,
    ItemIncluirEditarComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule ,
    BrowserAnimationsModule,
    MaterialModule,
    routing,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

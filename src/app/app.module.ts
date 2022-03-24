import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { CadastroComponent } from './pages/usuario/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/usuario/login/login.component';
import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PerfilComponent } from './pages/home/perfil/perfil.component';
import { BannerComponent } from './pages/home/banner/banner.component';
import { ToolbarComponent } from './pages/home/toolbar/toolbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AreaLojasComponent } from './pages/loja/area-lojas/area-lojas.component';
import { LojaIncluirEditarComponent } from './pages/loja/loja-incluir-editar/loja-incluir-editar.component';
import { LojaDetalheComponent } from './pages/loja/loja-detalhe/loja-detalhe.component';
import { ItemDetalheComponent } from './pages/item/item-detalhe/item-detalhe.component';
import { ItemIncluirEditarComponent } from './pages/item/item-incluir-editar/item-incluir-editar.component';
import { ItensComponent } from './pages/item/itens/itens.component';
import { MatDialogComponent } from './shared/mat-confirm-dialog/mat-confirm-dialog.component';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(ptBr);


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
    AreaLojasComponent,
    LojaDetalheComponent,
    LojaIncluirEditarComponent,
    ItemDetalheComponent,
    ItemIncluirEditarComponent,
    MatDialogComponent,
    
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
  providers: [ { provide: LOCALE_ID, useValue: 'pt' },],
  bootstrap: [AppComponent]
})
export class AppModule { }

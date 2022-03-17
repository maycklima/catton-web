import { LojaDetalheComponent } from './pages/loja/loja-detalhe/loja-detalhe.component';

import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { AreaLojasComponent } from "./pages/loja/area-lojas/area-lojas.component";
import { CadastroComponent } from './pages/usuario/cadastro/cadastro.component';
import { LoginComponent } from "./pages/usuario/login/login.component";

const APP_ROUTES: Routes = [
{path:'', component: LoginComponent},
{path:'home', component: HomeComponent},
{path:'login', component: LoginComponent},
{path:'cadastro', component: CadastroComponent},
{path:'area-lojas', component: AreaLojasComponent},
{path:'loja-detalhe', component: LojaDetalheComponent},
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);
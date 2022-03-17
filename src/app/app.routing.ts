
import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { CadastroComponent } from './pages/usuario/cadastro/cadastro.component';
import { LoginComponent } from "./pages/usuario/login/login.component";

const APP_ROUTES: Routes = [
{path:'', component: HomeComponent},
{path:'login', component: LoginComponent},
{path:'cadastro', component: CadastroComponent}
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './componentes/home/home.component';
import { PeliculasComponent } from './componentes/peliculas/peliculas.component';
import { MasInfoComponent } from './componentes/mas-info/mas-info.component';
import { ResultadosBusquedaComponent } from './componentes/resultados-busqueda/resultados-busqueda.component';
import { LoginComponent } from "./componentes/login/login.component";
import { RegistroComponent } from "./componentes/registro/registro.component";



import { from } from 'rxjs';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: 'home' },
  { path: "home", component: HomeComponent },
  { path: "peliculas", component: PeliculasComponent },
  { path: "masInfo/:titulo", component: MasInfoComponent },
  { path: "busqueda/:titulo", component: ResultadosBusquedaComponent },
  { path: "loginPage", component: LoginComponent },
  { path: "registroPage", component: RegistroComponent },
  { path: "**", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

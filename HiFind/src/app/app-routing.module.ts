import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './componentes/home/home.component';
import { PeliculasComponent } from './componentes/peliculas/peliculas.component';
import { MasInfoComponent } from './componentes/mas-info/mas-info.component';
import { ResultadosBusquedaComponent } from './componentes/resultados-busqueda/resultados-busqueda.component';



  import { from } from 'rxjs';

const routes: Routes = [
  {path: "",component:HomeComponent},
  {path: "home",component:HomeComponent},
  {path: "peliculas",component:PeliculasComponent},
  {path: "masInfo/:titulo",component:MasInfoComponent},
  {path: "busqueda/:titulo",component:ResultadosBusquedaComponent},
  {path: "**",component:HomeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

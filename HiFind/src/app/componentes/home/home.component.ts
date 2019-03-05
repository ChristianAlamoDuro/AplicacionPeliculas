import { Component, OnInit } from '@angular/core';
import { ApiPeliculasService } from '../../servicios/api-peliculas.service';
import { ServiciosGeneralService } from "../../servicios/servicios-general.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ApiPeliculasService]

})
export class HomeComponent implements OnInit {

  public titulosPeliculasDestacadas: Array<string>;
  public peliculasDestacadas: Array<any>;
  /*
    Inicializamos titulosPeliculasDestacas con los titulos que quereamos mostrar en la pantalla
  */
  constructor(
    private _apiPeliculasService: ApiPeliculasService,
    private _general: ServiciosGeneralService
  ) {
    this.titulosPeliculasDestacadas = ["Mr. Nobody", "Spider-Man: Into the Spider-Verse", "Fight Club", "Pulp Fiction"];
    this.peliculasDestacadas = [''];
  }


  /*
    Inicializamos el array peliculas destacadas con la funcion del servicio apiPeliculasService
    se guaradará un array (titulosPeliculasDestacadas) de JSON con los datos de las peliculas que le pidamos.
  */
 
  ngOnInit() {
    this._general.cerrarMenu("navbarSupportedContent");
    this.peliculasDestacadas = this._apiPeliculasService.obtenerPeliculas(this.titulosPeliculasDestacadas);
  }

}

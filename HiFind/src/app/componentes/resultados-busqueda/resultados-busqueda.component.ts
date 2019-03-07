import { Component, OnInit, DoCheck} from '@angular/core';
import { ApiPeliculasService } from '../../servicios/api-peliculas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiciosGeneralService } from "../../servicios/servicios-general.service";


@Component({
  selector: 'app-resultados-busqueda',
  templateUrl: './resultados-busqueda.component.html',
  styleUrls: ['./resultados-busqueda.component.css'],
  providers: [ApiPeliculasService]
})
export class ResultadosBusquedaComponent implements OnInit, DoCheck {

  public tituloBuscar: any;
  public resultadoPeliculas: Array<any>;
  public resultado: boolean;
  constructor(
    private _apiPeliculasService: ApiPeliculasService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _general: ServiciosGeneralService

  ) {
    this._route.params.subscribe(
      params => {
        this.tituloBuscar = params['titulo'];
        this.buscarPeliculasInicio(this.tituloBuscar);
      }
    );
    this.resultadoPeliculas = [];
  }

  ngOnInit() {
    this._general.cerrarMenu('navbarSupportedContent');
    this.buscarPeliculasInicio(this.tituloBuscar);
  }

  ngDoCheck() {
    let aux: string;
    this._route.params.subscribe(
      params => {
         aux = params['titulo'];
      }
    );
    if (aux !== this.tituloBuscar) {
      this._route.params.subscribe(
        params => {
          this.tituloBuscar = params['titulo'];
          this.buscarPeliculasInicio(this.tituloBuscar);
        }
      );
      this.buscarPeliculasInicio(this.tituloBuscar);
    }
  }


  masInfo(pelicula) {
    this._router.navigate(['/masInfo/' + pelicula]);
  }

  buscarPeliculasInicio(titulo) {
    // Controlar lo que se muestra en la vista
    this.resultado = false;
    // Vaciamos el array para que no se guarden los resultados anteriores
    this.resultadoPeliculas = [''];
    // Usamos el servicio para obtener las busquedas del titulo
    this._apiPeliculasService.getBuscarPeliculaApiPublica(titulo).subscribe(
      result => {
        if (result.Response !== false) {
          console.log('ddd');
          let contador = 0;
          for (const resultado of result.Search) {
            if (resultado.Type === 'movie' && resultado.Poster !== 'N/A') {
              this.resultado = true;
              const objeto = {
                Title: resultado.Title,
                Poster: resultado.Poster,
                Year: resultado.Year
              };
              this.resultadoPeliculas[contador] = objeto;
              contador++;
              console.log(this.resultadoPeliculas);
            }
          }
        }
        /*
          this.resultadoPeliculas = arrayAux;
          for (const iterator of this.resultadoPeliculas) {
            console.log(iterator);
          }
        */
      },
      error => {
        console.log(<any>error);
      }
    )
  }

}

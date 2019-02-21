import { Component, OnInit } from '@angular/core';
import { ApiPeliculasService } from '../../servicios/api-peliculas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resultados-busqueda',
  templateUrl: './resultados-busqueda.component.html',
  styleUrls: ['./resultados-busqueda.component.css'],
  providers: [ApiPeliculasService]
})
export class ResultadosBusquedaComponent implements OnInit {

  public tituloBuscar: any;
  public resultadoPeliculas: any;
  constructor(
    private _apiPeliculasService: ApiPeliculasService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.tituloBuscar = this._route.snapshot.paramMap.get('titulo');
    this.resultadoPeliculas = [''];
  }

  ngOnInit() {
    this.buscarPeliculasInicio(this.tituloBuscar);
  }
  ngDoCheck() {
    let aux = this._route.snapshot.paramMap.get('titulo');
    if (aux != this.tituloBuscar) {
      this.tituloBuscar = this._route.snapshot.paramMap.get('titulo');
      this.buscarPeliculasInicio(this.tituloBuscar);
    }
  }

  masInfo(pelicula) {
    this._router.navigate(['/masInfo/' + pelicula]);
  }

  buscarPeliculasInicio(titulo) {
    this.resultadoPeliculas = false;
    console.log();

    this._apiPeliculasService.getBuscarPeliculaApiPublica(titulo).subscribe(
      result => {
        this.resultadoPeliculas = result;
        console.log(this.resultadoPeliculas);
        
      },
      error => {
        console.log(<any>error);
      }
    )
  }

}

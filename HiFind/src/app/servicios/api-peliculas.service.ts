import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiPeliculasService {

  //URL y KEY de la API publica de las películas
  public url: string;

  constructor(
    public _http: HttpClient
  ) {
    this.url = "https://www.omdbapi.com/?apikey=410641ea";
  }

  /*
    Nos retornará los datos de la pelicula que le pasemos a traves de la api omdbapi.
    @paramas
      tituloPelicula --> Titulo de la película de la que quremos sacar la información

    @return
    Devuelve un objeto JSON con toda la información de la película
  */
  getPeliculaApiPublica(tituloPelicula): Observable<any> {
    return this._http.get(this.url + '&t=' + tituloPelicula);
  }

  /*
    Nos retornará los datos de las peliculas que coincidan con el titulo que 
    el usuario busque
    @params
      tituloPelicula --> Titulo de la pelicula que vamos a buscar.
    @return
        Devuleve un objeto JSON con la informacion de las películas que coincidan 
        con el título
  */
  getBuscarPeliculaApiPublica(tituloPelicula): Observable<any> {
    return this._http.get(this.url + '&s=' + tituloPelicula);
  }

  /*
    @params:
      titulos --> Array con los titulos de las peliculas que quiere obtener

    @return 
      Devuelve un array con los objetos de las peliculas que hemos pedido que cargue
  */
  obtenerPeliculas(titulos: Array<string>) {
    var arrayPeliculas = [''];
    var cont = 0;
    for (const titulo of titulos) {
      this.getPeliculaApiPublica(titulo).subscribe(
        result => {
          arrayPeliculas[cont] = result;
          console.log(arrayPeliculas[cont]);
          cont++;
        },
        error => {
          console.log(<any>error);
        }
      )
    }
    return arrayPeliculas;
  }
}

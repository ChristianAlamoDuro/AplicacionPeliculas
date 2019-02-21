import { Component, OnInit } from '@angular/core';
import { ApiPeliculasService } from '../../servicios/api-peliculas.service';
import { Router } from '@angular/router';
import { log } from 'util';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [ApiPeliculasService]
})
export class PeliculasComponent implements OnInit {

  public titulosInicio: Array<string>;
  public peliculasInicio: Array<any>;
  public cont: number;


  constructor(
    private _apiPeliculasService: ApiPeliculasService,
    private _router:Router
  ) {
    this.titulosInicio = ["avatar", "avengers","aquaman","Spider-man","Venom","x-men"];
    this.peliculasInicio = [''];
  }

  /*
    Obtendrá los titulos de las peliculas que queremos buscar y mostrar en las secciones principales.
    Llamaremos a la función cargarPeliculas que le pasamos los titulos del array titulosInicio
  */
  ngOnInit() {
    this.peliculasInicio =this._apiPeliculasService.obtenerPeliculas(this.titulosInicio); 
  }

  /*
    Te redirige al componente masInfo
  */
  masInfo(pelicula){
    this._router.navigate(['/masInfo/'+pelicula]);
  }

}

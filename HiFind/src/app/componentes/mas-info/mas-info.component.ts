import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiPeliculasService } from '../../servicios/api-peliculas.service';
import { ServiciosGeneralService } from "../../servicios/servicios-general.service";


@Component({
  selector: 'app-mas-info',
  templateUrl: './mas-info.component.html',
  styleUrls: ['./mas-info.component.css'],
  providers: [ApiPeliculasService]
})
export class MasInfoComponent implements OnInit {

  public tituloMasInfo : any;
  public pelicula : any;
  public loading : Boolean;
  constructor(
    private _route: ActivatedRoute,
    private _apiPeliculaService: ApiPeliculasService,
    private _general: ServiciosGeneralService

  ) { 
    this.tituloMasInfo = this._route.snapshot.paramMap.get('titulo');
    this.loading = true;
  }

  ngOnInit() {
    this._general.cerrarMenu("navbarSupportedContent");
    this.cargarPeliculasInicio()
  }

  cargarPeliculasInicio() {
    this.pelicula = false;
    this._apiPeliculaService.getPeliculaApiPublica(this.tituloMasInfo).subscribe(
      result => {    
        this.pelicula = result;
        this.loading = false;
      },
      error => {
        console.log(<any>error);
      }
    )
  }
}

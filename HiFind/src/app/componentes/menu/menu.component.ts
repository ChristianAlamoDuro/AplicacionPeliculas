import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public peliculaBuscar : String;
  constructor(
    private _router : Router
  ) { 

  }

  ngOnInit() {
  }

  buscarPelicula(){
    this._router.navigate(['/busqueda/'+this.peliculaBuscar]);
    this.peliculaBuscar = "";
  }
}

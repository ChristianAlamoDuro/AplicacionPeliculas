import { Component, OnInit } from '@angular/core';

import { ServiciosGeneralService } from "../../servicios/servicios-general.service";


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(
    private _general: ServiciosGeneralService

  ) { }

  ngOnInit() {
    this._general.cerrarMenu("navbarSupportedContent");
  }

}

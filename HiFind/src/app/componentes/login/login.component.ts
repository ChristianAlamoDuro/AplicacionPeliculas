import { Component, OnInit } from '@angular/core';

import { ServiciosGeneralService } from "../../servicios/servicios-general.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private _general: ServiciosGeneralService
  ) { }

  ngOnInit() {
    this._general.cerrarMenu("navbarSupportedContent");
  }

}

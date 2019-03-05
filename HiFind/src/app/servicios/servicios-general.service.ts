import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciosGeneralService {

  constructor() { }

  /*
    Funcion que cerrará el menu cuando se cargue una pagina
  */
  cerrarMenu(elemento) {
    let clases = document.getElementById(elemento).className;
    if (clases.includes("show")) {
      document.getElementById(elemento).classList.remove("show");
    }
  }
}

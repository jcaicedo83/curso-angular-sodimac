import { Component, OnInit } from '@angular/core';
import { Estudiante, Objetos } from '../models/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estudiantes-table',
  templateUrl: './estudiantes-table.component.html'
})
export class EstudiantesTableComponent implements OnInit {

  public estudiantes : Estudiante[] = Objetos.estudiantes;
  public estudiante : Estudiante=new Estudiante() ;

 
  constructor(private _router : Router) { 
  }

  ngOnInit(): void {
  }

  abrirForm(idx :number){
    console.log("index llamado: " + idx)
    this._router.navigate(['estudiantes-form',idx]);
  }

  GetEdad():number{
    if (this.estudiante.cumpleanios!=null){
      
      const ahora = new Date().getFullYear();
      const anio = this.estudiante.cumpleanios.toString().substring(0,4);
      const edad = ahora - parseInt(anio);
      return edad;
    }
   return 0;
  }
}

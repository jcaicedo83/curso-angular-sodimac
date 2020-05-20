import { Component, OnInit } from '@angular/core';
import { Estudiante, Objetos } from '../models/models';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-estudiantes-form',
  templateUrl: './estudiantes-form.component.html'
})
export class EstudiantesFormComponent implements OnInit {
  public estudiante : Estudiante=new Estudiante() ;

  constructor(private _actRoute : ActivatedRoute,
              private _route : Router) {
    this._actRoute.params.subscribe(params =>{

      this.estudiante = Objetos.estudiantes[params['id']];
      console.log(JSON.stringify(this.estudiante));
    });
   }

  ngOnInit(): void {
  }


  GetEdad=():number=>{
    let edad:number = 0;
    let anio:string='';
    if (this.estudiante.cumpleanios!=null){
      
      const ahora = new Date().getFullYear();
      anio = this.estudiante.cumpleanios.toLocaleDateString().substring(5,9);
      edad = ahora - parseInt(anio);
    }
    
    console.log("anio:" +anio);
    console.log("edad:" +edad);
   return edad;
  }

  GuardarData=()=>{
    Objetos.estudiantes.push(this.estudiante);
    this._route.navigate(['estudiantes-table']);
  }
}

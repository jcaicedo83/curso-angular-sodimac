export class Estudiante{
    public nombre:string;
    public cumpleanios: Date;
    public email? : string;
    public mensualidad :number;
    constructor(){}
}

export class Objetos{
public static estudiantes : Estudiante[] =[{
    nombre:"Javier Caicedo",
    cumpleanios:new Date(1983,8,13),
    email:'jcaicedo@homecenter.co',
    mensualidad:4000000
  },{
    nombre:"Jeffrey Espinel",
    cumpleanios:new Date(1992,1,1),
    email:'jespinel@asesoftware.com',
    mensualidad:3000000
  }];
}
  
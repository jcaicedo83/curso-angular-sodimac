"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    /*
    class animal{

        nombre:string='';
        comer=()=>{
            console.log(`${this.nombre} se come todo!!`);
        }
    }

    const perro = new animal();
    perro.comer();

    const gato=new animal();
    gato.comer();*/
    /*   class Hombre {
           nombre:string='';
           onComer=()=>{
               console.log(`${this.nombre} esta comiendo`);
           }
       }
   
       class Policia extends Hombre{
           onAtraparLadrones=()=>{
               console.log(`${this.nombre} esta atrapando ladrones`);
           }
       }
       let oHombre = new Hombre();
       oHombre.onComer();
   
       let oSandoval = new Policia();
       oSandoval.nombre='Oscar Sandoval';CDATASection.apply.apply
       oSandoval.onComer();
       oSandoval.onAtraparLadrones();
       */
    /*
    class oRobot{
        nombre:string ='';
        
        constructor(pNombre:string ){
            this.nombre = pNombre;
            this.start();
        }

        start=()=>{
            console.log(`${this.nombre} starting...`);
        }
        goStation=(estacion :number)=>{
            
            console.log(`${this.nombre} going To ${estacion}`);
        }
    }

    let bot = new oRobot('TOR001');
    bot.goStation(25);
    */
    var Figura = /** @class */ (function () {
        function Figura(nombre, base, altura) {
            var _this = this;
            if (altura === void 0) { altura = 0; }
            this.nombre = nombre;
            this.base = base;
            this.altura = altura;
            this.color = '';
            this.getArea = function (area) {
                if (_this.color) {
                    console.log("el area del " + _this.nombre + " " + _this.color + " es " + area);
                }
                else {
                    console.log("el area del " + _this.nombre + " es " + area);
                }
            };
        }
        return Figura;
    }());
    var cuadrado = /** @class */ (function (_super) {
        __extends(cuadrado, _super);
        function cuadrado() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        cuadrado.prototype.calcular = function () {
            this.getArea(this.base * this.base);
        };
        return cuadrado;
    }(Figura));
    var triangulo = /** @class */ (function (_super) {
        __extends(triangulo, _super);
        function triangulo() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        triangulo.prototype.calcular = function () {
            this.getArea((this.base * this.altura) / 2);
        };
        return triangulo;
    }(Figura));
    var tg = new triangulo('tg', 4, 3);
    tg.calcular();
    var sq = new cuadrado('sqr', 3);
    sq.calcular();
})();

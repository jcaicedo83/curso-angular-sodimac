(function(){

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

    class Figura {
        color:string='';
        constructor(public nombre: string
             , public base :number
             , public altura:number=0)
        {}

        getArea=(area :number)=>{
            if (this.color){
                console.log(`el area del ${this.nombre} ${this.color} es ${area}`);
            }else{
                console.log(`el area del ${this.nombre} es ${area}`);
                
            }
        }
    }

    class cuadrado extends Figura{
        calcular(){
            this.getArea(this.base * this.base);
        }
    }

    class triangulo extends Figura{
        calcular(){
            this.getArea((this.base * this.altura)/2);
        }
       
    }

    let tg = new triangulo('tg',4,3);
    tg.calcular();
    let sq = new cuadrado('sqr',3);
    sq.calcular();
})();
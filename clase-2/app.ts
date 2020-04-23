(()=>{

/*
//funciones anidadas
let sumar= (a: number, b: number):number => {
    let cuadrado=(a:number)=> a*a;
    return cuadrado(a)+ cuadrado(b);
}

console.log (sumar(4,3));*/

/**PROMESAS********* */
const picking =(cant :number)=>{

let inventario :number = 50;
return new Promise((success, reject)=>{
   if (cant<=inventario){
    success(`Picked ${cant} units!!`);
   }else{
    reject ("not fulfillable");
   }
})

}

picking(70)
    .then(x=> console.log(x))
    .catch(x=> console.warn(x));
})();
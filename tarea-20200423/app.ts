(function(){

    //Crear una promesa que valide un número, el número es válido si es par o es un número primo.

    const validar = (num : number)=>{
        return new Promise((resolve, reject)=>{
                if (num % 2===0 || esPrimo(num))
                {
                    resolve(`el numero ${num} es valido `);
                }else
                {
                    reject(`el numero ${num} no es valido`);
                }
        })

    };

    function esPrimo (valor:number): boolean{
        for (var i = 2; i < valor; i++) {
            if (valor % i === 0) {
              return false;
            }
          }
          return valor !== 1;
        };

    validar(9).then(x=> console.log(x))
                .catch(x => console.log(x));


/******************************************************************** */ 
/* Crear e invocar una promesa, en el que se declara y se defina una variable 
de tipo string, identifique si el valor de la    misma es una palabra/frase 
palíndrome (Que se lee igual en ambos sentidos Ej: ANA, Aman a Panamá, A 
    mi me    mima, Aerea, Sedes). El valor asignado a la variable no tendrá 
    tildes, en caso de no ser una pariable palíndrome,    retornar un fracaso 
    de la promesa. */
/******************************************************************** */ 
 const palindrome = (texto :string):Promise<string> =>{
     return new Promise((resolve, reject)=>{

        let limpia = texto.toLowerCase().replace(" ","");
       // limpia = limpia.replace(",","");
        //console.log(`valor real ${limpia}`);

        const inverso :string = invertir(limpia);
        //console.log(`inverso: ${inverso}`);
        
        if(limpia===inverso){
            resolve(`La frase ${texto} es palindrome`);
        }else{
            reject (`La frase ${texto} no es palindrome`);
        }
    })
 };

 function invertir (texto:string):string{
    let arr1 :string[] = Array.from(texto);
    let arr2 :string[] = [];
    let x:number =0;
    let y:number =arr1.length-1;
    for (x = 0 ; x <= arr1.length-1  ; x++ )
    {
        arr2[y] =arr1[x] ;
        y--;
    }

    return arr2.join('');
 }



 palindrome(`aerea`).then(x=>console.log(x))
    .catch(x=>console.log(x));
})();




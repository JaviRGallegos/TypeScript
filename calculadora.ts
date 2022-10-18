// función calculadora
// seguimos trabajando en modo estricto, TODAS las variables se tienen que declarar en su ámbito

function calculadora(m:number, n:number): number{
    let suma:number = m + n;
    console.log(`${m} + ${n} = ${suma}`);
    return suma;
}

calculadora(2, 3);
let x: number = calculadora(4, 3);

// también se pueden asignar funciones a variables

let resta: (m: number, n: number) => number = function(m: number, n: number): number{
    let resta:number = m - n;
    console.log(`${m} - ${n} = ${resta}`);
    return resta;
} // Esto es una función anónima, justo igual que en JavaScript normal y corriente
// resta es de tipo función, es decir, resta: (m: number, n: number) => number
resta(4, 2);

/* let multiplicar: (m:number, n:number) => number = (m:number, n:number) =>{
    let multiplicacion:number = m * n;
    console.log(`${m} * ${n} = ${multiplicacion}`);
    return multiplicacion;
} */

// También puedo declararlo como función arrow
let multiplicar: (m:number, n:number) => number;
multiplicar = (m, n) => m * n;

console.log(multiplicar(6, 3));


// Funciones con callback
// Este ejemplo es complicarlo demasiado, dado que normalmente se va a hacer como en el ejemplo anterior
let dividir : (m:number, n:number, callback: (r:number) => void) => void;
dividir = (a, b, callback) => callback(a / b)
dividir(10, 2, function(resul){
    console.log(`Resultado: ${resul}`);
});

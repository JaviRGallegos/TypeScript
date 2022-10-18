// función calculadora
// seguimos trabajando en modo estricto, TODAS las variables se tienen que declarar en su ámbito
function calculadora(m, n) {
    var suma = m + n;
    console.log("".concat(m, " + ").concat(n, " = ").concat(suma));
    return suma;
}
calculadora(2, 3);
var x = calculadora(4, 3);
// también se pueden asignar funciones a variables
var resta = function (m, n) {
    var resta = m - n;
    console.log("".concat(m, " - ").concat(n, " = ").concat(resta));
    return resta;
}; // Esto es una función anónima, justo igual que en JavaScript normal y corriente
// resta es de tipo función, es decir, resta: (m: number, n: number) => number
resta(4, 2);
/* let multiplicar: (m:number, n:number) => number = (m:number, n:number) =>{
    let multiplicacion:number = m * n;
    console.log(`${m} * ${n} = ${multiplicacion}`);
    return multiplicacion;
} */
// También puedo declararlo como función arrow
var multiplicar;
multiplicar = function (m, n) { return m * n; };
console.log(multiplicar(6, 3));
// Funciones con callback
// Este ejemplo es complicarlo demasiado, dado que normalmente se va a hacer como en el ejemplo anterior
var dividir;
dividir = function (a, b, callback) { return callback(a / b); };
dividir(10, 2, function (resul) {
    console.log("Resultado: ".concat(resul));
});

// Ejemplo de programa con TypeScript
// Se trabaja en modo estricto, es decir, todas las variables se tienen que declarar en su ámbito


function saludar(nombre: string) : string{
    return `Hola, ${nombre}`;
}

console.log(saludar("Joshua"));

let objeto = {
    nombre: "Joshua",
    edad: 20,
    pais: "España",
    fecha_nac: new Date(2001, 10, 30)
}


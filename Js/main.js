//variable
let nombre;
let anoNacimiento;
const anoActual = 2022

nombre = prompt ('ingrese su nombre ');
anoNacimiento = prompt (nombre +' ingrese su año de nacimento ');
let numero = parseInt(anoNacimiento);
let edad = anoActual - numero;
console.log(typeof(numero));
console.log(nombre + ' tu edad es ' + edad);


if(edad >= 18){
    console.log(nombre + ' ' +'tu puedes votar');
}else{
    console.log(nombre + ' ' + 'no eres mayor de edad, no pedes votar')
};

let usuario = prompt('ingrese usuario');
let password = prompt('ingrese contraseña');
let pass = 1234;
let user = 'lu';

if ((usuario != user) || (password != pass)){
    console.log('usuario nop');
}else{
    console.log('hola lu');
}
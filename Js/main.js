
//variables
let nombre;
let anoNacimiento;
const anoActual = 2022

nombre = prompt ('ingrese su nombre ');
anoNacimiento = prompt (nombre +' ingrese su año de nacimento ');
let numero = parseInt(anoNacimiento);
let edad = anoActual - numero;
//console.log(typeof(numero));
console.log(nombre + ' tu edad es ' + edad);

//verificacion de numero en el propmt
/*while(numero!=Number){
if ( numero = isNaN){
    alert('ingrese un numero')
    anoNacimiento = prompt (nombre +' ingrese su año de nacimento ');
    numero = parseInt(anoNacimiento);
};};*/


if(edad >= 18){
    console.log(nombre + ' ' +'tu puedes votar');
}else{
    console.log(nombre + ' ' + 'no eres mayor de edad, no puedes votar')
};

let pass = 1234;
let user = 'lu';
let usuario;
let contador= 0;

do{
    usuario = prompt('ingrese el usuario correspondiente');
    let password = prompt('ingrese contraseña');

    if ( user === usuario && pass == password){
        console.log('hola '+ user + ',bienvenido de vuelta!')
        usuario=user;
    }
    contador++

} while(user!=usuario && contador < 3)

if (contador==3){
    console.log('no puedes ingresar '+ usuario + ';no es tu cuenta!');
};

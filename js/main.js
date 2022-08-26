//funciones
function verificar(parametro) {
    
    let añoUsuario= Number (prompt('ingrese año de nacimiento'));
    //console.log(typeof(añoUsuario));
    while(isNaN(añoUsuario)){
        if (isNaN(parametro) || parametro==''){
        alert('no es un numero! ingresa un numero ' + nombre);
        añoUsuario = prompt (nombre +' ingrese su año de nacimento ');
        anoNacimiento=Number(añoUsuario);
        }};
  return anoNacimiento=añoUsuario;
};

function edad(añoNacimiento){
    const anoActual = 2022;
    let edad = anoActual - añoNacimiento;
    return edad;
};

function votar(edadUsuario){
if(edadUsuario >= 18){
    console.log(nombre + ' ' +'tu puedes votar');
}else{
    console.log(nombre + ' ' + 'no eres mayor de edad, no puedes votar')
};
};
function validar(usurio,pass){
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
};};
//variables
let nombre;
let anoNacimiento;

let pass = 1234;
let user = 'lu';
let usuario;


nombre = prompt ('ingrese su nombre ');
verificar(anoNacimiento);

//console.log(anoNacimiento);
//console.log(typeof(anoNacimiento));
//console.log(typeof(numero));
let edadUsuario= edad(anoNacimiento,2022);
console.log(nombre + ' tu edad es ' + edadUsuario);
votar(edadUsuario);
validar(user,pass);

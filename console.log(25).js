//CODIGO DE PRUEBA

let puto = 69; // NUMBER
document.write(puto);

let hola = ' putisimo'; // STRING
document.write(hola);

let suma = 3 + 5; // SUMA
document.write(suma);

let resta = 10 - 20; // RESTA
document.write(resta);

let multiplicacion = 20 * 40; // MULTIPLICACION
document.write(multiplicacion);

let division = 100 / 10; // DIVISION
document.write(division);

let operacionString = `3 + 5`; // OPERACION EN FORMA DE STRING
document.write(operacionString);

let oracion = 'hola pibe ' + '¿como te va?'; // CONCATENACION DE STRINGS
document.write(oracion);

let oraciones = 'hola'.length; // EJEMPLO DE PROPIEDADES
document.write(oraciones);

//alert(Math.floor(Math.random()* 1000)); // BUILT IN OBJECTS EJEMPLOS
document.write(Math.LN10 * 10); // BUILT IN OBJECTS EJEMPLOS

var variable = ' var '; // VARIABLE VAR, VARIABLE CON CAMEL CASING. PUEDE MODIFICARSE. YA CASI NO SE USA
document.write(variable);

let variableDos = 'let '; // VARIABLE LET, VARIABLE CON CAMEL CASING. PUEDE MODIFICARSE
document.write(variableDos);

const variableTres = 'const'; // VARIABLE CONST, VARIABLE CON CAMEL CASING. NO PUEDE MODIFICARSE
document.write(variableTres);

let oper = 5; // OPERACIONES MATEMATICAS CON VARIABLES
oper += 2; // OPERACIONES MATEMATICAS CON VARIABLES
document.write(oper);

let operDos = 19; // OPERACIONES MATEMATICAS CON VARIABLES
operDos -= 13; // OPERACIONES MATEMATICAS CON VARIABLES
document.write(operDos);

let operTres = 20; // OPERACIONES MATEMATICAS CON VARIABLES
operTres *= 5; // OPERACIONES MATEMATICAS CON VARIABLES
document.write(operTres);

let anexoUno = 'chingados'; // CONCATENACION DE STRINGS Y VARIABLES
let anexoCero = 'quien ' + anexoUno + ' te crees que eres?'; // CONCATENACION DE STRINGS Y VARIABLES
document.write(anexoCero);

let perro = 'pluto'; // STRING INTERPOLATION. NECESARIOS BACKTICKS Y PLACEHOLDER
let mascota = `mi mascota se llama ${perro}`; // STRING INTERPOLATION. NECESARIOS BACKTICKS Y PLACEHOLDER
document.write(mascota);

let musica = 69; 
document.write(typeof musica); // TYPEOF OPERATOR. PERMITE SABER QUE TIPO DE DATO ES LA VARIABLE DECLARADA

let verdadero = true; // CONDICIONALES. CASO IF
if (verdadero) {
    //alert('nos vamos a morir!!!!!')
};

let falso = false; // CONDICIONALES. CASO FALSE
if (falso) {
    //alert('mondongo')
};

let guiso = false; // CONDICIONALES. CASO ELSE. SOLO PARA FALSE
if (guiso) {
    //alert('no me gusta')
} else {
    //alert('esta buenisima esta mierda')
};

let francia = 2;
let argentina = 2;
if (francia > argentina) { // COMPARISON OPERATORS WITH CONDITIONALS
    //alert('mbappe es mejor que messi')
} else {
    //alert('messi tiene de hijo a los franceses')
};

if (francia === argentina) { // COMPARISON OPERATORS WITH CONDITIONALS
    //alert('mbappe es mejor que messi')
} else {
    //alert('messi tiene de hijo a los franceses')
};

let uruguay = 14
let brasil = 15
if (uruguay === 14 && brasil === 15) { // LOGICAL OPERATOR. OPERATOR AND
    //alert('brasil tiene de hijo a toda sudamertica');
} else {
   // alert('uruguay bo');
}

if (uruguay === 15 && brasil === 15) { // LOGICAL OPERATOR. OPERATOR AND
    //alert('brasil tiene de hijo a toda sudamertica');
} else {
   // alert('uruguay bo');
}

let mujeres = 'todas putas'
let hombres = 'todos iguales'
if (mujeres === 'todas putas' || hombres === 'todos putos') { // LOGICAL OPERATOR. OPERATOR OR
    //alert('todes iguales');
} else {
   // alert('machismo');
};

if (mujeres === 'todas santas' || hombres === 'todos iguales') { // LOGICAL OPERATOR. OPERATOR OR
   // alert('todes iguales');
} else {
   // alert('prostitutaS');
};

if (mujeres === 'puto' || hombres === 'putas') { // LOGICAL OPERATOR. OPERATOR OR
   // alert('jaja salu2');
} else {
   // alert('todes putitos');
};

let mexico = 0;
let italia = 5;
if (!(mexico > 0) && italia === 5) { // LOGICAL OPERATOR. OPERATOR NOT
   // alert('mexico es buenardo wey');
} else {
   // alert('mexico fantasma');
};

let truthy = 'todas las bananas son ricas'; // TRUTHY
if (truthy) {
   // alert(truthy);
} else {
  //  alert('no todas son ricas');
}

let falsy = 0; // FALSY
if (falsy) {
    //alert(falsy);
} else {
   // alert('alto trolo');
}

let herramienta = '' // SHORT-HANDS PARA TRUTHY AND FALSY. CUIDADO CON EL ";" PORQUE SI LO PONES, NO TE DEJA INICIALIZAR.
let util = herramienta || 'destornillador';
//alert(`el ${util} es mejor que el martillo`);

let futbol = 'mejor'; // SHORT-HANDS PARA TRUTHY AND FALSY. CUIDADO CON EL ";" PORQUE SI LO PONES, NO TE DEJA INICIALIZAR.
let deporte = futbol || 'basquet';
//alert(`el ${deporte} es el mejor deporte`);
 
let rompePortones = true; // TERNARY OPERATORS. DISTINTAS SITUACIONES
//rompePortones ? alert('te rompimo todo el culito') : alert('nos rompieron todo el culito');
 
let rompeCulos = false; // TERNARY OPERATORS. DISTINTAS SITUACIONES
//rompeCulos ? alert('te rompimo todo el culito') : alert('nos rompieron todo el culito');

let alemania = 4; // TERNARY OPERATORS. DISTINTAS SITUACIONES
//alemania === 4 ? alert('tengo menos copas que brasil') : alert('tengo mas copas que brasil');

let rumania = 0; 
let costaRica = 0;// TERNARY OPERATORS. DISTINTAS SITUACIONES
//rumania > costaRica ? alert('tengo mas copas que vos') : alert('somos novatos');


let dolar = 330; // ELSE IF STATEMENTS. DESPUES DEL IF, ANTES DEL ELSE. SE PUEDEN PONER MUCHOS.
if (dolar === 14) {
    //alert('que bien que estamos');
} else if (dolar === 63) {
    //alert('bueno, tan mal no estamos');
} else if (dolar === 220) {
    //alert('ahora se fue todo un poco a la mierda');
} else if (dolar >= 330) {
    //alert('bastaaaaaaaaaaaaaa!');
} else {
    //alert('a');
}

let medallaGanada = 'primer lugar'; // SWITCH KEYWORD. PARECIDO AL IF/ELSE IF/ELSE.

switch (medallaGanada) {
    case 'primer lugar':
        //alert('ganaste la medalla de oro');
        break;
    case 'segundo lugar':
        //alert('ganaste la medalla de plata');
        break;
    case 'tercer lugar':
        //alert('ganaste la medalla de bronce');
        break;
    default:
        //alert('alto pete');
        break;
};

let medallaGanadas = ''; // SWITCH KEYWORD. PARECIDO AL IF/ELSE IF/ELSE.
switch (medallaGanadas) {
    case 'primer lugar':
        //alert('ganaste la medalla de oro');
        break;
    case 'segundo lugar':
        //alert('ganaste la medalla de plata');
        break;
    case 'tercer lugar':
        //alert('ganaste la medalla de bronce');
        break;
    default:
        //alert('alto pete');
        break;
}

/*let username = 'Cabeza';
username ? alert(`Hello, ${username}`) : alert('Hello!');
const userQuestion = '¿Voy a encontrar trabajo?';
alert(userQuestion);
const randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
if (randomNumber === 1) {
    alert(eightBall = 'obvio');
} else if (randomNumber === 2) {
    alert(eightBall = 'bastante seguro que si');
} else if (randomNumber === 3) {
    alert(eightBall = 'puede que si');
} else if (randomNumber === 4) {
    alert(eightBall = 'probablemente');
} else if (randomNumber === 5) {
    alert(eightBall = 'puede que si o puede que no');
} else if (randomNumber === 6) {
    alert(eightBall = 'capaz que no');
} else if (randomNumber === 7) {
    alert(eightBall = 'che, creo que no');
} else if (randomNumber === 8) {
    alert(eightBall = 'ni en pedo');
} else {
    alert(eightBall = 'ni puta idea');
};*/

/*let username = 'Cabeza';
username ? alert(`Hello, ${username}`) : alert('Hello!');
const userQuestion = '¿Voy a encontrar trabajo?';
alert(userQuestion);
const randomNumber = Math.floor(Math.random() * 8);
if (randomNumber === 1) {
    alert('obvio');
} else if (randomNumber === 2) {
    alert('bastante seguro que si');
} else if (randomNumber === 3) {
    alert('puede que si');
} else if (randomNumber === 4) {
    alert('probablemente');
} else if (randomNumber === 5) {
    alert('puede que si o puede que no');
} else if (randomNumber === 6) {
    alert('capaz que no');
} else if (randomNumber === 7) {
    alert('che, creo que no');
} else if (randomNumber === 8) {
    alert('ni en pedo');
} else {
    alert('ni puta idea');
};*/

let raceNumber = Math.floor(Math.random() * 1000);
let runnerAge = 19;
let runnerEarly = false;
if (runnerEarly === true && runnerAge > 18) {
    raceNumber += 1000;
} else {
    raceNumber === raceNumber;
};
if (runnerAge > 18 && runnerEarly === true) {
    alert(`La carrera empieza a las 9 am con el numero ${raceNumber}`);
} else if (runnerAge > 18 && runnerEarly === false) {
    alert(`La carrera comienza a las 11 am con el numero ${raceNumber}`);
} else if (runnerAge < 18) {
    alert(`La carrera comienza a las 12:30 am con el numero ${raceNumber}`);
} else {
    alert(`Anda al escritorio pete`);
};
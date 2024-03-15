//ejercicios creacion de variable 
//una variavle dlobal de tipo var para mostrar el alcance global
var global = "Global"
//variable local 
let local = "Local";
//variable constante
const costante = "Costante"
let num = 4
let myDecimal = 10.45;
let string= "texto";
let bool = true;
let array = ["emil", "felipe", "nicolas", "martin"];
let objeto = {edad:17, nombre: "emil", curso: "4°"};
let indefinida;
let nula = null;
function sumar (num1, num2) {
return num1 + num2;
}
let resultado = sumar(5,3);
console.log("variables:\Num: " +num + " \nDecimal " + myDecimal + "\string: " + string +  "\nbool:" + bool+  "\narray" + array + "\odjeto" +  JSON.stringify(objeto) + "\nIndefinida: " + nula + "\nResultado de funcion " + sumar());
console.log("variables: Global: " + global + "- Local: "+ local +"- Costante:"+costante)
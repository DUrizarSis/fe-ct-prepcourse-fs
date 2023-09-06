/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:

   var arrayDeArrays = []  

   var objArray = Object.keys(objeto);

   for (var i = 0; i < objArray.length; i++) {
      var propiedad = objArray[i];
      var valor = objeto[propiedad];
      var newArray = [propiedad, valor];

      arrayDeArrays.push(newArray);
   };

   return arrayDeArrays;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

   var detalle = {};

   for(var i = 0; i < string.length; i++) {

      var caracter = string[i];

      if(detalle[caracter]) {
         detalle[caracter]++;
      } else {
         detalle[caracter] = 1;
      }
   };

   var ordenDetalle = {};
   Object.keys(detalle).sort().forEach((key) => {
      ordenDetalle[key] = detalle[key];
   });

   return ordenDetalle;

}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:

   var mayus = "";  //OPCION FOR
   var minus = "";

   for(let i = 0; i < string.length; i++) {
      if(string[i] === string[i].toUpperCase()) {
         mayus += (string[i]);
      } else {
         minus += (string[i])
      }
   };

   var resultado = mayus + minus;

   return resultado;

   // const caracteres = string.split("");  // OPCION FILTER
   // const mayusculas = caracteres.filter(char => char === char.toUpperCase());
   // const minusculas = caracteres.filter(char => char === char.toLowerCase());
 
   // return uppercaseLetters.join('') + lowercaseLetters.join('');

}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

   var desglose = frase.split(" ");  //OPCION MAP
   
   var palabrasInvertidas = desglose.map(function(palabra) {
      return palabra.split("").reverse().join("");
   });
   
   var fraseFinal = palabrasInvertidas.join(" ");

   return fraseFinal;

   // var desglose = frase.split(" ");  //OPCION FOR
   // var fraseFinal = ""

   // for(var i = 0; i < desglose.length; i++) {
   //    fraseFinal += desglose[i].split("").reverse().join("");
   // }

   // return fraseFinal;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:

   arrayNums = numero.toString();

   arrayInvertido = arrayNums.split("").reverse().join("");

   if (arrayNums === arrayInvertido) {
      return "Es capicua";
   } else {
      return "No es capicua";
   }

}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:

   // var arrayStr = string.split("");  //OPCION CON FOR

   // var sinAbc = []

   // for(var i = 0; i < arrayStr.length; i++) {
   //    if(arrayStr[i] !== "a" && arrayStr[i] !== "b" && arrayStr[i] !== "c") {
   //       sinAbc.push(arrayStr[i]); 
   //    }
   // }

   // return sinAbc.join("");


   return string.replace(/[abc]/g, ''); //OPCION CON .REPLACE METHOD
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

   var arrayOrdenado = arrayOfStrings.sort((a, b) => a.length - b.length);

   return arrayOrdenado;


}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:

   var enComun = [];

   for(var i = 0; i < array1.length; i++) {
      if(array2.includes(array1[i])) {
         enComun.push(array1[i])
      }
   }

   return enComun;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:

   return nombre[0].toUpperCase() + nombre.slice(1);//.slice() agrega los elementos que siguen y crea una copia.

}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   cb();
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   cb(num1, num2);
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   
   var suma = 0;
   
   arrayOfNumbers.forEach((num) => {
      suma += num;
   });

   cb(suma);
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:

   array.forEach((item) => {
      cb(item);
   });

}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:

   // var newArray = [];  //OPCION CON FOREACH

   // array.forEach((item) => {
   //    newArray.push(cb(item));
   // });

   // return newArray;

   var newArray = array.map((item) => { //OPCION CON MAP
      return cb(item);
   });

   return newArray;

}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:

   // var arrayFiltrado = [];  //OPCION CON FOREACH

   // arrayOfStrings.forEach((string) => {
   //    if(string[0] === "a") {
   //       arrayFiltrado.push(string);
   //    };
   // });

   // return arrayFiltrado;

   var arrayFiltrado = arrayOfStrings.filter((string) => {  //OPCION CON FILTER
      return string[0] === "a";
   });
   
   return arrayFiltrado;
   
}



/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};

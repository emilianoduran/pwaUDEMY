"use strict";

console.log('%c=== File:/ Fetch I ===', "	color: #bb0453	;font-size:10px; background:rgb(19, 2, 9);;padding:10px;border: 1px dotted #bb0453; width:200px;font-family:'fira code';font-weight:bold"); // antes de fetch se utilizaba XMLHttpRequest así
// crea una instancia del objeto

var request = new XMLHttpRequest(); // Get: Solicitud de data, URL, Async

request.open('GET', 'https://reqres.in/api/users?page=2', true); // argumentos

request.send(null); // Pendiente del cambio de estado

request.onreadystatechange = function (state) {
  // trae toda la data de la petición pero la que me interesa es la request.readyState=4
  console.log(request); // readyState=4

  if (request.readyState === 4) {
    // la respuesta es un string por lo tanto necesitaremos emplear el método parse de JSON
    var res = request.response; // convierte la data de string a objeto

    var resObj = JSON.parse(res); // respuesta

    console.log(resObj); // primer elemento de array

    console.log(resObj.data[0]);
  }
};
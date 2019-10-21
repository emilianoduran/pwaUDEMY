"use strict";

console.log('%c=== File:/ Prom IV ===', "	color: #bb0453	;font-size:10px; background:rgb(19, 2, 9);;padding:10px;border: 1px dotted #bb0453; width:200px;font-family:'fira code';font-weight:bold");

var addSlow = function addSlow(value) {
  return new Promise(function (resolve, reject) {
    // console.log(`SLOW>>> ${value}`);
    if (value >= 10) {
      reject('El número es muy alto');
    }

    setTimeout(function () {
      resolve(value + 1);
    }, 1000);
  });
};

var addFast = function addFast(value) {
  return new Promise(function (resolve, reject) {
    // console.log(`FAST>>> ${value}`);
    if (value >= 10) {
      reject('El número es Alto');
    }

    setTimeout(function () {
      resolve(value + 1);
    }, 500);
  });
}; // Carrera de promesas .... se ejecuta primero la que resuelve primero. si la primera falla no obtendremos ningún resultado.


Promise.race([addFast(2), addSlow(2)]).then(console.log);
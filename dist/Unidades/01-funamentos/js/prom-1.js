"use strict";

console.log('%c=== File:/ Prom I ===', "	color: #bb0453	;font-size:10px; background:rgb(19, 2, 9);;padding:10px;border: 1px dotted #bb0453; width:200px;font-family:'fira code';font-weight:bold");

function sumarUno(value, callback) {
  if (value >= 7) {
    callback('Número muy Alto');
    return;
  }

  setTimeout(function () {
    callback(null, value + 1);
  }, 1000);
} // Esto se conoce como el infierno de los callbacks. y es muy dificil de mantener.


sumarUno(5, function (error, newValue) {
  if (error) {
    console.log(error);
  }

  console.log(newValue);
  sumarUno(newValue, function (error, newValue2) {
    if (error) {
      console.log(error);
    }

    console.log(newValue2);
    sumarUno(newValue2, function (error, newValue3) {
      if (error) {
        console.log(error);
      }

      console.log(newValue3);
    });
  });
}); // Para esto se crearon las promesas.
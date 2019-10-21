"use strict";

console.log('%c=== File:/ Prom III ===', "	color: #bb0453	;font-size:10px; background:rgb(19, 2, 9);;padding:10px;border: 1px dotted #bb0453; width:200px;font-family:'fira code';font-weight:bold");

var addSlow2 = function addSlow2(value) {
  return new Promise(function (resolve, reject) {
    // console.log(`SLOW>>> ${value}`);
    if (value >= 20) {
      reject('El número es muy alto');
    }

    setTimeout(function () {
      resolve(value + 1);
    }, 1000);
  });
};

var addFast2 = function addFast2(value) {
  return new Promise(function (resolve, reject) {
    // console.log(`FAST>>> ${value}`);
    if (value >= 20) {
      reject('El número es Alto');
    }

    setTimeout(function () {
      resolve(value + 1);
    }, 500);
  });
};

var hasFinished = function hasFinished(name) {
  console.log("<<<".concat(name, " has finished>>>"));
};

var addS = addSlow2(1).then(addSlow2).then(addSlow2).then(addSlow2).then(addSlow2).then(addSlow2).then(function () {
  return hasFinished('SLOW<<<<');
})["catch"](function (err) {
  return console.error(err);
});
var addF = addFast2(1).then(addFast2).then(addFast2).then(addFast2).then(addFast2).then(addFast2).then(function () {
  return hasFinished('FAST>>>');
})["catch"](function (err) {
  return console.log(err);
});
var tareas = [addFast2(8), addSlow2(1), addFast2(5), addSlow2(3), true, addFast2(3)];
Promise.all(tareas).then(console.log)["catch"](function (err) {
  return console.log(err);
});
Promise.all(tareas).then(console.log)["catch"](function (err) {
  return console.log(err);
});
"use strict";

console.log('%c=== File:/ Prom II ===', "	color: #bb0453	;font-size:10px; background:rgb(19, 2, 9);;padding:10px;border: 1px dotted #bb0453; width:200px;font-family:'fira code';font-weight:bold");

var addOne = function addOne(value) {
  //  declare promise
  var promise = new Promise(function (resolve, reject) {
    if (value >= 13) {
      reject('algo');
    }

    setTimeout(function () {
      // resolve Promise
      resolve(value + 1);
    }, 800);
  }); //return promise

  return promise;
}; // call promise and concatenate promises


addOne(5).then(function (v) {
  console.log(v);
  return addOne(v);
}).then(function (v) {
  console.log(v);
  return addOne(v);
}).then(function (v) {
  console.log(v);
});

var add2 = function add2(value) {
  var promise = new Promise(function (resolve, reject) {
    if (value >= 20) {
      reject('El número es my Alto');
    }

    setTimeout(function () {
      resolve(value + 2);
    }, 1000);
  });
  return promise;
};

add2(5).then(add2)["catch"](function (err) {
  return console.log(err);
}).then(add2)["catch"](function (err) {
  return console.log(err);
}).then(add2)["catch"](function (err) {
  return console.log(err);
}).then(function (v) {
  console.log(v);
})["catch"](function (err) {
  console.log(err);
});

var add3 = function add3(value) {
  var promise = new Promise(function (resolve, reject) {
    if (value >= 13) {
      reject('valor Alto');
    }

    setTimeout(function () {
      resolve(value + 3);
    }, 1000);
  });
  return promise;
};

add3(0).then(function (v) {
  console.log(v);
  return add3(v);
})["catch"](function (err) {
  return console.log(err);
}).then(function (v) {
  console.log(v);
  return add3(v);
})["catch"](function (err) {
  return console.log(err);
}).then(function (v) {
  console.log(v);
  return add3(v);
})["catch"](function (err) {
  return console.log(err);
}).then(function (v) {
  console.log(v);
})["catch"](function (err) {
  return console.log(err);
});
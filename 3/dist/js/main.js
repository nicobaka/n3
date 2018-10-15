"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var o1 = {
  x1: 300,
  x2: {
    x: 200
  },
  x3: {
    x: 1
  }
};
var o2 = {
  x3: {
    y: 999,
    x: {
      x: 888
    }
  }
};
var o3 = {
  x5: {
    x5: 123
  }
};
console.log('Объект o1:');
console.log(o1);
console.log('Объект o2:');
console.log(o2);
console.log('Объект o3:');
console.log(o3);

require(["dist/modules/extendjq.js"], function (extendjq) {
  extendjq(o1, true, o2, o3);
  testing(o1);
});

console.log('Результат выполнения функции с параметром deep=true:');
console.log(o1);
var test = document.getElementById('test');
test.appendChild(document.createTextNode('Проверка результата для IE10 (т.к. в нем нельзя открыть свойства объектов)'));
test.appendChild(document.createElement("br"));
test.appendChild(document.createElement("br"));
test.appendChild(document.createTextNode('Объект o1:'));
test.appendChild(document.createElement("br"));

var testing = function testing(obj) {
  for (var key in obj) {
    if (_typeof(obj[key]) === "object") {
      test.appendChild(document.createTextNode(" " + key + ':{'));
      test.appendChild(document.createElement("br"));
      testing(obj[key]);
      test.appendChild(document.createTextNode('};'));
      test.appendChild(document.createElement("br"));
    } else {
      test.appendChild(document.createTextNode(" " + key + ':' + obj[key] + " "));
      test.appendChild(document.createElement("br"));
    }
  }
};
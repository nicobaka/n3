"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

define(function () {
  /**
   * Функция расширяет передаваемый в качестве аргумента объект дополняя свойствами объектов источников
   * @param dist Объект который будет дополнен свойствами источников
   * @param req аргумент с помощью которого можно указать будет слияние рекурсивным(req=true) или нет (req=false)
   */
  var extendjq = function extendjq(dist, req) {
    for (var i = 2; i < arguments.length; i++) {
      var src = arguments[i];

      for (var key in src) {
        if (req) {
          if (dist[key] == undefined) {
            dist[key] = src[key];
          } else if (_typeof(dist[key]) === "object") {
            extendjq(dist[key], req, src[key]);
          }
        } else dist[key] = src[key];
      }
    }
  };

  return extendjq;
});
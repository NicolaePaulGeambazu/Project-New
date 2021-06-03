"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapp = exports.Button = exports.Input = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\ngrid-template-columns: 1/-1;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\nbackground-color: grey;\nborder-radius: 5px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nborder-radius: 5px;\nwidth: auto;\nmargin-left: 20px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Input = _styledComponents["default"].input(_templateObject());

exports.Input = Input;

var Button = _styledComponents["default"].button(_templateObject2());

exports.Button = Button;

var Wrapp = _styledComponents["default"].div(_templateObject3());

exports.Wrapp = Wrapp;
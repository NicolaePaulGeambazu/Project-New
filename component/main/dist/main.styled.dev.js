"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Description = exports.Title = exports.Box = exports.Area = exports.Image = exports.Frame = exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  font-size: 20px;\n  color: black;\n  display: flex;\n  justify-content: center;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  font-weight: bolder;\n  color: black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 30px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  border: 0px solid black;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\ndisplay: flex;\nalign-items: center;\njustify-content: center;\ncolor:blue;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 500px;\n  height: 500px;\n  border-radius: 5px;\n  padding: 5px;\n  cursor: pointer;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-size: 20px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 5px;\n  background: linear-gradient(#a6a6a6, #bfbfbf, #e6e6e6);\n  box-shadow: 5px 5px #888888;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents["default"].div(_templateObject());

exports.Wrapper = Wrapper;

var Frame = _styledComponents["default"].div(_templateObject2());

exports.Frame = Frame;

var Image = _styledComponents["default"].img(_templateObject3());

exports.Image = Image;

var Area = _styledComponents["default"].div(_templateObject4());

exports.Area = Area;

var Box = _styledComponents["default"].div(_templateObject5());

exports.Box = Box;

var Title = _styledComponents["default"].div(_templateObject6());

exports.Title = Title;

var Description = _styledComponents["default"].div(_templateObject7());

exports.Description = Description;
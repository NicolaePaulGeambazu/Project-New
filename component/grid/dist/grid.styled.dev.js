"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledGrid = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 50px;\n  width: 100px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledGrid = _styledComponents["default"].div(_templateObject());

exports.StyledGrid = StyledGrid;
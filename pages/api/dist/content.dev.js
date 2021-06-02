"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var data = {
  main: {
    title: "Ecommerce Website Builder ",
    description: "Create a site, sell your product, get paid",
    age: "cutu"
  }
};

var _default = function _default(req, res) {
  // connect to database, later on
  res.status(200).json(data);
};

exports["default"] = _default;
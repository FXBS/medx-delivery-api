"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = exports["default"] = ValidatedToken = function ValidatedToken(req, res, next) {
  var token = req.header('xx-token');
  if (!token) {
    return res.status(401).json({
      resp: false,
      msg: 'There is not Token in the request'
    });
  }
  try {
    var _jwt$verify = _jsonwebtoken["default"].verify(token, process.env.APP_KEY_JWT),
      uidPerson = _jwt$verify.uidPerson;
    req.uidPerson = uidPerson;
    next();
  } catch (err) {
    return res.status(401).json({
      resp: false,
      msg: err
    });
  }
};
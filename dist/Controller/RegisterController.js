"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerDeliveryPartner = exports.registerDelivery = exports.registerClient = void 0;

var _express = require("express");

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _mysql = _interopRequireDefault(require("../Database/mysql"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var registerClient = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req) {
    var res,
        _req$body,
        firstname,
        lastname,
        phone,
        email,
        password,
        notification_token,
        imagePath,
        salt,
        pass,
        validatedEmail,
        _args = arguments;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            res = _args.length > 1 && _args[1] !== undefined ? _args[1] : _express.response;
            _req$body = req.body, firstname = _req$body.firstname, lastname = _req$body.lastname, phone = _req$body.phone, email = _req$body.email, password = _req$body.password, notification_token = _req$body.notification_token;
            imagePath = req.file.filename;
            _context.prev = 3;
            salt = _bcrypt["default"].genSaltSync();
            pass = _bcrypt["default"].hashSync(password, salt);
            _context.next = 8;
            return _mysql["default"].query('SELECT email FROM users WHERE email = ?', [email]);

          case 8:
            validatedEmail = _context.sent;

            if (!(validatedEmail.length > 0)) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", res.status(401).json({
              resp: false,
              msg: 'Email already exists'
            }));

          case 11:
            _context.next = 13;
            return _mysql["default"].query("CALL SP_REGISTER(?,?,?,?,?,?,?,?);", [firstname, lastname, phone, imagePath, email, pass, 2, notification_token]);

          case 13:
            res.json({
              resp: true,
              msg: 'Client successfully registered'
            });
            _context.next = 19;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](3);
            return _context.abrupt("return", res.status(500).json({
              resp: false,
              msg: _context.t0
            }));

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 16]]);
  }));

  return function registerClient(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.registerClient = registerClient;

var registerDelivery = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req) {
    var res,
        _req$body2,
        firstname,
        lastname,
        phone,
        email,
        password,
        notification_token,
        imagePath,
        validatedEmail,
        salt,
        pass,
        _args2 = arguments;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            res = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : _express.response;
            _context2.prev = 1;
            _req$body2 = req.body, firstname = _req$body2.firstname, lastname = _req$body2.lastname, phone = _req$body2.phone, email = _req$body2.email, password = _req$body2.password, notification_token = _req$body2.notification_token;
            imagePath = req.file.filename;
            _context2.next = 6;
            return _mysql["default"].query('SELECT email FROM users WHERE email = ?', [email]);

          case 6:
            validatedEmail = _context2.sent;

            if (!(validatedEmail.length > 0)) {
              _context2.next = 9;
              break;
            }

            return _context2.abrupt("return", res.status(401).json({
              resp: false,
              msg: 'Email already exists'
            }));

          case 9:
            salt = _bcrypt["default"].genSaltSync();
            pass = _bcrypt["default"].hashSync(password, salt);
            _context2.next = 13;
            return _mysql["default"].query("CALL SP_REGISTER(?,?,?,?,?,?,?,?);", [firstname, lastname, phone, imagePath, email, pass, 3, notification_token]);

          case 13:
            res.json({
              resp: true,
              msg: 'Devlivery successfully registered'
            });
            _context2.next = 19;
            break;

          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](1);
            return _context2.abrupt("return", res.status(500).json({
              resp: false,
              msg: _context2.t0
            }));

          case 19:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 16]]);
  }));

  return function registerDelivery(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.registerDelivery = registerDelivery;

var registerDeliveryPartner = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req) {
    var res,
        _req$body3,
        firstname,
        lastname,
        phone,
        email,
        selectedState,
        selectedDistrict,
        selectedTaluk,
        selectedPincodes,
        password,
        notification_token,
        imagePath,
        validatedEmail,
        salt,
        pass,
        _args3 = arguments;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            res = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : _express.response;
            _context3.prev = 1;
            _req$body3 = req.body, firstname = _req$body3.firstname, lastname = _req$body3.lastname, phone = _req$body3.phone, email = _req$body3.email, selectedState = _req$body3.selectedState, selectedDistrict = _req$body3.selectedDistrict, selectedTaluk = _req$body3.selectedTaluk, selectedPincodes = _req$body3.selectedPincodes, password = _req$body3.password, notification_token = _req$body3.notification_token;
            imagePath = req.file.filename;
            console.log('Selected Pincodes:', selectedPincodes);
            console.log('Selected state from database:', selectedState);
            _context3.next = 8;
            return _mysql["default"].query('SELECT email FROM users WHERE email = ?', [email]);

          case 8:
            validatedEmail = _context3.sent;

            if (!(validatedEmail.length > 0)) {
              _context3.next = 11;
              break;
            }

            return _context3.abrupt("return", res.status(401).json({
              resp: false,
              msg: 'Email already exists'
            }));

          case 11:
            salt = _bcrypt["default"].genSaltSync();
            pass = _bcrypt["default"].hashSync(password, salt);
            _context3.next = 15;
            return _mysql["default"].query("CALL SP_REGISTER_PARTNER(?,?,?,?,?,?,?,?,?,?,?,?);", [firstname, lastname, phone, imagePath, email, selectedState, selectedDistrict, selectedTaluk, selectedPincodes, pass, 3, notification_token]);

          case 15:
            res.json({
              resp: true,
              msg: 'Devlivery successfully registered'
            });
            _context3.next = 21;
            break;

          case 18:
            _context3.prev = 18;
            _context3.t0 = _context3["catch"](1);
            return _context3.abrupt("return", res.status(500).json({
              resp: false,
              msg: _context3.t0
            }));

          case 21:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 18]]);
  }));

  return function registerDeliveryPartner(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

exports.registerDeliveryPartner = registerDeliveryPartner;
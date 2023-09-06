"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPincodesByTaluk = exports.getTaluksByDistrict = exports.getDistrictsByState = exports.getAllStates = exports.getPincodesByStateDistrictTaluk = void 0;

var _express = require("express");

var _mysql = _interopRequireDefault(require("../Database/mysql"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getPincodesByStateDistrictTaluk = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req) {
    var res,
        _req$query,
        state,
        district,
        taluk,
        connection,
        _yield$connection$que,
        _yield$connection$que2,
        pincodes,
        _args = arguments;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            res = _args.length > 1 && _args[1] !== undefined ? _args[1] : _express.response;
            _context.prev = 1;
            _req$query = req.query, state = _req$query.state, district = _req$query.district, taluk = _req$query.taluk;
            _context.next = 5;
            return _mysql["default"].getConnection();

          case 5:
            connection = _context.sent;
            _context.next = 8;
            return connection.query('SELECT pincode FROM pincodes ' + 'WHERE taluk_id = (SELECT taluk_id FROM taluks WHERE taluk_name = ?) ' + 'AND district_id = (SELECT district_id FROM districts WHERE district_name = ? AND state_id = (SELECT state_id FROM states WHERE state_name = ?))', [taluk, district, state]);

          case 8:
            _yield$connection$que = _context.sent;
            _yield$connection$que2 = _slicedToArray(_yield$connection$que, 1);
            pincodes = _yield$connection$que2[0];
            connection.release();
            res.json(pincodes);
            _context.next = 18;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](1);
            return _context.abrupt("return", res.status(500).json({
              resp: false,
              msg: _context.t0
            }));

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 15]]);
  }));

  return function getPincodesByStateDistrictTaluk(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.getPincodesByStateDistrictTaluk = getPincodesByStateDistrictTaluk;

var getAllStates = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req) {
    var res,
        states,
        _args2 = arguments;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            res = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : _express.response;
            _context2.prev = 1;
            _context2.next = 4;
            return _mysql["default"].query('SELECT state_name FROM states');

          case 4:
            states = _context2.sent;
            console.log('States:', states);
            res.json(states);
            _context2.next = 13;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](1);
            console.error('Error fetching states:', _context2.t0);
            return _context2.abrupt("return", res.status(500).json({
              resp: false,
              msg: _context2.t0
            }));

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 9]]);
  }));

  return function getAllStates(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getAllStates = getAllStates;

var getDistrictsByState = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req) {
    var res,
        state,
        districts,
        _args3 = arguments;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            res = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : _express.response;
            _context3.prev = 1;
            console.log('Request URL:', req.url);
            state = req.query.state;
            console.log('Selected State:', state);
            _context3.next = 7;
            return _mysql["default"].query('SELECT district_name FROM districts ' + 'WHERE state_id = (SELECT state_id FROM states WHERE state_name = ?)', [state]);

          case 7:
            districts = _context3.sent;
            console.log('Districts:', districts);
            res.json(districts);
            _context3.next = 15;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](1);
            return _context3.abrupt("return", res.status(500).json({
              resp: false,
              msg: _context3.t0
            }));

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 12]]);
  }));

  return function getDistrictsByState(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getDistrictsByState = getDistrictsByState;

var getTaluksByDistrict = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req) {
    var res,
        district,
        taluks,
        _args4 = arguments;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            res = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : _express.response;
            _context4.prev = 1;
            district = req.query.district;
            _context4.next = 5;
            return _mysql["default"].query('SELECT taluk_name FROM taluks ' + 'WHERE district_id = (SELECT district_id FROM districts WHERE district_name = ?)', [district]);

          case 5:
            taluks = _context4.sent;
            res.json(taluks);
            _context4.next = 12;
            break;

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](1);
            return _context4.abrupt("return", res.status(500).json({
              resp: false,
              msg: _context4.t0
            }));

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 9]]);
  }));

  return function getTaluksByDistrict(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getTaluksByDistrict = getTaluksByDistrict;

var getPincodesByTaluk = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req) {
    var res,
        taluk,
        pincodes,
        _args5 = arguments;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            res = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : _express.response;
            _context5.prev = 1;
            taluk = req.query.taluk;
            _context5.next = 5;
            return _mysql["default"].query('SELECT pincode FROM pincodes ' + 'WHERE taluk_id = (SELECT taluk_id FROM taluks WHERE taluk_name = ?)', [taluk]);

          case 5:
            pincodes = _context5.sent;
            res.json(pincodes);
            _context5.next = 12;
            break;

          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5["catch"](1);
            return _context5.abrupt("return", res.status(500).json({
              resp: false,
              msg: _context5.t0
            }));

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 9]]);
  }));

  return function getPincodesByTaluk(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getPincodesByTaluk = getPincodesByTaluk;
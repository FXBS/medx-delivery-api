"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateNotificationToken = exports.updateDeliveryToClient = exports.getUserUpdated = exports.getUserById = exports.getPartnerById = exports.getAdminNotificationToken = exports.getAddressesUser = exports.getAddressOne = exports.editProfile = exports.deleteStreetAddress = exports.changePassword = exports.changeImageProfile = exports.addStreetAddress = void 0;
var _express = require("express");
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _mysql = _interopRequireDefault(require("../Database/mysql.js"));
var _fsExtra = _interopRequireDefault(require("fs-extra"));
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var getUserById = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req) {
    var res,
      uid,
      query,
      _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          res = _args.length > 1 && _args[1] !== undefined ? _args[1] : _express.response;
          _context.prev = 1;
          uid = req.uid;
          _context.next = 5;
          return _mysql["default"].query("CALL SP_USER_BY_ID(?);", [uid]);
        case 5:
          query = _context.sent;
          res.json({
            resp: true,
            msg: 'Get profile',
            user: query[0][0]
          });
          _context.next = 12;
          break;
        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](1);
          return _context.abrupt("return", res.status(500).json({
            resp: false,
            msg: _context.t0
          }));
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 9]]);
  }));
  return function getUserById(_x) {
    return _ref.apply(this, arguments);
  };
}();
exports.getUserById = getUserById;
var getPartnerById = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req) {
    var res,
      uid,
      query,
      _args2 = arguments;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          res = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : _express.response;
          _context2.prev = 1;
          uid = req.uid;
          _context2.next = 5;
          return _mysql["default"].query("CALL SP_PARTNER_BY_ID(?);", [uid]);
        case 5:
          query = _context2.sent;
          res.json({
            resp: true,
            msg: 'Get profile',
            user: query[0][0]
          });
          _context2.next = 12;
          break;
        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](1);
          return _context2.abrupt("return", res.status(500).json({
            resp: false,
            msg: _context2.t0
          }));
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 9]]);
  }));
  return function getPartnerById(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getPartnerById = getPartnerById;
var editProfile = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req) {
    var res,
      _req$body,
      firstname,
      lastname,
      phone,
      _args3 = arguments;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          res = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : _express.response;
          _context3.prev = 1;
          _req$body = req.body, firstname = _req$body.firstname, lastname = _req$body.lastname, phone = _req$body.phone;
          _context3.next = 5;
          return _mysql["default"].query("CALL SP_UPDATE_PROFILE(?,?,?,?);", [req.uid, firstname, lastname, phone]);
        case 5:
          res.json({
            resp: true,
            msg: 'Updated Profile'
          });
          _context3.next = 11;
          break;
        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](1);
          return _context3.abrupt("return", res.status(500).json({
            resp: false,
            msg: _context3.t0
          }));
        case 11:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return function editProfile(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
exports.editProfile = editProfile;
var getUserUpdated = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req) {
    var res,
      userdb,
      user,
      _args4 = arguments;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          res = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : _express.response;
          _context4.prev = 1;
          _context4.next = 4;
          return _mysql["default"].query("CALL SP_USER_UPDATED(?);", [req.uid]);
        case 4:
          userdb = _context4.sent;
          user = userdb[0][0];
          res.json({
            resp: true,
            msg: 'User updated',
            user: {
              firstName: user.firstName,
              lastName: user.lastName,
              image: user.image,
              email: user.email,
              rol_id: user.rol_id
            }
          });
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
    }, _callee4, null, [[1, 9]]);
  }));
  return function getUserUpdated(_x4) {
    return _ref4.apply(this, arguments);
  };
}();
exports.getUserUpdated = getUserUpdated;
var changePassword = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req) {
    var res,
      _req$body2,
      currentPassword,
      newPassword,
      passworddb,
      salt,
      pass,
      _args5 = arguments;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          res = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : _express.response;
          _context5.prev = 1;
          _req$body2 = req.body, currentPassword = _req$body2.currentPassword, newPassword = _req$body2.newPassword;
          _context5.next = 5;
          return _mysql["default"].query('SELECT passwordd FROM users WHERE persona_id = ?', [req.uid]);
        case 5:
          passworddb = _context5.sent;
          _context5.next = 8;
          return _bcrypt["default"].compareSync(currentPassword, passworddb[0].passwordd);
        case 8:
          if (_context5.sent) {
            _context5.next = 10;
            break;
          }
          return _context5.abrupt("return", res.status(401).json({
            resp: false,
            msg: 'Passwords do not match'
          }));
        case 10:
          salt = _bcrypt["default"].genSaltSync();
          pass = _bcrypt["default"].hashSync(newPassword, salt);
          _context5.next = 14;
          return _mysql["default"].query('UPDATE users SET passwordd = ? WHERE persona_id = ?', [pass, req.uid]);
        case 14:
          res.json({
            resp: true,
            msg: 'Password Changed'
          });
          _context5.next = 20;
          break;
        case 17:
          _context5.prev = 17;
          _context5.t0 = _context5["catch"](1);
          return _context5.abrupt("return", res.status(500).json({
            resp: false,
            msg: _context5.t0
          }));
        case 20:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 17]]);
  }));
  return function changePassword(_x5) {
    return _ref5.apply(this, arguments);
  };
}();
exports.changePassword = changePassword;
var changeImageProfile = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req) {
    var res,
      imagePath,
      imagedb,
      _args6 = arguments;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          res = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : _express.response;
          _context6.prev = 1;
          imagePath = req.file.filename;
          console.log('req.file:', req.file);
          console.log('imagePath:', imagePath);
          console.log('Request Id:', req.uid);
          imagedb = _mysql["default"].query('SELECT image FROM person WHERE uid = ?', [req.uid]);
          if (!(imagedb.length > 0)) {
            _context6.next = 10;
            break;
          }
          _context6.next = 10;
          return _fsExtra["default"].unlink(_path["default"].resolve('src/Uploads/Profile/' + imagedb[0].image));
        case 10:
          _mysql["default"].query('UPDATE person SET image = ? WHERE uid = ?', [imagePath, req.uid]);
          res.json({
            resp: true,
            msg: 'Picture changed'
          });
          _context6.next = 17;
          break;
        case 14:
          _context6.prev = 14;
          _context6.t0 = _context6["catch"](1);
          return _context6.abrupt("return", res.status(500).json({
            resp: false,
            msg: _context6.t0
          }));
        case 17:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[1, 14]]);
  }));
  return function changeImageProfile(_x6) {
    return _ref6.apply(this, arguments);
  };
}();
exports.changeImageProfile = changeImageProfile;
var getAddressesUser = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req) {
    var res,
      addressesdb,
      _args7 = arguments;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          res = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : _express.response;
          _context7.prev = 1;
          _context7.next = 4;
          return _mysql["default"].query('SELECT id, street, reference, Latitude, Longitude FROM addresses WHERE persona_id = ?', [req.uid]);
        case 4:
          addressesdb = _context7.sent;
          res.json({
            resp: true,
            msg: 'List the Addresses',
            listAddresses: addressesdb
          });
          _context7.next = 11;
          break;
        case 8:
          _context7.prev = 8;
          _context7.t0 = _context7["catch"](1);
          return _context7.abrupt("return", res.status(500).json({
            resp: false,
            msg: _context7.t0
          }));
        case 11:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[1, 8]]);
  }));
  return function getAddressesUser(_x7) {
    return _ref7.apply(this, arguments);
  };
}();

// export const getAddressesUser = async (req, res = response) => {
//     try {
//       const addressesdb = await pool.query(
//         'SELECT id, street, reference, Latitude, Longitude FROM addresses WHERE persona_id = ?',
//         [req.uid]
//       );

//       // Check if addressesdb is null or empty
//       if (!addressesdb || addressesdb.length === 0) {
//         return res.json({
//           resp: true,
//           msg: 'No addresses found for this user',
//           listAddresses: [],
//         });
//       }

//       // The addressesdb result is an array of rows from the database
//       // You need to convert it to the listAddresses format expected by the frontend
//       const listAddresses = addressesdb.map((row) => {
//         return {
//           id: row.id,
//           street: row.street,
//           reference: row.reference,
//           Latitude: row.Latitude,
//           Longitude: row.Longitude,
//         };
//       });

//       res.json({
//         resp: true,
//         msg: 'List the Addresses',
//         listAddresses: listAddresses, // Use the converted listAddresses here
//       });
//     } catch (e) {
//       return res.status(500).json({
//         resp: false,
//         msg: e,
//       });
//     }
//   };
exports.getAddressesUser = getAddressesUser;
var deleteStreetAddress = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req) {
    var res,
      _args8 = arguments;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          res = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : _express.response;
          _context8.prev = 1;
          _context8.next = 4;
          return _mysql["default"].query('DELETE FROM addresses WHERE id = ? AND persona_id = ?', [req.params.idAddress, req.uid]);
        case 4:
          res.json({
            resp: true,
            msg: 'Street Address deleted'
          });
          _context8.next = 10;
          break;
        case 7:
          _context8.prev = 7;
          _context8.t0 = _context8["catch"](1);
          return _context8.abrupt("return", res.status(500).json({
            resp: false,
            msg: _context8.t0
          }));
        case 10:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[1, 7]]);
  }));
  return function deleteStreetAddress(_x8) {
    return _ref8.apply(this, arguments);
  };
}();
exports.deleteStreetAddress = deleteStreetAddress;
var addStreetAddress = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req) {
    var res,
      _req$body3,
      street,
      reference,
      latitude,
      longitude,
      _args9 = arguments;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          res = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : _express.response;
          _context9.prev = 1;
          _req$body3 = req.body, street = _req$body3.street, reference = _req$body3.reference, latitude = _req$body3.latitude, longitude = _req$body3.longitude;
          _context9.next = 5;
          return _mysql["default"].query('INSERT INTO addresses (street, reference, Latitude, Longitude, persona_id) VALUE (?,?,?,?,?)', [street, reference, latitude, longitude, req.uid]);
        case 5:
          res.json({
            resp: true,
            msg: 'Street Address added successfully'
          });
          _context9.next = 11;
          break;
        case 8:
          _context9.prev = 8;
          _context9.t0 = _context9["catch"](1);
          return _context9.abrupt("return", res.status(500).json({
            resp: false,
            msg: _context9.t0
          }));
        case 11:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[1, 8]]);
  }));
  return function addStreetAddress(_x9) {
    return _ref9.apply(this, arguments);
  };
}();
exports.addStreetAddress = addStreetAddress;
var getAddressOne = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req) {
    var res,
      addressdb,
      _args10 = arguments;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          res = _args10.length > 1 && _args10[1] !== undefined ? _args10[1] : _express.response;
          _context10.prev = 1;
          addressdb = _mysql["default"].query('SELECT * FROM addresses WHERE persona_id = ? ORDER BY id DESC LIMIT 1', [req.uid]);
          res.json({
            resp: true,
            msg: 'One Address',
            address: addressdb[0]
          });
          _context10.next = 9;
          break;
        case 6:
          _context10.prev = 6;
          _context10.t0 = _context10["catch"](1);
          return _context10.abrupt("return", res.status(500).json({
            resp: false,
            msg: _context10.t0
          }));
        case 9:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[1, 6]]);
  }));
  return function getAddressOne(_x10) {
    return _ref10.apply(this, arguments);
  };
}();
exports.getAddressOne = getAddressOne;
var updateNotificationToken = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req) {
    var res,
      nToken,
      _args11 = arguments;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          res = _args11.length > 1 && _args11[1] !== undefined ? _args11[1] : _express.response;
          _context11.prev = 1;
          nToken = req.body.nToken;
          _context11.next = 5;
          return _mysql["default"].query('UPDATE users SET notification_token = ? WHERE persona_id = ?', [nToken, req.uid]);
        case 5:
          res.json({
            resp: true,
            msg: 'Token updated'
          });
          _context11.next = 11;
          break;
        case 8:
          _context11.prev = 8;
          _context11.t0 = _context11["catch"](1);
          return _context11.abrupt("return", res.status(500).json({
            resp: false,
            msg: _context11.t0
          }));
        case 11:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[1, 8]]);
  }));
  return function updateNotificationToken(_x11) {
    return _ref11.apply(this, arguments);
  };
}();
exports.updateNotificationToken = updateNotificationToken;
var getAdminNotificationToken = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req) {
    var res,
      admisdb,
      tokens,
      _args12 = arguments;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          res = _args12.length > 1 && _args12[1] !== undefined ? _args12[1] : _express.response;
          _context12.prev = 1;
          _context12.next = 4;
          return _mysql["default"].query('SELECT notification_token FROM users WHERE rol_id = 1');
        case 4:
          admisdb = _context12.sent;
          tokens = [];
          admisdb.forEach(function (t) {
            tokens.push(t.notification_token);
          });
          res.json(tokens);
          _context12.next = 13;
          break;
        case 10:
          _context12.prev = 10;
          _context12.t0 = _context12["catch"](1);
          return _context12.abrupt("return", res.status(501).json({
            resp: false,
            msg: _context12.t0
          }));
        case 13:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[1, 10]]);
  }));
  return function getAdminNotificationToken(_x12) {
    return _ref12.apply(this, arguments);
  };
}();
exports.getAdminNotificationToken = getAdminNotificationToken;
var updateDeliveryToClient = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req) {
    var res,
      _args13 = arguments;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          res = _args13.length > 1 && _args13[1] !== undefined ? _args13[1] : _express.response;
          _context13.prev = 1;
          _context13.next = 4;
          return _mysql["default"].query('UPDATE users SET rol_id = ? WHERE persona_id = ?', [2, req.params.idPerson]);
        case 4:
          res.json({
            resp: true,
            msg: 'Delivery To Client'
          });
          _context13.next = 10;
          break;
        case 7:
          _context13.prev = 7;
          _context13.t0 = _context13["catch"](1);
          return _context13.abrupt("return", res.status(501).json({
            resp: false,
            msg: _context13.t0
          }));
        case 10:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[1, 7]]);
  }));
  return function updateDeliveryToClient(_x13) {
    return _ref13.apply(this, arguments);
  };
}();
exports.updateDeliveryToClient = updateDeliveryToClient;
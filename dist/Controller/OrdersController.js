"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateStatusToOntheWay = exports.updateStatusToDispatched = exports.updateStatusToDelivered = exports.updateStatusToAgent = exports.getOrdersByStatus = exports.getOrdersByDelivery = exports.getDetailsOrderById = exports.addNewOrders = void 0;
var _express = require("express");
var _mysql = _interopRequireDefault(require("../Database/mysql.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var addNewOrders = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req) {
    var res,
      _req$body,
      uidAddress,
      total,
      typePayment,
      products,
      addressData,
      latitude,
      longitude,
      orderdb,
      _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          res = _args.length > 1 && _args[1] !== undefined ? _args[1] : _express.response;
          _context.prev = 1;
          _req$body = req.body, uidAddress = _req$body.uidAddress, total = _req$body.total, typePayment = _req$body.typePayment, products = _req$body.products;
          _context.next = 5;
          return _mysql["default"].query('SELECT Latitude, Longitude FROM addresses WHERE id = ?', [uidAddress]);
        case 5:
          addressData = _context.sent;
          if (!(addressData.length === 0)) {
            _context.next = 8;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            resp: false,
            msg: 'Invalid address ID'
          }));
        case 8:
          latitude = addressData[0].Latitude;
          longitude = addressData[0].Longitude; // Log data before inserting into the orders table
          console.log('Data before inserting into orders table:', {
            client_id: req.uid,
            address_id: uidAddress,
            latitude: latitude,
            longitude: longitude,
            amount: total,
            pay_type: typePayment
          });
          _context.next = 13;
          return _mysql["default"].query('INSERT INTO orders (client_id, address_id, latitude, longitude,status, amount, pay_type) VALUES (?,?,?,?,?,?,?)', [req.uid, uidAddress, latitude, longitude, 'PAID OUT', total, typePayment]);
        case 13:
          orderdb = _context.sent;
          products.forEach(function (o) {
            _mysql["default"].query('INSERT INTO orderDetails (order_id, product_id, quantity, price) VALUES (?,?,?,?)', [orderdb.insertId, o.uidProduct, o.quantity, o.quantity * o.price]);
          });
          res.json({
            resp: true,
            msg: 'New Order added successfully'
          });
          _context.next = 21;
          break;
        case 18:
          _context.prev = 18;
          _context.t0 = _context["catch"](1);
          return _context.abrupt("return", res.status(500).json({
            resp: false,
            msg: _context.t0
          }));
        case 21:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 18]]);
  }));
  return function addNewOrders(_x) {
    return _ref.apply(this, arguments);
  };
}();
exports.addNewOrders = addNewOrders;
var getOrdersByStatus = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req) {
    var res,
      ordersdb,
      jsonResponse,
      _args2 = arguments;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          res = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : _express.response;
          _context2.prev = 1;
          _context2.next = 4;
          return _mysql["default"].query("CALL SP_ALL_ORDERS_STATUS(?);", [req.params.statusOrder]);
        case 4:
          ordersdb = _context2.sent;
          // res.json({
          //     resp: true,
          //     msg : 'Orders by ' + req.params.statusOrder,
          //     ordersResponse : ordersdb[0]
          // });
          jsonResponse = {
            resp: true,
            msg: 'Orders by ' + req.params.statusOrder,
            ordersResponse: ordersdb[0]
          };
          console.log('JSON Response for order by status :', jsonResponse); // Log the JSON response

          res.json(jsonResponse);
          _context2.next = 14;
          break;
        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](1);
          console.error('Error:', _context2.t0); // Log the error
          return _context2.abrupt("return", res.status(500).json({
            resp: false,
            msg: _context2.t0
          }));
        case 14:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 10]]);
  }));
  return function getOrdersByStatus(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getOrdersByStatus = getOrdersByStatus;
var getDetailsOrderById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req) {
    var res,
      detailOrderdb,
      _args3 = arguments;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          res = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : _express.response;
          _context3.prev = 1;
          _context3.next = 4;
          return _mysql["default"].query("CALL SP_ORDER_DETAILS(?);", [req.params.idOrderDetails]);
        case 4:
          detailOrderdb = _context3.sent;
          res.json({
            resp: true,
            msg: 'Order details by ' + req.params.idOrderDetails,
            detailsOrder: detailOrderdb[0]
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
  return function getDetailsOrderById(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getDetailsOrderById = getDetailsOrderById;
var updateStatusToDispatched = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req) {
    var res,
      _req$body2,
      idDelivery,
      idOrder,
      _args4 = arguments;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          res = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : _express.response;
          _context4.prev = 1;
          _req$body2 = req.body, idDelivery = _req$body2.idDelivery, idOrder = _req$body2.idOrder;
          _context4.next = 5;
          return _mysql["default"].query('UPDATE orders SET status = ?, delivery_id = ? WHERE id = ?', ['DISPATCHED TO PARTNER', idDelivery, idOrder]);
        case 5:
          res.json({
            resp: true,
            msg: 'Order DISPATCHED'
          });
          _context4.next = 11;
          break;
        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](1);
          return _context4.abrupt("return", res.status(500).json({
            resp: false,
            msg: _context4.t0
          }));
        case 11:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 8]]);
  }));
  return function updateStatusToDispatched(_x4) {
    return _ref4.apply(this, arguments);
  };
}();
exports.updateStatusToDispatched = updateStatusToDispatched;
var updateStatusToAgent = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req) {
    var res,
      _req$body3,
      idDelivery,
      idOrder,
      _args5 = arguments;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          res = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : _express.response;
          _context5.prev = 1;
          _req$body3 = req.body, idDelivery = _req$body3.idDelivery, idOrder = _req$body3.idOrder;
          _context5.next = 5;
          return _mysql["default"].query('UPDATE orders SET status = ?, delivery_id = ? WHERE id = ?', ['ASSIGNED TO AGENT', idDelivery, idOrder]);
        case 5:
          res.json({
            resp: true,
            msg: 'Order DISPATCHED TO AGENT'
          });
          _context5.next = 11;
          break;
        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](1);
          return _context5.abrupt("return", res.status(500).json({
            resp: false,
            msg: _context5.t0
          }));
        case 11:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 8]]);
  }));
  return function updateStatusToAgent(_x5) {
    return _ref5.apply(this, arguments);
  };
}();
exports.updateStatusToAgent = updateStatusToAgent;
var getOrdersByDelivery = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req) {
    var res,
      ordersDeliverydb,
      _args6 = arguments;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          res = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : _express.response;
          _context6.prev = 1;
          _context6.next = 4;
          return _mysql["default"].query("CALL SP_ORDERS_BY_DELIVERY(?,?);", [req.uid, req.params.statusOrder]);
        case 4:
          ordersDeliverydb = _context6.sent;
          res.json({
            resp: true,
            msg: 'All Orders By Delivery',
            ordersResponse: ordersDeliverydb[0]
          });
          _context6.next = 11;
          break;
        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](1);
          return _context6.abrupt("return", res.status(500).json({
            resp: false,
            msg: _context6.t0
          }));
        case 11:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[1, 8]]);
  }));
  return function getOrdersByDelivery(_x6) {
    return _ref6.apply(this, arguments);
  };
}();
exports.getOrdersByDelivery = getOrdersByDelivery;
var updateStatusToOntheWay = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req) {
    var res,
      _req$body4,
      latitude,
      longitude,
      _args7 = arguments;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          res = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : _express.response;
          _context7.prev = 1;
          _req$body4 = req.body, latitude = _req$body4.latitude, longitude = _req$body4.longitude;
          _context7.next = 5;
          return _mysql["default"].query('UPDATE orders SET status = ?, latitude = ?, longitude = ? WHERE id = ?', ['ON WAY', latitude, longitude, req.params.idOrder]);
        case 5:
          res.json({
            resp: true,
            msg: 'ON WAY'
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
  return function updateStatusToOntheWay(_x7) {
    return _ref7.apply(this, arguments);
  };
}();
exports.updateStatusToOntheWay = updateStatusToOntheWay;
var updateStatusToDelivered = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req) {
    var res,
      _args8 = arguments;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          res = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : _express.response;
          _context8.prev = 1;
          _context8.next = 4;
          return _mysql["default"].query('UPDATE orders SET status = ? WHERE id = ?', ['DELIVERED', req.params.idOrder]);
        case 4:
          res.json({
            resp: true,
            msg: 'ORDER DELIVERED'
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
  return function updateStatusToDelivered(_x8) {
    return _ref8.apply(this, arguments);
  };
}();
exports.updateStatusToDelivered = updateStatusToDelivered;
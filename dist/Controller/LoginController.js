"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renewTokenLogin = exports.loginController = void 0;

var _express = require("express");

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _mysql = _interopRequireDefault(require("../Database/mysql"));

var _JwToken = require("../Lib/JwToken");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var loginController = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req) {
    var res,
        _req$body,
        email,
        password,
        validatedEmail,
        emailParameter,
        userdb,
        user,
        token,
        _args = arguments;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            res = _args.length > 1 && _args[1] !== undefined ? _args[1] : _express.response;
            _context.prev = 1;
            _req$body = req.body, email = _req$body.email, password = _req$body.password;
            console.log(email, password); // let salt = bcrypt.genSaltSync();
            // const pass = bcrypt.hashSync( password, salt );
            // console.log(pass);

            _context.next = 6;
            return _mysql["default"].query('SELECT email FROM users WHERE email = ?', [email]);

          case 6:
            validatedEmail = _context.sent;
            console.log("email validation ", validatedEmail);
            console.log("email validation length ", validatedEmail.length);

            if (!(validatedEmail.length == 0)) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              resp: false,
              msg: 'Wrong email Credentials'
            }));

          case 11:
            //const userdb = await pool.query(`CALL SP_LOGIN(?);`, [email]);
            emailParameter = "_utf8mb4'" + email + "' COLLATE utf8mb4_general_ci";
            _context.next = 14;
            return _mysql["default"].query("CALL SP_LOGIN(".concat(emailParameter, ");"));

          case 14:
            userdb = _context.sent;
            //   const userdb = await pool.query(`SELECT p.uid, p.firstName, p.lastName, p.image, u.email, u.passwordd, u.rol_id, u.notification_token FROM person p
            //   INNER JOIN users u ON p.uid = u.persona_id
            //   WHERE u.email = ? AND p.state = TRUE;`, [email]);
            user = userdb[0][0];
            console.log("User DB details:", userdb);
            console.log("User details:", user);
            console.log("User Password:", user['passwordd']);
            _context.next = 21;
            return _bcrypt["default"].compareSync(password, user['passwordd']);

          case 21:
            if (_context.sent) {
              _context.next = 23;
              break;
            }

            return _context.abrupt("return", res.status(401).json({
              resp: false,
              msg: 'Wrong Credentials'
            }));

          case 23:
            _context.next = 25;
            return (0, _JwToken.generateJsonWebToken)(user.uid);

          case 25:
            token = _context.sent;
            res.json({
              resp: true,
              msg: 'Welcome to Med-X Delivery',
              user: {
                uid: user.uid,
                firstName: user.firstName,
                lastName: user.lastName,
                image: user.image,
                email: user.email,
                rol_id: user.rol_id,
                notification_token: user.notification_token
              },
              token: token
            });
            _context.next = 32;
            break;

          case 29:
            _context.prev = 29;
            _context.t0 = _context["catch"](1);
            return _context.abrupt("return", res.status(500).json({
              resp: false,
              msg: _context.t0
            }));

          case 32:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 29]]);
  }));

  return function loginController(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.loginController = loginController;

var renewTokenLogin = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req) {
    var res,
        token,
        userdb,
        user,
        _args2 = arguments;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            res = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : _express.response;
            _context2.prev = 1;
            _context2.next = 4;
            return (0, _JwToken.generateJsonWebToken)(req.uid);

          case 4:
            token = _context2.sent;
            _context2.next = 7;
            return _mysql["default"].query("CALL SP_RENEWTOKENLOGIN(?);", [req.uid]);

          case 7:
            userdb = _context2.sent;
            user = userdb[0][0];
            res.json({
              resp: true,
              msg: 'Welcome to Med-X Delivery',
              user: {
                uid: user.uid,
                firstName: user.firstName,
                lastName: user.lastName,
                image: user.image,
                phone: user.phone,
                email: user.email,
                rol_id: user.rol_id,
                notification_token: user.notification_token
              },
              token: token
            });
            _context2.next = 15;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](1);
            res.status(500).json({
              resp: false,
              msg: _context2.t0
            });

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 12]]);
  }));

  return function renewTokenLogin(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.renewTokenLogin = renewTokenLogin;
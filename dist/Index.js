"use strict";

var _App = _interopRequireDefault(require("./App.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// http.listen( process.env.APP_PORT, () => console.log('Server on port ' + process.env.APP_PORT));

var server = _App["default"].listen(process.env.APP_PORT, function () {
  var address = server.address();
  var host = address.address === '::' ? 'localhost' : address.address;
  var port = address.port;
  console.log("Server is running at http://".concat(host, ":").concat(port));
});
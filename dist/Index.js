"use strict";

var _App = _interopRequireDefault(require("./App.mjs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_App["default"].listen(process.env.APP_PORT, function () {
  return console.log('Server on port ' + process.env.APP_PORT);
});

// const server = http.listen(process.env.APP_PORT, () => {
//     const address = server.address();
//     const host = address.address === '::' ? 'localhost' : address.address;
//     const port = address.port;

//     console.log(`Server is running at http://${host}:${port}`);
//   });
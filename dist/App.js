"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _path = _interopRequireDefault(require("path"));
var _dotenv = require("dotenv");
var _url = require("url");
var _http = require("http");
var _socket = require("socket.io");
var _SocketOrderDelivery = require("./Sockets/SocketOrderDelivery.js");
var _AuthRoutes = _interopRequireDefault(require("./Router/Auth.routes.js"));
var _UserRoutes = _interopRequireDefault(require("./Router/User.routes.js"));
var _ProductRoutes = _interopRequireDefault(require("./Router/Product.routes.js"));
var _CategoryRoutes = _interopRequireDefault(require("./Router/Category.routes.js"));
var _OrderRoutes = _interopRequireDefault(require("./Router/Order.routes.js"));
var _PincodeRoutes = _interopRequireDefault(require("./Router/Pincode.routes.js"));
var _PartnerRoutes = _interopRequireDefault(require("./Router/Partner.routes.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
(0, _dotenv.config)();

// Get the directory name using 'fileURLToPath' function
var _filename = (0, _url.fileURLToPath)(import.meta.url);
var _dirname = _path["default"].dirname(_filename);
var app = (0, _express["default"])();

// CONFIG SOCKET 
var httpServer = (0, _http.createServer)(app);
var io = new _socket.Server(httpServer);
(0, _SocketOrderDelivery.socketOrderDelivery)(io);
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use('/api', _AuthRoutes["default"]);
app.use('/api', _UserRoutes["default"]);
app.use('/api', _ProductRoutes["default"]);
app.use('/api', _CategoryRoutes["default"]);
app.use('/api', _OrderRoutes["default"]);
app.use('/api', _PincodeRoutes["default"]);
app.use('/api', _PartnerRoutes["default"]);
app.use(_express["default"]["static"](_path["default"].join(_dirname, 'Uploads/Profile')));
app.use(_express["default"]["static"](_path["default"].join(_dirname, 'Uploads/Products')));

// app.use(express.static(path.join( 'dist')));
// app.get("*",(req,res)=>{
//     res.sendFile(path.resolve("dist","Index.js"))
// })
var _default = httpServer;
exports["default"] = _default;
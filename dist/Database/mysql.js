"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mysql = _interopRequireDefault(require("mysql"));
var _util = require("util");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: "",
//     database: 'frave_food'  
// });
var pool = _mysql["default"].createPool({
  host: 'medxlogisticserver2.mysql.database.azure.com',
  user: 'azurelogistic',
  password: "medx@2023",
  database: 'medx_delivery',
  port: 3306,
  // Your Azure MySQL port (default is 3306)
  SslCa: 'DigiCertGlobalRootCA.crt.pem',
  ssl: {
    rejectUnauthorized: false // Set this to true to perform SSL certificate validation
  }
  // MYSQLI_CLIENT_SSL  
});

pool.getConnection(function (err, connection) {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') console.log('DATABASE CONNECTION WAS CLOSED');
    if (err.code === 'ER_CON_COUNT_ERROR') console.log('DATABASE HAS TO MANY CONNECTIONS');
    if (err.code === 'ECONNREFUSED') console.log('DATABASE CONNECTION WAS REFUSED');
    throw err;
  }
  if (connection) connection.release();
  console.log('DataBase is connected to ' + process.env.DB_DATABASE);
  return;
});
pool.query = (0, _util.promisify)(pool.query);
var _default = exports["default"] = pool;
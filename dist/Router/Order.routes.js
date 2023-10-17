"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var orders = _interopRequireWildcard(require("../Controller/OrdersController.js"));
var client = _interopRequireWildcard(require("../Controller/ClientController.js"));
var _ValidateToken = require("../Middleware/ValidateToken.js");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var router = (0, _express.Router)();
router.post('/add-new-orders', _ValidateToken.verifyToken, orders.addNewOrders);
router.get('/get-orders-by-status/:statusOrder', _ValidateToken.verifyToken, orders.getOrdersByStatus);
router.get('/get-details-order-by-id/:idOrderDetails', _ValidateToken.verifyToken, orders.getDetailsOrderById);
router.put('/update-status-order-dispatched', _ValidateToken.verifyToken, orders.updateStatusToDispatched);
router.put('/update-status-order-agent', _ValidateToken.verifyToken, orders.updateStatusToAgent);
router.get('/get-all-orders-by-delivery/:statusOrder', _ValidateToken.verifyToken, orders.getOrdersByDelivery);
router.put('/update-status-order-on-way/:idOrder', _ValidateToken.verifyToken, orders.updateStatusToOntheWay);
router.put('/update-status-order-delivered/:idOrder', _ValidateToken.verifyToken, orders.updateStatusToDelivered);
router.get('/get-list-orders-for-client', _ValidateToken.verifyToken, client.getListOrdersForClient);
var _default = router;
exports["default"] = _default;
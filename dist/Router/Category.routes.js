"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var category = _interopRequireWildcard(require("../Controller/CategoryController.js"));
var _DeliveryController = require("../Controller/DeliveryController.js");
var _ValidateToken = require("../Middleware/ValidateToken.js");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var router = (0, _express.Router)();
router.post('/add-categories', _ValidateToken.verifyToken, category.addCategories);
router.get('/get-all-categories', _ValidateToken.verifyToken, category.getAllCategories);
router.get('/get-all-delivery', _ValidateToken.verifyToken, _DeliveryController.getAllDelivery);
router.get('/get-all-delivery-agents-for-partner', _ValidateToken.verifyToken, _DeliveryController.getAllDeliveryAgentsForPartner);
router.get('/get-all-delivery-partner', _ValidateToken.verifyToken, _DeliveryController.getAllDeliveryPartner);
var _default = router;
exports["default"] = _default;
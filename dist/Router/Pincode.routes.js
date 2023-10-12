"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var pincode = _interopRequireWildcard(require("../Controller/PincodeController.js"));
var _ValidateToken = require("../Middleware/ValidateToken.js");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var router = (0, _express.Router)();
console.log(_ValidateToken.verifyToken);
// Route to get all states
router.get('/get-states', _ValidateToken.verifyToken, pincode.getAllStates);

// Route to get districts by state
router.get('/get-districts', _ValidateToken.verifyToken, pincode.getDistrictsByState);

// Route to get taluks by district
router.get('/get-taluks', _ValidateToken.verifyToken, pincode.getTaluksByDistrict);

// Route to get pincodes by taluk
router.get('/get-pincodes', _ValidateToken.verifyToken, pincode.getPincodesByTaluk);

// router.get('/get-pincodes', verifyToken, pincode.getPincodesByStateDistrictTaluk);
var _default = router;
exports["default"] = _default;
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _ValidateToken = require("../Middleware/ValidateToken.js");
var register = _interopRequireWildcard(require("../Controller/RegisterController.js"));
var user = _interopRequireWildcard(require("../Controller/UserController.js"));
var _Multer = require("../Lib/Multer.js");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var router = (0, _express.Router)();
router.post('/register-client', _Multer.upLoadsProfile.single('image'), register.registerClient);
router.post('/register-delivery', [_Multer.upLoadsProfile.single('image')], register.registerDelivery);
router.post('/register-delivery-partner', [_Multer.upLoadsProfile.single('image')], register.registerDeliveryPartner);
router.get('/get-user-by-id', _ValidateToken.verifyToken, user.getUserById);
router.get('/get-partner-by-id', user.getUserById);
router.put('/edit-profile', _ValidateToken.verifyToken, user.editProfile);
router.get('/get-user-updated', _ValidateToken.verifyToken, user.getUserUpdated);
router.put('/change-password', _ValidateToken.verifyToken, user.changePassword);
router.put('/change-image-profile', [_ValidateToken.verifyToken, _Multer.upLoadsProfile.single('image')], user.changeImageProfile);
router.get('/get-addresses', _ValidateToken.verifyToken, user.getAddressesUser);
router["delete"]('/delete-street-address/:idAddress', _ValidateToken.verifyToken, user.deleteStreetAddress);
router.post('/add-new-address', _ValidateToken.verifyToken, user.addStreetAddress);
router.get('/get-address', _ValidateToken.verifyToken, user.getAddressOne);
router.put('/update-notification-token', _ValidateToken.verifyToken, user.updateNotificationToken);
router.get('/get-admins-notification-token', _ValidateToken.verifyToken, user.getAdminNotificationToken);
router.put('/update-delivery-to-client/:idPerson', _ValidateToken.verifyToken, user.updateDeliveryToClient);
var _default = router;
exports["default"] = _default;
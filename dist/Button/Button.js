"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ButtonModule = _interopRequireDefault(require("./Button.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
  var onClick = _ref.onClick,
      text = _ref.text;
  return /*#__PURE__*/_react.default.createElement("button", {
    className: _ButtonModule.default.view,
    "data-status": "error",
    onClick: onClick
  }, text);
};

var _default = Button;
exports.default = _default;
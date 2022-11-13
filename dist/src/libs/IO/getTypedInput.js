"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
function getTypedInput(text, type, incorrect) {
    if (type === void 0) { type = "number"; }
    if (incorrect === void 0) { incorrect = {
        message: "Incorrect input",
    }; }
    switch (type) {
        case "number":
            return _1.getTypedInputNumber(text, "number", incorrect);
    }
}
exports.default = getTypedInput;

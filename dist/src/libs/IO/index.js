"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readlineSync = exports.getTypedInputNumber = exports.getTypedInput = exports.confirmInput = void 0;
var confirmInput_1 = require("./confirmInput");
Object.defineProperty(exports, "confirmInput", { enumerable: true, get: function () { return __importDefault(confirmInput_1).default; } });
var getTypedInput_1 = require("./getTypedInput");
Object.defineProperty(exports, "getTypedInput", { enumerable: true, get: function () { return __importDefault(getTypedInput_1).default; } });
var getTypedInputNumber_1 = require("./getTypedInputNumber");
Object.defineProperty(exports, "getTypedInputNumber", { enumerable: true, get: function () { return __importDefault(getTypedInputNumber_1).default; } });
var readlineSync_1 = require("./readlineSync");
Object.defineProperty(exports, "readlineSync", { enumerable: true, get: function () { return __importDefault(readlineSync_1).default; } });

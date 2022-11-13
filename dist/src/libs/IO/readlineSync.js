"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
process.stdin.setEncoding("utf8");
// This function reads only one line on console synchronously. After pressing `enter` key the console will stop listening for data.
function readlineSync() {
    return new Promise(function (resolve, reject) {
        process.stdin.resume();
        process.stdin.on("data", function (data) {
            process.stdin.pause(); // stops after one line reads
            resolve(data);
        });
    });
}
exports.default = readlineSync;

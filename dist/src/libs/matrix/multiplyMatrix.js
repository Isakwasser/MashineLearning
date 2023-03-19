"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
function multiplyMatrix(m1, m2) {
    var m = m1.length;
    var n = m2[0].length;
    var ans = [];
    for (var i = 0; i < m; i++) {
        var row = [];
        for (var j = 0; j < n; j++) {
            var temp = 0;
            for (var s = 0; s < m1[i].length; s++) {
                temp += m1[i][s] * m2[s][j];
            }
            row.push(temp);
        }
        ans = __spreadArray(__spreadArray([], ans, true), [row], false);
    }
    return ans;
}
exports.default = multiplyMatrix;

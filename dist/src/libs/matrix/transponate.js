"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function transponate(m) {
    var ans = [];
    for (var i = 0; i < m.length; i++) {
        for (var j = 0; j < m[i].length; j++) {
            if (!ans[j]) {
                ans[j] = [];
            }
            ans[j][i] = m[i][j];
        }
    }
    return ans;
}
exports.default = transponate;

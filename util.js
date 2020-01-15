"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ellipsisX(rowNum) {
    if (rowNum === void 0) { rowNum = 1; }
    if (rowNum !== 1) {
        return "\n      overflow: hidden;\n      display: -webkit-box;\n      -webkit-line-clamp: " + rowNum + ";\n      -webkit-box-orient: vertical;\n    ";
    }
    return "\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  ";
}
exports.ellipsisX = ellipsisX;
function size(size) {
    return "\n    width: " + size + ";\n    height: " + size + ";\n  ";
}
exports.size = size;
size.wh = function wh(w, h) {
    return "\n    width: " + w + ";\n    height: " + h + ";\n  ";
};

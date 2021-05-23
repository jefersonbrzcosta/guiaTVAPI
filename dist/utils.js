"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.titleFormat = void 0;
var titleFormat = function (title) {
    return title.split(' |')[0].split('Programação ')[1];
};
exports.titleFormat = titleFormat;

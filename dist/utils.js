"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderDate = exports.titleFormat = void 0;
var titleFormat = function (title) {
    return title.split(' |')[0].split('Programação ')[1];
};
exports.titleFormat = titleFormat;
var renderDate = function (date, time) {
    time = time.replace('∶', ':');
    var year = new Date().getFullYear();
    var month = date.slice(-2);
    var day = date.slice(-5, -3);
    return year + "-" + month + "-" + day + "T" + time + ":00";
};
exports.renderDate = renderDate;

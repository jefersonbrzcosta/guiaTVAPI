"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var NotImplemented = /** @class */ (function (_super) {
    __extends(NotImplemented, _super);
    function NotImplemented() {
        return _super.call(this, 'NotImplemented') || this;
    }
    return NotImplemented;
}(Error));
var ICrud = /** @class */ (function () {
    function ICrud() {
    }
    ICrud.prototype.create = function (item) {
        throw new NotImplemented();
    };
    ICrud.prototype.read = function (query) {
        throw new NotImplemented();
    };
    ICrud.prototype.update = function (id, item) {
        throw new NotImplemented();
    };
    ICrud.prototype.delete = function (id) {
        throw new NotImplemented();
    };
    ICrud.prototype.isConnect = function () {
        throw new NotImplemented();
    };
    ICrud.prototype.connect = function () {
        throw new NotImplemented();
    };
    return ICrud;
}());
exports.default = ICrud;

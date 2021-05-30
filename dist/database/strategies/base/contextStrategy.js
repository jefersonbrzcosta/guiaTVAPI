"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ContextStrategy = /** @class */ (function () {
    function ContextStrategy(strategy) {
        this._database = strategy;
    }
    ContextStrategy.prototype.create = function (item) {
        return this._database.create(item);
    };
    ContextStrategy.prototype.isConnect = function () {
        return this._database.isConnect();
    };
    ContextStrategy.prototype.connect = function () {
        return this._database.connect();
    };
    ContextStrategy.prototype.read = function (query) {
        return this._database.read(query);
    };
    ContextStrategy.prototype.update = function (id, item) {
        return this._database.update(id, item);
    };
    ContextStrategy.prototype.delete = function (id) {
        return this._database.delete(id);
    };
    return ContextStrategy;
}());
exports.default = ContextStrategy;

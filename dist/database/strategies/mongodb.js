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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var interfaceICrud_1 = __importDefault(require("./interfaces/interfaceICrud"));
var mongoose_1 = __importStar(require("mongoose"));
var DB_STATUS = {
    0: 'disconnected',
    1: 'connecting',
    2: 'connected',
    3: 'disconnected',
};
var MongoDB = /** @class */ (function (_super) {
    __extends(MongoDB, _super);
    function MongoDB() {
        var _this = _super.call(this) || this;
        _this._channelsSchema = null;
        _this._driver = null;
        return _this;
    }
    MongoDB.prototype.defineModel = function () {
        var channelSchema = new mongoose_1.Schema({
            date: {
                type: String,
                required: true,
            },
            formattedDate: {
                type: String,
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            category: {
                type: String,
                required: true,
            },
        }, { _id: false });
        var channelsSchema = new mongoose_1.Schema({
            name: { type: String, required: true, unique: true },
            guide: { type: [channelSchema], required: true },
            updatedAt: { type: Date, default: new Date() },
        });
        this._channelsSchema = mongoose_1.default.model('channels', channelsSchema);
    };
    MongoDB.prototype.isConnect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var state;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('isConnect');
                        state = DB_STATUS[this._driver.readyState];
                        console.log(state);
                        if (state === 'connected')
                            return [2 /*return*/, state];
                        if (state !== 'connecting')
                            return [2 /*return*/, state];
                        if (!(state === 'connecting')) return [3 /*break*/, 2];
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 1000); })];
                    case 1:
                        _a.sent();
                        console.log(DB_STATUS[this._driver.readyState]);
                        return [2 /*return*/, DB_STATUS[this._driver.readyState]];
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    MongoDB.prototype.connect = function () {
        mongoose_1.default.connect("mongodb+srv://" + process.env.MONGODB_USER + ":" + process.env.MONGODB_PASS + "@cluster0.lnvro.mongodb.net/guiaAPI", { useNewUrlParser: true, useUnifiedTopology: true }, function (error) {
            if (!error)
                return;
            console.log('DB Error', error);
        });
        this._driver = mongoose_1.default.connection;
        this._driver.once('open', function () { return console.log('Connected to DB'); });
        this.defineModel();
        return true;
    };
    MongoDB.prototype.create = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var newChannelEntry;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._channelsSchema.create(item)];
                    case 1:
                        newChannelEntry = _a.sent();
                        console.log('newChannelEntry', newChannelEntry);
                        return [2 /*return*/];
                }
            });
        });
    };
    return MongoDB;
}(interfaceICrud_1.default));
exports.default = MongoDB;

"use strict";
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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsdom_1 = __importDefault(require("jsdom"));
var got_1 = __importDefault(require("got"));
var utils_1 = require("../utils");
var getChannel = function (channel) { return __awaiter(void 0, void 0, void 0, function () {
    var JSDOM, currentDay, itemCount, list, url, page, content, channelName, time_1, allItems, category_1, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                JSDOM = jsdom_1.default.JSDOM;
                itemCount = 0;
                list = [];
                url = "https://meuguia.tv/programacao/canal/" + channel;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, got_1.default(url)];
            case 2:
                page = _a.sent();
                content = new JSDOM(page.body);
                channelName = utils_1.titleFormat(content.window.document.title) || 'not found';
                if (channelName !== 'not found') {
                    time_1 = __spreadArray([], content.window.document.querySelectorAll('.lileft'));
                    allItems = __spreadArray([], content.window.document.querySelectorAll('.mw > li'));
                    category_1 = __spreadArray([], content.window.document.querySelectorAll('.licontent > h3'));
                    allItems.forEach(function (element) {
                        if (element.classList.value === 'divider')
                            return;
                        if (element.classList.value === 'subheader devicepadding') {
                            currentDay = element.innerHTML;
                            return;
                        }
                        list.push({
                            date: currentDay + " - " + time_1[itemCount].innerHTML,
                            formattedDate: utils_1.renderDate(currentDay, time_1[itemCount].innerHTML),
                            name: element.children[0].title,
                            category: category_1[itemCount].innerHTML,
                        });
                        itemCount++;
                    });
                }
                if (itemCount === 0)
                    return [2 /*return*/, { error: 'Channel not found' }];
                return [2 /*return*/, {
                        name: channelName,
                        guide: list,
                        updatedAt: new Date(),
                    }];
            case 3:
                error_1 = _a.sent();
                console.error(error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.default = getChannel;

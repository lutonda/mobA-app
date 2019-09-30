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
Object.defineProperty(exports, "__esModule", { value: true });
const Currency_1 = require("../entities/Currency");
class CurrencyApp {
    constructor() { }
    static convert(from, to, amount = 1) {
        return __awaiter(this, void 0, void 0, function* () {
            let fromCurrency = yield Currency_1.Currency.findOne({ money: from });
            let toCurrency = yield Currency_1.Currency.findOne({ money: to });
            let final = amount / (fromCurrency.value / toCurrency.value);
            return final;
        });
    }
}
exports.CurrencyApp = CurrencyApp;
//# sourceMappingURL=CurrencyApp.js.map
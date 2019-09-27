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
const Version_1 = require("../entities/Version");
const Source_1 = require("./Source");
class Sync {
    constructor() {
        this.import = function () {
            return __awaiter(this, void 0, void 0, function* () {
                console.log(2);
                let s = new Source_1.Source('V1');
                let final = yield s.getAll();
                let version = new Version_1.Version();
                version.version = 1;
                yield version.save();
                let currencies = [];
                let rates = Object.keys(final.rates).map(i => [i, final.rates[i]]);
                rates.forEach((rate) => __awaiter(this, void 0, void 0, function* () {
                    let currency = new Currency_1.Currency();
                    currency.money = rate[0];
                    currency.value = rate[1];
                    //currency.version(version);
                    yield currency.save();
                    currencies.push(currency);
                    console.log(currency);
                }));
                //console.log(final);
                return currencies;
            });
        };
    }
}
exports.default = Sync;
//# sourceMappingURL=Sync.js.map
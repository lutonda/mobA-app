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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Currency_1 = require("../../entities/Currency");
const Sync_1 = __importDefault(require("../../application/Sync"));
// Display detail page for a specific Author.
exports.getOne = function (req, res) {
    let currency = Currency_1.Currency.findOne({ money: req.params.id });
    res.send(currency);
};
// Display Author create form on GET.
exports.getAll = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let sync = new Sync_1.default();
        //let final=await sync.import()
        let final = yield Currency_1.Currency.find();
        res.send(final);
    });
};
// Display Author create form on GET.
exports.setAll = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let sync = new Sync_1.default();
        console.log(0);
        res.send(yield sync.import());
    });
};
//# sourceMappingURL=syncController.js.map
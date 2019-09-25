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
const Source_1 = require("../../application/Source");
// Display detail page for a specific Author.
exports.getOne = function (req, res) {
    res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
};
// Display Author create form on GET.
exports.getAll = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('zik');
        let s = new Source_1.Source('V1');
        let final = yield s.getAll();
        console.log(final);
        res.send(final);
    });
};
//# sourceMappingURL=currencyController.js.map
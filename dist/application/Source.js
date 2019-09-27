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
let request = require('request');
const axios = require('axios');
let config = {
    xe: {
        url: 'http://data.fixer.io/api/latest?access_key=73aec86fd31ba205e1a5f924e542fd43',
        endpoint: 'latest',
        access_key: '73aec86fd31ba205e1a5f924e542fd43'
    }
};
class Source {
    //constructor
    constructor(engine) {
        this.config = {
            xe: {
                url: 'http://data.fixer.io/api/latest?access_key=73aec86fd31ba205e1a5f924e542fd43',
                endpoint: 'latest',
                access_key: '73aec86fd31ba205e1a5f924e542fd43'
            }
        };
        this.engine = engine;
    }
    //function
    getOne() {
        console.log("Engine is  :   " + this.engine);
    }
    //function
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let final = 'NOTHING DONE';
            let res = yield axios.get(config.xe.url);
            final = res.data;
            console.log('done');
            console.log("Engine is  :   " + this.engine);
            return final;
        });
    }
}
exports.Source = Source;
//# sourceMappingURL=Source.js.map
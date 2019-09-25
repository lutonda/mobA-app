"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TypeOrmInit_1 = __importDefault(require("../../application/TypeOrmInit"));
var express = require('express');
var router = express.Router();
router.get('/', (req, res) => {
    new TypeOrmInit_1.default().init();
    res.json('wait a while');
});
module.exports = router;
//# sourceMappingURL=index.js.map
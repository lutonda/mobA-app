"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};

Object.defineProperty(exports, "__esModule", { value: true });
import "reflect-metadata";
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000;

import TypeOrmInit from './application/TypeOrmInit';

const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let catalog = require('./api/routes/catalog');
let index = require('./api/routes/index');

app.use('/', index);
app.use('/api/:version/currencies', catalog);

app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};

import {createConnection} from "typeorm";

createConnection({
    type: "mysql",
    host: "nova-erp.com",
    port: 3306,
    username: "novanet_mob_app",
    password: "mob_app_",
    database: "novanet_mob_app",
    entities: [
        __dirname + "/Entities/*.js"
    ],
    synchronize: true,
}).then(connection => {
    // here you can start to work with your entities
}).catch(error => console.log(error));

Object.defineProperty(exports, "__esModule", { value: true });
import "reflect-metadata";
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000;

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

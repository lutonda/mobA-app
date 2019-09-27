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
import { createConnection } from "typeorm";

const bodyParser = require('body-parser')


createConnection({
            type: "mysql",
            host: "nova-erp.com",
            port: 3306,
            username: "novanet_mob_app",
            password: "mob_app_",
            database: "novanet_mob_app",
            entities: [
                __dirname + "/entities/*.js"
            ],
            synchronize: true,
        }).then(connection => {

            // here you can start to work with your entities
        }).catch(err => {
            console.log(err);

        });



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


let index = require('./api/routes/index');
app.use('/', index);

let currency = require('./api/routes/currencyRoutes');
app.use('/api/:version/currencies', currency);

let sync = require('./api/routes/syncRoutes');
app.use('/api/:version/sync', sync);

app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});

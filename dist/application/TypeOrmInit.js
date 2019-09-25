"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Currency_1 = require("../entities/Currency");
const Version_1 = require("../entities/Version");
class TypeOrmInit {
    constructor() {
        console.log(1);
        typeorm_1.createConnection({
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
        }).catch(err => {
            // If AlreadyHasActiveConnectionError occurs, return already existent connection
            if (err.name === "AlreadyHasActiveConnectionError") {
                const existentConn = typeorm_1.getConnectionManager().get("default");
                console.log(existentConn);
                return existentConn;
            }
            else {
                console.log(err);
            }
            console.log(err);
        });
        new Currency_1.Currency();
        new Version_1.Version();
    }
    init() {
        new Currency_1.Currency();
        new Version_1.Version();
    }
}
exports.default = TypeOrmInit;
//# sourceMappingURL=TypeOrmInit.js.map
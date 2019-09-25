
import { createConnection, getConnectionManager } from "typeorm";
import { Currency } from "../entities/Currency";
import { Version } from "../entities/Version";

export default class TypeOrmInit {

    constructor() {
        console.log(1)
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
        }).catch(err => {
             // If AlreadyHasActiveConnectionError occurs, return already existent connection
                if (err.name === "AlreadyHasActiveConnectionError") {
                    const existentConn = getConnectionManager().get("default");
                    console.log(existentConn);
                    return existentConn;
                }else{
                    console.log(err);
                }
                console.log(err);
        });

        new Currency();
        new Version();
    }

    init(){

        new Currency();
        new Version();
    }
}
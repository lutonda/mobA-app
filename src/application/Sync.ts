
import { createConnection, getConnectionManager } from "typeorm";
import { Currency } from "../entities/Currency";
import { Version } from "../entities/Version";
import { Source } from "./Source";

export default class Sync {

    constructor() {}

    import = async function(){
        console.log(2);

        let s=new Source('V1')
        let final:any=await s.getAll();

        let version : Version =new Version();
            version.version=1;
            await version.save();
            
        let currencies:Array<Currency>=[];
        let rates : Array<any> = Object.keys(final.rates).map(i => [i,final.rates[i]])
        rates.forEach( async (rate) => {

            let currency : Currency =new Currency();
            currency.money=rate[0];
            currency.value=rate[1];
            //currency.version(version);
            await currency.save();
            currencies.push(currency);
            console.log(currency);
        });

        //console.log(final);

        return currencies
    }
}
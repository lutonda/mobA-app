import { Currency }  from "../entities/Currency";

export class CurrencyApp {

    constructor() {}

    static async convert(from:any ,to: any, amount: number=1) {

        let fromCurrency: Currency = await Currency.findOne({money:from});
        let toCurrency: Currency = await Currency.findOne({money:to});

        let final= amount / (fromCurrency.value/toCurrency.value)

        return final;
    }
}
import { Currency } from "../../entities/Currency";
import { Source } from "../../application/Source";
import { CurrencyApp } from "../../application/CurrencyApp";

// Display detail page for a specific Author.
exports.getOne = async function(req, res) {

    let currency = await Currency
                            .findOne({money: req.params.id})

    res.send(currency);
};

// Display the conversion
exports.getFromTo = async function(req, res) {

    let final:any = await CurrencyApp
                                .convert(
                                    req.query.from,
                                    req.query.to,
                                    req.query.amount
                                );

    res.send([final]);

};

// Display Author create form on GET.
exports.getAll = async function(req, res) {
    
    let final={};

    res.send(final);
};

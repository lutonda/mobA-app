import { Currency } from "../../entities/Currency";
import { Source } from "../../application/Source";

// Display detail page for a specific Author.
exports.getOne = async function(req, res) {

    let currency = await Currency.findOne({money:req.params.id})

    res.send(currency);
};

// Display Author create form on GET.
exports.getAll = async function(req, res) {
    let final={};

    res.send(final);
};

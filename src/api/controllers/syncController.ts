import { Currency } from "../../entities/Currency";
import { Source } from "../../application/Source";
import Sync from "../../application/Sync";

// Display detail page for a specific Author.
exports.getOne = function(req, res) {

    let currency = Currency.findOne({money:req.params.id})
    res.send(currency);
};

// Display Author create form on GET.
exports.getAll = async function(req, res) {
    let sync= new Sync()
    //let final=await sync.import()
    let final=await Currency.find();

    res.send(final);
};

// Display Author create form on GET.
exports.setAll = async function(req, res) {
    let sync= new Sync()
    console.log(0)

    res.send(await sync.import());
};
import { Currency } from "../../entities/Currency";
import { Source } from "../../application/Source";

// Display detail page for a specific Author.
exports.getOne = function(req, res) {
    res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
};

// Display Author create form on GET.
exports.getAll = async function(req, res) {
    console.log('zik')
    let s=new Source('V1')
    let final=await s.getAll();
    console.log(final);
    res.send(final);
};

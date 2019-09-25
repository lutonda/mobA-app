var request = require('request');
const config = {
    xe: {
        url: 'http://data.fixer.io/api/latest?access_key=73aec86fd31ba205e1a5f924e542fd43',
        endpoint: 'latest',
        access_key: '73aec86fd31ba205e1a5f924e542fd43'
    }
};
let getOne = function () {
};
let getAll = function () {
    request(config.xe, { json: true }, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        console.log(body);
    });
};
//# sourceMappingURL=CurrencySource.js.map
var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.json('wait a while');
});


module.exports = router ;
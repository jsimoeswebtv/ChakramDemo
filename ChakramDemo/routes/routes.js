var express = require('express');
var router = express.Router();


// define the home page route
router.get('/sum', function (req, res) {
    var num1 = parseInt(req.param('num1'),10);
    var num2 = parseInt(req.param('num2'),10);
    var result = num1 + num2;
    var jsonObject = {
        "result": result
    };
    res.json(jsonObject);
});
router.get('/sub', function (req, res) {
    var num1 = parseInt(req.param('num1'), 10);
    var num2 = parseInt(req.param('num2'), 10);
    var result = num1 - num2;
    var jsonObject = {
        "result": result
    };
    res.json(jsonObject);
});

router.get('/mul', function (req, res) {
    var num1 = parseInt(req.param('num1'), 10);
    var num2 = parseInt(req.param('num2'), 10);
    var result = num1 * num2;
    var jsonObject = {
        "result": result
    };
    res.json(jsonObject);
});
// define the about route
router.get('/about', function (req, res) {
    res.send('About ');

});

module.exports = router;
var express = require('express');
var router = express.Router();



router.get('/sum', function (req, res) {
    /// <summary>Sum 2 numbers function</summary>
    /// <param name="num1" type="Number">first number</param>
    /// <param name="num2" type="Number">second number</param>
    /// <returns type="Number">Sum of number1 plus number 2</returns>

    var num1 = parseInt(req.param('num1'),10);
    var num2 = parseInt(req.param('num2'), 10);

    var result = num1 + num2;

    var jsonObject = {
        "Operation":"Sum",
        "Num1": num1,
        "Num2":num2,
        "result": result
    };
    res.json(jsonObject);
});


router.get('/sub', function (req, res) {
    /// <summary>Subtracts 2 numbers function</summary>
    /// <param name="num1" type="Number">first number</param>
    /// <param name="num2" type="Number">second number</param>
    /// <returns type="Number">Subtract  number2 to number 1</returns>

    var num1 = parseInt(req.param('num1'), 10);
    var num2 = parseInt(req.param('num2'), 10);

    //wrong subtraction
    var result = num1 - num2;

    var jsonObject = {
        "Operation": "Subtract",
        "Num1": num1,
        "Num2": num2,
        "result": result
    };
    res.json(jsonObject);
});


router.get('/mul', function (req, res) {
    /// <summary>multiplies 2 numbers function</summary>
    /// <param name="num1" type="Number">first number</param>
    /// <param name="num2" type="Number">second number</param>
    /// <returns type="Number">Multiplies number1 by number 2</returns>

    var num1 = parseInt(req.param('num1'), 10);
    var num2 = parseInt(req.param('num2'), 10);

    var result = num1 * num2;

    var jsonObject = {
        "Operation": "Multiply",
        "Num1": num1,
        "Num2": num2,
        "result": result
    };
    res.json(jsonObject);
});


module.exports = router;
var chakram = require('..\\node_modules\\chakram\\lib\\chakram.js'),
    expect = chakram.expect;


describe("Api simple operations", function () {
    var num1 = 1000;
    var num2 = 500;
    it("Sum 2 numbers " + num1 + " + " + num2, function () {

        return chakram.get("http://localhost:3000/sum?num1=" + num1 + "&num2=" + num2)
    .then(function (searchResponse) {
            expect(searchResponse).to.have.status(200);
            expect(searchResponse).to.have.json('result', num1 + num2);
            expect(searchResponse).to.have.json('Operation', "Sum");
            return chakram.wait();
        });

    });
    it("Sub 2 numbers " + num1 + " - " + num2, function () {

        return chakram.get("http://localhost:3000/sub?num1=" + num1 + "&num2=" + num2)
    .then(function (searchResponse) {
            expect(searchResponse).to.have.status(200);
            expect(searchResponse).to.have.json('result', num1 - num2);
            expect(searchResponse).to.have.json('Operation', "Subtract");
            return chakram.wait();
        });

    });
    it("Mult 2 numbers " + num1 + " * " + num2, function () {

        return chakram.get("http://localhost:3000/mul?num1=" + num1 + "&num2=" + num2)
    .then(function (searchResponse) {
            expect(searchResponse).to.have.status(200);
            expect(searchResponse).to.have.json('result', num1 * num2);
            expect(searchResponse).to.have.json('Operation', "Multiply");
            return chakram.wait();
        });

    });

});

describe("Api complex operations", function () {
    var num1 = 1000;
    var num2 = 500;
    var num3 = 200;
    it("Sum 2 numbers (" + num1 + " + " + num2 + ") and multiply result by num3 (" + num1 + num2 + " * " + num3 + " )" ,
         function () {

        var result = 0;
        return chakram.get("http://localhost:3000/sum?num1=" + num1 + "&num2=" + num2)
    .then(function (firstResponse) {
            result = firstResponse.body.result;
            return chakram.get("http://localhost:3000/mul?num1=" + num3 + "&num2=" + result);


        })
    .then(function (finalResponse) {
            var final = finalResponse.body.result;
            expect(finalResponse).to.have.json('result', num3 * result);
            return chakram.wait();
        })
    });

    it("multiplies 2 numbers(" + num1 + " * " + num2 + ") and subtract result by num3(" + num1 * num2 + " - " + num3 + " )",
         function () {

        var result = 0;
        return chakram.get("http://localhost:3000/mul?num1=" + num1 + "&num2=" + num2)
    .then(function (firstResponse) {
            result = firstResponse.body.result;
            return chakram.get("http://localhost:3000/sub?num1=" + num3 + "&num2=" + result);


        })
    .then(function (finalResponse) {
            var final = finalResponse.body.result;
            expect(finalResponse).to.have.json('result', num3 - result);
            return chakram.wait();
        })
    });

    it("subtracts 2 numbers(" + num1 + " - " + num2 + ") and subtract result by num3(" + num1 - num2 + " - " + num3 + " )",
         function () {
        
        var result = 0;
        return chakram.get("http://localhost:3000/sub?num1=" + num1 + "&num2=" + num2)
    .then(function (firstResponse) {
            result = firstResponse.body.result;
            return chakram.get("http://localhost:3000/sub?num1=" + num3 + "&num2=" + result);


        })
    .then(function (finalResponse) {
            var final = finalResponse.body.result;
            expect(finalResponse).to.have.json('result', num3 - result);
            return chakram.wait();
        })
    });
});
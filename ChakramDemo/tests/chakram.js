var chakram = require('..\\node_modules\\chakram\\lib\\chakram.js'),
    expect = chakram.expect;


describe("Api", function () {
    
    it("Sum 2 numbers", function () {
        var num1 = 100;
        var num2 = 500;
        return chakram.get("http://localhost:3000/sum?num1=" + num1 + "&num2=" + num2)
    .then(function (searchResponse) {
            
            expect(searchResponse).to.have.json('result', num1+num2);
        });
    
    });
    it("Sub 2 numbers", function () {
        var num1 = 1000;
        var num2 = 500;
        return chakram.get("http://localhost:3000/sub?num1=" + num1 + "&num2=" + num2)
    .then(function (searchResponse) {
            
            expect(searchResponse).to.have.json('result', num1 - num2);
        });
    
    });
    it("Mult 2 numbers", function () {
        var num1 = 100;
        var num2 = 500;
        return chakram.get("http://localhost:3000/mul?num1=" + num1 + "&num2=" + num2)
    .then(function (searchResponse) {
            
            expect(searchResponse).to.have.json('result', num1 * num2);
        });
    
    });
    
});
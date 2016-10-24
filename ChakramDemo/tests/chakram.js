var chakram = require('..\\node_modules\\chakram\\lib\\chakram.js'),
    expect = chakram.expect;
describe("Random User API", function () {
    var apiResponse;
    
    before(function () {
        apiResponse = chakram.get("http://freegeoip.net/json/yahoo.com");
        
        return apiResponse;
    });
    
    
    it("should return 200 on success", function () {
        
        return expect(apiResponse).to.have.status(200);
    });
    it("actual body1", function () {
    
    
    
    });
    it("actual body2", function () {
    
     
    
    });
    it("actual body3", function () {
    
     
    
    });
    it("actual body4", function () {
    
     
    
    });
});

describe("Chakram", function () {
    
    it("should support sequential API interaction", function () {
        var artist = "Notorious B.I.G.";
        return chakram.get("https://api.spotify.com/v1/search?q=" + artist + "&type=artist")
    .then(function (searchResponse) {
            var bigID = searchResponse.body.artists.items[0].id;
            return chakram.get("https://api.spotify.com/v1/artists/" + bigID + "/top-tracks?country=GB");
        })
    .then(function (topTrackResponse) {
            var topTrack = topTrackResponse.body.tracks[0];
            expect(topTrack.name).to.contain("Old Thing Backy");
        });
    });
    it("should support sequential API interaction", function () {
        var artist = "Notorious B.I.G.";
        return chakram.get("https://api.spotify.com/v1/search?q=" + artist + "&type=artist")
    .then(function (searchResponse) {
            var bigID = searchResponse.body.artists.items[0].id;
            return chakram.get("https://api.spotify.com/v1/artists/" + bigID + "/top-tracks?country=GB");
        })
    .then(function (topTrackResponse) {
            var topTrack = topTrackResponse.body.tracks[0];
            expect(topTrack.name).to.contain("Old Thing Back");
        });
    });
});
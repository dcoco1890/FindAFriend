var friends = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        console.log(req.body);
        // friends.push(req.body);
        // res.json(req.body);
        var newName = req.body.name;
        var newImg = req.body.photo;
        var newScores = req.body.scores.map(x => Number(x));
        console.log(newScores);
        console.log(newImg, newName);
        res.send(true);
    })
}
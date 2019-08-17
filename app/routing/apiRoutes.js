var friends = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        console.log(req.body);

        // res.json(req.body);
        var newName = req.body.name;
        var newImg = req.body.photo;
        var newScores = req.body.scores.map(x => Number(x));
        var newFriend = {
            "name": newName,
            "photo": newImg,
            scores: newScores
        };

        var bestMatch = 0; // best match (i index of friend in list)
        var maxDiff = 40; // maximum amount of difference in scores

        for (var i = 0; i < friends.length; i++) {
            var totDiff = 0;
            for (var j = 0; j < friends[i].scores.length; j++) {
                var diff = Math.abs(newScores[j] - friends[i].scores[j]);
                totDiff += diff;
            }
            // if the total score differential is less than the max (it will be on at least the first run)
            // then match index is i, and the new score to beat (max diff) is set to the total difference that was found
            if (totDiff < maxDiff) {
                bestMatch = i;
                maxDiff = totDiff;
            }
        }


        friends.push(newFriend);

        res.send(friends[bestMatch]);
    })
}
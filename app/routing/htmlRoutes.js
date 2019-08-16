var path = require("path");


module.exports = function(app) {


    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // when the Github Repo page is clicked, it redirects to my Gihub page for the project
    app.get("/git", function(req, res) {
        res.redirect("https://github.com/dcoco1890/FindAFriend");
    })
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}
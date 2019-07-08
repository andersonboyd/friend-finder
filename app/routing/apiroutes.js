var friendsData = require("../app/data/friends");

module.exports = function(app){
    app.get("../app/data/friends", function(req, res){
        res.json(friendsData);
    });

    app.post("../app/data/friends", function(req, res){
        friendsData.push(req.body);
        res.json(true);
        //check compatibility here
    });
}
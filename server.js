var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("App listening on port " + port);
});

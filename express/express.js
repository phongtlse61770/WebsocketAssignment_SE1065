var express = require("express");
var path = require("path");
app = express();
var appRoot = path.dirname(require.main.filename);

app.use('/static', express.static(path.join(appRoot, "node_modules/jquery/dist")));
app.use('/', express.static(path.join(appRoot, "express","view")));

app.get("/", function (req, res) {
    res.sendFile("index.html",
        {
            root:path.join(__dirname,"view")
        })
});



function start(port) {
    app.listen(port, function () {
        console.log("Express address: localhost:" + port);
    });
}

module.exports = {
    start: start
};
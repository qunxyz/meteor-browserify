var path = require("path");
var url = require("url");

var output = [];

var urlPrefix = "https://raw.githubusercontent.com/island205/browserify-loader/master/";

// Base file
output.push({
    file: "browserify-loader.min.js",
    url: url.resolve(urlPrefix, "browserify-loader.min.js"),
    bare: true
});

console.log(JSON.stringify(output, null, "    "));

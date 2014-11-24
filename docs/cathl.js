// override example:
//module.exports = function(code, lang) {
//    var content = require('highlight.js').highlightAuto(code).value;
//    if (content) {
//        content = content.split("*").join("\\*");
//    }
//    return '<pre><code class="hljs ' + (lang || "") + '">' + (content || "") + '</code></pre>';
//};
//
//module.exports.css = function() {
//    return '<style>' + require("fs").readFileSync(__dirname + '/node_modules/highlight/lib/vendor/highlight.js/styles/github.css') + '</style>';
//};


    module.exports.css = function() {
        return '<style>' + require("fs").readFileSync(__dirname + '/override.css') + '</style>';
    };
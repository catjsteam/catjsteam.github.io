var _fs = require("fs.extra"),
    _path = require("path"),
    _lineReader = require('line-reader');

require('package-script').spawn([

    {
        command: "generate-md",
        args: ["--layout", "mixu-page", "--input", "./", "--output", "./", "--highlight-hljs", "mds-hljs", "--highlight-cathl", "./cathl.js"]

    }
], {log: true}, function () {
        console.info("HTML docs generated.");


        var walker = _fs.walk(_path.resolve("./")),
            map = {};

        // file, files, directory, directories
        walker.on("file", function (root, stat, next) {
            
            var filepath = _path.join(root, stat.name),
                extname;           
            
            if (root.indexOf("node_modules") === -1 && root.indexOf("assets") === -1 ) {
                
                extname = _path.extname(stat.name);
                extname = extname.substring(1);
                
                if (extname === "html") {                   

                    // read all lines:
                    _lineReader.eachLine(filepath, function(line) {

                        var goto = "http://catjsteam.github.io/docs/user_guide.html",
                            version = "0.4.26";

                        if (line.indexOf("<h1>CatJS") !== -1) {
                            line = line.split("<h1>CatJS").join("<h1>CatJS " + version);
                        } 
                        if (line.indexOf(",<style>") !== -1) {
                            line = line.split(",<style>").join("<style>");
                        }
                        if (line.indexOf("</body>") !== -1) {
                            line = line.split("</body>").join("<div style=\"position: fixed; padding: 10px; top: 0; right:0; width:100%; text-align:right; cursor:pointer;\" onclick=\"window.location.href='"+ goto + "'\" > <span style=\"position: relative; right: 10px; top: 10px; padding-top:10px; font-size:10px; color:#444444\">Applications That Test Themselves</span> <img align=\"right\" width=\"50\" height=\"24\" src=\"https://raw.githubusercontent.com/catjsteam/catjs/master/resources/images/Logo48x48-01.png\"></div><script> (function(){ for(var els = document.getElementsByTagName ('a'), i = els.length; i--;) { var elt = els[i]; elt.setAttribute(\"target\",\"_blank\"); if (elt.href.lastIndexOf(\".md\") !== -1) {elt.href = elt.href.split(\".md\").join(\".html\") } } })(); </script> <script> (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){ (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) })(window,document,'script','//www.google-analytics.com/analytics.js','ga'); ga('create', 'UA-53626536-1', 'auto'); ga('send', 'pageview');</script></body>");
                        }
                        
                        if (!map[filepath]) {
                            map[filepath] = [];
                        }
                        map[filepath].push(line);

                    }).then(function () {                           
                            console.log("[builder] evaluating file: ", filepath);                        
                            _fs.writeFileSync(filepath, map[filepath].join("\n"));
                        });
                    
                }
                
            }

            next();
        });

       
    }
);
  


/**
 * RequireJS Main Configuration
 */
require.config({
    baseUrl:"js",

    paths: {
        // libs
        "jquery":"../lib/jquery/jquery-min",
        "underscorejs":"../lib/underscorejs/underscore",
        "site": "site",
        "utils": "utils"
    },

    shim: {
        underscorejs: {
            exports: '_'
        }
    },

    out:"cat-site.js",
    name:"cat-site"

});

window.onload = function() {


    require([
        "jquery",
        "site"

    ], function ($, site) {

        var config;
        $( document ).ready(function() {
            // Handler for .ready() called.
            var contestelt = $(".cat .contest"),
                to;

            to = setTimeout(function() {
                
                contestelt.addClass("element-animation");
                clearTimeout(to);
                
                setInterval(function(){
                    if (contestelt.hasClass("element-animation")) {
                        contestelt.removeClass("element-animation");
                    } else {
                        contestelt.addClass("element-animation");
                    }
                }, 6000);
                
            }, 1000);
            
        });

        $.browser = { whoami: navigator.sayswho= (function(){
            var ua= navigator.userAgent, tem,
                M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*([\d\.]+)/i) || [];
            if(/trident/i.test(M[1])){
                tem=  /\brv[ :]+(\d+(\.\d+)?)/g.exec(ua) || [];
                return 'IE '+(tem[1] || '');
            }
            M= M[2]? [M[1], M[2]]:[navigator.appName, navigator.appVersion, '-?'];
            if((tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
            return M.join(' ');
        })() };
        $.browser.device = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));

        if ($.browser.device) {
            // device in specific
            config = {
                alignLeft: 200
            };
        }

        if (site) {
            site.initialize(config);
        }
    });
};
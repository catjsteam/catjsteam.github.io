
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
        $.browser = {};
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
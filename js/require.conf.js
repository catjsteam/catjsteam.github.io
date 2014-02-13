
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
        },
        'tween': {
            deps: ['three']
        },
        'css3renderer': {
            deps: ['three']
        },
        'trackball': {
            deps: ['three']
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

        $.browser = {};
        $.browser.device = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));

        if ($.browser.device) {
            console.log( $.browser.device);

        } else {

        }

        if (site) {
            site.initialize();
        }
    });
};
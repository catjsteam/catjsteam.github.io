/**
 * Main site module
 * TODO Split the module with subclasses functionality
 *
 */
//define(["jquery", "underscorejs", "utils", "3D.dad"], function ($, _, utils, EDdad) {
define(["jquery", "utils", "examples"], function ($, utils, examples) {

    var _initBool = false,
        _downloadTubeBHeightConst = 0,
        _footerMachine,
        _ground,
        _groundHeightConst,
        _groundLeft,
        _download,
        _downloadTubeB,
        _downloadTubeC,
        _workspacecontent,
        _workspacecontentHTML,
        _catworkspace,
        _bulletgroupEtubeC,
        _catelt,
        calccontent = 0,
        _scrollTop = 0,
        _lastAction = 0,
        _scrollHeight = 0,
        _scrollWidth = 0,
        _timeouthandleScrollDown = 0,
        _timeouthandleFrontPage,
        _navigation = {
            home: _loadDescription,
            team: _loadTeam
        },
        _module,
        tvscale = 1,
        _footerResize,
        _tvresize,
        _mobileConfig,
        tablet = $(".tablet-device");

    _.templateSettings = {
        interpolate: /\{\{(.+?)\}\}/g
    };

    function _getDimensions(elt) {

        var bb = elt.getBoundingClientRect();

        return {

            width: bb.width,
            height: bb.height
        }
    }

    function _getClientDimensions(elt) {

        // using that due to issue with jquery height on scroll on firefox browse
        if (!elt) {
            return {

                width: 0,
                height: 0
            }

        }

        return {

            width: elt.clientWidth,
            height: elt.clientHeight
        }
    }

    /**
     * load the data
     *
     * @private
     */
    function _load(callback) {

        _navigate("home", callback);

        $("#navHome").click(function () {
            _module.restoreWorkspace();
            _module.home();
            $('body,html').animate({scrollTop: 400}, 500);
        });
        $("#navTeam").click(function () {
            _module.restoreWorkspace();
            _module.team();
            $('body,html').animate({scrollTop: 400}, 500);
        });
        $("#catLogo").click(function () {
            _module.restoreWorkspace();
            _module.home();
            $('body,html').animate({scrollTop: 400}, 500);
        });


        $('body,html').css("opacity", "1");

    }

    function _navigate(to, callback) {
        var nav = (to ? _navigation[to] : undefined);
        if (nav) {
            nav.call(this, callback);
        }
    }

    function _loadTeam(callback) {
        $.ajax({
            url: "js/data/team.json",
            method: 'GET',
            async: false,
            contentType: 'application/json',
            success: function (data) {

                var counter = 0,
                    baseTemplate = {
                        bullets: function (item) {
                            var html = "<div class=\"headerX\" >{{title}}</div><div class=\"{{image}}\"></div>" +
                                    "<div class=\"text\" style=\"{{style}}\">{{text}}</div>",
                                template = _.template(html);

                            return (template ? template(item) : "");
                        }
                    },

                    bullets = [
                        {
                            selector: ".bulletGroupA .text-section",
                            template: baseTemplate.bullets
                        },
                        {
                            selector: ".bulletGroupB .text-section",
                            template: baseTemplate.bullets
                        },
                        {
                            selector: ".bulletGroupC .text-section",
                            template: baseTemplate.bullets
                        },
                        {
                            selector: ".bulletGroupD .text-section",
                            template: baseTemplate.bullets
                        },
                        {
                            selector: ".bulletGroupE .text-section",
                            template: baseTemplate.bullets
                        }
                    ];

                if (data) {

                    bullets.forEach(function (bullet) {
                        var item,
                            template,
                            elt;

                        // prepare data
                        item = data[counter];
                        item.bulletNumber = counter + 1;

                        // template functionality call
                        template = bullet.template(item);

                        // element assignment
                        elt = $(bullet.selector);
                        elt.css("top", "-30px");
                        if (elt) {
                            elt.html(template);
                        }

                        counter++;
                    });
                }

                if (callback) {
                    callback.call(this);
                }

            }
        });
    }

    /**
     * Load the description data
     *
     * @param func
     * @private
     */
    function _loadDescription(callback) {
        $.ajax({
            url: "js/data/description.json",
            method: 'GET',
            async: false,
            contentType: 'application/json',
            success: function (data) {

                var counter = 0,
                    baseTemplate = {
                        bullets: function (item) {
                            var html = "<div class=\"headerX\"><span class=\"headerX-bullet\">{{bulletNumber}}]</span>{{title}}</div>" +
                                    "<div class=\"text\" >{{text}}</div>",
                                template = _.template(html),
                                line = [];

                            if (_.isArray(item.text)) {

                                utils.createBulletsHTML(item.text, line);
                                return (template ? template({
                                    title: item.title,
                                    bulletNumber: item.bulletNumber,
                                    text: line.join("")
                                }) : "");

                            } else {
                                return (template ? template(item) : "");
                            }
                        }
                    },

                    bullets = [
                        {
                            selector: ".bulletGroupA .text-section",
                            template: baseTemplate.bullets
                        },
                        {
                            selector: ".bulletGroupB .text-section",
                            template: baseTemplate.bullets
                        },
                        {
                            selector: ".bulletGroupC .text-section",
                            template: baseTemplate.bullets
                        },
                        {
                            selector: ".bulletGroupD .text-section",
                            template: baseTemplate.bullets
                        },
                        {
                            selector: ".bulletGroupE .text-section",
                            template: baseTemplate.bullets
                        }
                    ];

                if (data) {

                    bullets.forEach(function (bullet) {
                        var item,
                            template,
                            elt;

                        // prepare data
                        item = data[counter];
                        item.bulletNumber = counter + 1;

                        // template functionality call
                        template = bullet.template(item);

                        // element assignment
                        elt = $(bullet.selector);
                        if (elt) {
                            elt.html(template);
                        }

                        counter++;
                    });
                }

                if (callback) {
                    callback.call(this);
                }

            }
        });
    }

    /**
     * Site initialization
     *
     * @private
     */
    function _init() {

        _initBool = true;

        var video = $(".desktop-device").find(".watchvideo"),
            examples, livevideo;


        tablet.find(".header").append('<a id="livedemo" class="text" href="examples/jqm/index.html" target="_blank">Live Demo</a>');

        if (false) {//if (!_mobileConfig) {
            examples = tablet.find(".header").append('<a id="examples" class="text" href="javascript:void(0)">Examples</a>');
            $("#examples").click(function () {
                examples.init();
                _module.cleanWorkspace();
                $('body,html').animate({scrollTop: 400}, 500);
            });
        }

        video.bind("click", function () {
            tvscale = 1;
            if (!_mobileConfig) {
                _module.watch("on");
            } else {
                window.open("http://www.youtube.com/watch?v=O3Bwn3iH5CQ&autoplay=1", "_blank");
            }
        });

        _catelt = $(".cat");
        _workspacecontent = $(".workspacecontent");
        _catworkspace = $(".catworkspace");
        _footerMachine = $(".footerMachine");
        _ground = _footerMachine.find(".ground");
        _groundLeft = parseInt(_ground.css("left"));
        _groundHeightConst = _ground.height();
        _download = $(".download");
        _downloadTubeB = _download.find(".tubeB");
        _downloadTubeC = _download.find(".tubeC");
        _bulletgroupEtubeC = $(".bulletGroupE").find(".tubeC");


        if (!_footerResize) {

            _footerResize = function () {

                var dh,
                    footerHeight = 0,
                    footerMachineHeight,
                    downloadTubeBHeight,
                    groundHeight,
                    groundHeightOffset = -23,
                    bodyDimension,
                    bodyRealDimension;

                function _reset() {
                    _downloadTubeB.removeClass("transitionHeightSlow");
                    _workspacecontent.removeClass("transitionTopSlow");
                    _workspacecontent.removeClass("transitionTop");
                    _workspacecontent.removeClass("transitionTopTiny");
                    _footerMachine.removeClass("transitionTopSlow");
                    _downloadTubeC.removeClass("transitionHeight");
                    _downloadTubeC.removeClass("transitionTop");
                    _footerMachine.removeClass("transitionTop");
                    _footerMachine.removeClass("transitionTopTiny");
                    _downloadTubeB.removeClass("transitionHeight");
                    _downloadTubeB.removeClass("transitionHeightTiny");
                    _downloadTubeB.removeClass("transitionOpacity");
                    _ground.css("height", (_groundHeightConst) + "px");
                }


                _lastAction = _scrollTop;

                // set the initial vertical tube height
                if (!_downloadTubeBHeightConst) {
                    _downloadTubeBHeightConst = new Number(_downloadTubeB.height());
                }

                $(".catheader").css("width", ($("body")[0].scrollWidth) + "px");
                _ground.css("width", ($("body")[0].scrollWidth) + "px");

                if (_footerMachine) {

                    bodyDimension = _getClientDimensions(document.body);
                    bodyRealDimension = _getDimensions(document.body);

                    _scrollHeight = bodyDimension.height;
                    _scrollWidth = bodyDimension.width;

                    calccontent = ( _mobileConfig ? _mobileConfig.alignLeft : ((_scrollWidth > 1000 ? ( ((_scrollWidth - 1000) / 2) >= 150 ? 200 : ((_scrollWidth - 1000) / 2) ) : 50)) );
                    _catworkspace.css("left", calccontent + "px");
                    _ground.css("left", (-560 + (200 - (calccontent))) + "px");

                    // get the page height
                    dh = (_scrollTop || _mobileConfig ? bodyRealDimension.height : _scrollHeight);

                    // calc the main element
                    footerMachineHeight = _footerMachine.height();
                    groundHeight = _groundHeightConst + groundHeightOffset;
                    footerHeight = dh - (footerMachineHeight + groundHeight);
                    downloadTubeBHeight = _downloadTubeBHeightConst + (footerHeight - 570);

                    // resize of the front page (scroll == 0) - keep the page in proportions
                    if (!_scrollTop && footerHeight < 570) {
                        footerHeight = 570;
                        downloadTubeBHeight = _downloadTubeBHeightConst;
                    }


                    if (!_scrollTop && !_mobileConfig) {

                        _timeouthandleFrontPage = setTimeout(function () {

                            _reset();

                            setTimeout(function () {
                                _downloadTubeB.css("opacity", .2);
                                _bulletgroupEtubeC.css("opacity", 1);
                            }, 1000);

                            _footerMachine.addClass("transitionTopTiny");
                            _downloadTubeB.addClass("transitionHeight");
                            _downloadTubeC.addClass("transitionHeight");
                            _downloadTubeC.addClass("transitionTop");
                            _downloadTubeB.addClass("transitionTop");
                            _downloadTubeB.addClass("transitionOpacity");
                            _ground.css("height", (_groundHeightConst + _scrollHeight ) + "px");
                            _workspacecontent.addClass("transitionTop");
                            _workspacecontent.css("top", (_scrollHeight + "px"));
                            _downloadTubeC.css("height", (downloadTubeBHeight + "px"));

                        }, 500);


                    } else {

                        if (_lastAction > 0) {
                            if (_downloadTubeB.css("opacity") === "1") {
                                _downloadTubeB.css("opacity", .2);
                            }
                        }
                        _timeouthandleScrollDown = setTimeout(function () {

                            _reset();

                            setTimeout(function () {
                                _downloadTubeB.css("opacity", 0);
                            }, 1000);

                            // scroll down - scroll > 0
                            _downloadTubeC.addClass("transitionHeight");
                            _footerMachine.addClass("transitionTop");
                            _downloadTubeB.addClass("transitionTop");
                            _downloadTubeB.addClass("transitionHeight");
                            _downloadTubeB.addClass("transitionOpacity");
                            _downloadTubeC.css("height", (_downloadTubeBHeightConst + "px"));

                            _workspacecontent.addClass("transitionTop");
                            _workspacecontent.css("top", "0px");

                        }, 500);


                    }

                    _downloadTubeB.css("height", (downloadTubeBHeight + "px"));
                    _footerMachine.css("top", (footerHeight + "px"));

                }
            }
        }

        function _scroller(e) {

            var elt = $("body"); //(e.target ? $(e.target) : $(e));
            if (elt) {
                _scrollTop = elt.scrollTop();
            }

            _footerResize();
        }

        $(document).bind("scroll", _scroller);
        $(window).bind("resize", _footerResize);

        _module.home(function () {
            _scroller(document.getElementById("container"));
        });

    }

    _module = {

        initialize: function (config) {

            console.log("[cat site] Initialized");
            _mobileConfig = config;
            _load(_init);

            //EDdad.startup(function(config) {});

        },

        listeners: function () {

            if ($("#catvideotvback")) {
                $("#catvideotvback").empty();
                $("#catvideotvback").remove();
            }

            if ($("#catvideotv")) {
                $("#catvideotv").empty();
                $("#catvideotv").remove();
            }

            $(window).unbind("resize");
            $(window).bind("resize", _footerResize);
        },

        cleanWorkspace: function() {
            _workspacecontentHTML = _workspacecontent.detach();
        },

        restoreWorkspace: function() {
            if (_workspacecontentHTML) {
                _footerMachine.before(_workspacecontentHTML);
            }
        },

        getWorkspaceContent: function() {
            return _workspacecontent;
        },

        team: function (callback) {
            _navigate("team", callback);
        },

        home: function (callback) {
            _navigate("home", callback);
        },

        watch: function (mode) {

            var desktop = $(".desktop-device"),
                container = $("#container"),
                text = desktop.find(".text"),
                _tvshow, _tvoff;

            _tvresize = function () {

                var ww, wh;

                wh = parseInt(document.body.clientHeight);
                ww = parseInt(document.body.clientWidth);

                desktop.css({
                    'width': ww + "px",
                    'height': wh + "px"
                });
            };

            _tvshow = function () {

                var desktopDimension,
                    ww, w,
                    wh, h;

                desktopDimension = desktop.get(0).getBoundingClientRect();
                tvscale = 5;

                h = parseInt(desktopDimension.height);
                wh = parseInt(document.body.clientHeight);
                w = parseInt(desktopDimension.width);
                ww = parseInt(document.body.clientWidth);

                desktop.css({
                    '-moz-transform': 'scale(' + tvscale + ')',
                    '-webkit-transform': 'scale(' + tvscale + ')',
                    '-o-transform': 'scale(' + tvscale + ')',
                    '-ms-transform': 'scale(' + tvscale + ')',
                    'transform': 'scale(' + tvscale + ')'
                });

                desktop.css("top", "0px");

                if (w < ww) {
                    desktop.css("left", (Math.abs(ww - w) / 2) + "px");
                } else {
                    desktop.css("left", "0px");
                }

                if (h >= (wh)) {

                    if (h > (wh + 50)) {

                        tvscale -= 0.2;
                        setTimeout(_tvshow, 100);
                    }

                    if (!$("#catvideotv").get(0)) {

                        desktop.css({
                            'width': ww + "px",
                            'height': wh + "px",
                            'left': '0px',
                            'top': '0px',
                            '-moz-transform': 'scale(1)',
                            '-webkit-transform': 'scale(1)',
                            '-o-transform': 'scale(1)',
                            '-ms-transform': 'scale(1)',
                            'transform': 'scale(1)'
                        });

                        $(desktop).find(".screen").before("<div id=\"catvideotvback\" class=\"watchvideo\">&lt; BACK &gt;</div>");
                        $(desktop).find(".screen").before('<video autoplay  id="catvideotv" x-webkit-airplay="allow" style="z-index:1000000; position:absolute;" > <source src="resources/cathd.mp4" type="video/mp4">Your browser does not support this HTML5 video tag.</video>');

                        setTimeout(function () {


                            $("#catvideotv").get(0).volume = 0.6;
                            $("#catvideotv").css("border", "1px solid #ffffff");
                            $("#catvideotv").css("width", "95%");
                            $("#catvideotv").css("height", "90%");
                            $("#catvideotv").css("position", "absolute");
                            $("#catvideotv").css("left", "30px");
                            $("#catvideotv").css("top", "18px");
                            $("#catvideotv").attr("controls", "true");

                            //$("#catvideotvback").unbind("click");
                            $("#catvideotvback").bind("click", function () {

                                $("#catvideotv").css("opacity", "0");
                                $("#catvideotvback").css("opacity", "0");


                                tvscale = 4;
                                desktop.css({
                                    '-moz-transform': 'scale(' + tvscale + ')',
                                    '-webkit-transform': 'scale(' + tvscale + ')',
                                    '-o-transform': 'scale(' + tvscale + ')',
                                    '-ms-transform': 'scale(' + tvscale + ')',
                                    'transform': 'scale(' + tvscale + ')',
                                    'width': "420px",
                                    'height': "250px",
                                    'left': '0px',
                                    'top': '0px'
                                });

                                setTimeout(function () {
                                    _module.watch("off");

                                }, 100);
                            });

                        }, 500);
                    }

                } else {


                    setTimeout(_tvshow, 20);
                }
            };

            _tvoff = function () {

                var desktopDimension = desktop.get(0).getBoundingClientRect(),
                    dock = tablet.get(0).getBoundingClientRect(),
                    h = parseInt(desktopDimension.height);

                if (h > 260) {
                    tvscale = 1;

                    desktop.css({
                        '-moz-transform': 'scale(' + tvscale + ')',
                        '-webkit-transform': 'scale(' + tvscale + ')',
                        '-o-transform': 'scale(' + tvscale + ')',
                        '-ms-transform': 'scale(' + tvscale + ')',
                        'transform': 'scale(' + tvscale + ')'                    });

                    setTimeout(_tvoff, 0);

                } else {
                    _catelt.css("opacity", "1");
                    tvscale = 1;

                    desktop.css({
                        'width': "420px",
                        'height': "250px",
                        'left': (dock.left + 84) + "px",
                        'top': '50px',
                        '-moz-transform': 'scale(' + tvscale + ')',
                        '-webkit-transform': 'scale(' + tvscale + ')',
                        '-o-transform': 'scale(' + tvscale + ')',
                        '-ms-transform': 'scale(' + tvscale + ')',
                        'transform': 'scale(' + tvscale + ')'
                    });

                    setTimeout(function () {
                        desktop.css("left", "");
                        desktop.css("top", "0px");
                        tablet.before(desktop);
                        desktop.find(".body").css("opacity", "1");
                        _catelt.css("opacity", "1");

                        desktop.css({
                            'width': "420px",
                            'height': "250px"
                        });

                    }, 800);

                }

            };

            if (mode === "on") {

                _module.listeners("resize");

                $(window).bind("resize", _tvresize);

                $("body").css("overflow", "hidden");

                setTimeout(function () {

                    desktop.find(".screen").css("opacity", "0");
                    desktop.find(".mask").css("opacity", "0");
                    text.css("opacity", "0");

                    setTimeout(function () {

                        setTimeout(function () {
                            desktop.css("top", "50px");
                            desktop.css("left", (491 + parseInt(_catworkspace.css("left"))) + "px");
                            $("body").append(desktop);
                        }, 100);

                    }, 100);

                    setTimeout(function () {

                        desktop.find(".body").css("opacity", "0");

                        _catelt.css("opacity", "0");
                        _catelt.css("display", "none");

                        setTimeout(_tvshow, 600);

                    }, 270);


                }, 1500);


            } else if (mode === "off") {

                $("body").css("overflow-y", "scroll");
                _catelt.css("display", "");
                desktop.css("left", "690px");
                desktop.css("top", "50px");

                desktop.find(".screen").css("opacity", "1");
                desktop.find(".mask").css("opacity", "1");
                text.css("opacity", "1");

                setTimeout(_tvoff, 400);

                setTimeout(function () {

                    $("#catvideotv").detach();

                    if ($("#catvideotvback")) {
                        $("#catvideotvback").empty();
                        $("#catvideotvback").remove();
                    }

                    if ($("#catvideotv")) {
                        $("#catvideotv").empty();
                        $("#catvideotv").remove();
                    }

                    $(window).unbind("resize");
                    desktop.css({
                        'width': "420px",
                        'height': "250px"
                    });
                }, 1500);


            }
        }
    };

    return _module;
});

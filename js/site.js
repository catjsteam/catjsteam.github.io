/**
 * Main site module
 * TODO Split the module with subclasses functionality
 *
 */
//define(["jquery", "underscorejs", "utils", "3D.dad"], function ($, _, utils, EDdad) {
define(["jquery", "utils", "examples", "userguide", "faq"], function ($, utils, examples, userguide, faq) {

    var _initBool = false,
        _downloadTubeBHeightConst = 0,
        _footerMachine,
        _ground,
        _groundHeightConst,
        _groundLeft,
        _download,
        _downloadTubeB,
        _downloadTubeVisible = false,
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
            team: _loadTeam,
            examples: _loadExamples,
            userguide: _loadUserguide,
            faq: _loadFaq
        },
        _module,
        tvscale = 1,
        _footerResize,
        _tvresize,
        _mobileConfig,
        tablet = $(".tablet-device"),
        _dynamicRoll = false,
        _entityHeight = 0;

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

    function _baseHandler() {
        _module.setDynamicRoll(false);
        _module.mainPipeVisible(false);
        examples.reset();
        examples.remove();
        userguide.reset();
        userguide.remove();
        faq.reset();
        faq.remove();

    }

    /**
     * load the data
     *
     * @private
     */
    function _load(callback) {

        _baseHandler();
        _navigate("home", callback);

        examples.init(_module, _mobileConfig);
        userguide.init(_module, _mobileConfig);
        faq.init(_module, _mobileConfig);

        $("#navHome").click(function () {
            _module.triggerAnalytics("navHomeLink", "click");
            _baseHandler();
            _module.restoreWorkspace();
            _module.home();
            $('body,html').animate({scrollTop: 10}, 500);
        });
        $("#navExamples").click(function () {
            _module.triggerAnalytics("navExamplesLink", "click");
            $("#examples").click();
        });
        $("#navFaq").click(function () {
            _module.triggerAnalytics("navFaqLink", "click");
            $("#userguide").click();
//            $("#faq").click();
        });
        $("#navTeam").click(function () {
            _module.triggerAnalytics("navTeamLink", "click");
            _baseHandler();
            _module.restoreWorkspace();
            _module.team();
            $('body,html').animate({scrollTop: 10}, 500);
        });
        $("#catLogo").click(function () {
            _module.triggerAnalytics("catLogoLink", "click");
            _baseHandler();
            _module.restoreWorkspace();
            _module.home();
            $('body,html').animate({scrollTop: 10}, 500);
        });


        $('body,html').css("opacity", "1");

    }

    function _navigate(to, callback) {
        // set navigation state
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

    function _loadExamples() {
        _module.cleanWorkspace();
        if (!isScrolled()) {
            $('body,html').animate({scrollTop: 10}, 500);
        }
    }

    function _loadUserguide() {
        _module.cleanWorkspace();
        if (!isScrolled()) {
            $('body,html').animate({scrollTop: 10}, 500);
        }
    }

    function _loadFaq() {
        _module.cleanWorkspace();
        $('body,html').animate({scrollTop: 10}, 500);
    }

    function isScrolled() {
        return ( $('body').prop("scrollTop") > 0 );
    }

    /**
     * Site initialization
     *
     * @private
     */
    function _init() {

        _initBool = true;

        var video = $(".desktop-device").find(".watchvideo");



        if (true) {//if (!_mobileConfig) {
            tablet.find(".header").append('<a id="examples" class="text" href="javascript:void(0)">&gt;Examples</a>');
            tablet.find(".header").append('<a id="userguide" class="text" href="javascript:void(0)">&gt;User Guide</a>');
            tablet.find(".header").append('<a id="livedemo" class="text" href="javascript:void(0)">&gt;Live Demo</a>');

            tablet.find(".header").append('<a id="feedback" class="text" href="https://groups.google.com/forum/#!forum/catjs" target="_blank"><div class="ggroup"><span>Contact Us for Help</span></div></a>');
            tablet.find(".header").append('<a id="faq" style="opacity:0" href="javascript:void(0)" target="_blank"></a>');

            $("#livedemo").click(function() {
                _module.triggerAnalytics("liveDemo", "click");
                var win = window.open("examples/jqm/index.html", '_blank');
                win.focus();
            });

            $("#examples").click(function () {
                $('body,html').animate({scrollTop: 10}, 500);
                _module.triggerAnalytics("examplesLink", "click");
                _module.nav2Examples();
            });
            $("#faq").click(function () {
                $('body,html').animate({scrollTop: 10}, 500);
                _module.triggerAnalytics("faqLink", "click");
                 _module.docs();
            });
            $("#userguide").click(function () {
                $('body,html').animate({scrollTop: 10}, 500);
                _module.triggerAnalytics("userguideLink", "click");
                _module.docs();

            });
        }


        if (_mobileConfig) {
            $("#watchvideolink").prop("href", "http://www.youtube.com/watch?v=O3Bwn3iH5CQ&autoplay=1");
            $("#watchvideolink").prop("target", "_blank");

            $("#watchvideolink").bind("click", function () {
                _module.triggerAnalytics("watchVideo", "on");
            });
        } else {
            video.bind("click", function () {
                tvscale = 1;
                _module.triggerAnalytics("watchVideo", "on");
                if (!_mobileConfig) {
                    _module.watch("on");
                }
            });
        }


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
                    if (!_entityHeight) {
                        _entityHeight =  $("body")[0].scrollHeight;
                    }
                    dh = (_scrollTop || _mobileConfig ? (_dynamicRoll ? _entityHeight : bodyRealDimension.height) : _scrollHeight);

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
                                _downloadTubeB.css("opacity", 0);
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
                            if (!_dynamicRoll) {
                                setTimeout(function () {
                                    if (!_downloadTubeVisible) {
                                        _downloadTubeB.css("opacity", 0);
                                    }
                                }, 1000);
                            }

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

        setDynamicRoll: function(bool) {
            _dynamicRoll = bool;
        },

        mainPipeVisible: function(bool) {
            _downloadTubeVisible = bool;
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

        isHome: function() {
            var bool = false;

            if (_lastAction === 0 && !_mobileConfig) {
                bool = true;
            }

            return bool;
        },

        cleanWorkspace: function() {
            _workspacecontentHTML = _workspacecontent.detach();
        },

        restoreWorkspace: function() {
            //remove samples
            $('#samplesContainer').remove();
            if (_workspacecontentHTML) {
                _footerMachine.before(_workspacecontentHTML);
            }
        },

        getWorkspaceContent: function() {
            return _workspacecontent;
        },

        getFooter : function() {
            return _footerMachine;
        },
        team: function (callback) {
            _baseHandler();
            $("body").addClass("catbg");
            _navigate("team", callback);
        },

        home: function (callback) {
            _baseHandler();
            $("body").addClass("catbg");
            _navigate("home", callback);
        },

        nav2Examples: function (callback) {
            _baseHandler();

            _module.mainPipeVisible(true);
            _module.setDynamicRoll(true);

            _entityHeight = examples.getHeight();
            $("body").removeClass("catbg");
            _navigate("examples");
        },
        
        docs: function() {
            _baseHandler();

            _module.mainPipeVisible(true);
            _module.setDynamicRoll(true);

            _entityHeight = userguide.getHeight();
            $("body").removeClass("catbg");
            _navigate("userguide");            
        },

        nav2Faq: function (callback) {
            _baseHandler();

            _module.mainPipeVisible(true);
            _module.setDynamicRoll(true);

            _entityHeight = examples.getHeight();
            _navigate("faq");
        },

        triggerAnalytics : function (action, label) {
            if (_gaq) {
                if (!_mobileConfig) {
                    _gaq.push(['_trackEvent', "CATSite-desktop", action, label]);
                } else {
                _gaq.push(['_trackEvent', "CATSite-mobile", action, label]);
            }

            }
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
                tvscale = 4;

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
                        $(desktop).find(".screen").before('<video autoplay  id="catvideotv" x-webkit-airplay="allow" style="z-index:1000000; position:absolute;" > <source src="resources/cathd.mp4" type="video/mp4">Your browser does not support this HTML5 video tag. <a target="_blank" href="resources/cathd.mp4">Direct Link</a></video>');

                        setTimeout(function () {


                            $("#catvideotv").get(0).volume = 0.6;
                            $("#catvideotv").css("border", "1px solid #ffffff");
                            $("#catvideotv").css("width", "95%");
                            $("#catvideotv").css("height", "90%");
                            $("#catvideotv").css("position", "absolute");
                            $("#catvideotv").css("left", "30px");
                            $("#catvideotv").css("top", "18px");
                            $("#catvideotv").attr("controls", "true");

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
                                    _module.triggerAnalytics("watchVideo", "off");
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

//                    desktop.css({
//                        'width': "420px",
//                        'height': "250px"
//                    });

                    desktop.css({
//                        'width': "420px",
//                        'height': "250px",
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

                        setTimeout(function() {
                            desktop.find(".body").css("opacity", "1");
                            _catelt.css("opacity", "1");
                        }, 500);



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

                    }, 220);


                }, 500);


            } else if (mode === "off") {

                desktop.css({
                    '-moz-transform': 'scale(' + 3 + ')',
                    '-webkit-transform': 'scale(' + 3 + ')',
                    '-o-transform': 'scale(' + 3 + ')',
                    '-ms-transform': 'scale(' + 3 + ')',
                    'transform': 'scale(' + 3 + ')'
                });

                setTimeout(function () {

                    $("body").css("overflow-y", "scroll");
                    _catelt.css("display", "");

                    if ($.browser.whoami.indexOf("Firefox") != -1) {
                        desktop.css("left", "0px");
                        desktop.css("top", "0px");
                    } else {
                        desktop.css("left", "690px");
                        desktop.css("top", "50px");

                    }

                    desktop.find(".screen").css("opacity", "1");
                    desktop.find(".mask").css("opacity", "1");

                    setTimeout(_tvoff, 1000);

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
                        text.css("opacity", "1");
                    }, 1500);
                }, 400);

            }
        }
    };

    return _module;
});

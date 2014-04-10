define(["jquery"], function ($) {

    var _module,
        _site,
        _isViewClose = true,
        _reset = 0;

    _module = {

        init: function (site, _mobileConfig) {

            _site = site;

            function _elementInViewport(el) {
                var top = el.offsetTop;
                var left = el.offsetLeft;
                var width = el.offsetWidth;
                var height = el.offsetHeight;

                while (el.offsetParent) {
                    el = el.offsetParent;
                    top += el.offsetTop;
                    left += el.offsetLeft;
                }

                return (
                    top >= window.pageYOffset &&
                        left >= window.pageXOffset &&
                        (top + height) <= (window.pageYOffset + document.body.clientHeight) &&
                        (left + width) <= (window.pageXOffset + document.body.clientWidth)
                    );
            }

            if (site) {


                $("#userguide").bind("click", _module.click);

                /* Every time the window is scrolled ... */
                $(window).scroll(function () {

                    if (_reset) {

                        _isViewClose = _site.isHome();
                        if (!_isViewClose) {

                            $("body").removeClass("catbg");

                            if (!$('#userguideContainer')[0]) {
                                _module.create();
                            }

                            /* Check the location of each desired element */
//                            $('#userguideContainer  .hideme').each(function () {
//
//                                if (_elementInViewport($(this)[0])) {
//                                    $(this).animate({'opacity': 1}, 500);
//                                }
//                            });
                        } else {

                            if ($('#userguideContainer')[0]) {
                                _module.remove();
                                $("body").addClass("catbg");
                            }

                        }
                    }
                });
            }
        },

        reset: function () {
            _reset = 0;
        },

        remove: function () {
            $('#userguideContainer').remove();
        },

        create: function () {
            _reset = 1;
            _site.cleanWorkspace();

            var footer = _site.getFooter(),
                frameloaded = false;

            footer.before('<ul id="userguideContainer">' +
                '<h1 class="sampleheader"></h1><img id="catloader" style="opacity:0; position:absolute; top: 40px; left: 180px;" src="resources/catloader.gif" />' +
                '<li id="l1" class="hideme" >' +
                    '<iframe id="catframeloader" bordercolor="0" scrolling="no" style="border:0px; overflow: hidden; width:100%; height:100%" src="about:blank" ></iframe>' +
                '</li>' +


                '</ul>');

            $("#catframeloader").on("load", function() {
                $("#catloader").css("opacity","0");
                frameloaded = true;
            });
            $("#catframeloader")[0].src = "docs/user_guide.html";

            $('#userguideContainer .hideme').each(function() {

                    $(this).animate({'opacity': 1}, 500, function() {
                        if (!frameloaded) {
                            $("#catloader").css("opacity","1");
                        }
                        $('#userguideContainer .sampleheader').html("User Guide");
                        $(this).css("height", _module.getHeight()-1000 + "px");
                        $(this).css({'opacity': 1, 'visibility': 'visible'});

                    });



            });


        },

        click: function () {

            _module.create();

        },

        getHeight: function() {
            return 8000;
        }

    };


    return _module;
});

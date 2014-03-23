define(["jquery"], function ($) {

    var _module,
        _site,
        _isViewClose = true,
        _reset = 0,
        ifarmesSrcArr = [
            "examples/examples_page/cat-project/target/cat-site-test/example1.html",
            "examples/examples_page/cat-project/target/cat-site-test/example2.html",
            "examples/examples_page/cat-project/target/cat-site-test/example3.html",
            "examples/examples_page/cat-project/target/cat-site-test/example4.html"
        ],
        _frameloading = function(idx) {
            debugger;
            var loading = $("#loadingid" + idx);
            if (loading[0]) {
                loading.html("");
            }
        }, _mobileConfig;

    _module = {

        init: function (site, mobileConfig) {

            _mobileConfig = _mobileConfig;
            _site = site;

            function _elementInViewport(el) {

                var top = el.offsetTop;
                var left = el.offsetLeft;
                var width = el.offsetWidth;
                var height = el.offsetHeight;

                while(el.offsetParent) {
                    el = el.offsetParent;
                    top += el.offsetTop;
                    left += el.offsetLeft;
                }

                return (
                    top >= window.pageYOffset &&
                        left >= window.pageXOffset &&
                        (top + height - 200) <= (window.pageYOffset + window.innerHeight) &&
                        (left + width) <= (window.pageXOffset + window.innerWidth)
                    );
            }

            if (site) {


                $("#examples").bind("click", _module.click);

                /* Every time the window is scrolled ... */
                $(window).scroll(function () {

                    if (_reset) {

                        _isViewClose = _site.isHome();
                        if (!_isViewClose) {

                            $("body").removeClass("catbg");

                            if (!$('#samplesContainer')[0]) {
                                _module.create();
                            }

                            $('#samplesContainer .hideme').each(function (i) {
                                var iframeelt = $(this).find(".sampleIframe")[0];

                                if (_elementInViewport($(this)[0])) {

                                   // if (iframeelt && iframeelt.src === "about:blank") {
//                                        iframeelt.src = ifarmesSrcArr[i];
                                        $(this).animate({'opacity': 1}, 400);
                                   // }
                                }
                            });

                        } else {

                            if ($('#samplesContainer')[0]) {
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
            $('#samplesContainer').remove();
        },

        create: function () {
            _reset = 1;
            _site.cleanWorkspace();
            var footer = _site.getFooter(),
                examplesPageElt;

            examplesPageElt = footer.before(

                '<div class="examplesPage">' +

                    '<ul id="samplesContainer" >' +
                        '<h1 class="sampleheader"></h1>' +
                        '<li class="hideme"><span id="loadingid0"></span>' +
                            '<iframe   class="sampleIframe" src="examples/examples_page/cat-project/target/cat-site-test/example1.html"></iframe>' +
                        '</li> ' +
                        '<li class="hideme"><span id="loadingid1"></span>' +
                            '<iframe class="sampleIframe" src="examples/examples_page/cat-project/target/cat-site-test/example2.html"></iframe>' +
                        '</li>' +
                        '<li class="hideme"><span id="loadingid2"></span>' +
                            '<iframe class="sampleIframe" src="examples/examples_page/cat-project/target/cat-site-test/example3.html"></iframe>' +
                        '</li>' +
                        '<li class="hideme"><span id="loadingid3"></span>' +
                            '<iframe class="sampleIframe" src="examples/examples_page/cat-project/target/cat-site-test/example4.html"></iframe>' +
                        '</li>' +
                    '</ul>' +
                '</div>');

            $('#samplesContainer .hideme').each(function (i) {
/*                if (_mobileConfig) {
                    $(this).find("#loadingid"+i).html("Loading...");
                    $(this).find(".sampleIframe").on("load", function() {
                        _frameloading(i);
                    });
                }

*/                
                if (i>0) {
                    $(this).css({'opacity': 0, 'visibility': 'visible'});
  
                } else {
                    $(this).animate({'opacity': 1}, 100, function() {

                        $('#samplesContainer .sampleheader').html("Examples");
                        $(this).css({'opacity': 1, 'visibility': 'visible'});
                    });
                   
                }
                              
            });


        },

        click: function () {
            _module.create();

        },

        getHeight: function() {
            return 3500;
        }
    };


    return _module;
});

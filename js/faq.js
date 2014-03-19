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


                $("#faq").bind("click", _module.click);

                /* Every time the window is scrolled ... */
                $(window).scroll(function () {

                    if (_reset) {

                        _isViewClose = _site.isHome();
                        if (!_isViewClose) {

                            if (!$('#faqContainer')[0]) {
                                _module.create();
                            }

                            /* Check the location of each desired element */
                            $('#faqContainer  .hideme').each(function () {

                                if (_elementInViewport($(this)[0])) {
                                    $(this).animate({'opacity': 1}, 500);
                                }
                            });
                        } else {

                            if ($('#faqContainer')[0]) {
                                _module.remove();
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
            $('#faqContainer').remove();
        },

        create: function () {
            _reset = 1;
            _site.cleanWorkspace();
            var footer = _site.getFooter();
            footer.before('<ul id="faqContainer">' +

                '<li id="l1" class="hideme">' +
                        '<h1> CAT is like <a style="color:#5b83ad" href="http://docs.seleniumhq.org/" target="_blank">Selenium</a> </h1>'+
                        '<h3> You can say that CAT automate web applications like Selenium does. But this is only a feature of CAT. </h3>'+
                        '<h3> TBD </h3>'+
                        '<h1 style="margin:20px 0px 0px 0px"> Can I customize CAT plugins?</h1>'+
                        '<h3> TBD </h3>'+
                '</li> ' +


                '</ul>');

            $('#faqContainer .hideme').each(function () {
                $(this).css({'opacity': 0, 'visibility': 'visible'});

            });
        },

        click: function () {

            _module.create();

        },

        getHeight: function() {
            return 1500;
        }

    };


    return _module;
});

$(document).ready(function(){

    //update editors
    var getScrap = function (idName) {
        //var finalEditText = $('#example2')[0].outerHTML.replace(/<script>_cat.core.action(.*)<\/script>/g,"");
        var finalEditText = $('#' + idName)[0].outerHTML.replace(/<script>_cat.core.action(.*)<\/script>/g,"");
        finalEditText = finalEditText.replace(/\s*@@run@(.*)Manager/g,"");
        return finalEditText;
    }

    var setEditor = function(editorId, codeId ) {

        var editor = ace.edit(editorId);
        editor.setReadOnly(true);
        editor.setTheme("ace/theme/monokai");
        editor.getSession().setMode("ace/mode/html");
        editor.getSession().setValue(getScrap(codeId));

    }

    setEditor("editor", 'example1' );
    setEditor("editor2", 'example2' );
    setEditor("editor3", 'example3' );
    setEditor("editor4", 'example4' );
    setEditor("editor5", 'example5' );
    setEditor("editor6", 'example6' );
    setEditor("editor7", 'example7' );
    setEditor("editor8", 'example8' );
    setEditor("editor9", 'example9' );
    setEditor("editor10", 'example10' );
    setEditor("editor11", 'example11' );





    $(document).on('click', '#tryExample1', function () {



        /*
         @[scrap
         @@name scrollManager
         @@perform[
         @@scrollToButtons repeat(1)
         ]
         @@manager true
         @@signal TESTEND
         ]@
         */_cat.core.action(this, { scrap:{"name":["scrollManager"],"perform":["@@scrollToButtons repeat(1)"],"manager":["true"],"signal":["TESTEND"],"file":"C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/demo-js/demoScripts.js","scrapinfo":{"start":{"line":42,"col":9},"end":{"line":49,"col":11}},"commentinfo":{"start":{"line":41,"col":8},"end":{"line":50,"col":11}},"single":{"name":true,"perform":false,"manager":false,"signal":true,"file":true,"scrapinfo":true,"commentinfo":true,"single":true,"singleton":true,"arguments":true,"id":true,"$type":true},"singleton":{"name":-1,"perform":-1,"manager":1,"signal":-1,"file":-1,"scrapinfo":-1,"commentinfo":-1,"single":-1,"singleton":-1,"arguments":-1,"id":-1,"$type":-1},"arguments":[],"id":"scrap_12","$type":"js","pkgName":"C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.scrollManager"}});

    });

    $('#tryExample2').click(function() {

        /*
         @[scrap
         @@name     radioManager
         @@perform[
         @@selectRadioOption3 repeat(1)
         ]
         @@manager true
         @@signal TESTEND
         ]@
         */_cat.core.action(this, { scrap:{"name":["radioManager"],"perform":["@@selectRadioOption3 repeat(1)"],"manager":["true"],"signal":["TESTEND"],"file":"C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/demo-js/demoScripts.js","scrapinfo":{"start":{"line":57,"col":9},"end":{"line":64,"col":11}},"commentinfo":{"start":{"line":56,"col":8},"end":{"line":65,"col":11}},"single":{"name":true,"perform":false,"manager":false,"signal":true,"file":true,"scrapinfo":true,"commentinfo":true,"single":true,"singleton":true,"arguments":true,"id":true,"$type":true},"singleton":{"name":-1,"perform":-1,"manager":1,"signal":-1,"file":-1,"scrapinfo":-1,"commentinfo":-1,"single":-1,"singleton":-1,"arguments":-1,"id":-1,"$type":-1},"arguments":[],"id":"scrap_13","$type":"js","pkgName":"C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.radioManager"}});


    });

    $('#tryExample3').click(function() {


        /*
         @[scrap
         @@name textManager
         @@perform[
         @@setText repeat(1)
         ]
         @@manager true
         @@signal TESTEND
         ]@
         */_cat.core.action(this, { scrap:{"name":["textManager"],"perform":["@@setText repeat(1)"],"manager":["true"],"signal":["TESTEND"],"file":"C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/demo-js/demoScripts.js","scrapinfo":{"start":{"line":74,"col":9},"end":{"line":81,"col":11}},"commentinfo":{"start":{"line":73,"col":8},"end":{"line":82,"col":11}},"single":{"name":true,"perform":false,"manager":false,"signal":true,"file":true,"scrapinfo":true,"commentinfo":true,"single":true,"singleton":true,"arguments":true,"id":true,"$type":true},"singleton":{"name":-1,"perform":-1,"manager":1,"signal":-1,"file":-1,"scrapinfo":-1,"commentinfo":-1,"single":-1,"singleton":-1,"arguments":-1,"id":-1,"$type":-1},"arguments":[],"id":"scrap_14","$type":"js","pkgName":"C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.textManager"}});
    });

    $('#tryExample4').click(function() {



        /*
         @[scrap
         @@name buttonManager
         @@perform[
         @@BtnClick repeat(1)
         ]
         @@manager true
         @@signal TESTEND
         ]@
         */_cat.core.action(this, { scrap:{"name":["buttonManager"],"perform":["@@BtnClick repeat(1)"],"manager":["true"],"signal":["TESTEND"],"file":"C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/demo-js/demoScripts.js","scrapinfo":{"start":{"line":90,"col":9},"end":{"line":97,"col":11}},"commentinfo":{"start":{"line":89,"col":8},"end":{"line":98,"col":11}},"single":{"name":true,"perform":false,"manager":false,"signal":true,"file":true,"scrapinfo":true,"commentinfo":true,"single":true,"singleton":true,"arguments":true,"id":true,"$type":true},"singleton":{"name":-1,"perform":-1,"manager":1,"signal":-1,"file":-1,"scrapinfo":-1,"commentinfo":-1,"single":-1,"singleton":-1,"arguments":-1,"id":-1,"$type":-1},"arguments":[],"id":"scrap_15","$type":"js","pkgName":"C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.buttonManager"}});

    });

    $('#tryExample5').click(function() {



        /*
         @[scrap
         @@name collapsibleManager
         @@perform[
         @@collapsibleClick repeat(1)
         ]
         @@manager true
         @@signal TESTEND
         ]@
         */_cat.core.action(this, { scrap:{"name":["collapsibleManager"],"perform":["@@collapsibleClick repeat(1)"],"manager":["true"],"signal":["TESTEND"],"file":"C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/demo-js/demoScripts.js","scrapinfo":{"start":{"line":107,"col":9},"end":{"line":114,"col":11}},"commentinfo":{"start":{"line":106,"col":8},"end":{"line":115,"col":11}},"single":{"name":true,"perform":false,"manager":false,"signal":true,"file":true,"scrapinfo":true,"commentinfo":true,"single":true,"singleton":true,"arguments":true,"id":true,"$type":true},"singleton":{"name":-1,"perform":-1,"manager":1,"signal":-1,"file":-1,"scrapinfo":-1,"commentinfo":-1,"single":-1,"singleton":-1,"arguments":-1,"id":-1,"$type":-1},"arguments":[],"id":"scrap_16","$type":"js","pkgName":"C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.collapsibleManager"}});

    });

    $('#tryExample6').click(function() {


        /*
         @[scrap
         @@name checkboxManager
         @@perform[
         @@setCheckB repeat(1)
         ]
         @@manager true
         @@signal TESTEND
         ]@
         */_cat.core.action(this, { scrap:{"name":["checkboxManager"],"perform":["@@setCheckB repeat(1)"],"manager":["true"],"signal":["TESTEND"],"file":"C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/demo-js/demoScripts.js","scrapinfo":{"start":{"line":123,"col":9},"end":{"line":130,"col":11}},"commentinfo":{"start":{"line":122,"col":8},"end":{"line":131,"col":11}},"single":{"name":true,"perform":false,"manager":false,"signal":true,"file":true,"scrapinfo":true,"commentinfo":true,"single":true,"singleton":true,"arguments":true,"id":true,"$type":true},"singleton":{"name":-1,"perform":-1,"manager":1,"signal":-1,"file":-1,"scrapinfo":-1,"commentinfo":-1,"single":-1,"singleton":-1,"arguments":-1,"id":-1,"$type":-1},"arguments":[],"id":"scrap_17","$type":"js","pkgName":"C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.checkboxManager"}});

    });

    $('#tryExample7').click(function() {
        /*
         @[scrap
         @@name tabsManager
         @@perform[
         @@navTabSelect2 repeat(1)
         ]
         @@manager true
         @@signal TESTEND
         ]@
         */_cat.core.action(this, { scrap:{"name":["tabsManager"],"perform":["@@navTabSelect2 repeat(1)"],"manager":["true"],"signal":["TESTEND"],"file":"C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/demo-js/demoScripts.js","scrapinfo":{"start":{"line":137,"col":9},"end":{"line":144,"col":11}},"commentinfo":{"start":{"line":136,"col":8},"end":{"line":145,"col":11}},"single":{"name":true,"perform":false,"manager":false,"signal":true,"file":true,"scrapinfo":true,"commentinfo":true,"single":true,"singleton":true,"arguments":true,"id":true,"$type":true},"singleton":{"name":-1,"perform":-1,"manager":1,"signal":-1,"file":-1,"scrapinfo":-1,"commentinfo":-1,"single":-1,"singleton":-1,"arguments":-1,"id":-1,"$type":-1},"arguments":[],"id":"scrap_18","$type":"js","pkgName":"C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.tabsManager"}});
    });

    $('#tryExample8').click(function() {
        /*
         @[scrap
         @@name sliderManager
         @@perform[
         @@slider25 repeat(1)
         ]
         @@manager true
         @@signal TESTEND
         ]@
         */_cat.core.action(this, { scrap:{"name":["sliderManager"],"perform":["@@slider25 repeat(1)"],"manager":["true"],"signal":["TESTEND"],"file":"C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/demo-js/demoScripts.js","scrapinfo":{"start":{"line":150,"col":9},"end":{"line":157,"col":11}},"commentinfo":{"start":{"line":149,"col":8},"end":{"line":158,"col":11}},"single":{"name":true,"perform":false,"manager":false,"signal":true,"file":true,"scrapinfo":true,"commentinfo":true,"single":true,"singleton":true,"arguments":true,"id":true,"$type":true},"singleton":{"name":-1,"perform":-1,"manager":1,"signal":-1,"file":-1,"scrapinfo":-1,"commentinfo":-1,"single":-1,"singleton":-1,"arguments":-1,"id":-1,"$type":-1},"arguments":[],"id":"scrap_19","$type":"js","pkgName":"C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.sliderManager"}});
    });

    $('#tryExample9').click(function() {
        /*
         @[scrap
         @@name selectMenuManager
         @@perform[
         @@selectMenu2 repeat(1)
         ]
         @@manager true
         @@signal TESTEND
         ]@
         */_cat.core.action(this, { scrap:{"name":["selectMenuManager"],"perform":["@@selectMenu2 repeat(1)"],"manager":["true"],"signal":["TESTEND"],"file":"C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/demo-js/demoScripts.js","scrapinfo":{"start":{"line":163,"col":9},"end":{"line":170,"col":11}},"commentinfo":{"start":{"line":162,"col":8},"end":{"line":171,"col":11}},"single":{"name":true,"perform":false,"manager":false,"signal":true,"file":true,"scrapinfo":true,"commentinfo":true,"single":true,"singleton":true,"arguments":true,"id":true,"$type":true},"singleton":{"name":-1,"perform":-1,"manager":1,"signal":-1,"file":-1,"scrapinfo":-1,"commentinfo":-1,"single":-1,"singleton":-1,"arguments":-1,"id":-1,"$type":-1},"arguments":[],"id":"scrap_20","$type":"js","pkgName":"C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.selectMenuManager"}});
    });


    $('#tryExample10').click(function() {
        /*
         @[scrap
         @@name     swipeLeftManager
         @@perform[
         @@swipeMeLeft repeat(1)
         ]
         @@manager true
         @@signal TESTEND
         ]@
         */_cat.core.action(this, { scrap:{"name":["swipeLeftManager"],"perform":["@@swipeMeLeft repeat(1)"],"manager":["true"],"signal":["TESTEND"],"file":"C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/demo-js/demoScripts.js","scrapinfo":{"start":{"line":177,"col":9},"end":{"line":184,"col":11}},"commentinfo":{"start":{"line":176,"col":8},"end":{"line":185,"col":11}},"single":{"name":true,"perform":false,"manager":false,"signal":true,"file":true,"scrapinfo":true,"commentinfo":true,"single":true,"singleton":true,"arguments":true,"id":true,"$type":true},"singleton":{"name":-1,"perform":-1,"manager":1,"signal":-1,"file":-1,"scrapinfo":-1,"commentinfo":-1,"single":-1,"singleton":-1,"arguments":-1,"id":-1,"$type":-1},"arguments":[],"id":"scrap_21","$type":"js","pkgName":"C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.swipeLeftManager"}});
    });


    $('#tryExample11').click(function() {
        /*
         @[scrap
         @@name     swipeRightManager
         @@perform[
         @@swipeMeRight repeat(1)
         ]
         @@manager true
         @@signal TESTEND
         ]@
         */_cat.core.action(this, { scrap:{"name":["swipeRightManager"],"perform":["@@swipeMeRight repeat(1)"],"manager":["true"],"signal":["TESTEND"],"file":"C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/demo-js/demoScripts.js","scrapinfo":{"start":{"line":191,"col":9},"end":{"line":198,"col":11}},"commentinfo":{"start":{"line":190,"col":8},"end":{"line":199,"col":11}},"single":{"name":true,"perform":false,"manager":false,"signal":true,"file":true,"scrapinfo":true,"commentinfo":true,"single":true,"singleton":true,"arguments":true,"id":true,"$type":true},"singleton":{"name":-1,"perform":-1,"manager":1,"signal":-1,"file":-1,"scrapinfo":-1,"commentinfo":-1,"single":-1,"singleton":-1,"arguments":-1,"id":-1,"$type":-1},"arguments":[],"id":"scrap_22","$type":"js","pkgName":"C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.swipeRightManager"}});
    });

});

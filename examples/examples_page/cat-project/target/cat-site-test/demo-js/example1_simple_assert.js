//remove manager
var getScrap = function (data) {
    var finalEditText = data.replace(/<script>_cat.core.action(.*)<\/script>/g,"");
    finalEditText = finalEditText.replace(/\s*@@run@(.*)Manager/g,"");
    return finalEditText;
}

var setEditor = function(editorId, codeId ) {

    $.ajax({
        url: "textInputAssert.txt"

    })
        .done(function( data ) {

            var editor = ace.edit(editorId),
                aceRange;
            editor.setReadOnly(true);
            editor.setTheme("ace/theme/dreamweaver");
            editor.getSession().setMode("ace/mode/html");
            editor.getSession().setValue(getScrap(data));
            editor.getSession().setUseWrapMode(true);

            aceRange = ace.require('ace/range').Range;
            editor.getSession().addMarker(new aceRange(6, 0, 6, 90),"ace_active_line","background");


        });

}



$('#simpleScrapAssertPage').ready(function(){

    setEditor("setTextAssertEditor", 'simpleSetTextAssert' );

    $("#simpleTextWithAssert").on('input', function() {
        $("#displayText").text($("#simpleTextWithAssert").val());
    });


    $("#simpleTextWithAssert").change(function() {
        $("#displayText").text($("#simpleTextWithAssert").val());
    });


    $("#simpleTextWithAssert").change(function() {

        var chars = $("#simpleTextWithAssert").val().split("");
        setTimeout(function() {
        $("#simpleTextWithAssert").val("");

        var counter=150;

        $("#simpleTextWithAssert").addClass("greeninput");

        chars.forEach(function(chr){
            setTimeout(function() {
                var text = $("#simpleTextWithAssert").val()+ chr;
                $("#simpleTextWithAssert").val(text);
                $("#displayText").text(text);
            }, counter);
            counter+=150;
        });
        }, 10);

        $("#simpleTextWithAssert").addClass("greeninput");
    });

    $('#trySimpleSetTextAssert').click(function() {

        /*
         @[scrap
         @@name     simpleManagerAssert
         @@perform[
         @@simpleSetTextWithAssert repeat(1)
         ]
         @@manager true
         @@signal TESTEND
         ]@
         */_cat.core.action(this, { scrap:{"name":["simpleManagerAssert"],"perform":["@@simpleSetTextWithAssert repeat(1)"],"manager":["true"],"signal":["TESTEND"],"file":"C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/demo-js/example1_simple_assert.js","scrapinfo":{"start":{"line":74,"col":9},"end":{"line":81,"col":11}},"commentinfo":{"start":{"line":73,"col":8},"end":{"line":82,"col":11}},"single":{"name":true,"perform":false,"manager":false,"signal":true,"file":true,"scrapinfo":true,"commentinfo":true,"single":true,"singleton":true,"arguments":true,"id":true,"$type":true},"singleton":{"name":-1,"perform":-1,"manager":1,"signal":-1,"file":-1,"scrapinfo":-1,"commentinfo":-1,"single":-1,"singleton":-1,"arguments":-1,"id":-1,"$type":-1},"arguments":[],"id":"scrap_3","$type":"js","pkgName":"C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.example1_simple_assert.simpleManagerAssert"}});
    });


    $('#trySimpleSetTextAssertReset').click(function() {
        $("#simpleTextWithAssert").val("");
        $("#displayText").text($("#simpleTextWithAssert").val());
        $("#simpleTextWithAssert").removeClass("greeninput");

    });


});


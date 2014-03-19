//remove manager
var getScrap = function (data) {
    var finalEditText = data.replace(/<script>_cat.core.action(.*)<\/script>/g,"");
    finalEditText = finalEditText.replace(/\s*@@run@(.*)Manager/g,"");
    return finalEditText;
}

var setEditor = function(editorId, codeId ) {
    $.ajax({
        url: "textInputScrap.txt"

    })
        .done(function( data ) {
            var editor = ace.edit(editorId);
            editor.setReadOnly(true);
            editor.setTheme("ace/theme/dreamweaver");
            editor.getSession().setMode("ace/mode/html");
            editor.getSession().setValue(getScrap(data));
            editor.getSession().setUseWrapMode(true);


        });

}

$('#simpleScrapPage').ready(function(){

    setEditor("setTextEditor", 'simpleSetText' );

    $("#simpleText").on('input', function() {
        $("#displayText").text($("#simpleText").val());
    });


    $("#simpleText").change(function() {

        var chars = $("#simpleText").val().split("");

        $("#simpleText").val("");

        var counter=150;

        $("#simpleText").addClass("greeninput");

        chars.forEach(function(chr){
            setTimeout(function() {
                var text = $("#simpleText").val()+ chr;
                $("#simpleText").val(text);
                $("#displayText").text(text);
            }, counter);
            counter+=150;
        });
        $("#simpleText").addClass("greeninput");
    });



    $('#trySimpleSetText').click(function() {

        /*
         @[scrap
         @@name     simpleManager
         @@perform[
         @@simpleSetText repeat(1)
         ]
         @@manager true
         @@signal TESTEND
         ]@
         */_cat.core.action(this, { scrap:{"name":["simpleManager"],"perform":["@@simpleSetText repeat(1)"],"manager":["true"],"signal":["TESTEND"],"file":"C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/demo-js/example1_simple_scrap.js","scrapinfo":{"start":{"line":61,"col":9},"end":{"line":68,"col":11}},"commentinfo":{"start":{"line":60,"col":8},"end":{"line":69,"col":11}},"single":{"name":true,"perform":false,"manager":false,"signal":true,"file":true,"scrapinfo":true,"commentinfo":true,"single":true,"singleton":true,"arguments":true,"id":true,"$type":true},"singleton":{"name":-1,"perform":-1,"manager":1,"signal":-1,"file":-1,"scrapinfo":-1,"commentinfo":-1,"single":-1,"singleton":-1,"arguments":-1,"id":-1,"$type":-1},"arguments":[],"id":"scrap_1","$type":"js","pkgName":"C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.example1_simple_scrap.simpleManager"}});
    });

    $('#trySimpleReset').click(function() {
        $("#simpleText").val("");
        $("#displayText").text($("#simpleText").val());
        $("#simpleText").removeClass("greeninput");
    });
});




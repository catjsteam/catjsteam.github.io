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
         */
    });


    $('#trySimpleSetTextAssertReset').click(function() {
        $("#simpleTextWithAssert").val("");
        $("#displayText").text($("#simpleTextWithAssert").val());
        $("#simpleTextWithAssert").removeClass("greeninput");

    });


});


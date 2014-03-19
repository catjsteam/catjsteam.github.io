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
         */
    });

    $('#trySimpleReset').click(function() {
        $("#simpleText").val("");
        $("#displayText").text($("#simpleText").val());
        $("#simpleText").removeClass("greeninput");
    });
});




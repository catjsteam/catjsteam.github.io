//remove manager
var getScrap = function (data) {
    var finalEditText = data.replace(/<script>_cat.core.action(.*)<\/script>/g,"");
    finalEditText = finalEditText.replace(/\s*@@run@(.*)Manager/g,"");
    return finalEditText;
}

var setEditor = function(editorId, codeId ) {


    $.ajax({
        url: "textInputManager.txt"

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



$('#managerPage').ready(function(){

    setEditor("managerEditor", 'managerExample' );


    $("#textInput").on('input', function() {
        $("#displayText").text($("#textInput").val());
    });


    $("#textInput").change(function() {
        $("#displayText").text($("#textInput").val());
    });


    $("#textInput").change(function() {

        var chars = $("#textInput").val().split("");
        setTimeout(function() {
        $("#textInput").val("");

        var counter=150;

        $("#textInput").addClass("greeninput");

        chars.forEach(function(chr){
            setTimeout(function() {
                var text = $("#textInput").val()+ chr;
                $("#textInput").val(text);
                $("#displayText").text(text);
            }, counter);
            counter+=150;
        });

        }, 10);

        $("#textInput").addClass("greeninput");
    });

    $('#tryManager').click(function() {
        location.reload();
    });


    $('#tryManagerReset').click(function() {
        location.reload();
    });




});



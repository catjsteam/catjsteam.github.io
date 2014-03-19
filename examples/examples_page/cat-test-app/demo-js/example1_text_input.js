//remove manager
var getScrap = function (data) {
    var finalEditText = data.replace(/<script>_cat.core.action(.*)<\/script>/g,"");
    finalEditText = finalEditText.replace(/\s*@@run@(.*)Manager/g,"");
    return finalEditText;
}

var setEditor = function(editorId, codeId ) {
    $.ajax({
        url: "textInput.txt"

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


$('#simpleTextInputPage').ready(function(){

    setEditor("textInputEditor", 'simpleTextInput' );

    $("#text-basic-simple").on('input', function() {
        $("#displayText").text($("#text-basic-simple").val());
    });
});


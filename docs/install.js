console.log("... post install");

require('package-script').install([
    {
        name: "markdown-styles"
    }, 
    {
        name: "mds-hljs"
    }
    
], {init: {global:true, log:true}, callback: function() {
    
    console.log(" Markdown installation process completed. ");   
    
}});
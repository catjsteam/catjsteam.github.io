define(["jquery"], function ($) {

    var _module,
        _site;

    _module = {

       init: function(site) {
           if (!_site) {
                 $("examples").bind("click", _module.click);
                _site = site;
           }
       },

       click: function() {
           var workspaceContentHandle;
           _site.cleanWorkspace();

           workspaceContentHandle = _site.getWorkspaceContent();

       }

    };


    return _module;
});

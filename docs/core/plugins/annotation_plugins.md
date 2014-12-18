CatJS
==============


### Native Annotation Plugins

#### Common 

* **standard HTML resource import**  
  Import catjs library with all of its dependencies   
  You can load other resources with cat annotation, just add a new line after cat.js import   
                 
            @[scrap
                @@import[
                    /cat/lib/cat.js
                ]
            ]@

* **RequireJS configuration import**   
  Put CatJS require configuration just below the application's requirejs configuration   
        
           @[scrap
               @@require[
                  /cat/lib/cat.js
               ]
           ]@


* **Log**
  Add console log (use double quatoes ")    
        
            @[scrap
                @@name myScrap
                @@log "This is my first scrap"
            ]@
        
* **code** and **js** JavaScript code snippet
  Just put a JavaScript code and we will execute it from the natural environment. 
    
            @[scrap
                @@code alert("test")
            ]@


* **context** Expose variables from your scope to the test
  One of the strongest features is to give the ability of exposing the real development environment to the tests. 
  With the context annotation you can expose any variable from your scope, it can be the ExtJS variable, JavaScript reference function or DOM element.
        
            var fooElement = document.getElementById("testId");
            
            @[scrap
                @@context fooElement
                @@code[
                    fooElement.innerHTML="foo description"
                    fooElement.style.color ="#000"
                ]
            ]@


* **assert** supports [chai.js](http://chaijs.com/) library API

            @[scrap
                @@context fooElement
                @@assert ok(fooElement, "Missing element named: foo")
            ]@

* **embed** In case the scrap is embedded within HTML comment, set the embed to true, for wrapping the scrap with &lt;script&gt; tag block

            @[scrap
                @@embed true
            ]@
            
* **standalone** is a boolean flag that notifies the tests execution engine to skip the related scrap. It means that this scrap will not be part of the scenario configuration but
will be executed as part of the natural application flow. A good example is a listener of a click that will be triggered by the click action. the scraps within the listener should be standalone.

            @[scrap
                @@standalone true
            ]@    
 
           
#### Third-party            

The common layer will do for create robust tests for your application. However we added third-party plugins for sugar syntax and making everybody life easier.  
We have prepared plugins for the following libraries: : JQM, Sencha Touch, (DOM, Enyo with few APIs, Angular is planned for future releases)
We have not covered all of the third-party [APIs](../api.html) just yet...

* **jqm** JQuery Mobile

        @[scrap
            @@jqm setText("#username", "john")
        ]@

* **sencha** JQuery Mobile

        @[scrap
            @@context button
            @@sencha tap(button);
        ]@
              
#### Custom Plugin
  When CatJS test project is initialized a"cat-project" folder is created, below that folder a plugins folder exists with a custom-plugin.js file. 
  This file is a sample annotation plugin that is being included in the test project. Any additional custom annotation coded in that file will be evaluated. 
  
  Within the custom-plugin.js file there's a method call for adding a custom annotation called sample:
  
        _Scrap.add({name: "sample",
            single: false,
            func: function (config) {
                var sample,
                    me = this;
            
                // get the value out of the sample annotation
                sample = this.get("sample");
                // print out the code to be included within the test and injected to the application
                me.print("console.log('CAT... Custom annotation sample sample:', '" + sample + "');");  
            }
        });
          
          
  On each call for sample annotation a console.log will be added to the application at the place the "scrap" was added.
   
        @[scrap
            @@sample sample_value
        ]@
        
        
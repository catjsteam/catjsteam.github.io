CatJS
==============

## The Tool
  For generating the test deployment we are using the catjs tool that is an [NPM module](https://www.npmjs.org/package/catjs). After installing the module, <code>catcli</code> command will be available as part of the system path. 
  More information can be found  in the [command-line doc](cli.html)
  
### Configuration (catproject.json) 
  When generating the test deployment (see [getting_started](getting_started.html)) a catproject.json file is being created. This is the configuration file for running CatJS tool. It contains all of the test deployment information.
  On initial project creation a basic user input prompts, it helps to setup the tool's basic configuration.
  
  * **name**
  The name of the project, it acts as the test deployment ID and represent the test root folder name.
  
  * **source**
  The project sources path
  
  * **target**
  The test deployment path
  
  * **cattarget**
  The path location for copying the resources to. On test deployment creation the catjs sources, libraries and third-parties are being copied below "cat" folder to that location.
  It's a relative path to the "target" path. By default it is set to the "target" root. 
  
  * **host**
  The application host name
  
  * **port**
  The application port
  
  * **protocol**
  The application protocol [http | https]
  
  * **dependencies** Consider that changing this dependencies might cause malfunction of some of the modules. Adding your own dependencies are more than welcome 
  Array of the third-party libraries to be included/excluded in the project, 
  in the order they are pushed. The OOTB libraries in use as follows: ["underscore", "js.utils", "tmr", "jspath", "chai",  "cat"]   
  * *[underscore](http://underscorejs.org/)* JavaScript helpers library
  * *[js.utils](https://github.com/lastboy/js.utils)* JavaScript Utilities
  * *[Test Model Reporter](https://github.com/lastboy/test-unit-reporter)* JavaScript model to JUnit XML reporter, the library is being used for modeling the monitoring data
  * *[JSPath](https://github.com/dfilatov/jspath)* JSON Data navigation, the library is being used as the test data navigation helper
  * *[Chai](http://chaijs.com/)* JavaScript assertion library, the library is used as the assertion engine for catjs
  
  * **analytics**
  CatJS is gathering statistics that helps for getting a better understanding to improve our solution. We do not take any private information, but only CatJS in specific information.
  
  * **apppath**
  The original application project path, CatJS scans for gathering information. None intrusive action are being applied to the application file system.
   
  * **jshint**   
  JavaScript source code validation using [jshint configuration](http://jshint.com/docs/options/) 
  defaults: 
        { "opt": {
            "evil": true,
            "strict": false,
            "curly": true,
            "eqeqeq": true,
            "immed": false,
            "latedef": true,
            "newcap": false,
            "noarg": true,
            "sub": true,
            "undef": true,
            "boss": true,
            "eqnull": true,
            "node": true,
            "es5": false
            
        }, "globals": {
            "_cat": true,
            "chai": true,
            "$": true,
            "window": true,
            "document": true,
            "XMLHttpRequest": true,
            "describe": true,
            "xdescribe": true,
            "it": true,
            "xit": true,
            "before": true,
            "beforeEach": true,
            "after": true,
            "afterEach": true, 
        }  
   
  * **runner** 
  The CatJS Runner configuration to be able to run the application on multiple browsers and devices. For more information about the module and configuration see [CatJSRunner Module](https://www.npmjs.org/package/mobilerunner)
   
  * **plugins**
  Array of plugins configuration to be used with tasks. The mandatory basic plugin properties as described below:
    + *name* The name of the plugin 
    + *type* The type of the plugin, there are native types that can be used (see [Plugins doc](plugins.md))  
  
  * **tasks**
  Array of tasks configuration. Task is depends on plugins (see [Tasks doc](tasks.md))
    + *name* The name of the task
    + *plugins* Array of plugins names
    

  
  
  
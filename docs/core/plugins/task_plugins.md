CatJS
==============

## Native Task Plugins
  The core plugins has a basic set of mandatory properties and other in specific properties depends of the plugin's implementation,
  The mandatory properties as follows:
  
  * **name** The plugin's name
  * **type** The plugin type of the available core types

### Core Plugins

#### Types
      
* **phantomjs** Plugin for managing PhantomJS environment      
    + *file* The phantom script file name [Demo script: phantomjs-script.js]
  
* **web server** NodeJS web server powered by [express](https://www.npmjs.org/package/express) node module
    + *path* The static physical path 
    + *port* The port to be listening to
    
* **runner** [CatJSRunner]() plugin   
    + *runnerconfig* The runner configuration 
    + *port* The port to be listening to
    
* **clean** Clean plugin   
    + *src* The source file/folders to be cleaned
      
* **copy**  Copy plugin
    + *from* from object
        + *path* The from path
    + *to* to object
        + *path* The to path
      
* **minify**  Minify source files [JS | CSS]
    + *path* The target path
    + *filename* The file name to be created
    + *src* The source files to be processed (e.g. ["./src/**/*.js"])
    + *mode* [dev | prod] dev as default for non-minified, prod for minifing
       
* **manager** Core base plugin type - Be default assigned as a dependency plugin if no dependency was set.
    

#### Ready For Use 

* **phantomjs** Phantom js plugin that works with phantomjs-script.js file
     + *name* p@project.phantomjs
     + *type* phantomjs
     + *file* phantomjs-script.js

* **web server** Static web server pages that is binded to the test deployment ([APPLICATION_HOME_FOLDER]/cat-project/target/[TEST_NAME] 
     + *name* p@project.webserver.start
     + *type* webserver
     + *action* start

* **runner** CatJS runner plugin that gets the configuration from the "runner" property located at the catproject.json file 
     + *name* p@project.runner.start
     + *type* runner
     + *action* start

* **device info** Plugin for getting the device info 
     + *name* p@scrap.deviceinfo
     + *type* scrap-deviceinfo
          
* **autotest** Auto test scenario generator plugin 
     + *name* p@autotest.plugin
     + *type* manager
     
* **scrap common plugin** Scrap common plugin 
     + *name* p@scrap.common
     + *type* scrap-common
     
* **scrap enyo plugin** Scrap enyo plugin 
     + *name* p@scrap.enyo
     + *type* scrap-enyo
    
* **scrap JQM plugin** Scrap JQM plugin 
     + *name* p@scrap.jqm
     + *type* scrap-jqm
     
* **scrap DOM plugin** Scrap DOM plugin 
     + *name* p@scrap.dom
     + *type* scrap-dom
     
* **scrap Sencha plugin** Scrap Sencha plugin 
     + *name* p@scrap.sencha
     + *type* scrap-sencha

* **wipe plugin** Wipe plugin for strong test deployment cleanup 
     + *name* p@project.wipe
     + *type* clean
     + *src*  ["src", "lib", "*.log", "*.xml", "phantom/app-view.png"]

* **clean plugin** Clean plugin for soft test deployment cleanup 
     + *name* p@project.clean
     + *type* clean
     + *src*  ["target", "_cat_md.json", "lib"]



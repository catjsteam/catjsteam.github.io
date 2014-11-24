CatJS
==============

## Quick Start

This is the basics that you need for creating your first test, for your application, using catjs framework.
For more advanced information explore our docs.

### First, install CatJS command line
In order to get started, you'll want to install CatJS's CLI (command line interface) globally. `catcli` command will be set into your system path.

    npm install -g catjs


### Then, create a new project with CatJS tool

    catcli -i

Follow the command inputs:

* Enter the project name: [project name, better with no spaces]
* Enter CatJS server's host name:  (localhost)
* Enter CatJS server's port:  (8089)
* Enter CatJS server's protocol:  (http)
* May catjs anonymously report usage statistics to improve the tool over time?:  (Y) 
* Enter your project's (application) path:  ./../app 
  Relative path from "cat-project" folder to your app. 
  
"cat-project" folder will be created automatically for you after this process is done.  
You can find inside all of the project resources including the catproject.json with the above configuration settings.  
Those settings can be changed later.  
Any future CatJS command should be running from the "cat-project" folder, since CatJS tool is looking for catproject.json configuration file.


### And then, add scraps to your code

Scrap is a single action annotation that can combine one or more operations or assertions.  
You should put the scrap within comments.

* Import catjs library    
CatJS support a standard JavaScript imports and the [requireJS](http://requirejs.org) library style  

    * standard import  
    Put CatJS library along with the other JavaScript resources  
    You can load other resources with cat annotation, just add a new line after cat.js import   
        
            <! --
                @[scrap
                    @@import[
                        /cat/lib/cat.js
                    ]
                ]@
            -- >

    * RequireJS style   
    Put CatJS require configuration just below yours   
        
            /*
               @[scrap
                   @@require[
                      /cat/lib/cat.js
                   ]
               ]@
            */


* Add your own scrap
        
        /*
            @[scrap
                @@name myScrap
                @@log "This is my first scrap"
            ]@
        */
        

### For test deployment creation, use the command line tool

CatJS command line tool has to be executed from where the catproject.json configuration file exists   
You can find this file below cat-project folder. **Don't forget to change the directory to cat-project first**

* build your project

        catcli -b

* Auto test configuration (optional)
CatJS has a test project for executing all of your scraps, to be able to see the running steps run this command

        catcli -a


* run the server

        catcli -s

* rebuild the project and run the server  
    In case you edit your scraps comments clean first

        catcli -cbas


### Additional scrap types

* *code* JavaScript code snippet

        /*
            @[scrap
                @@code alert("test")
            ]@
        */

* *context* Expose variables from your scope to the test

        /*
            @[scrap
                @@context fooElement
                @@code [
                    fooElement.innerHTML="foo description"
                    fooElement.style.color ="#000"
                ]
            ]@
        */

* *assert* supports [chai.js](http://chaijs.com/) library API

        /*
            @[scrap
                @@context fooElement
                @@assert ok(fooElement, "Missing element named: foo")
            ]@
        */

Currently supported libraries are: JQM, Sencha Touch, (DOM, Enyo with few APIs, Angular is planned for future releases)
The plugins aimed to give you a syntactic sugar, but you can always use your own code... and of course to code your own custom plugins.

* *jqm* supports [JQM](http://jquerymobile.com/) library API

        /*
            @[scrap
                @@jqm setText("#fooId", "Test...")
            ]@
        */

* *sencha touch* supports [Sencha Touch (extjs)](http://www.sencha.com/products/touch/) library API

        /*
            @[scrap
                @@context field
                @@sencha setText(field, "this is a test");
            ]@
        */

### It's about time to run your tests  
Open your favorite browser and go to: **http://localhost:8089**  
Here is a short description for the events that occurs after loading the test deployment:

* CatJS library is going to load the test project (cat.json)
* CatJS tests will start running as part of your code
* CatJS UI console will appear in the right top corner and mask will cover your application 
    * The UI console displays the assertions and any tests information 
* In case the scraps includes assertions it will be displayed in the: 
    * UI Console 
    * Terminal
  In additional a JUnit XML will be created that can be used to display reports and\or integrate with Jenkins


## OOTB Error trapping
catjs track your application errors and report it to the console/junit. With minimal annotation for catjs library loading you get to track your application errors.
   Combined it with catjs runner you can immediately get report about any errors on different browsers and devices.


## Example Application

* Create an initial CatJS project with a simple example application included

        catcli --init example


### Example application description
Look into the file system where your generated project was created. At the root folder, two sub-folders were created:

* *cat-project* - folder that contains CatJS project's resources
* *app folder*  - that contains a basic HTML5 application powered by JQuery

* A Brief description
    * Files  
        * CatJS Project
            * catproject.json is CatJS's configuration file that contains
                * Environment settings
                * plugins declarations
                * tasks declarations
        * Example Application 
            * Standard JQuery application resources (css, js, html)
            * Annotation tests code included
                * Browse to the JavaScript file: app/app.js and look for the scrap annotation.

* Application description
    * The application has one page that contains a test button
    * On each button click a text will be displayed, describing the number of clicks
    
* Application test
    * Automates the button's click a few times
    * Validating that the number of clicks are not greater than two clicks
        * It will fail the test in that case




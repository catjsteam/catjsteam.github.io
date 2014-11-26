CatJS
==============


## How It Works

### The idea
  We think that the developer is the key for leveraging the applications quality and currently in use processes. 
  For having such system to support that assumption we have created a system where the developer use annotations within comments for test units creation and a test project for creating test scenarios that represents one or more test units that we call "Scraps".  
  
### Ingredients 
  CatJS framework entities  
  
  * Command Line Tool (Node Module) 
    + Handling the application project sources
    + Cat project creation and maintenance
    + Run the server
    + Execute the Runner
    
  * CatJS web library
    + Load the test project
    + Execute the tests
    + Send the information to the monitoring server
    + Display the UI console
    
  * Runner
    + Execute the browsers and devices 
    + Load the application
    + Send the execution data to the monitoring server
    
  * Reports
    + JUnit XML report generator
    + Print the test data to the monitoring server console
  
### Life-cycle

#### Using CatJS Tool (catcli)

* First we need to have a skeleton test project

* Then, we need to collect all of the test units (scraps) information, understand it, 
generate the proper functionality out of that information and inject the calls to that functionality to the right places.  

* Having all the information we need, the test deployment is ready to be created
    + We need to package the generated sources add all of the third-parties resources and catjs web library
    + Prepare the test project that contains all of the scenarios that are need to be executed. 
    + Add the test data to be consumed by the test functionality 

#### CatJS web library

* CatJS web library run as part of the web application and being loaded when the application start running

* The library is responsible to read the cat.json files that is the test project that contains all of the test scenarios and other properties that controls the tests behaviour

#### Runner

* The runner is being executed by the command line tool and according to its configuration is running the supported browsers and/or devices and make sure that the proper applications are being loaded.

* After the applications has been executed the runner inform the monitoring server about his activities.

#### Reports

* When the test are running the CatJS web library is sending the test data to the monitoring server that gather the data and when the test finishes it generate a JUnit XML file to be consumed for example, by Jenkins 

* The monitoring server is printing the test data to its console. The CatJS library is printing the test data to the UI console. 
      
     
### Behavior

#### Assertions

  Currently CatJS works in a way that scraps (test units) are not being part of the test report if no assert annotation exists in the specific scrap.  
   The assert library that are being used is [chaijs](http://chaijs.com/) and only the assert API has been implemented.  
     
##### Notifications
  The test passed or failed notification will be displayed in the [UI console](ui_console.html) or in the monitor server console and available only when an assert annotation is being used.  

   
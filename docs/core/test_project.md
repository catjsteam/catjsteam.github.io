CatJS
==============


## Test project 

When cat builds your project, a cat.json file can be found below cat-project/src/config folder. Its basic properties are filled according to the catproject.json file.
This file is the "brain" behind the test. When the test application start running the first file to be loaded is the cat.json file.
After it has been loaded, it reads all of its properties, preparing the test environment and start the test scenarios.  

Scenarios can be defined for controlling the test execution. Each scenario is comprised of scraps, it means that many scenario combination can be created based on the available scraps.  

## Configuration 
Inside the file there's a description of all the available settings.

* **tests**  
Attribute for setting the test scenarios to be run. 

        "tests": [
            {
                "name": "general"
            }
        ]
 
* **scenarios**  
Attribute for scenarios definition. 

    + Any scrap available can be added to the scenarios. In that case scrap name is required for assigning a scrap to a scenario.    
    + For running one or more scenarios, they need to be added to the tests section.        
    + The -a flag can be used from the command line for auto scraps assigning, they will be added to the general section.    

            "scenarios": {
                    "general": {
                        "tests": [
                            {
                                "name": "myScrap"
                            }
                        ]
                    }
            }
  
    + Under scenario you can set any scenario name as an object property, like "general".  
    Within the scenario object set a tests property containing an array of test objects, the test object's properties are:      
        + *name*  The scrap name as appear in the annotation
        + *repeat* (optional) how many times the following scrap will be repeated 
    
    
* **run-mode**  
Two modes are available for tests executions ("tests" as default)":  
    + *tests*  
    Run the test scenarios that you defined in the test project.  
    There will be a delay between tests execution that you'll be able to follow the actions.  

    + *all*
    Ignore the test scenarios definition and run all the tests at once as they are running natively.   
    In this mode you will not be able to see the ui console or any delay in the script.  

* **"run-test-delay"** 
This is the delay in milliseconds that are going to be set between the actions (default to 500ms)

* **test-failure-timeout**
This is a timeout for failing the tests in case of general application malfunction. Set the timeout in seconds (default 20sec)

* **assert**
This is the property for setting the assertion behavior, currently JavaScript error is the only OOTB supported behavior 

* **errors**
Trap the JavaScript native errors and create an assertion entry.

* **report**
In case you wish to get a report data, set its 'disable' property to false. Currently catjs supports: JUnit XML and console format

* **format**
An array for setting which report type will be included [junit | console]

* **disable**
Disable the reports (default to false)
CatJS
==============

## CatJS Runner
  CatJS Runner responsible for running the test deployment on multiple browsers and devices (IOS and Android are supported)  
  It is a standalone [NodeJs Module](https://www.npmjs.org/package/catjsrunner) but naturally we have created a runner plugin for integration with CatJS echo system.  
  
### Configuration
  The configuration is well described in the [NodeJs Module](https://www.npmjs.org/package/catjsrunner) and we are using the same configuration for CatJS usage. See [CatJS Project (Tool)](core/catjs_tool.html)
  
### Monitoring
  Since the runner is tight to the CatJS solution, there's a strong test life-cycle.  
  The runner is executing the browser and devices, loading the application and notifying about the executions back to the monitoring server, 
  enabling CatJS server to be aware when the test started on what browser and/or devices it run and generate the report when the test finishes.
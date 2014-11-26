CatJS
==============

## Dependencies

### Third-Parties For The Web
  CatJS has a built-in web libraries\frameworks dependencies (see "dependencies" section at [catjs project tool doc](catjs_tool.html)  
  Those dependencies are being used as part of the web framework area and are packaged as part of cat.js resource.  
   
  Obviously it can be modified although it not recommended to remove the existing library since it will lead to malfunctioning of some of catjs modules. 
  Adding additional library as a dependencies is not a problem, just need to make sure to add the resources to the [APPLICATION_HOME_FOLDER]/cat-project/lib folder.
   
  * *ChaiJS*
  Currently we are using chaijs as an assertion library.
  
  * *UnderscoreJS*
  We rae using underscore as JavaScript utilities and template engine. 
  
  * *JSPath*
  CatJs has dependency at JSPath that is a great library for JSON object navigation.
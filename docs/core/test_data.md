CatJS
==============

### Test Data Usage

On CatJS project creation a test data file is being generated at the following location: cat-project/src/config.testdata.json     
This is a JSON file format and you can set your data inside and use that data within CatJS annotation. for example:              

        @[scrap
            @@code alert(@d.find(.users.name))
        ]@
             
        
We have integrated [JsPath](https://github.com/dfilatov/jspath) with CatJS core and you can use its syntax for query your data out from the test data JSON.  
To get the data and use it within scraps definitions use "@d" combined with the blow described API. And as an arguments see [JSPath documentation](https://github.com/dfilatov/jspath).

Currently we have support for two scrap methods:
  
* **find** Find a specific single entry (In case we get more than one result we'll take the first)

* **random** Get a specific entry out of an Array of items, Each call will result a random entry.

* **next**  Combined with the cat.json configuration the test data can be auto incremented. "repeat" property should be defined to the test configuration below the scenarios. Following a simple example: 

    + cat.json 
            scenarios": {
                "general": {
                  "tests": [{
                    "name": "menuItemsAction", "repeat":3
                  }]
                }
            }
            
    + testdata.json
            {    
                "menu": [
                    { "name": "credits"},
                    { "name": "howto"},
                    { "name": "home"}
                ]
            }   
            
    + JavaScript code
            @[scrap
                @@name menuItemsAction
                @@description Top Menu Actions
                @@jqm click("#menu a[scroll-to=" + @d.next(.menu).name + "]")
            ]@
    The statement @d.next(.menu).name (powered by JSPath) means: go to the next item in the menu array at the testdata.json and get the name out of the menu item. simple as that :) The jqm action is scrolling to the menu item according to the incoming test data.        
CatJS
==============

## JavaScript Annotations 
  [Annotations](http://en.wikipedia.org/wiki/Annotation) can be found in many programming languages (e.g. [Java](http://en.wikipedia.org/wiki/Java_annotation)). 
  We have implemented a text annotation parser for CatJS engine, the parser is very naive and will be improved in future releases.
       
#### Main Scrap annotation Block
  The main "scrap" block is a single test unit that can be a ui action, javascript code snippet, an assertion or all combined.
     
        @[scrap
        
        ]@

  The scrap annotation should be placed within a comment block, currently there are two options HTML and JS
  
  * <code>/&#42; &#42;/</code> 
  * <code> &lt;!-- --&gt; </code>

#### Context
  The idea behind the context is to exposing the scope variables from the source code project to the testing area. 
  Empower the tests by enabling real environment tests as closest it can get to production.
   See [Annotations Plugins](plugins/annotation_plugins.html) 
   
##### thi$
  In additional to context annotation that enables to pass scope arguments to the test, 
  there's a built-in representation of the JavaScript "this" keyword that is automatically passed to the annotation block and can be used with CatJS syntax of "thi$" keyword. 
  
        this.test = function(){};
  
        @[scrap
          @@code[
              thi$.test();
          ]
        ]@

#### CatJS Annotations
  There are CatJS native annotations that you can use, or customize your own annotation, see [Annotations Plugins](plugins/annotation_plugins.html)

#### Syntax Limitations

* When adding annotations to comments the main scrap annotation block must be added in a certain syntax because of its naive text parser.

  + Both comments for HTML and JavaScript can be used in separate lines       
  + Each annotation needs to be in new line
  + The main scrap block has to be in separate lines.
  + When adding a multi-line block the square brackets needs to be in a certain syntax for example:
  
        @[scrap
            @@code[
                alert(1)
                alert(2)
            ]
        ]@
        
  + When adding a text that need quotes, use double quotes signs:
   
           @[scrap
               @@log "my log text"
           ]@
           
  + Full example
  
            var localvar = 1;
  
            @[scrap
                @@context  localvar
                @@code[
                    alert("first alert")
                    alert("second alert")
                ]
                @@log "This is a syntax scrap example"
                @@assert ok(localvar === 1, "great conditional")
            ]@
                
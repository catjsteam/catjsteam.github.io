CatJS
==============

## Reports
Currently catjs supports, console and JUnit reports

### JUnit
On each running tests a JUnit XML file is been created below the test deployment. It then can be consumed by Jenkins or other reporters that supports JUnit.
 
### Console
On each running tests the test output is been printed to catjs monitor console.

### Settings
In the test project (cat.json), that can be found in the test deployment below 'cat' folder, the available reporters can be customized and/or it can be set to on/off.
  Currently the available customization relates to an array that the reporters types can be added or removed.




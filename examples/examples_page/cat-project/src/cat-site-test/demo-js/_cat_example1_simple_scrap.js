_cat.core.declare('C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.example1_simple_scrap.simpleManager$$cat', {
  scrap: {
    "name": ["simpleManager"],
    "perform": ["@@simpleSetText repeat(1)"],
    "manager": ["true"],
    "signal": ["TESTEND"],
    "file": "C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/demo-js/example1_simple_scrap.js",
    "scrapinfo": {
      "start": {
        "line": 61,
        "col": 9
      },
      "end": {
        "line": 68,
        "col": 11
      }
    },
    "commentinfo": {
      "start": {
        "line": 60,
        "col": 8
      },
      "end": {
        "line": 69,
        "col": 11
      }
    },
    "single": {
      "name": true,
      "perform": false,
      "manager": false,
      "signal": true,
      "file": true,
      "scrapinfo": true,
      "commentinfo": true,
      "single": true,
      "singleton": true,
      "arguments": true,
      "id": true,
      "$type": true
    },
    "singleton": {
      "name": -1,
      "perform": -1,
      "manager": 1,
      "signal": -1,
      "file": -1,
      "scrapinfo": -1,
      "commentinfo": -1,
      "single": -1,
      "singleton": -1,
      "arguments": -1,
      "id": -1,
      "$type": -1
    },
    "arguments": [],
    "id": "scrap_1",
    "$type": "js",
    "pkgName": "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.example1_simple_scrap.simpleManager"
  }
}, 'scrap');
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.example1_simple_scrap.simpleManager$$cat", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.example1_simple_scrap.simpleManager$$cat";

  /* test content in here */

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('simpleManager', 'simpleSetText', 'repeat(1)');

  /*  Manager call  */
  (function() {
    _cat.core.managerCall('simpleManager', function() {
      _cat.utils.Signal.send('TESTEND');
    });
  })();
});
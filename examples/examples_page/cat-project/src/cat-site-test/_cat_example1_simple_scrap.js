_cat.core.setManager("simpleManager", "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.example1_simple_scrap.html.simpleSetText$$cat");
_cat.core.declare('C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.example1_simple_scrap.html.simpleSetText$$cat', {
  scrap: {
    "name": ["simpleSetText"],
    "run@": ["simpleManager"],
    "embed": ["true"],
    "jqm": ["setText(\"simpleText\", \"hello world\");"],
    "file": "C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/example1_simple_scrap.html",
    "scrapinfo": {
      "start": {
        "line": 64,
        "col": 16
      },
      "end": {
        "line": 69,
        "col": 18
      }
    },
    "commentinfo": {
      "start": {
        "line": 63,
        "col": 16
      },
      "end": {
        "line": 70,
        "col": 19
      }
    },
    "single": {
      "name": true,
      "run@": true,
      "embed": true,
      "jqm": false,
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
      "run@": -1,
      "embed": -1,
      "jqm": -1,
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
    "id": "scrap_5",
    "$type": "html",
    "pkgName": "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.example1_simple_scrap.html.simpleSetText"
  }
}, 'scrap');
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.example1_simple_scrap.html.simpleSetText$$cat", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.example1_simple_scrap.html.simpleSetText$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'simpleSetText',
    desc: 'setText("simpleText", "hello world");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.setText("simpleText", "hello world");
});
_cat.core.declare('C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.textInputScrap.txt.simpleSetText$$cat', {
  scrap: {
    "name": ["simpleSetText"],
    "embed": ["true"],
    "jqm": ["setText(\"textInput\", \"hello world\");"],
    "file": "C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/textInputScrap.txt",
    "scrapinfo": {
      "start": {
        "line": 3,
        "col": 2
      },
      "end": {
        "line": 7,
        "col": 4
      }
    },
    "commentinfo": {
      "start": {
        "line": 2,
        "col": 1
      },
      "end": {
        "line": 8,
        "col": 4
      }
    },
    "single": {
      "name": true,
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
    "id": "scrap_36",
    "$type": "html",
    "pkgName": "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.textInputScrap.txt.simpleSetText"
  }
}, 'scrap');
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.textInputScrap.txt.simpleSetText$$cat", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.textInputScrap.txt.simpleSetText$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'simpleSetText',
    desc: 'setText("textInput", "hello world");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.setText("textInput", "hello world");
});
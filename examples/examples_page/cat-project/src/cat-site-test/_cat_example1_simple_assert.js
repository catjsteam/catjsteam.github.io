_cat.core.setManager("simpleManagerAssert", "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.example1_simple_assert.html.simpleSetTextWithAssert$$cat");
_cat.core.declare('C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.example1_simple_assert.html.simpleSetTextWithAssert$$cat', {
  scrap: {
    "name": ["simpleSetTextWithAssert"],
    "run@": ["simpleManagerAssert"],
    "embed": ["true"],
    "jqm": ["setText(\"simpleTextWithAssert\", \"hello world\");"],
    "assert": ["ok($('#simpleTextWithAssert').val()=='hello world','simpleTextWithAssert text == hello world')"],
    "file": "C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/example1_simple_assert.html",
    "scrapinfo": {
      "start": {
        "line": 75,
        "col": 16
      },
      "end": {
        "line": 81,
        "col": 18
      }
    },
    "commentinfo": {
      "start": {
        "line": 74,
        "col": 16
      },
      "end": {
        "line": 82,
        "col": 19
      }
    },
    "single": {
      "name": true,
      "run@": true,
      "embed": true,
      "jqm": false,
      "assert": false,
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
      "assert": -1,
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
    "id": "scrap_7",
    "$type": "html",
    "pkgName": "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.example1_simple_assert.html.simpleSetTextWithAssert"
  }
}, 'scrap');
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.example1_simple_assert.html.simpleSetTextWithAssert$$cat", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.example1_simple_assert.html.simpleSetTextWithAssert$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'simpleSetTextWithAssert',
    desc: 'setText("simpleTextWithAssert", "hello world");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.setText("simpleTextWithAssert", "hello world");
  _cat.utils.chai.assert({
    code: "assert.ok($(\"#simpleTextWithAssert\").val()==\"hello world\",\"simpleTextWithAssert text == hello world\")\n",
    fail: true,
    scrap: {
      "config": {
        "name": ["simpleSetTextWithAssert"],
        "run@": ["simpleManagerAssert"],
        "embed": ["true"],
        "jqm": ["setText(\"simpleTextWithAssert\", \"hello world\");"],
        "assert": ["ok($('#simpleTextWithAssert').val()=='hello world','simpleTextWithAssert text == hello world')"],
        "file": "C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/example1_simple_assert.html",
        "scrapinfo": {
          "start": {
            "line": 75,
            "col": 16
          },
          "end": {
            "line": 81,
            "col": 18
          }
        },
        "commentinfo": {
          "start": {
            "line": 74,
            "col": 16
          },
          "end": {
            "line": 82,
            "col": 19
          }
        },
        "single": {
          "name": true,
          "run@": true,
          "embed": true,
          "jqm": false,
          "assert": false,
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
          "assert": -1,
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
        "id": "scrap_7",
        "$type": "html"
      },
      "output": ["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'simpleSetTextWithAssert', desc: 'setText(\"simpleTextWithAssert\", \"hello world\");',tips: ''});", "_cat.core.plugin('jqm').actions.setText(\"simpleTextWithAssert\", \"hello world\");"],
      "$$context": {
        "$$context": {
          "name": "simpleSetTextWithAssert",
          "run@": "simpleManagerAssert",
          "assert": ["ok($('#simpleTextWithAssert').val()=='hello world','simpleTextWithAssert text == hello world')"],
          "embed": "true",
          "jqm": ["setText(\"simpleTextWithAssert\", \"hello world\");"]
        }
      }
    },
    args: {}
  });
});
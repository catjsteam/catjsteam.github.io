_cat.core.setManager("managerExample", "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.textInputManager.txt.setTextInput$$cat");
_cat.core.declare('C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.textInputManager.txt.setTextInput$$cat', {
  scrap: {
    "name": ["setTextInput"],
    "run@": ["managerExample"],
    "embed": ["true"],
    "jqm": ["setText(\"textInput\", \"hello world\");"],
    "assert": ["ok($('#textInput').val()=='hello world','textInput text == hello world')"],
    "file": "C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/textInputManager.txt",
    "scrapinfo": {
      "start": {
        "line": 3,
        "col": 2
      },
      "end": {
        "line": 9,
        "col": 4
      }
    },
    "commentinfo": {
      "start": {
        "line": 2,
        "col": 4
      },
      "end": {
        "line": 10,
        "col": 7
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
    "id": "scrap_37",
    "$type": "html",
    "pkgName": "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.textInputManager.txt.setTextInput"
  }
}, 'scrap');
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.textInputManager.txt.setTextInput$$cat", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.textInputManager.txt.setTextInput$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'setTextInput',
    desc: 'setText("textInput", "hello world");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.setText("textInput", "hello world");
  _cat.utils.chai.assert({
    code: "assert.ok($(\"#textInput\").val()==\"hello world\",\"textInput text == hello world\")\n",
    fail: true,
    scrap: {
      "config": {
        "name": ["setTextInput"],
        "run@": ["managerExample"],
        "embed": ["true"],
        "jqm": ["setText(\"textInput\", \"hello world\");"],
        "assert": ["ok($('#textInput').val()=='hello world','textInput text == hello world')"],
        "file": "C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/textInputManager.txt",
        "scrapinfo": {
          "start": {
            "line": 3,
            "col": 2
          },
          "end": {
            "line": 9,
            "col": 4
          }
        },
        "commentinfo": {
          "start": {
            "line": 2,
            "col": 4
          },
          "end": {
            "line": 10,
            "col": 7
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
        "id": "scrap_37",
        "$type": "html"
      },
      "output": ["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'setTextInput', desc: 'setText(\"textInput\", \"hello world\");',tips: ''});", "_cat.core.plugin('jqm').actions.setText(\"textInput\", \"hello world\");"],
      "$$context": {
        "$$context": {
          "name": "setTextInput",
          "run@": "managerExample",
          "assert": ["ok($('#textInput').val()=='hello world','textInput text == hello world')"],
          "embed": "true",
          "jqm": ["setText(\"textInput\", \"hello world\");"]
        }
      }
    },
    args: {}
  });
});
_cat.core.setManager("managerExample", "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.textInputManager.txt.setSlider$$cat");
_cat.core.declare('C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.textInputManager.txt.setSlider$$cat', {
  scrap: {
    "name": ["setSlider"],
    "run@": ["managerExample"],
    "embed": ["true"],
    "jqm": ["slide(\"slider\" , 25);"],
    "assert": ["ok($('#slider').val()=='25','slide value is 25')"],
    "file": "C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/textInputManager.txt",
    "scrapinfo": {
      "start": {
        "line": 15,
        "col": 2
      },
      "end": {
        "line": 21,
        "col": 10
      }
    },
    "commentinfo": {
      "start": {
        "line": 14,
        "col": 4
      },
      "end": {
        "line": 22,
        "col": 7
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
    "id": "scrap_38",
    "$type": "html",
    "pkgName": "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.textInputManager.txt.setSlider"
  }
}, 'scrap');
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.textInputManager.txt.setSlider$$cat", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.textInputManager.txt.setSlider$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'setSlider',
    desc: 'slide("slider" , 25);',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.slide("slider", 25);
  _cat.utils.chai.assert({
    code: "assert.ok($(\"#slider\").val()==\"25\",\"slide value is 25\")\n",
    fail: true,
    scrap: {
      "config": {
        "name": ["setSlider"],
        "run@": ["managerExample"],
        "embed": ["true"],
        "jqm": ["slide(\"slider\" , 25);"],
        "assert": ["ok($('#slider').val()=='25','slide value is 25')"],
        "file": "C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/textInputManager.txt",
        "scrapinfo": {
          "start": {
            "line": 15,
            "col": 2
          },
          "end": {
            "line": 21,
            "col": 10
          }
        },
        "commentinfo": {
          "start": {
            "line": 14,
            "col": 4
          },
          "end": {
            "line": 22,
            "col": 7
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
        "id": "scrap_38",
        "$type": "html"
      },
      "output": ["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'setSlider', desc: 'slide(\"slider\" , 25);',tips: ''});", "_cat.core.plugin('jqm').actions.slide(\"slider\" , 25);"],
      "$$context": {
        "$$context": {
          "name": "setSlider",
          "run@": "managerExample",
          "assert": ["ok($('#slider').val()=='25','slide value is 25')"],
          "embed": "true",
          "jqm": ["slide(\"slider\" , 25);"]
        }
      }
    },
    args: {}
  });
});
_cat.core.declare('C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.textInputManager.txt.managerExample$$cat', {
  scrap: {
    "name": ["managerExample"],
    "perform": ["@@setTextInput repeat(1)", "@@setSlider repeat(1)"],
    "manager": ["true"],
    "embed": ["true"],
    "catui": ["on"],
    "signal": ["TESTEND"],
    "file": "C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/textInputManager.txt",
    "scrapinfo": {
      "start": {
        "line": 29,
        "col": 2
      },
      "end": {
        "line": 39,
        "col": 10
      }
    },
    "commentinfo": {
      "start": {
        "line": 28,
        "col": 4
      },
      "end": {
        "line": 40,
        "col": 7
      }
    },
    "single": {
      "name": true,
      "perform": false,
      "manager": false,
      "embed": true,
      "catui": true,
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
      "embed": -1,
      "catui": -1,
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
    "id": "scrap_39",
    "$type": "html",
    "pkgName": "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.textInputManager.txt.managerExample"
  }
}, 'scrap');
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.textInputManager.txt.managerExample$$cat", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.textInputManager.txt.managerExample$$cat";

  /* test content in here */

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('managerExample', 'setTextInput', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('managerExample', 'setSlider', 'repeat(1)');

  /*  Manager call  */
  (function() {
    _cat.core.managerCall('managerExample', function() {
      _cat.utils.Signal.send('TESTEND');
    });
  })();

  /*  CAT UI call  */
  _cat.core.ui.on();
});
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
_cat.core.setManager("managerExample", "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.example1_simple_manager.html.setTextInput$$cat");
_cat.core.declare('C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.example1_simple_manager.html.setTextInput$$cat', {
  scrap: {
    "name": ["setTextInput"],
    "run@": ["managerExample"],
    "embed": ["true"],
    "jqm": ["setText(\"textInput\", \"hello world\");"],
    "assert": ["ok($('#textInput').val()=='hello world','textInput text == hello world')"],
    "file": "C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/example1_simple_manager.html",
    "scrapinfo": {
      "start": {
        "line": 72,
        "col": 16
      },
      "end": {
        "line": 78,
        "col": 18
      }
    },
    "commentinfo": {
      "start": {
        "line": 71,
        "col": 16
      },
      "end": {
        "line": 79,
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
    "id": "scrap_9",
    "$type": "html",
    "pkgName": "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.example1_simple_manager.html.setTextInput"
  }
}, 'scrap');
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.example1_simple_manager.html.setTextInput$$cat", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.example1_simple_manager.html.setTextInput$$cat";

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
        "file": "C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/example1_simple_manager.html",
        "scrapinfo": {
          "start": {
            "line": 72,
            "col": 16
          },
          "end": {
            "line": 78,
            "col": 18
          }
        },
        "commentinfo": {
          "start": {
            "line": 71,
            "col": 16
          },
          "end": {
            "line": 79,
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
        "id": "scrap_9",
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
_cat.core.setManager("managerExample", "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.example1_simple_manager.html.setSlider$$cat");
_cat.core.declare('C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.example1_simple_manager.html.setSlider$$cat', {
  scrap: {
    "name": ["setSlider"],
    "run@": ["managerExample"],
    "embed": ["true"],
    "jqm": ["slide(\"slider\" , 25);"],
    "assert": ["ok($('#slider').val()=='25','slide value is 25')"],
    "file": "C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/example1_simple_manager.html",
    "scrapinfo": {
      "start": {
        "line": 84,
        "col": 16
      },
      "end": {
        "line": 90,
        "col": 18
      }
    },
    "commentinfo": {
      "start": {
        "line": 83,
        "col": 16
      },
      "end": {
        "line": 91,
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
    "id": "scrap_10",
    "$type": "html",
    "pkgName": "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.example1_simple_manager.html.setSlider"
  }
}, 'scrap');
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.example1_simple_manager.html.setSlider$$cat", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.example1_simple_manager.html.setSlider$$cat";

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
        "file": "C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/example1_simple_manager.html",
        "scrapinfo": {
          "start": {
            "line": 84,
            "col": 16
          },
          "end": {
            "line": 90,
            "col": 18
          }
        },
        "commentinfo": {
          "start": {
            "line": 83,
            "col": 16
          },
          "end": {
            "line": 91,
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
        "id": "scrap_10",
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
_cat.core.declare('C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.example1_simple_manager.html.managerExample$$cat', {
  scrap: {
    "name": ["managerExample"],
    "perform": ["@@setTextInput repeat(1)", "@@setSlider repeat(1)"],
    "manager": ["true"],
    "embed": ["true"],
    "catui": ["on"],
    "signal": ["TESTEND"],
    "file": "C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/example1_simple_manager.html",
    "scrapinfo": {
      "start": {
        "line": 98,
        "col": 16
      },
      "end": {
        "line": 108,
        "col": 18
      }
    },
    "commentinfo": {
      "start": {
        "line": 97,
        "col": 16
      },
      "end": {
        "line": 109,
        "col": 19
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
    "id": "scrap_11",
    "$type": "html",
    "pkgName": "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.example1_simple_manager.html.managerExample"
  }
}, 'scrap');
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.example1_simple_manager.html.managerExample$$cat", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.example1_simple_manager.html.managerExample$$cat";

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
_cat.core.setManager("scrollManager", "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.scrollToButtons$$cat");
_cat.core.declare('C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.scrollToButtons$$cat', {
  scrap: {
    "name": ["scrollToButtons"],
    "run@": ["scrollManager"],
    "embed": ["true"],
    "jqm": ["scrollToWithRapper(\"buttonsDiv\", \"example1\");"],
    "file": "C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/index.html",
    "scrapinfo": {
      "start": {
        "line": 66,
        "col": 12
      },
      "end": {
        "line": 71,
        "col": 14
      }
    },
    "commentinfo": {
      "start": {
        "line": 65,
        "col": 8
      },
      "end": {
        "line": 72,
        "col": 11
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
    "id": "scrap_24",
    "$type": "html",
    "pkgName": "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.scrollToButtons"
  }
}, 'scrap');
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.scrollToButtons$$cat", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.scrollToButtons$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'scrollToButtons',
    desc: 'scrollToWithRapper("buttonsDiv", "example1");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.scrollToWithRapper("buttonsDiv", "example1");
});
_cat.core.setManager("radioManager", "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.selectRadioOption3$$cat");
_cat.core.declare('C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.selectRadioOption3$$cat', {
  scrap: {
    "name": ["selectRadioOption3"],
    "run@": ["radioManager"],
    "embed": ["true"],
    "jqm": ["checkRadio(\"RadioGroup\", \"select3\");"],
    "file": "C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/index.html",
    "scrapinfo": {
      "start": {
        "line": 99,
        "col": 29
      },
      "end": {
        "line": 104,
        "col": 31
      }
    },
    "commentinfo": {
      "start": {
        "line": 98,
        "col": 8
      },
      "end": {
        "line": 105,
        "col": 30
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
    "id": "scrap_25",
    "$type": "html",
    "pkgName": "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.selectRadioOption3"
  }
}, 'scrap');
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.selectRadioOption3$$cat", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.selectRadioOption3$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'selectRadioOption3',
    desc: 'checkRadio("RadioGroup", "select3");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.checkRadio("RadioGroup", "select3");
});
_cat.core.setManager("textManager", "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.setText$$cat");
_cat.core.declare('C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.setText$$cat', {
  scrap: {
    "name": ["setText"],
    "run@": ["textManager"],
    "embed": ["true"],
    "jqm": ["setText(\"text-basic\", \"hello world\");"],
    "file": "C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/index.html",
    "scrapinfo": {
      "start": {
        "line": 139,
        "col": 12
      },
      "end": {
        "line": 144,
        "col": 14
      }
    },
    "commentinfo": {
      "start": {
        "line": 138,
        "col": 8
      },
      "end": {
        "line": 145,
        "col": 11
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
    "id": "scrap_26",
    "$type": "html",
    "pkgName": "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.setText"
  }
}, 'scrap');
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.setText$$cat", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.setText$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'setText',
    desc: 'setText("text-basic", "hello world");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.setText("text-basic", "hello world");
});
_cat.core.setManager("buttonManager", "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.BtnClick$$cat");
_cat.core.declare('C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.BtnClick$$cat', {
  scrap: {
    "name": ["BtnClick"],
    "run@": ["buttonManager"],
    "embed": ["true"],
    "jqm": ["clickButton(\"clickBtn\");"],
    "file": "C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/index.html",
    "scrapinfo": {
      "start": {
        "line": 169,
        "col": 12
      },
      "end": {
        "line": 174,
        "col": 14
      }
    },
    "commentinfo": {
      "start": {
        "line": 168,
        "col": 8
      },
      "end": {
        "line": 175,
        "col": 11
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
    "id": "scrap_27",
    "$type": "html",
    "pkgName": "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.BtnClick"
  }
}, 'scrap');
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.BtnClick$$cat", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.BtnClick$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'BtnClick',
    desc: 'clickButton("clickBtn");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.clickButton("clickBtn");
});
_cat.core.setManager("collapsibleManager", "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.collapsibleClick$$cat");
_cat.core.declare('C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.collapsibleClick$$cat', {
  scrap: {
    "name": ["collapsibleClick"],
    "run@": ["collapsibleManager"],
    "embed": ["true"],
    "jqm": ["collapsible(\"basicCollapsible\");"],
    "file": "C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/index.html",
    "scrapinfo": {
      "start": {
        "line": 194,
        "col": 12
      },
      "end": {
        "line": 199,
        "col": 14
      }
    },
    "commentinfo": {
      "start": {
        "line": 193,
        "col": 8
      },
      "end": {
        "line": 200,
        "col": 11
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
    "id": "scrap_28",
    "$type": "html",
    "pkgName": "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.collapsibleClick"
  }
}, 'scrap');
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.collapsibleClick$$cat", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.collapsibleClick$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'collapsibleClick',
    desc: 'collapsible("basicCollapsible");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.collapsible("basicCollapsible");
});
_cat.core.setManager("checkboxManager", "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.setCheckB$$cat");
_cat.core.declare('C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.setCheckB$$cat', {
  scrap: {
    "name": ["setCheckB"],
    "run@": ["checkboxManager"],
    "embed": ["true"],
    "jqm": ["setCheck(\"checkbox-v-2b\");"],
    "file": "C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/index.html",
    "scrapinfo": {
      "start": {
        "line": 226,
        "col": 12
      },
      "end": {
        "line": 231,
        "col": 14
      }
    },
    "commentinfo": {
      "start": {
        "line": 225,
        "col": 8
      },
      "end": {
        "line": 232,
        "col": 11
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
    "id": "scrap_29",
    "$type": "html",
    "pkgName": "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.setCheckB"
  }
}, 'scrap');
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.setCheckB$$cat", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.setCheckB$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'setCheckB',
    desc: 'setCheck("checkbox-v-2b");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.setCheck("checkbox-v-2b");
});
_cat.core.setManager("tabsManager", "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.navTabSelect2$$cat");
_cat.core.declare('C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.navTabSelect2$$cat', {
  scrap: {
    "name": ["navTabSelect2"],
    "run@": ["tabsManager"],
    "embed": ["true"],
    "jqm": ["selectTab(\"navTab2\");"],
    "file": "C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/index.html",
    "scrapinfo": {
      "start": {
        "line": 263,
        "col": 12
      },
      "end": {
        "line": 268,
        "col": 14
      }
    },
    "commentinfo": {
      "start": {
        "line": 262,
        "col": 8
      },
      "end": {
        "line": 269,
        "col": 11
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
    "id": "scrap_30",
    "$type": "html",
    "pkgName": "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.navTabSelect2"
  }
}, 'scrap');
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.navTabSelect2$$cat", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.navTabSelect2$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'navTabSelect2',
    desc: 'selectTab("navTab2");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.selectTab("navTab2");
});
_cat.core.setManager("sliderManager", "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.slider25$$cat");
_cat.core.declare('C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.slider25$$cat', {
  scrap: {
    "name": ["slider25"],
    "run@": ["sliderManager"],
    "embed": ["true"],
    "jqm": ["slide(\"slider-1\" , 25);"],
    "file": "C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/index.html",
    "scrapinfo": {
      "start": {
        "line": 306,
        "col": 12
      },
      "end": {
        "line": 311,
        "col": 14
      }
    },
    "commentinfo": {
      "start": {
        "line": 305,
        "col": 8
      },
      "end": {
        "line": 312,
        "col": 11
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
    "id": "scrap_31",
    "$type": "html",
    "pkgName": "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.slider25"
  }
}, 'scrap');
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.slider25$$cat", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.slider25$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'slider25',
    desc: 'slide("slider-1" , 25);',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.slide("slider-1", 25);
});
_cat.core.setManager("selectMenuManager", "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.selectMenu2$$cat");
_cat.core.declare('C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.selectMenu2$$cat', {
  scrap: {
    "name": ["selectMenu2"],
    "run@": ["selectMenuManager"],
    "embed": ["true"],
    "jqm": ["selectMenu(\"select-native-1\", 2);"],
    "file": "C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/index.html",
    "scrapinfo": {
      "start": {
        "line": 334,
        "col": 18
      },
      "end": {
        "line": 339,
        "col": 20
      }
    },
    "commentinfo": {
      "start": {
        "line": 333,
        "col": 8
      },
      "end": {
        "line": 340,
        "col": 11
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
    "id": "scrap_32",
    "$type": "html",
    "pkgName": "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.selectMenu2"
  }
}, 'scrap');
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.selectMenu2$$cat", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.selectMenu2$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'selectMenu2',
    desc: 'selectMenu("select-native-1", 2);',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.selectMenu("select-native-1", 2);
});
_cat.core.setManager("swipeLeftManager", "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.swipeMeLeft$$cat");
_cat.core.declare('C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.swipeMeLeft$$cat', {
  scrap: {
    "name": ["swipeMeLeft"],
    "run@": ["swipeLeftManager"],
    "embed": ["true"],
    "jqm": ["swipeItemLeft(\"swipeMeLeft\");"],
    "file": "C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/index.html",
    "scrapinfo": {
      "start": {
        "line": 365,
        "col": 19
      },
      "end": {
        "line": 370,
        "col": 21
      }
    },
    "commentinfo": {
      "start": {
        "line": 364,
        "col": 8
      },
      "end": {
        "line": 371,
        "col": 20
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
    "id": "scrap_33",
    "$type": "html",
    "pkgName": "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.swipeMeLeft"
  }
}, 'scrap');
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.swipeMeLeft$$cat", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.swipeMeLeft$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'swipeMeLeft',
    desc: 'swipeItemLeft("swipeMeLeft");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.swipeItemLeft("swipeMeLeft");
});
_cat.core.setManager("swipeRightManager", "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.swipeMeRight$$cat");
_cat.core.declare('C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.swipeMeRight$$cat', {
  scrap: {
    "name": ["swipeMeRight"],
    "run@": ["swipeRightManager"],
    "embed": ["true"],
    "jqm": ["swipeItemRight(\"swipeMeRight\");"],
    "file": "C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/index.html",
    "scrapinfo": {
      "start": {
        "line": 407,
        "col": 20
      },
      "end": {
        "line": 412,
        "col": 22
      }
    },
    "commentinfo": {
      "start": {
        "line": 406,
        "col": 8
      },
      "end": {
        "line": 413,
        "col": 21
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
    "id": "scrap_34",
    "$type": "html",
    "pkgName": "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.swipeMeRight"
  }
}, 'scrap');
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.swipeMeRight$$cat", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.swipeMeRight$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'swipeMeRight',
    desc: 'swipeItemRight("swipeMeRight");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.swipeItemRight("swipeMeRight");
});
_cat.core.declare('C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.textInputAssert.txt.simpleSetText$$cat', {
  scrap: {
    "name": ["simpleSetText"],
    "embed": ["true"],
    "jqm": ["setText(\"textInput\", \"hello world\");"],
    "assert": ["ok($('#textInput').val()=='hello world','textInput text == hello world')"],
    "file": "C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/textInputAssert.txt",
    "scrapinfo": {
      "start": {
        "line": 3,
        "col": 2
      },
      "end": {
        "line": 8,
        "col": 4
      }
    },
    "commentinfo": {
      "start": {
        "line": 2,
        "col": 1
      },
      "end": {
        "line": 9,
        "col": 4
      }
    },
    "single": {
      "name": true,
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
    "id": "scrap_35",
    "$type": "html",
    "pkgName": "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.textInputAssert.txt.simpleSetText"
  }
}, 'scrap');
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.textInputAssert.txt.simpleSetText$$cat", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.textInputAssert.txt.simpleSetText$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'simpleSetText',
    desc: 'setText("textInput", "hello world");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.setText("textInput", "hello world");
  _cat.utils.chai.assert({
    code: "assert.ok($(\"#textInput\").val()==\"hello world\",\"textInput text == hello world\")\n",
    fail: true,
    scrap: {
      "config": {
        "name": ["simpleSetText"],
        "embed": ["true"],
        "jqm": ["setText(\"textInput\", \"hello world\");"],
        "assert": ["ok($('#textInput').val()=='hello world','textInput text == hello world')"],
        "file": "C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/textInputAssert.txt",
        "scrapinfo": {
          "start": {
            "line": 3,
            "col": 2
          },
          "end": {
            "line": 8,
            "col": 4
          }
        },
        "commentinfo": {
          "start": {
            "line": 2,
            "col": 1
          },
          "end": {
            "line": 9,
            "col": 4
          }
        },
        "single": {
          "name": true,
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
        "id": "scrap_35",
        "$type": "html"
      },
      "output": ["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'simpleSetText', desc: 'setText(\"textInput\", \"hello world\");',tips: ''});", "_cat.core.plugin('jqm').actions.setText(\"textInput\", \"hello world\");"],
      "$$context": {
        "$$context": {
          "name": "simpleSetText",
          "assert": ["ok($('#textInput').val()=='hello world','textInput text == hello world')"],
          "embed": "true",
          "jqm": ["setText(\"textInput\", \"hello world\");"]
        }
      }
    },
    args: {}
  });
});
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
_cat.core.declare('C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.scrollManager$$cat', {
  scrap: {
    "name": ["scrollManager"],
    "perform": ["@@scrollToButtons repeat(1)"],
    "manager": ["true"],
    "signal": ["TESTEND"],
    "file": "C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/demo-js/demoScripts.js",
    "scrapinfo": {
      "start": {
        "line": 42,
        "col": 9
      },
      "end": {
        "line": 49,
        "col": 11
      }
    },
    "commentinfo": {
      "start": {
        "line": 41,
        "col": 8
      },
      "end": {
        "line": 50,
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
    "id": "scrap_12",
    "$type": "js",
    "pkgName": "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.scrollManager"
  }
}, 'scrap');
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.scrollManager$$cat", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.scrollManager$$cat";

  /* test content in here */

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('scrollManager', 'scrollToButtons', 'repeat(1)');

  /*  Manager call  */
  (function() {
    _cat.core.managerCall('scrollManager', function() {
      _cat.utils.Signal.send('TESTEND');
    });
  })();
});
_cat.core.declare('C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.radioManager$$cat', {
  scrap: {
    "name": ["radioManager"],
    "perform": ["@@selectRadioOption3 repeat(1)"],
    "manager": ["true"],
    "signal": ["TESTEND"],
    "file": "C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/demo-js/demoScripts.js",
    "scrapinfo": {
      "start": {
        "line": 57,
        "col": 9
      },
      "end": {
        "line": 64,
        "col": 11
      }
    },
    "commentinfo": {
      "start": {
        "line": 56,
        "col": 8
      },
      "end": {
        "line": 65,
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
    "id": "scrap_13",
    "$type": "js",
    "pkgName": "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.radioManager"
  }
}, 'scrap');
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.radioManager$$cat", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.radioManager$$cat";

  /* test content in here */

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('radioManager', 'selectRadioOption3', 'repeat(1)');

  /*  Manager call  */
  (function() {
    _cat.core.managerCall('radioManager', function() {
      _cat.utils.Signal.send('TESTEND');
    });
  })();
});
_cat.core.declare('C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.textManager$$cat', {
  scrap: {
    "name": ["textManager"],
    "perform": ["@@setText repeat(1)"],
    "manager": ["true"],
    "signal": ["TESTEND"],
    "file": "C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/demo-js/demoScripts.js",
    "scrapinfo": {
      "start": {
        "line": 74,
        "col": 9
      },
      "end": {
        "line": 81,
        "col": 11
      }
    },
    "commentinfo": {
      "start": {
        "line": 73,
        "col": 8
      },
      "end": {
        "line": 82,
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
    "id": "scrap_14",
    "$type": "js",
    "pkgName": "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.textManager"
  }
}, 'scrap');
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.textManager$$cat", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.textManager$$cat";

  /* test content in here */

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('textManager', 'setText', 'repeat(1)');

  /*  Manager call  */
  (function() {
    _cat.core.managerCall('textManager', function() {
      _cat.utils.Signal.send('TESTEND');
    });
  })();
});
_cat.core.declare('C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.buttonManager$$cat', {
  scrap: {
    "name": ["buttonManager"],
    "perform": ["@@BtnClick repeat(1)"],
    "manager": ["true"],
    "signal": ["TESTEND"],
    "file": "C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/demo-js/demoScripts.js",
    "scrapinfo": {
      "start": {
        "line": 90,
        "col": 9
      },
      "end": {
        "line": 97,
        "col": 11
      }
    },
    "commentinfo": {
      "start": {
        "line": 89,
        "col": 8
      },
      "end": {
        "line": 98,
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
    "id": "scrap_15",
    "$type": "js",
    "pkgName": "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.buttonManager"
  }
}, 'scrap');
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.buttonManager$$cat", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.buttonManager$$cat";

  /* test content in here */

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('buttonManager', 'BtnClick', 'repeat(1)');

  /*  Manager call  */
  (function() {
    _cat.core.managerCall('buttonManager', function() {
      _cat.utils.Signal.send('TESTEND');
    });
  })();
});
_cat.core.declare('C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.collapsibleManager$$cat', {
  scrap: {
    "name": ["collapsibleManager"],
    "perform": ["@@collapsibleClick repeat(1)"],
    "manager": ["true"],
    "signal": ["TESTEND"],
    "file": "C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/demo-js/demoScripts.js",
    "scrapinfo": {
      "start": {
        "line": 107,
        "col": 9
      },
      "end": {
        "line": 114,
        "col": 11
      }
    },
    "commentinfo": {
      "start": {
        "line": 106,
        "col": 8
      },
      "end": {
        "line": 115,
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
    "id": "scrap_16",
    "$type": "js",
    "pkgName": "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.collapsibleManager"
  }
}, 'scrap');
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.collapsibleManager$$cat", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.collapsibleManager$$cat";

  /* test content in here */

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('collapsibleManager', 'collapsibleClick', 'repeat(1)');

  /*  Manager call  */
  (function() {
    _cat.core.managerCall('collapsibleManager', function() {
      _cat.utils.Signal.send('TESTEND');
    });
  })();
});
_cat.core.declare('C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.checkboxManager$$cat', {
  scrap: {
    "name": ["checkboxManager"],
    "perform": ["@@setCheckB repeat(1)"],
    "manager": ["true"],
    "signal": ["TESTEND"],
    "file": "C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/demo-js/demoScripts.js",
    "scrapinfo": {
      "start": {
        "line": 123,
        "col": 9
      },
      "end": {
        "line": 130,
        "col": 11
      }
    },
    "commentinfo": {
      "start": {
        "line": 122,
        "col": 8
      },
      "end": {
        "line": 131,
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
    "id": "scrap_17",
    "$type": "js",
    "pkgName": "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.checkboxManager"
  }
}, 'scrap');
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.checkboxManager$$cat", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.checkboxManager$$cat";

  /* test content in here */

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('checkboxManager', 'setCheckB', 'repeat(1)');

  /*  Manager call  */
  (function() {
    _cat.core.managerCall('checkboxManager', function() {
      _cat.utils.Signal.send('TESTEND');
    });
  })();
});
_cat.core.declare('C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.tabsManager$$cat', {
  scrap: {
    "name": ["tabsManager"],
    "perform": ["@@navTabSelect2 repeat(1)"],
    "manager": ["true"],
    "signal": ["TESTEND"],
    "file": "C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/demo-js/demoScripts.js",
    "scrapinfo": {
      "start": {
        "line": 137,
        "col": 9
      },
      "end": {
        "line": 144,
        "col": 11
      }
    },
    "commentinfo": {
      "start": {
        "line": 136,
        "col": 8
      },
      "end": {
        "line": 145,
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
    "id": "scrap_18",
    "$type": "js",
    "pkgName": "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.tabsManager"
  }
}, 'scrap');
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.tabsManager$$cat", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.tabsManager$$cat";

  /* test content in here */

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('tabsManager', 'navTabSelect2', 'repeat(1)');

  /*  Manager call  */
  (function() {
    _cat.core.managerCall('tabsManager', function() {
      _cat.utils.Signal.send('TESTEND');
    });
  })();
});
_cat.core.declare('C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.sliderManager$$cat', {
  scrap: {
    "name": ["sliderManager"],
    "perform": ["@@slider25 repeat(1)"],
    "manager": ["true"],
    "signal": ["TESTEND"],
    "file": "C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/demo-js/demoScripts.js",
    "scrapinfo": {
      "start": {
        "line": 150,
        "col": 9
      },
      "end": {
        "line": 157,
        "col": 11
      }
    },
    "commentinfo": {
      "start": {
        "line": 149,
        "col": 8
      },
      "end": {
        "line": 158,
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
    "id": "scrap_19",
    "$type": "js",
    "pkgName": "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.sliderManager"
  }
}, 'scrap');
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.sliderManager$$cat", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.sliderManager$$cat";

  /* test content in here */

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('sliderManager', 'slider25', 'repeat(1)');

  /*  Manager call  */
  (function() {
    _cat.core.managerCall('sliderManager', function() {
      _cat.utils.Signal.send('TESTEND');
    });
  })();
});
_cat.core.declare('C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.selectMenuManager$$cat', {
  scrap: {
    "name": ["selectMenuManager"],
    "perform": ["@@selectMenu2 repeat(1)"],
    "manager": ["true"],
    "signal": ["TESTEND"],
    "file": "C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/demo-js/demoScripts.js",
    "scrapinfo": {
      "start": {
        "line": 163,
        "col": 9
      },
      "end": {
        "line": 170,
        "col": 11
      }
    },
    "commentinfo": {
      "start": {
        "line": 162,
        "col": 8
      },
      "end": {
        "line": 171,
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
    "id": "scrap_20",
    "$type": "js",
    "pkgName": "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.selectMenuManager"
  }
}, 'scrap');
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.selectMenuManager$$cat", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.selectMenuManager$$cat";

  /* test content in here */

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('selectMenuManager', 'selectMenu2', 'repeat(1)');

  /*  Manager call  */
  (function() {
    _cat.core.managerCall('selectMenuManager', function() {
      _cat.utils.Signal.send('TESTEND');
    });
  })();
});
_cat.core.declare('C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.swipeLeftManager$$cat', {
  scrap: {
    "name": ["swipeLeftManager"],
    "perform": ["@@swipeMeLeft repeat(1)"],
    "manager": ["true"],
    "signal": ["TESTEND"],
    "file": "C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/demo-js/demoScripts.js",
    "scrapinfo": {
      "start": {
        "line": 177,
        "col": 9
      },
      "end": {
        "line": 184,
        "col": 11
      }
    },
    "commentinfo": {
      "start": {
        "line": 176,
        "col": 8
      },
      "end": {
        "line": 185,
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
    "id": "scrap_21",
    "$type": "js",
    "pkgName": "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.swipeLeftManager"
  }
}, 'scrap');
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.swipeLeftManager$$cat", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.swipeLeftManager$$cat";

  /* test content in here */

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('swipeLeftManager', 'swipeMeLeft', 'repeat(1)');

  /*  Manager call  */
  (function() {
    _cat.core.managerCall('swipeLeftManager', function() {
      _cat.utils.Signal.send('TESTEND');
    });
  })();
});
_cat.core.declare('C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.swipeRightManager$$cat', {
  scrap: {
    "name": ["swipeRightManager"],
    "perform": ["@@swipeMeRight repeat(1)"],
    "manager": ["true"],
    "signal": ["TESTEND"],
    "file": "C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/demo-js/demoScripts.js",
    "scrapinfo": {
      "start": {
        "line": 191,
        "col": 9
      },
      "end": {
        "line": 198,
        "col": 11
      }
    },
    "commentinfo": {
      "start": {
        "line": 190,
        "col": 8
      },
      "end": {
        "line": 199,
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
    "id": "scrap_22",
    "$type": "js",
    "pkgName": "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.swipeRightManager"
  }
}, 'scrap');
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.swipeRightManager$$cat", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.swipeRightManager$$cat";

  /* test content in here */

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('swipeRightManager', 'swipeMeRight', 'repeat(1)');

  /*  Manager call  */
  (function() {
    _cat.core.managerCall('swipeRightManager', function() {
      _cat.utils.Signal.send('TESTEND');
    });
  })();
});
_cat.core.declare('C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.example1_simple_assert.simpleManagerAssert$$cat', {
  scrap: {
    "name": ["simpleManagerAssert"],
    "perform": ["@@simpleSetTextWithAssert repeat(1)"],
    "manager": ["true"],
    "signal": ["TESTEND"],
    "file": "C:/dev/projects/lastboy/CAT/apps/site/examples/examples_page/cat-project/target/cat-site-test/demo-js/example1_simple_assert.js",
    "scrapinfo": {
      "start": {
        "line": 74,
        "col": 9
      },
      "end": {
        "line": 81,
        "col": 11
      }
    },
    "commentinfo": {
      "start": {
        "line": 73,
        "col": 8
      },
      "end": {
        "line": 82,
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
    "id": "scrap_3",
    "$type": "js",
    "pkgName": "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.example1_simple_assert.simpleManagerAssert"
  }
}, 'scrap');
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.example1_simple_assert.simpleManagerAssert$$cat", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.example1_simple_assert.simpleManagerAssert$$cat";

  /* test content in here */

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('simpleManagerAssert', 'simpleSetTextWithAssert', 'repeat(1)');

  /*  Manager call  */
  (function() {
    _cat.core.managerCall('simpleManagerAssert', function() {
      _cat.utils.Signal.send('TESTEND');
    });
  })();
});
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
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.scrollManager", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.scrollManager";

  return {

    /**
     * Init functionality for scrap C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.scrollManager
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.radioManager", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.radioManager";

  return {

    /**
     * Init functionality for scrap C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.radioManager
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.textManager", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.textManager";

  return {

    /**
     * Init functionality for scrap C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.textManager
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.buttonManager", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.buttonManager";

  return {

    /**
     * Init functionality for scrap C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.buttonManager
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.collapsibleManager", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.collapsibleManager";

  return {

    /**
     * Init functionality for scrap C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.collapsibleManager
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.checkboxManager", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.checkboxManager";

  return {

    /**
     * Init functionality for scrap C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.checkboxManager
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.tabsManager", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.tabsManager";

  return {

    /**
     * Init functionality for scrap C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.tabsManager
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.sliderManager", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.sliderManager";

  return {

    /**
     * Init functionality for scrap C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.sliderManager
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.selectMenuManager", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.selectMenuManager";

  return {

    /**
     * Init functionality for scrap C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.selectMenuManager
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.swipeLeftManager", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.swipeLeftManager";

  return {

    /**
     * Init functionality for scrap C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.swipeLeftManager
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.swipeRightManager", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.swipeRightManager";

  return {

    /**
     * Init functionality for scrap C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.demoScripts.swipeRightManager
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.example1_simple_assert.simpleManagerAssert", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.example1_simple_assert.simpleManagerAssert";

  return {

    /**
     * Init functionality for scrap C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.example1_simple_assert.simpleManagerAssert
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.example1_simple_scrap.simpleManager", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.example1_simple_scrap.simpleManager";

  return {

    /**
     * Init functionality for scrap C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.demo-js.example1_simple_scrap.simpleManager
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.example1_simple_assert.html.simpleSetTextWithAssert", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.example1_simple_assert.html.simpleSetTextWithAssert";

  return {

    /**
     * Init functionality for scrap C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.example1_simple_assert.html.simpleSetTextWithAssert
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.example1_simple_manager.html.setTextInput", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.example1_simple_manager.html.setTextInput";

  return {

    /**
     * Init functionality for scrap C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.example1_simple_manager.html.setTextInput
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.example1_simple_manager.html.setSlider", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.example1_simple_manager.html.setSlider";

  return {

    /**
     * Init functionality for scrap C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.example1_simple_manager.html.setSlider
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.example1_simple_manager.html.managerExample", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.example1_simple_manager.html.managerExample";

  return {

    /**
     * Init functionality for scrap C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.example1_simple_manager.html.managerExample
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.example1_simple_scrap.html.simpleSetText", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.example1_simple_scrap.html.simpleSetText";

  return {

    /**
     * Init functionality for scrap C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.example1_simple_scrap.html.simpleSetText
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.scrollToButtons", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.scrollToButtons";

  return {

    /**
     * Init functionality for scrap C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.scrollToButtons
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.selectRadioOption3", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.selectRadioOption3";

  return {

    /**
     * Init functionality for scrap C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.selectRadioOption3
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.setText", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.setText";

  return {

    /**
     * Init functionality for scrap C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.setText
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.BtnClick", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.BtnClick";

  return {

    /**
     * Init functionality for scrap C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.BtnClick
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.collapsibleClick", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.collapsibleClick";

  return {

    /**
     * Init functionality for scrap C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.collapsibleClick
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.setCheckB", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.setCheckB";

  return {

    /**
     * Init functionality for scrap C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.setCheckB
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.navTabSelect2", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.navTabSelect2";

  return {

    /**
     * Init functionality for scrap C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.navTabSelect2
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.slider25", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.slider25";

  return {

    /**
     * Init functionality for scrap C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.slider25
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.selectMenu2", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.selectMenu2";

  return {

    /**
     * Init functionality for scrap C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.selectMenu2
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.swipeMeLeft", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.swipeMeLeft";

  return {

    /**
     * Init functionality for scrap C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.swipeMeLeft
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.swipeMeRight", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.swipeMeRight";

  return {

    /**
     * Init functionality for scrap C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.index.html.swipeMeRight
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.textInputAssert.txt.simpleSetText", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.textInputAssert.txt.simpleSetText";

  return {

    /**
     * Init functionality for scrap C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.textInputAssert.txt.simpleSetText
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.textInputManager.txt.setTextInput", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.textInputManager.txt.setTextInput";

  return {

    /**
     * Init functionality for scrap C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.textInputManager.txt.setTextInput
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.textInputManager.txt.setSlider", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.textInputManager.txt.setSlider";

  return {

    /**
     * Init functionality for scrap C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.textInputManager.txt.setSlider
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.textInputManager.txt.managerExample", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.textInputManager.txt.managerExample";

  return {

    /**
     * Init functionality for scrap C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.textInputManager.txt.managerExample
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.textInputScrap.txt.simpleSetText", function() {

  var pkgName = "C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.textInputScrap.txt.simpleSetText";

  return {

    /**
     * Init functionality for scrap C:.dev.projects.lastboy.CAT.apps.site.examples.examples_page.cat-project.target.cat-site-test.textInputScrap.txt.simpleSetText
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
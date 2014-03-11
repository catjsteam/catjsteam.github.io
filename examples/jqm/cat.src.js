_cat.core.setManager("mainPageManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.index.html.formWidgetsScroll$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.index.html.formWidgetsScroll$$cat', {
  scrap: {
    "name": ["formWidgetsScroll"],
    "run@": ["mainPageManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"formWidgets\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/index.html",
    "scrapinfo": {
      "start": {
        "line": 86,
        "col": 18
      },
      "end": {
        "line": 91,
        "col": 20
      }
    },
    "commentinfo": {
      "start": {
        "line": 85,
        "col": 16
      },
      "end": {
        "line": 92,
        "col": 16
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
    "id": "scrap_76",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.index.html.formWidgetsScroll"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.index.html.formWidgetsScroll$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.index.html.formWidgetsScroll$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'formWidgetsScroll',
    desc: 'scrollTo("formWidgets");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.scrollTo("formWidgets");
});
_cat.core.setManager("mainPageManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.index.html.checkboxesRef$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.index.html.checkboxesRef$$cat', {
  scrap: {
    "name": ["checkboxesRef"],
    "run@": ["mainPageManager"],
    "embed": ["true"],
    "jqm": ["clickRef(\"checkboxesRef\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/index.html",
    "scrapinfo": {
      "start": {
        "line": 97,
        "col": 22
      },
      "end": {
        "line": 102,
        "col": 24
      }
    },
    "commentinfo": {
      "start": {
        "line": 96,
        "col": 20
      },
      "end": {
        "line": 103,
        "col": 23
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
    "id": "scrap_77",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.index.html.checkboxesRef"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.index.html.checkboxesRef$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.index.html.checkboxesRef$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'checkboxesRef',
    desc: 'clickRef("checkboxesRef");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.clickRef("checkboxesRef");
});
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.index.html.mainPageManager$$cat', {
  scrap: {
    "name": ["mainPageManager"],
    "perform": ["@@formWidgetsScroll repeat(1)", "@@checkboxesRef repeat(1)"],
    "embed": ["true"],
    "catui": ["on"],
    "manager": ["true"],
    "signal": ["TESTEND"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/index.html",
    "scrapinfo": {
      "start": {
        "line": 116,
        "col": 6
      },
      "end": {
        "line": 126,
        "col": 8
      }
    },
    "commentinfo": {
      "start": {
        "line": 115,
        "col": 8
      },
      "end": {
        "line": 127,
        "col": 9
      }
    },
    "single": {
      "name": true,
      "perform": false,
      "embed": true,
      "catui": true,
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
      "embed": -1,
      "catui": -1,
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
    "id": "scrap_78",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.index.html.mainPageManager"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.index.html.mainPageManager$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.index.html.mainPageManager$$cat";

  /* test content in here */

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('mainPageManager', 'formWidgetsScroll', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('mainPageManager', 'checkboxesRef', 'repeat(1)');

  /*  CAT UI call  */
  _cat.core.ui.on();

  /*  Manager call  */
  (function() {
    _cat.core.managerCall('mainPageManager', function() {
      _cat.utils.Signal.send('TESTEND');
    });
  })();
});
_cat.core.setManager("scrapCheckboxManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.appMenuClick$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.appMenuClick$$cat', {
  scrap: {
    "name": ["appMenuClick"],
    "run@": ["scrapCheckboxManager"],
    "embed": ["true"],
    "jqm": ["clickRef(\"appMenu\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/checkboxradio-checkbox/index.html",
    "scrapinfo": {
      "start": {
        "line": 34,
        "col": 22
      },
      "end": {
        "line": 39,
        "col": 24
      }
    },
    "commentinfo": {
      "start": {
        "line": 33,
        "col": 8
      },
      "end": {
        "line": 40,
        "col": 23
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
    "id": "scrap_2",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.appMenuClick"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.appMenuClick$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.appMenuClick$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'appMenuClick',
    desc: 'clickRef("appMenu");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.clickRef("appMenu");
});
_cat.core.setManager("scrapCheckboxManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.checkboxVerticalScroll$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.checkboxVerticalScroll$$cat', {
  scrap: {
    "name": ["checkboxVerticalScroll"],
    "run@": ["scrapCheckboxManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"checkboxVertical\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/checkboxradio-checkbox/index.html",
    "scrapinfo": {
      "start": {
        "line": 75,
        "col": 19
      },
      "end": {
        "line": 80,
        "col": 21
      }
    },
    "commentinfo": {
      "start": {
        "line": 74,
        "col": 8
      },
      "end": {
        "line": 81,
        "col": 17
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
    "id": "scrap_3",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.checkboxVerticalScroll"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.checkboxVerticalScroll$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.checkboxVerticalScroll$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'checkboxVerticalScroll',
    desc: 'scrollTo("checkboxVertical");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.scrollTo("checkboxVertical");
});
_cat.core.setManager("scrapCheckboxManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.checkboxVerticalGroupScroll$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.checkboxVerticalGroupScroll$$cat', {
  scrap: {
    "name": ["checkboxVerticalGroupScroll"],
    "run@": ["scrapCheckboxManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"checkboxVerticalGroup\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/checkboxradio-checkbox/index.html",
    "scrapinfo": {
      "start": {
        "line": 89,
        "col": 19
      },
      "end": {
        "line": 94,
        "col": 21
      }
    },
    "commentinfo": {
      "start": {
        "line": 88,
        "col": 8
      },
      "end": {
        "line": 95,
        "col": 17
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
    "id": "scrap_4",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.checkboxVerticalGroupScroll"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.checkboxVerticalGroupScroll$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.checkboxVerticalGroupScroll$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'checkboxVerticalGroupScroll',
    desc: 'scrollTo("checkboxVerticalGroup");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.scrollTo("checkboxVerticalGroup");
});
_cat.core.setManager("scrapCheckboxManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.setCheckC$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.setCheckC$$cat', {
  scrap: {
    "name": ["setCheckC"],
    "run@": ["scrapCheckboxManager"],
    "embed": ["true"],
    "jqm": ["setCheck(\"checkbox-v-2c\");"],
    "assert": ["ok($('#checkbox-v-2c').is(':checked'),'checkbox-v-2c is checked')"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/checkboxradio-checkbox/index.html",
    "scrapinfo": {
      "start": {
        "line": 98,
        "col": 19
      },
      "end": {
        "line": 104,
        "col": 21
      }
    },
    "commentinfo": {
      "start": {
        "line": 97,
        "col": 8
      },
      "end": {
        "line": 105,
        "col": 17
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
    "id": "scrap_5",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.setCheckC"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.setCheckC$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.setCheckC$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'setCheckC',
    desc: 'setCheck("checkbox-v-2c");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.setCheck("checkbox-v-2c");
  _cat.utils.chai.assert({
    code: "assert.ok($(\"#checkbox-v-2c\").is(\":checked\"),\"checkbox-v-2c is checked\")\n",
    fail: true,
    scrap: {
      "config": {
        "name": ["setCheckC"],
        "run@": ["scrapCheckboxManager"],
        "embed": ["true"],
        "jqm": ["setCheck(\"checkbox-v-2c\");"],
        "assert": ["ok($('#checkbox-v-2c').is(':checked'),'checkbox-v-2c is checked')"],
        "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/checkboxradio-checkbox/index.html",
        "scrapinfo": {
          "start": {
            "line": 98,
            "col": 19
          },
          "end": {
            "line": 104,
            "col": 21
          }
        },
        "commentinfo": {
          "start": {
            "line": 97,
            "col": 8
          },
          "end": {
            "line": 105,
            "col": 17
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
        "id": "scrap_5",
        "$type": "html"
      },
      "output": ["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'setCheckC', desc: 'setCheck(\"checkbox-v-2c\");',tips: ''});", "_cat.core.plugin('jqm').actions.setCheck(\"checkbox-v-2c\");"],
      "$$context": {
        "$$context": {
          "name": "setCheckC",
          "run@": "scrapCheckboxManager",
          "assert": ["ok($('#checkbox-v-2c').is(':checked'),'checkbox-v-2c is checked')"],
          "embed": "true",
          "jqm": ["setCheck(\"checkbox-v-2c\");"]
        }
      }
    }
  });
});
_cat.core.setManager("scrapCheckboxManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.setCheckB$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.setCheckB$$cat', {
  scrap: {
    "name": ["setCheckB"],
    "run@": ["scrapCheckboxManager"],
    "embed": ["true"],
    "jqm": ["setCheck(\"checkbox-v-2b\");"],
    "assert": ["ok($('#checkbox-v-2b').is(':checked'),'checkbox-v-2b is checked')"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/checkboxradio-checkbox/index.html",
    "scrapinfo": {
      "start": {
        "line": 109,
        "col": 18
      },
      "end": {
        "line": 115,
        "col": 20
      }
    },
    "commentinfo": {
      "start": {
        "line": 108,
        "col": 8
      },
      "end": {
        "line": 116,
        "col": 16
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
    "id": "scrap_6",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.setCheckB"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.setCheckB$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.setCheckB$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'setCheckB',
    desc: 'setCheck("checkbox-v-2b");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.setCheck("checkbox-v-2b");
  _cat.utils.chai.assert({
    code: "assert.ok($(\"#checkbox-v-2b\").is(\":checked\"),\"checkbox-v-2b is checked\")\n",
    fail: true,
    scrap: {
      "config": {
        "name": ["setCheckB"],
        "run@": ["scrapCheckboxManager"],
        "embed": ["true"],
        "jqm": ["setCheck(\"checkbox-v-2b\");"],
        "assert": ["ok($('#checkbox-v-2b').is(':checked'),'checkbox-v-2b is checked')"],
        "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/checkboxradio-checkbox/index.html",
        "scrapinfo": {
          "start": {
            "line": 109,
            "col": 18
          },
          "end": {
            "line": 115,
            "col": 20
          }
        },
        "commentinfo": {
          "start": {
            "line": 108,
            "col": 8
          },
          "end": {
            "line": 116,
            "col": 16
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
        "id": "scrap_6",
        "$type": "html"
      },
      "output": ["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'setCheckB', desc: 'setCheck(\"checkbox-v-2b\");',tips: ''});", "_cat.core.plugin('jqm').actions.setCheck(\"checkbox-v-2b\");"],
      "$$context": {
        "$$context": {
          "name": "setCheckB",
          "run@": "scrapCheckboxManager",
          "assert": ["ok($('#checkbox-v-2b').is(':checked'),'checkbox-v-2b is checked')"],
          "embed": "true",
          "jqm": ["setCheck(\"checkbox-v-2b\");"]
        }
      }
    }
  });
});
_cat.core.setManager("scrapCheckboxManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.checkboxHorizontalScroll$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.checkboxHorizontalScroll$$cat', {
  scrap: {
    "name": ["checkboxHorizontalScroll"],
    "run@": ["scrapCheckboxManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"checkboxHorizontal\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/checkboxradio-checkbox/index.html",
    "scrapinfo": {
      "start": {
        "line": 134,
        "col": 19
      },
      "end": {
        "line": 139,
        "col": 21
      }
    },
    "commentinfo": {
      "start": {
        "line": 133,
        "col": 8
      },
      "end": {
        "line": 140,
        "col": 17
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
    "id": "scrap_7",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.checkboxHorizontalScroll"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.checkboxHorizontalScroll$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.checkboxHorizontalScroll$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'checkboxHorizontalScroll',
    desc: 'scrollTo("checkboxHorizontal");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.scrollTo("checkboxHorizontal");
});
_cat.core.setManager("scrapCheckboxManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.setHCheckC$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.setHCheckC$$cat', {
  scrap: {
    "name": ["setHCheckC"],
    "run@": ["scrapCheckboxManager"],
    "embed": ["true"],
    "jqm": ["setCheck(\"checkbox-h-2a\");"],
    "assert": ["ok($('#checkbox-h-2a').is(':checked'),'checkbox-h-2a is checked')"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/checkboxradio-checkbox/index.html",
    "scrapinfo": {
      "start": {
        "line": 149,
        "col": 19
      },
      "end": {
        "line": 155,
        "col": 21
      }
    },
    "commentinfo": {
      "start": {
        "line": 148,
        "col": 8
      },
      "end": {
        "line": 156,
        "col": 17
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
    "id": "scrap_8",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.setHCheckC"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.setHCheckC$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.setHCheckC$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'setHCheckC',
    desc: 'setCheck("checkbox-h-2a");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.setCheck("checkbox-h-2a");
  _cat.utils.chai.assert({
    code: "assert.ok($(\"#checkbox-h-2a\").is(\":checked\"),\"checkbox-h-2a is checked\")\n",
    fail: true,
    scrap: {
      "config": {
        "name": ["setHCheckC"],
        "run@": ["scrapCheckboxManager"],
        "embed": ["true"],
        "jqm": ["setCheck(\"checkbox-h-2a\");"],
        "assert": ["ok($('#checkbox-h-2a').is(':checked'),'checkbox-h-2a is checked')"],
        "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/checkboxradio-checkbox/index.html",
        "scrapinfo": {
          "start": {
            "line": 149,
            "col": 19
          },
          "end": {
            "line": 155,
            "col": 21
          }
        },
        "commentinfo": {
          "start": {
            "line": 148,
            "col": 8
          },
          "end": {
            "line": 156,
            "col": 17
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
        "id": "scrap_8",
        "$type": "html"
      },
      "output": ["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'setHCheckC', desc: 'setCheck(\"checkbox-h-2a\");',tips: ''});", "_cat.core.plugin('jqm').actions.setCheck(\"checkbox-h-2a\");"],
      "$$context": {
        "$$context": {
          "name": "setHCheckC",
          "run@": "scrapCheckboxManager",
          "assert": ["ok($('#checkbox-h-2a').is(':checked'),'checkbox-h-2a is checked')"],
          "embed": "true",
          "jqm": ["setCheck(\"checkbox-h-2a\");"]
        }
      }
    }
  });
});
_cat.core.setManager("scrapCheckboxManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.setHCheckB$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.setHCheckB$$cat', {
  scrap: {
    "name": ["setHCheckB"],
    "run@": ["scrapCheckboxManager"],
    "embed": ["true"],
    "jqm": ["setCheck(\"checkbox-h-2c\");"],
    "assert": ["ok($('#checkbox-h-2c').is(':checked'),'checkbox-h-2c is checked')"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/checkboxradio-checkbox/index.html",
    "scrapinfo": {
      "start": {
        "line": 160,
        "col": 18
      },
      "end": {
        "line": 166,
        "col": 20
      }
    },
    "commentinfo": {
      "start": {
        "line": 159,
        "col": 8
      },
      "end": {
        "line": 167,
        "col": 16
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
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.setHCheckB"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.setHCheckB$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.setHCheckB$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'setHCheckB',
    desc: 'setCheck("checkbox-h-2c");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.setCheck("checkbox-h-2c");
  _cat.utils.chai.assert({
    code: "assert.ok($(\"#checkbox-h-2c\").is(\":checked\"),\"checkbox-h-2c is checked\")\n",
    fail: true,
    scrap: {
      "config": {
        "name": ["setHCheckB"],
        "run@": ["scrapCheckboxManager"],
        "embed": ["true"],
        "jqm": ["setCheck(\"checkbox-h-2c\");"],
        "assert": ["ok($('#checkbox-h-2c').is(':checked'),'checkbox-h-2c is checked')"],
        "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/checkboxradio-checkbox/index.html",
        "scrapinfo": {
          "start": {
            "line": 160,
            "col": 18
          },
          "end": {
            "line": 166,
            "col": 20
          }
        },
        "commentinfo": {
          "start": {
            "line": 159,
            "col": 8
          },
          "end": {
            "line": 167,
            "col": 16
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
      "output": ["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'setHCheckB', desc: 'setCheck(\"checkbox-h-2c\");',tips: ''});", "_cat.core.plugin('jqm').actions.setCheck(\"checkbox-h-2c\");"],
      "$$context": {
        "$$context": {
          "name": "setHCheckB",
          "run@": "scrapCheckboxManager",
          "assert": ["ok($('#checkbox-h-2c').is(':checked'),'checkbox-h-2c is checked')"],
          "embed": "true",
          "jqm": ["setCheck(\"checkbox-h-2c\");"]
        }
      }
    }
  });
});
_cat.core.setManager("scrapCheckboxManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.scrollTopCheckbox$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.scrollTopCheckbox$$cat', {
  scrap: {
    "name": ["scrollTopCheckbox"],
    "run@": ["scrapCheckboxManager"],
    "embed": ["true"],
    "jqm": ["scrollTop();"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/checkboxradio-checkbox/index.html",
    "scrapinfo": {
      "start": {
        "line": 240,
        "col": 11
      },
      "end": {
        "line": 245,
        "col": 13
      }
    },
    "commentinfo": {
      "start": {
        "line": 239,
        "col": 8
      },
      "end": {
        "line": 246,
        "col": 9
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
    "id": "scrap_10",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.scrollTopCheckbox"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.scrollTopCheckbox$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.scrollTopCheckbox$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'scrollTopCheckbox',
    desc: 'scrollTop();',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.scrollTop();
});
_cat.core.setManager("scrapCheckboxManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.sliderScroll1$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.sliderScroll1$$cat', {
  scrap: {
    "name": ["sliderScroll1"],
    "run@": ["scrapCheckboxManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"sliderWidget\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/checkboxradio-checkbox/index.html",
    "scrapinfo": {
      "start": {
        "line": 385,
        "col": 19
      },
      "end": {
        "line": 390,
        "col": 21
      }
    },
    "commentinfo": {
      "start": {
        "line": 384,
        "col": 4
      },
      "end": {
        "line": 391,
        "col": 17
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
    "id": "scrap_11",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.sliderScroll1"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.sliderScroll1$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.sliderScroll1$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'sliderScroll1',
    desc: 'scrollTo("sliderWidget");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.scrollTo("sliderWidget");
});
_cat.core.setManager("scrapCheckboxManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.sliderMenuClick$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.sliderMenuClick$$cat', {
  scrap: {
    "name": ["sliderMenuClick"],
    "run@": ["scrapCheckboxManager"],
    "embed": ["true"],
    "jqm": ["click(\"sliderWidget\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/checkboxradio-checkbox/index.html",
    "scrapinfo": {
      "start": {
        "line": 393,
        "col": 22
      },
      "end": {
        "line": 398,
        "col": 24
      }
    },
    "commentinfo": {
      "start": {
        "line": 392,
        "col": 4
      },
      "end": {
        "line": 399,
        "col": 23
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
    "id": "scrap_12",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.sliderMenuClick"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.sliderMenuClick$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.sliderMenuClick$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'sliderMenuClick',
    desc: 'click("sliderWidget");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.click("sliderWidget");
});
_cat.core.setManager("scrapCheckboxManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.sliderScroll2$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.sliderScroll2$$cat', {
  scrap: {
    "name": ["sliderScroll2"],
    "run@": ["scrapCheckboxManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"sliderWidget\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/checkboxradio-checkbox/index.html",
    "scrapinfo": {
      "start": {
        "line": 402,
        "col": 19
      },
      "end": {
        "line": 407,
        "col": 21
      }
    },
    "commentinfo": {
      "start": {
        "line": 401,
        "col": 4
      },
      "end": {
        "line": 408,
        "col": 17
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
    "id": "scrap_13",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.sliderScroll2"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.sliderScroll2$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.sliderScroll2$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'sliderScroll2',
    desc: 'scrollTo("sliderWidget");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.scrollTo("sliderWidget");
});
_cat.core.setManager("scrapCheckboxManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.sliderRef$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.sliderRef$$cat', {
  scrap: {
    "name": ["sliderRef"],
    "run@": ["scrapCheckboxManager"],
    "embed": ["true"],
    "jqm": ["clickRef(\"sliderRef\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/checkboxradio-checkbox/index.html",
    "scrapinfo": {
      "start": {
        "line": 411,
        "col": 18
      },
      "end": {
        "line": 416,
        "col": 20
      }
    },
    "commentinfo": {
      "start": {
        "line": 410,
        "col": 4
      },
      "end": {
        "line": 417,
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
    "id": "scrap_14",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.sliderRef"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.sliderRef$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.sliderRef$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'sliderRef',
    desc: 'clickRef("sliderRef");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.clickRef("sliderRef");
});
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.scrapCheckboxManager$$cat', {
  scrap: {
    "name": ["scrapCheckboxManager"],
    "perform": ["@@checkboxVerticalScroll repeat(1)", "@@checkboxVerticalGroupScroll repeat(1)", "@@setCheckC repeat(1)", "@@setCheckB repeat(1)", "@@checkboxHorizontalScroll repeat(1)", "@@setHCheckC repeat(1)", "@@setHCheckB repeat(1)", "@@scrollTopCheckbox repeat(1)", "@@appMenuClick repeat(1)", "@@sliderScroll1 repeat(1)", "@@sliderMenuClick repeat(1)", "@@sliderScroll2 repeat(1)", "@@sliderRef repeat(1)"],
    "embed": ["true"],
    "catui": ["on"],
    "manager": ["true"],
    "signal": ["TESTEND"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/checkboxradio-checkbox/index.html",
    "scrapinfo": {
      "start": {
        "line": 430,
        "col": 3
      },
      "end": {
        "line": 453,
        "col": 5
      }
    },
    "commentinfo": {
      "start": {
        "line": 429,
        "col": 0
      },
      "end": {
        "line": 454,
        "col": 6
      }
    },
    "single": {
      "name": true,
      "perform": false,
      "embed": true,
      "catui": true,
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
      "embed": -1,
      "catui": -1,
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
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.scrapCheckboxManager"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.scrapCheckboxManager$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.scrapCheckboxManager$$cat";

  /* test content in here */

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('scrapCheckboxManager', 'checkboxVerticalScroll', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('scrapCheckboxManager', 'checkboxVerticalGroupScroll', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('scrapCheckboxManager', 'setCheckC', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('scrapCheckboxManager', 'setCheckB', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('scrapCheckboxManager', 'checkboxHorizontalScroll', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('scrapCheckboxManager', 'setHCheckC', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('scrapCheckboxManager', 'setHCheckB', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('scrapCheckboxManager', 'scrollTopCheckbox', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('scrapCheckboxManager', 'appMenuClick', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('scrapCheckboxManager', 'sliderScroll1', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('scrapCheckboxManager', 'sliderMenuClick', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('scrapCheckboxManager', 'sliderScroll2', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('scrapCheckboxManager', 'sliderRef', 'repeat(1)');

  /*  CAT UI call  */
  _cat.core.ui.on();

  /*  Manager call  */
  (function() {
    _cat.core.managerCall('scrapCheckboxManager', function() {
      _cat.utils.Signal.send('TESTEND');
    });
  })();
});
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.appMenuClick", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.appMenuClick";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.appMenuClick
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.checkboxVerticalScroll", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.checkboxVerticalScroll";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.checkboxVerticalScroll
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.checkboxVerticalGroupScroll", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.checkboxVerticalGroupScroll";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.checkboxVerticalGroupScroll
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.setCheckC", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.setCheckC";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.setCheckC
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.setCheckB", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.setCheckB";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.setCheckB
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.checkboxHorizontalScroll", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.checkboxHorizontalScroll";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.checkboxHorizontalScroll
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.setHCheckC", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.setHCheckC";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.setHCheckC
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.setHCheckB", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.setHCheckB";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.setHCheckB
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.scrollTopCheckbox", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.scrollTopCheckbox";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.scrollTopCheckbox
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.sliderScroll1", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.sliderScroll1";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.sliderScroll1
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.sliderMenuClick", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.sliderMenuClick";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.sliderMenuClick
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.sliderScroll2", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.sliderScroll2";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.sliderScroll2
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.sliderRef", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.sliderRef";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.sliderRef
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.scrapCheckboxManager", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.scrapCheckboxManager";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-checkbox.index.html.scrapCheckboxManager
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.setManager("radioManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.appMenuRadioClick$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.appMenuRadioClick$$cat', {
  scrap: {
    "name": ["appMenuRadioClick"],
    "run@": ["radioManager"],
    "embed": ["true"],
    "jqm": ["clickRef(\"appMenuRadio\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/checkboxradio-radio/index.html",
    "scrapinfo": {
      "start": {
        "line": 32,
        "col": 21
      },
      "end": {
        "line": 37,
        "col": 23
      }
    },
    "commentinfo": {
      "start": {
        "line": 31,
        "col": 8
      },
      "end": {
        "line": 38,
        "col": 22
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
    "id": "scrap_17",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.appMenuRadioClick"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.appMenuRadioClick$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.appMenuRadioClick$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'appMenuRadioClick',
    desc: 'clickRef("appMenuRadio");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.clickRef("appMenuRadio");
});
_cat.core.setManager("radioManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.verDivScroll$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.verDivScroll$$cat', {
  scrap: {
    "name": ["verDivScroll"],
    "run@": ["radioManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"verDiv\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/checkboxradio-radio/index.html",
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
        "col": 8
      },
      "end": {
        "line": 79,
        "col": 14
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
    "id": "scrap_18",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.verDivScroll"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.verDivScroll$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.verDivScroll$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'verDivScroll',
    desc: 'scrollTo("verDiv");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.scrollTo("verDiv");
});
_cat.core.setManager("radioManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.verGroupRadio$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.verGroupRadio$$cat', {
  scrap: {
    "name": ["verGroupRadio"],
    "run@": ["radioManager"],
    "embed": ["true"],
    "jqm": ["checkRadio(\"verRadioGroup\", \"radio-choice-v-2c\");"],
    "assert": ["ok($('#radio-choice-v-2c').is(':checked'),'radio-choice-v-2c is checked')"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/checkboxradio-radio/index.html",
    "scrapinfo": {
      "start": {
        "line": 81,
        "col": 22
      },
      "end": {
        "line": 87,
        "col": 24
      }
    },
    "commentinfo": {
      "start": {
        "line": 80,
        "col": 8
      },
      "end": {
        "line": 88,
        "col": 23
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
    "id": "scrap_19",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.verGroupRadio"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.verGroupRadio$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.verGroupRadio$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'verGroupRadio',
    desc: 'checkRadio("verRadioGroup", "radio-choice-v-2c");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.checkRadio("verRadioGroup", "radio-choice-v-2c");
  _cat.utils.chai.assert({
    code: "assert.ok($(\"#radio-choice-v-2c\").is(\":checked\"),\"radio-choice-v-2c is checked\")\n",
    fail: true,
    scrap: {
      "config": {
        "name": ["verGroupRadio"],
        "run@": ["radioManager"],
        "embed": ["true"],
        "jqm": ["checkRadio(\"verRadioGroup\", \"radio-choice-v-2c\");"],
        "assert": ["ok($('#radio-choice-v-2c').is(':checked'),'radio-choice-v-2c is checked')"],
        "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/checkboxradio-radio/index.html",
        "scrapinfo": {
          "start": {
            "line": 81,
            "col": 22
          },
          "end": {
            "line": 87,
            "col": 24
          }
        },
        "commentinfo": {
          "start": {
            "line": 80,
            "col": 8
          },
          "end": {
            "line": 88,
            "col": 23
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
        "id": "scrap_19",
        "$type": "html"
      },
      "output": ["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'verGroupRadio', desc: 'checkRadio(\"verRadioGroup\", \"radio-choice-v-2c\");',tips: ''});", "_cat.core.plugin('jqm').actions.checkRadio(\"verRadioGroup\", \"radio-choice-v-2c\");"],
      "$$context": {
        "$$context": {
          "name": "verGroupRadio",
          "run@": "radioManager",
          "assert": ["ok($('#radio-choice-v-2c').is(':checked'),'radio-choice-v-2c is checked')"],
          "embed": "true",
          "jqm": ["checkRadio(\"verRadioGroup\", \"radio-choice-v-2c\");"]
        }
      }
    }
  });
});
_cat.core.setManager("radioManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.verGroupRadio2$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.verGroupRadio2$$cat', {
  scrap: {
    "name": ["verGroupRadio2"],
    "run@": ["radioManager"],
    "embed": ["true"],
    "jqm": ["checkRadio(\"verRadioGroup\", \"radio-choice-v-2a\");"],
    "assert": ["ok($('#radio-choice-v-2a').is(':checked'),'radio-choice-v-2a is checked')"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/checkboxradio-radio/index.html",
    "scrapinfo": {
      "start": {
        "line": 91,
        "col": 22
      },
      "end": {
        "line": 98,
        "col": 24
      }
    },
    "commentinfo": {
      "start": {
        "line": 90,
        "col": 8
      },
      "end": {
        "line": 99,
        "col": 23
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
    "id": "scrap_20",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.verGroupRadio2"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.verGroupRadio2$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.verGroupRadio2$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'verGroupRadio2',
    desc: 'checkRadio("verRadioGroup", "radio-choice-v-2a");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.checkRadio("verRadioGroup", "radio-choice-v-2a");
  _cat.utils.chai.assert({
    code: "assert.ok($(\"#radio-choice-v-2a\").is(\":checked\"),\"radio-choice-v-2a is checked\")\n",
    fail: true,
    scrap: {
      "config": {
        "name": ["verGroupRadio2"],
        "run@": ["radioManager"],
        "embed": ["true"],
        "jqm": ["checkRadio(\"verRadioGroup\", \"radio-choice-v-2a\");"],
        "assert": ["ok($('#radio-choice-v-2a').is(':checked'),'radio-choice-v-2a is checked')"],
        "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/checkboxradio-radio/index.html",
        "scrapinfo": {
          "start": {
            "line": 91,
            "col": 22
          },
          "end": {
            "line": 98,
            "col": 24
          }
        },
        "commentinfo": {
          "start": {
            "line": 90,
            "col": 8
          },
          "end": {
            "line": 99,
            "col": 23
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
        "id": "scrap_20",
        "$type": "html"
      },
      "output": ["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'verGroupRadio2', desc: 'checkRadio(\"verRadioGroup\", \"radio-choice-v-2a\");',tips: ''});", "_cat.core.plugin('jqm').actions.checkRadio(\"verRadioGroup\", \"radio-choice-v-2a\");"],
      "$$context": {
        "$$context": {
          "name": "verGroupRadio2",
          "run@": "radioManager",
          "assert": ["ok($('#radio-choice-v-2a').is(':checked'),'radio-choice-v-2a is checked')"],
          "embed": "true",
          "jqm": ["checkRadio(\"verRadioGroup\", \"radio-choice-v-2a\");"]
        }
      }
    }
  });
});
_cat.core.setManager("radioManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.verGroupRadio3$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.verGroupRadio3$$cat', {
  scrap: {
    "name": ["verGroupRadio3"],
    "run@": ["radioManager"],
    "embed": ["true"],
    "jqm": ["checkRadio(\"verRadioGroup\", \"radio-choice-v-2d\");"],
    "assert": ["ok($('#radio-choice-v-2d').is(':checked'),'radio-choice-v-2d is checked')"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/checkboxradio-radio/index.html",
    "scrapinfo": {
      "start": {
        "line": 102,
        "col": 21
      },
      "end": {
        "line": 108,
        "col": 23
      }
    },
    "commentinfo": {
      "start": {
        "line": 101,
        "col": 8
      },
      "end": {
        "line": 109,
        "col": 22
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
    "id": "scrap_21",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.verGroupRadio3"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.verGroupRadio3$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.verGroupRadio3$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'verGroupRadio3',
    desc: 'checkRadio("verRadioGroup", "radio-choice-v-2d");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.checkRadio("verRadioGroup", "radio-choice-v-2d");
  _cat.utils.chai.assert({
    code: "assert.ok($(\"#radio-choice-v-2d\").is(\":checked\"),\"radio-choice-v-2d is checked\")\n",
    fail: true,
    scrap: {
      "config": {
        "name": ["verGroupRadio3"],
        "run@": ["radioManager"],
        "embed": ["true"],
        "jqm": ["checkRadio(\"verRadioGroup\", \"radio-choice-v-2d\");"],
        "assert": ["ok($('#radio-choice-v-2d').is(':checked'),'radio-choice-v-2d is checked')"],
        "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/checkboxradio-radio/index.html",
        "scrapinfo": {
          "start": {
            "line": 102,
            "col": 21
          },
          "end": {
            "line": 108,
            "col": 23
          }
        },
        "commentinfo": {
          "start": {
            "line": 101,
            "col": 8
          },
          "end": {
            "line": 109,
            "col": 22
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
        "id": "scrap_21",
        "$type": "html"
      },
      "output": ["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'verGroupRadio3', desc: 'checkRadio(\"verRadioGroup\", \"radio-choice-v-2d\");',tips: ''});", "_cat.core.plugin('jqm').actions.checkRadio(\"verRadioGroup\", \"radio-choice-v-2d\");"],
      "$$context": {
        "$$context": {
          "name": "verGroupRadio3",
          "run@": "radioManager",
          "assert": ["ok($('#radio-choice-v-2d').is(':checked'),'radio-choice-v-2d is checked')"],
          "embed": "true",
          "jqm": ["checkRadio(\"verRadioGroup\", \"radio-choice-v-2d\");"]
        }
      }
    }
  });
});
_cat.core.setManager("radioManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.horDivScroll$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.horDivScroll$$cat', {
  scrap: {
    "name": ["horDivScroll"],
    "run@": ["radioManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"horDiv\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/checkboxradio-radio/index.html",
    "scrapinfo": {
      "start": {
        "line": 134,
        "col": 16
      },
      "end": {
        "line": 140,
        "col": 18
      }
    },
    "commentinfo": {
      "start": {
        "line": 133,
        "col": 8
      },
      "end": {
        "line": 141,
        "col": 14
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
    "id": "scrap_22",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.horDivScroll"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.horDivScroll$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.horDivScroll$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'horDivScroll',
    desc: 'scrollTo("horDiv");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.scrollTo("horDiv");
});
_cat.core.setManager("radioManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.horGroupRadio$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.horGroupRadio$$cat', {
  scrap: {
    "name": ["horGroupRadio"],
    "run@": ["radioManager"],
    "embed": ["true"],
    "jqm": ["checkRadio(\"horGroup\", \"radio-choice-h-2c\");"],
    "assert": ["ok($('#radio-choice-h-2c').is(':checked'),'radio-choice-h-2c is checked')"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/checkboxradio-radio/index.html",
    "scrapinfo": {
      "start": {
        "line": 143,
        "col": 22
      },
      "end": {
        "line": 149,
        "col": 24
      }
    },
    "commentinfo": {
      "start": {
        "line": 142,
        "col": 8
      },
      "end": {
        "line": 150,
        "col": 23
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
    "id": "scrap_23",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.horGroupRadio"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.horGroupRadio$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.horGroupRadio$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'horGroupRadio',
    desc: 'checkRadio("horGroup", "radio-choice-h-2c");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.checkRadio("horGroup", "radio-choice-h-2c");
  _cat.utils.chai.assert({
    code: "assert.ok($(\"#radio-choice-h-2c\").is(\":checked\"),\"radio-choice-h-2c is checked\")\n",
    fail: true,
    scrap: {
      "config": {
        "name": ["horGroupRadio"],
        "run@": ["radioManager"],
        "embed": ["true"],
        "jqm": ["checkRadio(\"horGroup\", \"radio-choice-h-2c\");"],
        "assert": ["ok($('#radio-choice-h-2c').is(':checked'),'radio-choice-h-2c is checked')"],
        "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/checkboxradio-radio/index.html",
        "scrapinfo": {
          "start": {
            "line": 143,
            "col": 22
          },
          "end": {
            "line": 149,
            "col": 24
          }
        },
        "commentinfo": {
          "start": {
            "line": 142,
            "col": 8
          },
          "end": {
            "line": 150,
            "col": 23
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
        "id": "scrap_23",
        "$type": "html"
      },
      "output": ["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'horGroupRadio', desc: 'checkRadio(\"horGroup\", \"radio-choice-h-2c\");',tips: ''});", "_cat.core.plugin('jqm').actions.checkRadio(\"horGroup\", \"radio-choice-h-2c\");"],
      "$$context": {
        "$$context": {
          "name": "horGroupRadio",
          "run@": "radioManager",
          "assert": ["ok($('#radio-choice-h-2c').is(':checked'),'radio-choice-h-2c is checked')"],
          "embed": "true",
          "jqm": ["checkRadio(\"horGroup\", \"radio-choice-h-2c\");"]
        }
      }
    }
  });
});
_cat.core.setManager("radioManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.horGroupRadio2$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.horGroupRadio2$$cat', {
  scrap: {
    "name": ["horGroupRadio2"],
    "run@": ["radioManager"],
    "embed": ["true"],
    "jqm": ["checkRadio(\"horGroup\", \"radio-choice-h-2b\");"],
    "assert": ["ok($('#radio-choice-h-2b').is(':checked'),'radio-choice-h-2b is checked')"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/checkboxradio-radio/index.html",
    "scrapinfo": {
      "start": {
        "line": 153,
        "col": 21
      },
      "end": {
        "line": 159,
        "col": 23
      }
    },
    "commentinfo": {
      "start": {
        "line": 152,
        "col": 8
      },
      "end": {
        "line": 160,
        "col": 22
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
    "id": "scrap_24",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.horGroupRadio2"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.horGroupRadio2$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.horGroupRadio2$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'horGroupRadio2',
    desc: 'checkRadio("horGroup", "radio-choice-h-2b");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.checkRadio("horGroup", "radio-choice-h-2b");
  _cat.utils.chai.assert({
    code: "assert.ok($(\"#radio-choice-h-2b\").is(\":checked\"),\"radio-choice-h-2b is checked\")\n",
    fail: true,
    scrap: {
      "config": {
        "name": ["horGroupRadio2"],
        "run@": ["radioManager"],
        "embed": ["true"],
        "jqm": ["checkRadio(\"horGroup\", \"radio-choice-h-2b\");"],
        "assert": ["ok($('#radio-choice-h-2b').is(':checked'),'radio-choice-h-2b is checked')"],
        "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/checkboxradio-radio/index.html",
        "scrapinfo": {
          "start": {
            "line": 153,
            "col": 21
          },
          "end": {
            "line": 159,
            "col": 23
          }
        },
        "commentinfo": {
          "start": {
            "line": 152,
            "col": 8
          },
          "end": {
            "line": 160,
            "col": 22
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
        "id": "scrap_24",
        "$type": "html"
      },
      "output": ["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'horGroupRadio2', desc: 'checkRadio(\"horGroup\", \"radio-choice-h-2b\");',tips: ''});", "_cat.core.plugin('jqm').actions.checkRadio(\"horGroup\", \"radio-choice-h-2b\");"],
      "$$context": {
        "$$context": {
          "name": "horGroupRadio2",
          "run@": "radioManager",
          "assert": ["ok($('#radio-choice-h-2b').is(':checked'),'radio-choice-h-2b is checked')"],
          "embed": "true",
          "jqm": ["checkRadio(\"horGroup\", \"radio-choice-h-2b\");"]
        }
      }
    }
  });
});
_cat.core.setManager("radioManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.agreeDivScroll$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.agreeDivScroll$$cat', {
  scrap: {
    "name": ["agreeDivScroll"],
    "run@": ["radioManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"agreeDiv\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/checkboxradio-radio/index.html",
    "scrapinfo": {
      "start": {
        "line": 247,
        "col": 16
      },
      "end": {
        "line": 253,
        "col": 18
      }
    },
    "commentinfo": {
      "start": {
        "line": 246,
        "col": 8
      },
      "end": {
        "line": 254,
        "col": 14
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
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.agreeDivScroll"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.agreeDivScroll$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.agreeDivScroll$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'agreeDivScroll',
    desc: 'scrollTo("agreeDiv");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.scrollTo("agreeDiv");
});
_cat.core.setManager("radioManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.agreeGroupRadio$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.agreeGroupRadio$$cat', {
  scrap: {
    "name": ["agreeGroupRadio"],
    "run@": ["radioManager"],
    "embed": ["true"],
    "jqm": ["checkRadio(\"agreeClass\", \"radio-enhanced\");"],
    "assert": ["ok($('#radio-enhanced').is(':checked'),'radio-enhanced is checked')"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/checkboxradio-radio/index.html",
    "scrapinfo": {
      "start": {
        "line": 256,
        "col": 22
      },
      "end": {
        "line": 262,
        "col": 24
      }
    },
    "commentinfo": {
      "start": {
        "line": 255,
        "col": 8
      },
      "end": {
        "line": 263,
        "col": 23
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
    "id": "scrap_26",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.agreeGroupRadio"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.agreeGroupRadio$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.agreeGroupRadio$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'agreeGroupRadio',
    desc: 'checkRadio("agreeClass", "radio-enhanced");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.checkRadio("agreeClass", "radio-enhanced");
  _cat.utils.chai.assert({
    code: "assert.ok($(\"#radio-enhanced\").is(\":checked\"),\"radio-enhanced is checked\")\n",
    fail: true,
    scrap: {
      "config": {
        "name": ["agreeGroupRadio"],
        "run@": ["radioManager"],
        "embed": ["true"],
        "jqm": ["checkRadio(\"agreeClass\", \"radio-enhanced\");"],
        "assert": ["ok($('#radio-enhanced').is(':checked'),'radio-enhanced is checked')"],
        "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/checkboxradio-radio/index.html",
        "scrapinfo": {
          "start": {
            "line": 256,
            "col": 22
          },
          "end": {
            "line": 262,
            "col": 24
          }
        },
        "commentinfo": {
          "start": {
            "line": 255,
            "col": 8
          },
          "end": {
            "line": 263,
            "col": 23
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
        "id": "scrap_26",
        "$type": "html"
      },
      "output": ["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'agreeGroupRadio', desc: 'checkRadio(\"agreeClass\", \"radio-enhanced\");',tips: ''});", "_cat.core.plugin('jqm').actions.checkRadio(\"agreeClass\", \"radio-enhanced\");"],
      "$$context": {
        "$$context": {
          "name": "agreeGroupRadio",
          "run@": "radioManager",
          "assert": ["ok($('#radio-enhanced').is(':checked'),'radio-enhanced is checked')"],
          "embed": "true",
          "jqm": ["checkRadio(\"agreeClass\", \"radio-enhanced\");"]
        }
      }
    }
  });
});
_cat.core.setManager("radioManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.collapsibleMenuScroll$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.collapsibleMenuScroll$$cat', {
  scrap: {
    "name": ["collapsibleMenuScroll"],
    "run@": ["radioManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"collapsibleMenuScroll\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/checkboxradio-radio/index.html",
    "scrapinfo": {
      "start": {
        "line": 288,
        "col": 17
      },
      "end": {
        "line": 293,
        "col": 19
      }
    },
    "commentinfo": {
      "start": {
        "line": 287,
        "col": 4
      },
      "end": {
        "line": 294,
        "col": 15
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
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.collapsibleMenuScroll"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.collapsibleMenuScroll$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.collapsibleMenuScroll$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'collapsibleMenuScroll',
    desc: 'scrollTo("collapsibleMenuScroll");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.scrollTo("collapsibleMenuScroll");
});
_cat.core.setManager("radioManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.collapsibleMenuClick$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.collapsibleMenuClick$$cat', {
  scrap: {
    "name": ["collapsibleMenuClick"],
    "run@": ["radioManager"],
    "embed": ["true"],
    "jqm": ["click(\"collapsibleMenuScroll\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/checkboxradio-radio/index.html",
    "scrapinfo": {
      "start": {
        "line": 297,
        "col": 21
      },
      "end": {
        "line": 302,
        "col": 23
      }
    },
    "commentinfo": {
      "start": {
        "line": 296,
        "col": 4
      },
      "end": {
        "line": 303,
        "col": 22
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
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.collapsibleMenuClick"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.collapsibleMenuClick$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.collapsibleMenuClick$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'collapsibleMenuClick',
    desc: 'click("collapsibleMenuScroll");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.click("collapsibleMenuScroll");
});
_cat.core.setManager("radioManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.collapsibleMenuScroll2$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.collapsibleMenuScroll2$$cat', {
  scrap: {
    "name": ["collapsibleMenuScroll2"],
    "run@": ["radioManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"collapsibleMenuScroll\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/checkboxradio-radio/index.html",
    "scrapinfo": {
      "start": {
        "line": 306,
        "col": 19
      },
      "end": {
        "line": 311,
        "col": 21
      }
    },
    "commentinfo": {
      "start": {
        "line": 305,
        "col": 4
      },
      "end": {
        "line": 312,
        "col": 17
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
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.collapsibleMenuScroll2"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.collapsibleMenuScroll2$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.collapsibleMenuScroll2$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'collapsibleMenuScroll2',
    desc: 'scrollTo("collapsibleMenuScroll");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.scrollTo("collapsibleMenuScroll");
});
_cat.core.setManager("radioManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.collapsibleRef$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.collapsibleRef$$cat', {
  scrap: {
    "name": ["collapsibleRef"],
    "run@": ["radioManager"],
    "embed": ["true"],
    "jqm": ["clickRef(\"collapsibleRef\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/checkboxradio-radio/index.html",
    "scrapinfo": {
      "start": {
        "line": 315,
        "col": 18
      },
      "end": {
        "line": 320,
        "col": 20
      }
    },
    "commentinfo": {
      "start": {
        "line": 314,
        "col": 4
      },
      "end": {
        "line": 321,
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
    "id": "scrap_30",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.collapsibleRef"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.collapsibleRef$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.collapsibleRef$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'collapsibleRef',
    desc: 'clickRef("collapsibleRef");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.clickRef("collapsibleRef");
});
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.radioManager$$cat', {
  scrap: {
    "name": ["radioManager"],
    "perform": ["@@verDivScroll repeat(1)", "@@verGroupRadio repeat(1)", "@@verGroupRadio2 repeat(1)", "@@verGroupRadio3 repeat(1)", "@@horDivScroll repeat(1)", "@@horGroupRadio repeat(1)", "@@horGroupRadio2 repeat(1)", "@@agreeDivScroll repeat(1)", "@@agreeGroupRadio repeat(1)", "@@appMenuRadioClick repeat(1)", "@@collapsibleMenuScroll repeat(1)", "@@collapsibleMenuClick repeat(1)", "@@collapsibleMenuScroll2 repeat(1)", "@@collapsibleRef repeat(1)"],
    "embed": ["true"],
    "catui": ["on"],
    "manager": ["true"],
    "signal": ["TESTEND"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/checkboxradio-radio/index.html",
    "scrapinfo": {
      "start": {
        "line": 332,
        "col": 6
      },
      "end": {
        "line": 355,
        "col": 8
      }
    },
    "commentinfo": {
      "start": {
        "line": 331,
        "col": 0
      },
      "end": {
        "line": 356,
        "col": 9
      }
    },
    "single": {
      "name": true,
      "perform": false,
      "embed": true,
      "catui": true,
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
      "embed": -1,
      "catui": -1,
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
    "id": "scrap_31",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.radioManager"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.radioManager$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.radioManager$$cat";

  /* test content in here */

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('radioManager', 'verDivScroll', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('radioManager', 'verGroupRadio', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('radioManager', 'verGroupRadio2', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('radioManager', 'verGroupRadio3', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('radioManager', 'horDivScroll', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('radioManager', 'horGroupRadio', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('radioManager', 'horGroupRadio2', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('radioManager', 'agreeDivScroll', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('radioManager', 'agreeGroupRadio', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('radioManager', 'appMenuRadioClick', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('radioManager', 'collapsibleMenuScroll', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('radioManager', 'collapsibleMenuClick', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('radioManager', 'collapsibleMenuScroll2', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('radioManager', 'collapsibleRef', 'repeat(1)');

  /*  CAT UI call  */
  _cat.core.ui.on();

  /*  Manager call  */
  (function() {
    _cat.core.managerCall('radioManager', function() {
      _cat.utils.Signal.send('TESTEND');
    });
  })();
});
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.appMenuRadioClick", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.appMenuRadioClick";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.appMenuRadioClick
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.verDivScroll", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.verDivScroll";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.verDivScroll
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.verGroupRadio", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.verGroupRadio";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.verGroupRadio
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.verGroupRadio2", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.verGroupRadio2";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.verGroupRadio2
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.verGroupRadio3", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.verGroupRadio3";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.verGroupRadio3
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.horDivScroll", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.horDivScroll";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.horDivScroll
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.horGroupRadio", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.horGroupRadio";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.horGroupRadio
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.horGroupRadio2", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.horGroupRadio2";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.horGroupRadio2
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.agreeDivScroll", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.agreeDivScroll";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.agreeDivScroll
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.agreeGroupRadio", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.agreeGroupRadio";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.agreeGroupRadio
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.collapsibleMenuScroll", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.collapsibleMenuScroll";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.collapsibleMenuScroll
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.collapsibleMenuClick", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.collapsibleMenuClick";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.collapsibleMenuClick
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.collapsibleMenuScroll2", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.collapsibleMenuScroll2";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.collapsibleMenuScroll2
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.collapsibleRef", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.collapsibleRef";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.collapsibleRef
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.radioManager", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.radioManager";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.checkboxradio-radio.index.html.radioManager
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.setManager("collapsibleManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.appMenuCollapsibleClick$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.appMenuCollapsibleClick$$cat', {
  scrap: {
    "name": ["appMenuCollapsibleClick"],
    "run@": ["collapsibleManager"],
    "embed": ["true"],
    "jqm": ["clickRef(\"appMenuCollapsible\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/collapsible/index.html",
    "scrapinfo": {
      "start": {
        "line": 36,
        "col": 20
      },
      "end": {
        "line": 41,
        "col": 22
      }
    },
    "commentinfo": {
      "start": {
        "line": 35,
        "col": 8
      },
      "end": {
        "line": 42,
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
    "id": "scrap_33",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.appMenuCollapsibleClick"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.appMenuCollapsibleClick$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.appMenuCollapsibleClick$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'appMenuCollapsibleClick',
    desc: 'clickRef("appMenuCollapsible");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.clickRef("appMenuCollapsible");
});
_cat.core.setManager("collapsibleManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.basicCollapsibleScroll$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.basicCollapsibleScroll$$cat', {
  scrap: {
    "name": ["basicCollapsibleScroll"],
    "run@": ["collapsibleManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"basicCollapsibleScroll\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/collapsible/index.html",
    "scrapinfo": {
      "start": {
        "line": 57,
        "col": 18
      },
      "end": {
        "line": 62,
        "col": 20
      }
    },
    "commentinfo": {
      "start": {
        "line": 56,
        "col": 8
      },
      "end": {
        "line": 63,
        "col": 16
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
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.basicCollapsibleScroll"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.basicCollapsibleScroll$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.basicCollapsibleScroll$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'basicCollapsibleScroll',
    desc: 'scrollTo("basicCollapsibleScroll");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.scrollTo("basicCollapsibleScroll");
});
_cat.core.setManager("collapsibleManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.basicCollapsibleClick$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.basicCollapsibleClick$$cat', {
  scrap: {
    "name": ["basicCollapsibleClick"],
    "run@": ["collapsibleManager"],
    "embed": ["true"],
    "jqm": ["collapsible(\"basicCollapsible\");"],
    "assert": ["ok(!$('#basicCollapsible').collapsible( 'option' ).collapsed,'radio-choice-v-2c is checked')"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/collapsible/index.html",
    "scrapinfo": {
      "start": {
        "line": 66,
        "col": 21
      },
      "end": {
        "line": 74,
        "col": 23
      }
    },
    "commentinfo": {
      "start": {
        "line": 65,
        "col": 8
      },
      "end": {
        "line": 75,
        "col": 22
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
    "id": "scrap_35",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.basicCollapsibleClick"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.basicCollapsibleClick$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.basicCollapsibleClick$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'basicCollapsibleClick',
    desc: 'collapsible("basicCollapsible");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.collapsible("basicCollapsible");
  _cat.utils.chai.assert({
    code: "assert.ok(!$(\"#basicCollapsible\").collapsible(\"option\").collapsed,\"radio-choice-v-2c is checked\")\n",
    fail: true,
    scrap: {
      "config": {
        "name": ["basicCollapsibleClick"],
        "run@": ["collapsibleManager"],
        "embed": ["true"],
        "jqm": ["collapsible(\"basicCollapsible\");"],
        "assert": ["ok(!$('#basicCollapsible').collapsible( 'option' ).collapsed,'radio-choice-v-2c is checked')"],
        "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/collapsible/index.html",
        "scrapinfo": {
          "start": {
            "line": 66,
            "col": 21
          },
          "end": {
            "line": 74,
            "col": 23
          }
        },
        "commentinfo": {
          "start": {
            "line": 65,
            "col": 8
          },
          "end": {
            "line": 75,
            "col": 22
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
        "id": "scrap_35",
        "$type": "html"
      },
      "output": ["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'basicCollapsibleClick', desc: 'collapsible(\"basicCollapsible\");',tips: ''});", "_cat.core.plugin('jqm').actions.collapsible(\"basicCollapsible\");"],
      "$$context": {
        "$$context": {
          "name": "basicCollapsibleClick",
          "run@": "collapsibleManager",
          "assert": ["ok(!$('#basicCollapsible').collapsible( 'option' ).collapsed,'radio-choice-v-2c is checked')"],
          "embed": "true",
          "jqm": ["collapsible(\"basicCollapsible\");"]
        }
      }
    }
  });
});
_cat.core.setManager("collapsibleManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.legendScroll$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.legendScroll$$cat', {
  scrap: {
    "name": ["legendScroll"],
    "run@": ["collapsibleManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"legend\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/collapsible/index.html",
    "scrapinfo": {
      "start": {
        "line": 162,
        "col": 22
      },
      "end": {
        "line": 167,
        "col": 24
      }
    },
    "commentinfo": {
      "start": {
        "line": 161,
        "col": 8
      },
      "end": {
        "line": 168,
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
    "id": "scrap_36",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.legendScroll"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.legendScroll$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.legendScroll$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'legendScroll',
    desc: 'scrollTo("legend");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.scrollTo("legend");
});
_cat.core.setManager("collapsibleManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.legendClick$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.legendClick$$cat', {
  scrap: {
    "name": ["legendClick"],
    "run@": ["collapsibleManager"],
    "embed": ["true"],
    "jqm": ["collapsible(\"legendClick\");"],
    "assert": ["ok(!$('#basicCollapsible').collapsible( 'option' ).collapsed,'radio-choice-v-2c is checked')"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/collapsible/index.html",
    "scrapinfo": {
      "start": {
        "line": 175,
        "col": 21
      },
      "end": {
        "line": 181,
        "col": 23
      }
    },
    "commentinfo": {
      "start": {
        "line": 174,
        "col": 16
      },
      "end": {
        "line": 182,
        "col": 22
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
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.legendClick"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.legendClick$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.legendClick$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'legendClick',
    desc: 'collapsible("legendClick");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.collapsible("legendClick");
  _cat.utils.chai.assert({
    code: "assert.ok(!$(\"#basicCollapsible\").collapsible(\"option\").collapsed,\"radio-choice-v-2c is checked\")\n",
    fail: true,
    scrap: {
      "config": {
        "name": ["legendClick"],
        "run@": ["collapsibleManager"],
        "embed": ["true"],
        "jqm": ["collapsible(\"legendClick\");"],
        "assert": ["ok(!$('#basicCollapsible').collapsible( 'option' ).collapsed,'radio-choice-v-2c is checked')"],
        "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/collapsible/index.html",
        "scrapinfo": {
          "start": {
            "line": 175,
            "col": 21
          },
          "end": {
            "line": 181,
            "col": 23
          }
        },
        "commentinfo": {
          "start": {
            "line": 174,
            "col": 16
          },
          "end": {
            "line": 182,
            "col": 22
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
      "output": ["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'legendClick', desc: 'collapsible(\"legendClick\");',tips: ''});", "_cat.core.plugin('jqm').actions.collapsible(\"legendClick\");"],
      "$$context": {
        "$$context": {
          "name": "legendClick",
          "run@": "collapsibleManager",
          "assert": ["ok(!$('#basicCollapsible').collapsible( 'option' ).collapsed,'radio-choice-v-2c is checked')"],
          "embed": "true",
          "jqm": ["collapsible(\"legendClick\");"]
        }
      }
    }
  });
});
_cat.core.setManager("collapsibleManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.setTextLegend$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.setTextLegend$$cat', {
  scrap: {
    "name": ["setTextLegend"],
    "run@": ["collapsibleManager"],
    "embed": ["true"],
    "jqm": ["setText(\"textinput-f\", \"hello from legend\");"],
    "assert": ["ok($('#textinput-f').val()=='hello from legend','textinput-f text is correct')"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/collapsible/index.html",
    "scrapinfo": {
      "start": {
        "line": 185,
        "col": 17
      },
      "end": {
        "line": 191,
        "col": 19
      }
    },
    "commentinfo": {
      "start": {
        "line": 184,
        "col": 16
      },
      "end": {
        "line": 192,
        "col": 15
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
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.setTextLegend"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.setTextLegend$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.setTextLegend$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'setTextLegend',
    desc: 'setText("textinput-f", "hello from legend");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.setText("textinput-f", "hello from legend");
  _cat.utils.chai.assert({
    code: "assert.ok($(\"#textinput-f\").val()==\"hello from legend\",\"textinput-f text is correct\")\n",
    fail: true,
    scrap: {
      "config": {
        "name": ["setTextLegend"],
        "run@": ["collapsibleManager"],
        "embed": ["true"],
        "jqm": ["setText(\"textinput-f\", \"hello from legend\");"],
        "assert": ["ok($('#textinput-f').val()=='hello from legend','textinput-f text is correct')"],
        "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/collapsible/index.html",
        "scrapinfo": {
          "start": {
            "line": 185,
            "col": 17
          },
          "end": {
            "line": 191,
            "col": 19
          }
        },
        "commentinfo": {
          "start": {
            "line": 184,
            "col": 16
          },
          "end": {
            "line": 192,
            "col": 15
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
      "output": ["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'setTextLegend', desc: 'setText(\"textinput-f\", \"hello from legend\");',tips: ''});", "_cat.core.plugin('jqm').actions.setText(\"textinput-f\", \"hello from legend\");"],
      "$$context": {
        "$$context": {
          "name": "setTextLegend",
          "run@": "collapsibleManager",
          "assert": ["ok($('#textinput-f').val()=='hello from legend','textinput-f text is correct')"],
          "embed": "true",
          "jqm": ["setText(\"textinput-f\", \"hello from legend\");"]
        }
      }
    }
  });
});
_cat.core.setManager("collapsibleManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.setCheckCollaps3$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.setCheckCollaps3$$cat', {
  scrap: {
    "name": ["setCheckCollaps3"],
    "run@": ["collapsibleManager"],
    "embed": ["true"],
    "jqm": ["setCheck(\"checkbox-3-a\");"],
    "assert": ["ok($('#checkbox-3-a').is(':checked'),'checkbox-3-a is checked')"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/collapsible/index.html",
    "scrapinfo": {
      "start": {
        "line": 196,
        "col": 18
      },
      "end": {
        "line": 202,
        "col": 20
      }
    },
    "commentinfo": {
      "start": {
        "line": 195,
        "col": 16
      },
      "end": {
        "line": 203,
        "col": 16
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
    "id": "scrap_39",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.setCheckCollaps3"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.setCheckCollaps3$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.setCheckCollaps3$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'setCheckCollaps3',
    desc: 'setCheck("checkbox-3-a");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.setCheck("checkbox-3-a");
  _cat.utils.chai.assert({
    code: "assert.ok($(\"#checkbox-3-a\").is(\":checked\"),\"checkbox-3-a is checked\")\n",
    fail: true,
    scrap: {
      "config": {
        "name": ["setCheckCollaps3"],
        "run@": ["collapsibleManager"],
        "embed": ["true"],
        "jqm": ["setCheck(\"checkbox-3-a\");"],
        "assert": ["ok($('#checkbox-3-a').is(':checked'),'checkbox-3-a is checked')"],
        "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/collapsible/index.html",
        "scrapinfo": {
          "start": {
            "line": 196,
            "col": 18
          },
          "end": {
            "line": 202,
            "col": 20
          }
        },
        "commentinfo": {
          "start": {
            "line": 195,
            "col": 16
          },
          "end": {
            "line": 203,
            "col": 16
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
        "id": "scrap_39",
        "$type": "html"
      },
      "output": ["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'setCheckCollaps3', desc: 'setCheck(\"checkbox-3-a\");',tips: ''});", "_cat.core.plugin('jqm').actions.setCheck(\"checkbox-3-a\");"],
      "$$context": {
        "$$context": {
          "name": "setCheckCollaps3",
          "run@": "collapsibleManager",
          "assert": ["ok($('#checkbox-3-a').is(':checked'),'checkbox-3-a is checked')"],
          "embed": "true",
          "jqm": ["setCheck(\"checkbox-3-a\");"]
        }
      }
    }
  });
});
_cat.core.setManager("collapsibleManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.setCheckCollaps1$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.setCheckCollaps1$$cat', {
  scrap: {
    "name": ["setCheckCollaps1"],
    "run@": ["collapsibleManager"],
    "embed": ["true"],
    "jqm": ["setCheck(\"checkbox-1-a\");"],
    "assert": ["ok($('#checkbox-1-a').is(':checked'),'checkbox-1-a is checked')"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/collapsible/index.html",
    "scrapinfo": {
      "start": {
        "line": 207,
        "col": 18
      },
      "end": {
        "line": 213,
        "col": 20
      }
    },
    "commentinfo": {
      "start": {
        "line": 206,
        "col": 16
      },
      "end": {
        "line": 214,
        "col": 16
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
    "id": "scrap_40",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.setCheckCollaps1"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.setCheckCollaps1$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.setCheckCollaps1$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'setCheckCollaps1',
    desc: 'setCheck("checkbox-1-a");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.setCheck("checkbox-1-a");
  _cat.utils.chai.assert({
    code: "assert.ok($(\"#checkbox-1-a\").is(\":checked\"),\"checkbox-1-a is checked\")\n",
    fail: true,
    scrap: {
      "config": {
        "name": ["setCheckCollaps1"],
        "run@": ["collapsibleManager"],
        "embed": ["true"],
        "jqm": ["setCheck(\"checkbox-1-a\");"],
        "assert": ["ok($('#checkbox-1-a').is(':checked'),'checkbox-1-a is checked')"],
        "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/collapsible/index.html",
        "scrapinfo": {
          "start": {
            "line": 207,
            "col": 18
          },
          "end": {
            "line": 213,
            "col": 20
          }
        },
        "commentinfo": {
          "start": {
            "line": 206,
            "col": 16
          },
          "end": {
            "line": 214,
            "col": 16
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
        "id": "scrap_40",
        "$type": "html"
      },
      "output": ["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'setCheckCollaps1', desc: 'setCheck(\"checkbox-1-a\");',tips: ''});", "_cat.core.plugin('jqm').actions.setCheck(\"checkbox-1-a\");"],
      "$$context": {
        "$$context": {
          "name": "setCheckCollaps1",
          "run@": "collapsibleManager",
          "assert": ["ok($('#checkbox-1-a').is(':checked'),'checkbox-1-a is checked')"],
          "embed": "true",
          "jqm": ["setCheck(\"checkbox-1-a\");"]
        }
      }
    }
  });
});
_cat.core.setManager("collapsibleManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.legendUnClick$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.legendUnClick$$cat', {
  scrap: {
    "name": ["legendUnClick"],
    "run@": ["collapsibleManager"],
    "embed": ["true"],
    "jqm": ["collapsible(\"legendClick\");"],
    "assert": ["ok($('#legendClick').collapsible( 'option' ).collapsed,'legendClick is checked')"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/collapsible/index.html",
    "scrapinfo": {
      "start": {
        "line": 217,
        "col": 21
      },
      "end": {
        "line": 223,
        "col": 23
      }
    },
    "commentinfo": {
      "start": {
        "line": 216,
        "col": 16
      },
      "end": {
        "line": 224,
        "col": 22
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
    "id": "scrap_41",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.legendUnClick"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.legendUnClick$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.legendUnClick$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'legendUnClick',
    desc: 'collapsible("legendClick");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.collapsible("legendClick");
  _cat.utils.chai.assert({
    code: "assert.ok($(\"#legendClick\").collapsible(\"option\").collapsed,\"legendClick is checked\")\n",
    fail: true,
    scrap: {
      "config": {
        "name": ["legendUnClick"],
        "run@": ["collapsibleManager"],
        "embed": ["true"],
        "jqm": ["collapsible(\"legendClick\");"],
        "assert": ["ok($('#legendClick').collapsible( 'option' ).collapsed,'legendClick is checked')"],
        "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/collapsible/index.html",
        "scrapinfo": {
          "start": {
            "line": 217,
            "col": 21
          },
          "end": {
            "line": 223,
            "col": 23
          }
        },
        "commentinfo": {
          "start": {
            "line": 216,
            "col": 16
          },
          "end": {
            "line": 224,
            "col": 22
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
        "id": "scrap_41",
        "$type": "html"
      },
      "output": ["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'legendUnClick', desc: 'collapsible(\"legendClick\");',tips: ''});", "_cat.core.plugin('jqm').actions.collapsible(\"legendClick\");"],
      "$$context": {
        "$$context": {
          "name": "legendUnClick",
          "run@": "collapsibleManager",
          "assert": ["ok($('#legendClick').collapsible( 'option' ).collapsed,'legendClick is checked')"],
          "embed": "true",
          "jqm": ["collapsible(\"legendClick\");"]
        }
      }
    }
  });
});
_cat.core.setManager("collapsibleManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.selectMenuScroll$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.selectMenuScroll$$cat', {
  scrap: {
    "name": ["selectMenuScroll"],
    "run@": ["collapsibleManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"selectMenu\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/collapsible/index.html",
    "scrapinfo": {
      "start": {
        "line": 472,
        "col": 17
      },
      "end": {
        "line": 477,
        "col": 19
      }
    },
    "commentinfo": {
      "start": {
        "line": 471,
        "col": 4
      },
      "end": {
        "line": 478,
        "col": 15
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
    "id": "scrap_42",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.selectMenuScroll"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.selectMenuScroll$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.selectMenuScroll$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'selectMenuScroll',
    desc: 'scrollTo("selectMenu");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.scrollTo("selectMenu");
});
_cat.core.setManager("collapsibleManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.selectMenuClick$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.selectMenuClick$$cat', {
  scrap: {
    "name": ["selectMenuClick"],
    "run@": ["collapsibleManager"],
    "embed": ["true"],
    "jqm": ["click(\"selectMenu\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/collapsible/index.html",
    "scrapinfo": {
      "start": {
        "line": 481,
        "col": 21
      },
      "end": {
        "line": 486,
        "col": 23
      }
    },
    "commentinfo": {
      "start": {
        "line": 480,
        "col": 4
      },
      "end": {
        "line": 487,
        "col": 22
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
    "id": "scrap_43",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.selectMenuClick"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.selectMenuClick$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.selectMenuClick$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'selectMenuClick',
    desc: 'click("selectMenu");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.click("selectMenu");
});
_cat.core.setManager("collapsibleManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.selectMenuScroll2$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.selectMenuScroll2$$cat', {
  scrap: {
    "name": ["selectMenuScroll2"],
    "run@": ["collapsibleManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"selectMenu\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/collapsible/index.html",
    "scrapinfo": {
      "start": {
        "line": 490,
        "col": 19
      },
      "end": {
        "line": 495,
        "col": 21
      }
    },
    "commentinfo": {
      "start": {
        "line": 489,
        "col": 4
      },
      "end": {
        "line": 496,
        "col": 17
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
    "id": "scrap_44",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.selectMenuScroll2"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.selectMenuScroll2$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.selectMenuScroll2$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'selectMenuScroll2',
    desc: 'scrollTo("selectMenu");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.scrollTo("selectMenu");
});
_cat.core.setManager("collapsibleManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.selectmenuRef$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.selectmenuRef$$cat', {
  scrap: {
    "name": ["selectmenuRef"],
    "run@": ["collapsibleManager"],
    "embed": ["true"],
    "jqm": ["clickRef(\"selectmenuRef\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/collapsible/index.html",
    "scrapinfo": {
      "start": {
        "line": 499,
        "col": 18
      },
      "end": {
        "line": 504,
        "col": 20
      }
    },
    "commentinfo": {
      "start": {
        "line": 498,
        "col": 4
      },
      "end": {
        "line": 505,
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
    "id": "scrap_45",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.selectmenuRef"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.selectmenuRef$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.selectmenuRef$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'selectmenuRef',
    desc: 'clickRef("selectmenuRef");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.clickRef("selectmenuRef");
});
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.collapsibleManager$$cat', {
  scrap: {
    "name": ["collapsibleManager"],
    "perform": ["@@basicCollapsibleScroll repeat(1)", "@@basicCollapsibleClick repeat(1)", "@@legendScroll repeat(1)", "@@legendClick repeat(1)", "@@setTextLegend repeat(1)", "@@setCheckCollaps3 repeat(1)", "@@setCheckCollaps1 repeat(1)", "@@legendUnClick repeat(1)", "@@appMenuCollapsibleClick repeat(1)", "@@selectMenuScroll repeat(1)", "@@selectMenuScroll2 repeat(1)", "@@selectmenuRef repeat(1)"],
    "embed": ["true"],
    "catui": ["on"],
    "manager": ["true"],
    "signal": ["TESTEND"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/collapsible/index.html",
    "scrapinfo": {
      "start": {
        "line": 508,
        "col": 15
      },
      "end": {
        "line": 528,
        "col": 17
      }
    },
    "commentinfo": {
      "start": {
        "line": 507,
        "col": 4
      },
      "end": {
        "line": 529,
        "col": 18
      }
    },
    "single": {
      "name": true,
      "perform": false,
      "embed": true,
      "catui": true,
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
      "embed": -1,
      "catui": -1,
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
    "id": "scrap_46",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.collapsibleManager"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.collapsibleManager$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.collapsibleManager$$cat";

  /* test content in here */

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('collapsibleManager', 'basicCollapsibleScroll', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('collapsibleManager', 'basicCollapsibleClick', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('collapsibleManager', 'legendScroll', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('collapsibleManager', 'legendClick', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('collapsibleManager', 'setTextLegend', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('collapsibleManager', 'setCheckCollaps3', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('collapsibleManager', 'setCheckCollaps1', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('collapsibleManager', 'legendUnClick', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('collapsibleManager', 'appMenuCollapsibleClick', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('collapsibleManager', 'selectMenuScroll', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('collapsibleManager', 'selectMenuScroll2', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('collapsibleManager', 'selectmenuRef', 'repeat(1)');

  /*  CAT UI call  */
  _cat.core.ui.on();

  /*  Manager call  */
  (function() {
    _cat.core.managerCall('collapsibleManager', function() {
      _cat.utils.Signal.send('TESTEND');
    });
  })();
});
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.appMenuCollapsibleClick", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.appMenuCollapsibleClick";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.appMenuCollapsibleClick
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.basicCollapsibleScroll", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.basicCollapsibleScroll";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.basicCollapsibleScroll
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.basicCollapsibleClick", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.basicCollapsibleClick";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.basicCollapsibleClick
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.legendScroll", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.legendScroll";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.legendScroll
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.legendClick", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.legendClick";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.legendClick
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.setTextLegend", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.setTextLegend";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.setTextLegend
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.setCheckCollaps3", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.setCheckCollaps3";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.setCheckCollaps3
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.setCheckCollaps1", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.setCheckCollaps1";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.setCheckCollaps1
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.legendUnClick", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.legendUnClick";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.legendUnClick
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.selectMenuScroll", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.selectMenuScroll";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.selectMenuScroll
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.selectMenuClick", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.selectMenuClick";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.selectMenuClick
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.selectMenuScroll2", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.selectMenuScroll2";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.selectMenuScroll2
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.selectmenuRef", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.selectmenuRef";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.selectmenuRef
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.collapsibleManager", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.collapsibleManager";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.collapsible.index.html.collapsibleManager
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.setManager("scrapFormManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.appMenuFormClick$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.appMenuFormClick$$cat', {
  scrap: {
    "name": ["appMenuFormClick"],
    "run@": ["scrapFormManager"],
    "embed": ["true"],
    "jqm": ["clickRef(\"appMenuForm\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/forms/index.html",
    "scrapinfo": {
      "start": {
        "line": 31,
        "col": 22
      },
      "end": {
        "line": 36,
        "col": 24
      }
    },
    "commentinfo": {
      "start": {
        "line": 30,
        "col": 12
      },
      "end": {
        "line": 37,
        "col": 23
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
    "id": "scrap_48",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.appMenuFormClick"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.appMenuFormClick$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.appMenuFormClick$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'appMenuFormClick',
    desc: 'clickRef("appMenuForm");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.clickRef("appMenuForm");
});
_cat.core.setManager("scrapFormManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.checkbox-radioHScroll$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.checkbox-radioHScroll$$cat', {
  scrap: {
    "name": ["checkbox-radioHScroll"],
    "run@": ["scrapFormManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"checkbox-radioH\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/forms/index.html",
    "scrapinfo": {
      "start": {
        "line": 201,
        "col": 18
      },
      "end": {
        "line": 206,
        "col": 20
      }
    },
    "commentinfo": {
      "start": {
        "line": 200,
        "col": 8
      },
      "end": {
        "line": 207,
        "col": 16
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
    "id": "scrap_49",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.checkbox-radioHScroll"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.checkbox-radioHScroll$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.checkbox-radioHScroll$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'checkbox-radioHScroll',
    desc: 'scrollTo("checkbox-radioH");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.scrollTo("checkbox-radioH");
});
_cat.core.setManager("scrapFormManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.hRadio$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.hRadio$$cat', {
  scrap: {
    "name": ["hRadio"],
    "run@": ["scrapFormManager"],
    "embed": ["true"],
    "jqm": ["checkRadio(\"hRadio\" , \"radio-choice-c\" );"],
    "assert": ["ok($('#radio-choice-c').is(':checked'),'radio-choice-c is checked')"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/forms/index.html",
    "scrapinfo": {
      "start": {
        "line": 209,
        "col": 10
      },
      "end": {
        "line": 215,
        "col": 12
      }
    },
    "commentinfo": {
      "start": {
        "line": 208,
        "col": 8
      },
      "end": {
        "line": 216,
        "col": 11
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
    "id": "scrap_50",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.hRadio"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.hRadio$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.hRadio$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'hRadio',
    desc: 'checkRadio("hRadio" , "radio-choice-c" );',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.checkRadio("hRadio", "radio-choice-c");
  _cat.utils.chai.assert({
    code: "assert.ok($(\"#radio-choice-c\").is(\":checked\"),\"radio-choice-c is checked\")\n",
    fail: true,
    scrap: {
      "config": {
        "name": ["hRadio"],
        "run@": ["scrapFormManager"],
        "embed": ["true"],
        "jqm": ["checkRadio(\"hRadio\" , \"radio-choice-c\" );"],
        "assert": ["ok($('#radio-choice-c').is(':checked'),'radio-choice-c is checked')"],
        "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/forms/index.html",
        "scrapinfo": {
          "start": {
            "line": 209,
            "col": 10
          },
          "end": {
            "line": 215,
            "col": 12
          }
        },
        "commentinfo": {
          "start": {
            "line": 208,
            "col": 8
          },
          "end": {
            "line": 216,
            "col": 11
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
        "id": "scrap_50",
        "$type": "html"
      },
      "output": ["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'hRadio', desc: 'checkRadio(\"hRadio\" , \"radio-choice-c\" );',tips: ''});", "_cat.core.plugin('jqm').actions.checkRadio(\"hRadio\" , \"radio-choice-c\" );"],
      "$$context": {
        "$$context": {
          "name": "hRadio",
          "run@": "scrapFormManager",
          "assert": ["ok($('#radio-choice-c').is(':checked'),'radio-choice-c is checked')"],
          "embed": "true",
          "jqm": ["checkRadio(\"hRadio\" , \"radio-choice-c\" );"]
        }
      }
    }
  });
});
_cat.core.setManager("scrapFormManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.hRadio2$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.hRadio2$$cat', {
  scrap: {
    "name": ["hRadio2"],
    "run@": ["scrapFormManager"],
    "embed": ["true"],
    "jqm": ["checkRadio(\"hRadio\" , \"radio-choice-e\" );"],
    "assert": ["ok($('#radio-choice-e').is(':checked'),'radio-choice-e is checked')"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/forms/index.html",
    "scrapinfo": {
      "start": {
        "line": 220,
        "col": 10
      },
      "end": {
        "line": 226,
        "col": 12
      }
    },
    "commentinfo": {
      "start": {
        "line": 219,
        "col": 8
      },
      "end": {
        "line": 227,
        "col": 11
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
    "id": "scrap_51",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.hRadio2"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.hRadio2$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.hRadio2$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'hRadio2',
    desc: 'checkRadio("hRadio" , "radio-choice-e" );',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.checkRadio("hRadio", "radio-choice-e");
  _cat.utils.chai.assert({
    code: "assert.ok($(\"#radio-choice-e\").is(\":checked\"),\"radio-choice-e is checked\")\n",
    fail: true,
    scrap: {
      "config": {
        "name": ["hRadio2"],
        "run@": ["scrapFormManager"],
        "embed": ["true"],
        "jqm": ["checkRadio(\"hRadio\" , \"radio-choice-e\" );"],
        "assert": ["ok($('#radio-choice-e').is(':checked'),'radio-choice-e is checked')"],
        "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/forms/index.html",
        "scrapinfo": {
          "start": {
            "line": 220,
            "col": 10
          },
          "end": {
            "line": 226,
            "col": 12
          }
        },
        "commentinfo": {
          "start": {
            "line": 219,
            "col": 8
          },
          "end": {
            "line": 227,
            "col": 11
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
        "id": "scrap_51",
        "$type": "html"
      },
      "output": ["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'hRadio2', desc: 'checkRadio(\"hRadio\" , \"radio-choice-e\" );',tips: ''});", "_cat.core.plugin('jqm').actions.checkRadio(\"hRadio\" , \"radio-choice-e\" );"],
      "$$context": {
        "$$context": {
          "name": "hRadio2",
          "run@": "scrapFormManager",
          "assert": ["ok($('#radio-choice-e').is(':checked'),'radio-choice-e is checked')"],
          "embed": "true",
          "jqm": ["checkRadio(\"hRadio\" , \"radio-choice-e\" );"]
        }
      }
    }
  });
});
_cat.core.setManager("scrapFormManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.formTextScroll$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.formTextScroll$$cat', {
  scrap: {
    "name": ["formTextScroll"],
    "run@": ["scrapFormManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"formText\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/forms/index.html",
    "scrapinfo": {
      "start": {
        "line": 296,
        "col": 18
      },
      "end": {
        "line": 301,
        "col": 20
      }
    },
    "commentinfo": {
      "start": {
        "line": 295,
        "col": 8
      },
      "end": {
        "line": 302,
        "col": 16
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
    "id": "scrap_52",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.formTextScroll"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.formTextScroll$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.formTextScroll$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'formTextScroll',
    desc: 'scrollTo("formText");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.scrollTo("formText");
});
_cat.core.setManager("scrapFormManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.setTextForm$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.setTextForm$$cat', {
  scrap: {
    "name": ["setTextForm"],
    "run@": ["scrapFormManager"],
    "embed": ["true"],
    "jqm": ["setText(\"text-basic\", \"hello world\");"],
    "assert": ["ok($('#text-basic').val()=='hello world','text-basic text == hello world')"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/forms/index.html",
    "scrapinfo": {
      "start": {
        "line": 309,
        "col": 18
      },
      "end": {
        "line": 315,
        "col": 20
      }
    },
    "commentinfo": {
      "start": {
        "line": 308,
        "col": 8
      },
      "end": {
        "line": 316,
        "col": 16
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
    "id": "scrap_53",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.setTextForm"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.setTextForm$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.setTextForm$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'setTextForm',
    desc: 'setText("text-basic", "hello world");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.setText("text-basic", "hello world");
  _cat.utils.chai.assert({
    code: "assert.ok($(\"#text-basic\").val()==\"hello world\",\"text-basic text == hello world\")\n",
    fail: true,
    scrap: {
      "config": {
        "name": ["setTextForm"],
        "run@": ["scrapFormManager"],
        "embed": ["true"],
        "jqm": ["setText(\"text-basic\", \"hello world\");"],
        "assert": ["ok($('#text-basic').val()=='hello world','text-basic text == hello world')"],
        "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/forms/index.html",
        "scrapinfo": {
          "start": {
            "line": 309,
            "col": 18
          },
          "end": {
            "line": 315,
            "col": 20
          }
        },
        "commentinfo": {
          "start": {
            "line": 308,
            "col": 8
          },
          "end": {
            "line": 316,
            "col": 16
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
        "id": "scrap_53",
        "$type": "html"
      },
      "output": ["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'setTextForm', desc: 'setText(\"text-basic\", \"hello world\");',tips: ''});", "_cat.core.plugin('jqm').actions.setText(\"text-basic\", \"hello world\");"],
      "$$context": {
        "$$context": {
          "name": "setTextForm",
          "run@": "scrapFormManager",
          "assert": ["ok($('#text-basic').val()=='hello world','text-basic text == hello world')"],
          "embed": "true",
          "jqm": ["setText(\"text-basic\", \"hello world\");"]
        }
      }
    }
  });
});
_cat.core.setManager("scrapFormManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.formDateScroll$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.formDateScroll$$cat', {
  scrap: {
    "name": ["formDateScroll"],
    "run@": ["scrapFormManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"dateDiv\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/forms/index.html",
    "scrapinfo": {
      "start": {
        "line": 334,
        "col": 25
      },
      "end": {
        "line": 339,
        "col": 27
      }
    },
    "commentinfo": {
      "start": {
        "line": 333,
        "col": 8
      },
      "end": {
        "line": 340,
        "col": 23
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
    "id": "scrap_54",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.formDateScroll"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.formDateScroll$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.formDateScroll$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'formDateScroll',
    desc: 'scrollTo("dateDiv");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.scrollTo("dateDiv");
});
_cat.core.setManager("scrapFormManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.setDate$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.setDate$$cat', {
  scrap: {
    "name": ["setDate"],
    "run@": ["scrapFormManager"],
    "embed": ["true"],
    "jqm": ["setText(\"date\", \"2014-02-27\");"],
    "assert": ["ok($('#date').val()=='2014-02-27','date == 2014-02-27')"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/forms/index.html",
    "scrapinfo": {
      "start": {
        "line": 343,
        "col": 18
      },
      "end": {
        "line": 349,
        "col": 20
      }
    },
    "commentinfo": {
      "start": {
        "line": 342,
        "col": 8
      },
      "end": {
        "line": 350,
        "col": 16
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
    "id": "scrap_55",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.setDate"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.setDate$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.setDate$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'setDate',
    desc: 'setText("date", "2014-02-27");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.setText("date", "2014-02-27");
  _cat.utils.chai.assert({
    code: "assert.ok($(\"#date\").val()==\"2014-02-27\",\"date == 2014-02-27\")\n",
    fail: true,
    scrap: {
      "config": {
        "name": ["setDate"],
        "run@": ["scrapFormManager"],
        "embed": ["true"],
        "jqm": ["setText(\"date\", \"2014-02-27\");"],
        "assert": ["ok($('#date').val()=='2014-02-27','date == 2014-02-27')"],
        "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/forms/index.html",
        "scrapinfo": {
          "start": {
            "line": 343,
            "col": 18
          },
          "end": {
            "line": 349,
            "col": 20
          }
        },
        "commentinfo": {
          "start": {
            "line": 342,
            "col": 8
          },
          "end": {
            "line": 350,
            "col": 16
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
        "id": "scrap_55",
        "$type": "html"
      },
      "output": ["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'setDate', desc: 'setText(\"date\", \"2014-02-27\");',tips: ''});", "_cat.core.plugin('jqm').actions.setText(\"date\", \"2014-02-27\");"],
      "$$context": {
        "$$context": {
          "name": "setDate",
          "run@": "scrapFormManager",
          "assert": ["ok($('#date').val()=='2014-02-27','date == 2014-02-27')"],
          "embed": "true",
          "jqm": ["setText(\"date\", \"2014-02-27\");"]
        }
      }
    }
  });
});
_cat.core.setManager("scrapFormManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.scrollTopForm$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.scrollTopForm$$cat', {
  scrap: {
    "name": ["scrollTopForm"],
    "run@": ["scrapFormManager"],
    "embed": ["true"],
    "jqm": ["scrollTop();"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/forms/index.html",
    "scrapinfo": {
      "start": {
        "line": 424,
        "col": 11
      },
      "end": {
        "line": 429,
        "col": 13
      }
    },
    "commentinfo": {
      "start": {
        "line": 423,
        "col": 8
      },
      "end": {
        "line": 430,
        "col": 9
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
    "id": "scrap_56",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.scrollTopForm"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.scrollTopForm$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.scrollTopForm$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'scrollTopForm',
    desc: 'scrollTop();',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.scrollTop();
});
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.scrapFormManager$$cat', {
  scrap: {
    "name": ["scrapFormManager"],
    "perform": ["@@formTextScroll repeat(1)", "@@setTextForm repeat(1)", "@@formDateScroll repeat(1)", "@@setDate repeat(1)", "@@checkbox-radioHScroll repeat(1)", "@@hRadio repeat(1)", "@@hRadio2 repeat(1)", "@@scrollTopForm repeat(1)", "@@appMenuFormClick repeat(1)", "@@gridsMenuScroll repeat(1)", "@@gridsMenuClick repeat(1)", "@@gridsMenuScroll2 repeat(1)", "@@gridsRef repeat(1)"],
    "embed": ["true"],
    "catui": ["on"],
    "manager": ["true"],
    "signal": ["TESTEND"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/forms/index.html",
    "scrapinfo": {
      "start": {
        "line": 630,
        "col": 8
      },
      "end": {
        "line": 653,
        "col": 10
      }
    },
    "commentinfo": {
      "start": {
        "line": 629,
        "col": 0
      },
      "end": {
        "line": 654,
        "col": 11
      }
    },
    "single": {
      "name": true,
      "perform": false,
      "embed": true,
      "catui": true,
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
      "embed": -1,
      "catui": -1,
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
    "id": "scrap_62",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.scrapFormManager"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.scrapFormManager$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.scrapFormManager$$cat";

  /* test content in here */

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('scrapFormManager', 'formTextScroll', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('scrapFormManager', 'setTextForm', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('scrapFormManager', 'formDateScroll', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('scrapFormManager', 'setDate', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('scrapFormManager', 'checkbox-radioHScroll', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('scrapFormManager', 'hRadio', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('scrapFormManager', 'hRadio2', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('scrapFormManager', 'scrollTopForm', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('scrapFormManager', 'appMenuFormClick', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('scrapFormManager', 'gridsMenuScroll', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('scrapFormManager', 'gridsMenuClick', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('scrapFormManager', 'gridsMenuScroll2', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('scrapFormManager', 'gridsRef', 'repeat(1)');

  /*  CAT UI call  */
  _cat.core.ui.on();

  /*  Manager call  */
  (function() {
    _cat.core.managerCall('scrapFormManager', function() {
      _cat.utils.Signal.send('TESTEND');
    });
  })();
});
_cat.core.setManager("scrapFormManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.gridsMenuScroll$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.gridsMenuScroll$$cat', {
  scrap: {
    "name": ["gridsMenuScroll"],
    "run@": ["scrapFormManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"gridsMenu\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/forms/index.html",
    "scrapinfo": {
      "start": {
        "line": 588,
        "col": 17
      },
      "end": {
        "line": 593,
        "col": 19
      }
    },
    "commentinfo": {
      "start": {
        "line": 587,
        "col": 4
      },
      "end": {
        "line": 594,
        "col": 15
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
    "id": "scrap_58",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.gridsMenuScroll"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.gridsMenuScroll$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.gridsMenuScroll$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'gridsMenuScroll',
    desc: 'scrollTo("gridsMenu");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.scrollTo("gridsMenu");
});
_cat.core.setManager("scrapFormManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.gridsMenuClick$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.gridsMenuClick$$cat', {
  scrap: {
    "name": ["gridsMenuClick"],
    "run@": ["scrapFormManager"],
    "embed": ["true"],
    "jqm": ["click(\"gridsMenu\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/forms/index.html",
    "scrapinfo": {
      "start": {
        "line": 597,
        "col": 21
      },
      "end": {
        "line": 602,
        "col": 23
      }
    },
    "commentinfo": {
      "start": {
        "line": 596,
        "col": 4
      },
      "end": {
        "line": 603,
        "col": 22
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
    "id": "scrap_59",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.gridsMenuClick"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.gridsMenuClick$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.gridsMenuClick$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'gridsMenuClick',
    desc: 'click("gridsMenu");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.click("gridsMenu");
});
_cat.core.setManager("scrapFormManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.gridsMenuScroll2$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.gridsMenuScroll2$$cat', {
  scrap: {
    "name": ["gridsMenuScroll2"],
    "run@": ["scrapFormManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"gridsMenu\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/forms/index.html",
    "scrapinfo": {
      "start": {
        "line": 606,
        "col": 19
      },
      "end": {
        "line": 611,
        "col": 21
      }
    },
    "commentinfo": {
      "start": {
        "line": 605,
        "col": 4
      },
      "end": {
        "line": 612,
        "col": 17
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
    "id": "scrap_60",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.gridsMenuScroll2"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.gridsMenuScroll2$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.gridsMenuScroll2$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'gridsMenuScroll2',
    desc: 'scrollTo("gridsMenu");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.scrollTo("gridsMenu");
});
_cat.core.setManager("scrapFormManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.gridsRef$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.gridsRef$$cat', {
  scrap: {
    "name": ["gridsRef"],
    "run@": ["scrapFormManager"],
    "embed": ["true"],
    "jqm": ["clickRef(\"gridsPageLink\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/forms/index.html",
    "scrapinfo": {
      "start": {
        "line": 615,
        "col": 18
      },
      "end": {
        "line": 620,
        "col": 20
      }
    },
    "commentinfo": {
      "start": {
        "line": 614,
        "col": 4
      },
      "end": {
        "line": 621,
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
    "id": "scrap_61",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.gridsRef"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.gridsRef$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.gridsRef$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'gridsRef',
    desc: 'clickRef("gridsPageLink");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.clickRef("gridsPageLink");
});
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.appMenuFormClick", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.appMenuFormClick";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.appMenuFormClick
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.checkbox-radioHScroll", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.checkbox-radioHScroll";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.checkbox-radioHScroll
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.hRadio", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.hRadio";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.hRadio
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.hRadio2", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.hRadio2";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.hRadio2
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.formTextScroll", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.formTextScroll";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.formTextScroll
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.setTextForm", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.setTextForm";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.setTextForm
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.formDateScroll", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.formDateScroll";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.formDateScroll
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.setDate", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.setDate";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.setDate
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.scrollTopForm", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.scrollTopForm";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.scrollTopForm
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.scrapFormManager", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.scrapFormManager";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.scrapFormManager
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.gridsMenuScroll", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.gridsMenuScroll";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.gridsMenuScroll
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.gridsMenuClick", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.gridsMenuClick";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.gridsMenuClick
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.gridsMenuScroll2", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.gridsMenuScroll2";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.gridsMenuScroll2
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.gridsRef", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.gridsRef";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.forms.index.html.gridsRef
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.setManager("gridManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.appMenuGridsClick$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.appMenuGridsClick$$cat', {
  scrap: {
    "name": ["appMenuGridsClick"],
    "run@": ["gridManager"],
    "embed": ["true"],
    "jqm": ["clickRef(\"appMenuGrids\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/grids/index.html",
    "scrapinfo": {
      "start": {
        "line": 31,
        "col": 22
      },
      "end": {
        "line": 36,
        "col": 24
      }
    },
    "commentinfo": {
      "start": {
        "line": 30,
        "col": 8
      },
      "end": {
        "line": 37,
        "col": 23
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
    "id": "scrap_64",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.appMenuGridsClick"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.appMenuGridsClick$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.appMenuGridsClick$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'appMenuGridsClick',
    desc: 'clickRef("appMenuGrids");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.clickRef("appMenuGrids");
});
_cat.core.setManager("gridManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.btnDivsScroll$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.btnDivsScroll$$cat', {
  scrap: {
    "name": ["btnDivsScroll"],
    "run@": ["gridManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"btnDivs\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/grids/index.html",
    "scrapinfo": {
      "start": {
        "line": 78,
        "col": 18
      },
      "end": {
        "line": 84,
        "col": 20
      }
    },
    "commentinfo": {
      "start": {
        "line": 77,
        "col": 8
      },
      "end": {
        "line": 85,
        "col": 16
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
    "id": "scrap_65",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.btnDivsScroll"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.btnDivsScroll$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.btnDivsScroll$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'btnDivsScroll',
    desc: 'scrollTo("btnDivs");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.scrollTo("btnDivs");
});
_cat.core.setManager("gridManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.hmmBtnClick$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.hmmBtnClick$$cat', {
  scrap: {
    "name": ["hmmBtnClick"],
    "run@": ["gridManager"],
    "embed": ["true"],
    "jqm": ["clickButton(\"hmmBtn\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/grids/index.html",
    "scrapinfo": {
      "start": {
        "line": 99,
        "col": 22
      },
      "end": {
        "line": 104,
        "col": 24
      }
    },
    "commentinfo": {
      "start": {
        "line": 98,
        "col": 20
      },
      "end": {
        "line": 105,
        "col": 23
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
    "id": "scrap_66",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.hmmBtnClick"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.hmmBtnClick$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.hmmBtnClick$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'hmmBtnClick',
    desc: 'clickButton("hmmBtn");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.clickButton("hmmBtn");
});
_cat.core.setManager("gridManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.yesBtnClick$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.yesBtnClick$$cat', {
  scrap: {
    "name": ["yesBtnClick"],
    "run@": ["gridManager"],
    "embed": ["true"],
    "jqm": ["clickButton(\"yesBtn\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/grids/index.html",
    "scrapinfo": {
      "start": {
        "line": 108,
        "col": 22
      },
      "end": {
        "line": 113,
        "col": 24
      }
    },
    "commentinfo": {
      "start": {
        "line": 107,
        "col": 20
      },
      "end": {
        "line": 114,
        "col": 23
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
    "id": "scrap_67",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.yesBtnClick"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.yesBtnClick$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.yesBtnClick$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'yesBtnClick',
    desc: 'clickButton("yesBtn");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.clickButton("yesBtn");
});
_cat.core.setManager("gridManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.noBtnClick$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.noBtnClick$$cat', {
  scrap: {
    "name": ["noBtnClick"],
    "run@": ["gridManager"],
    "embed": ["true"],
    "jqm": ["clickButton(\"noBtn\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/grids/index.html",
    "scrapinfo": {
      "start": {
        "line": 116,
        "col": 22
      },
      "end": {
        "line": 121,
        "col": 24
      }
    },
    "commentinfo": {
      "start": {
        "line": 115,
        "col": 20
      },
      "end": {
        "line": 122,
        "col": 23
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
    "id": "scrap_68",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.noBtnClick"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.noBtnClick$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.noBtnClick$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'noBtnClick',
    desc: 'clickButton("noBtn");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.clickButton("noBtn");
});
_cat.core.setManager("gridManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.radioMenuScroll$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.radioMenuScroll$$cat', {
  scrap: {
    "name": ["radioMenuScroll"],
    "run@": ["gridManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"radioMenu\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/grids/index.html",
    "scrapinfo": {
      "start": {
        "line": 269,
        "col": 13
      },
      "end": {
        "line": 274,
        "col": 15
      }
    },
    "commentinfo": {
      "start": {
        "line": 268,
        "col": 4
      },
      "end": {
        "line": 275,
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
    "id": "scrap_69",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.radioMenuScroll"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.radioMenuScroll$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.radioMenuScroll$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'radioMenuScroll',
    desc: 'scrollTo("radioMenu");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.scrollTo("radioMenu");
});
_cat.core.setManager("gridManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.radioMenuClick$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.radioMenuClick$$cat', {
  scrap: {
    "name": ["radioMenuClick"],
    "run@": ["gridManager"],
    "embed": ["true"],
    "jqm": ["click(\"radioMenu\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/grids/index.html",
    "scrapinfo": {
      "start": {
        "line": 278,
        "col": 21
      },
      "end": {
        "line": 283,
        "col": 23
      }
    },
    "commentinfo": {
      "start": {
        "line": 277,
        "col": 4
      },
      "end": {
        "line": 284,
        "col": 22
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
    "id": "scrap_70",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.radioMenuClick"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.radioMenuClick$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.radioMenuClick$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'radioMenuClick',
    desc: 'click("radioMenu");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.click("radioMenu");
});
_cat.core.setManager("gridManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.radioMenuScroll2$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.radioMenuScroll2$$cat', {
  scrap: {
    "name": ["radioMenuScroll2"],
    "run@": ["gridManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"radioMenu\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/grids/index.html",
    "scrapinfo": {
      "start": {
        "line": 287,
        "col": 19
      },
      "end": {
        "line": 292,
        "col": 21
      }
    },
    "commentinfo": {
      "start": {
        "line": 286,
        "col": 4
      },
      "end": {
        "line": 293,
        "col": 17
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
    "id": "scrap_71",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.radioMenuScroll2"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.radioMenuScroll2$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.radioMenuScroll2$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'radioMenuScroll2',
    desc: 'scrollTo("radioMenu");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.scrollTo("radioMenu");
});
_cat.core.setManager("gridManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.radioRef$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.radioRef$$cat', {
  scrap: {
    "name": ["radioRef"],
    "run@": ["gridManager"],
    "embed": ["true"],
    "jqm": ["clickRef(\"radioRef\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/grids/index.html",
    "scrapinfo": {
      "start": {
        "line": 296,
        "col": 18
      },
      "end": {
        "line": 301,
        "col": 20
      }
    },
    "commentinfo": {
      "start": {
        "line": 295,
        "col": 4
      },
      "end": {
        "line": 302,
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
    "id": "scrap_72",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.radioRef"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.radioRef$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.radioRef$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'radioRef',
    desc: 'clickRef("radioRef");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.clickRef("radioRef");
});
_cat.core.setManager("gridManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.scrollTopGrids$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.scrollTopGrids$$cat', {
  scrap: {
    "name": ["scrollTopGrids"],
    "run@": ["gridManager"],
    "embed": ["true"],
    "jqm": ["scrollTop();"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/grids/index.html",
    "scrapinfo": {
      "start": {
        "line": 311,
        "col": 11
      },
      "end": {
        "line": 316,
        "col": 13
      }
    },
    "commentinfo": {
      "start": {
        "line": 310,
        "col": 0
      },
      "end": {
        "line": 317,
        "col": 9
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
    "id": "scrap_73",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.scrollTopGrids"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.scrollTopGrids$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.scrollTopGrids$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'scrollTopGrids',
    desc: 'scrollTop();',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.scrollTop();
});
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.gridManager$$cat', {
  scrap: {
    "name": ["gridManager"],
    "perform": ["@@btnDivsScroll repeat(1)", "@@hmmBtnClick repeat(1)", "@@yesBtnClick repeat(1)", "@@noBtnClick repeat(1)", "@@scrollTopGrids repeat(1)", "@@appMenuGridsClick repeat(1)", "@@radioMenuScroll repeat(1)", "@@radioMenuClick repeat(1)", "@@radioMenuScroll2 repeat(1)", "@@radioRef repeat(1)"],
    "embed": ["true"],
    "catui": ["on"],
    "manager": ["true"],
    "signal": ["TESTEND"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/grids/index.html",
    "scrapinfo": {
      "start": {
        "line": 320,
        "col": 0
      },
      "end": {
        "line": 338,
        "col": 2
      }
    },
    "commentinfo": {
      "start": {
        "line": 319,
        "col": 0
      },
      "end": {
        "line": 339,
        "col": 3
      }
    },
    "single": {
      "name": true,
      "perform": false,
      "embed": true,
      "catui": true,
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
      "embed": -1,
      "catui": -1,
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
    "id": "scrap_74",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.gridManager"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.gridManager$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.gridManager$$cat";

  /* test content in here */

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('gridManager', 'btnDivsScroll', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('gridManager', 'hmmBtnClick', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('gridManager', 'yesBtnClick', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('gridManager', 'noBtnClick', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('gridManager', 'scrollTopGrids', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('gridManager', 'appMenuGridsClick', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('gridManager', 'radioMenuScroll', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('gridManager', 'radioMenuClick', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('gridManager', 'radioMenuScroll2', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('gridManager', 'radioRef', 'repeat(1)');

  /*  CAT UI call  */
  _cat.core.ui.on();

  /*  Manager call  */
  (function() {
    _cat.core.managerCall('gridManager', function() {
      _cat.utils.Signal.send('TESTEND');
    });
  })();
});
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.appMenuGridsClick", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.appMenuGridsClick";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.appMenuGridsClick
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.btnDivsScroll", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.btnDivsScroll";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.btnDivsScroll
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.hmmBtnClick", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.hmmBtnClick";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.hmmBtnClick
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.yesBtnClick", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.yesBtnClick";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.yesBtnClick
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.noBtnClick", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.noBtnClick";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.noBtnClick
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.radioMenuScroll", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.radioMenuScroll";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.radioMenuScroll
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.radioMenuClick", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.radioMenuClick";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.radioMenuClick
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.radioMenuScroll2", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.radioMenuScroll2";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.radioMenuScroll2
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.radioRef", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.radioRef";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.radioRef
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.scrollTopGrids", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.scrollTopGrids";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.scrollTopGrids
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.gridManager", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.gridManager";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.grids.index.html.gridManager
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.index.html.formWidgetsScroll", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.index.html.formWidgetsScroll";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.index.html.formWidgetsScroll
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.index.html.checkboxesRef", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.index.html.checkboxesRef";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.index.html.checkboxesRef
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.index.html.mainPageManager", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.index.html.mainPageManager";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.index.html.mainPageManager
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.setManager("selectManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.appMenuSelectClick$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.appMenuSelectClick$$cat', {
  scrap: {
    "name": ["appMenuSelectClick"],
    "run@": ["selectManager"],
    "embed": ["true"],
    "jqm": ["clickRef(\"appMenuSelect\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/selectmenu/index.html",
    "scrapinfo": {
      "start": {
        "line": 31,
        "col": 20
      },
      "end": {
        "line": 36,
        "col": 22
      }
    },
    "commentinfo": {
      "start": {
        "line": 30,
        "col": 8
      },
      "end": {
        "line": 37,
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
    "id": "scrap_80",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.appMenuSelectClick"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.appMenuSelectClick$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.appMenuSelectClick$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'appMenuSelectClick',
    desc: 'clickRef("appMenuSelect");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.clickRef("appMenuSelect");
});
_cat.core.setManager("selectManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.basicSelectScroll$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.basicSelectScroll$$cat', {
  scrap: {
    "name": ["basicSelectScroll"],
    "run@": ["selectManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"basicSelect\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/selectmenu/index.html",
    "scrapinfo": {
      "start": {
        "line": 53,
        "col": 16
      },
      "end": {
        "line": 59,
        "col": 18
      }
    },
    "commentinfo": {
      "start": {
        "line": 52,
        "col": 16
      },
      "end": {
        "line": 60,
        "col": 14
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
    "id": "scrap_81",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.basicSelectScroll"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.basicSelectScroll$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.basicSelectScroll$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'basicSelectScroll',
    desc: 'scrollTo("basicSelect");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.scrollTo("basicSelect");
});
_cat.core.setManager("selectManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectMenu3$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectMenu3$$cat', {
  scrap: {
    "name": ["selectMenu3"],
    "run@": ["selectManager"],
    "embed": ["true"],
    "jqm": ["selectMenu(\"select-native-1\", 3);"],
    "assert": ["ok($('#select-native-1  option:selected').val() == '3','select-native-1 selected : 3')"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/selectmenu/index.html",
    "scrapinfo": {
      "start": {
        "line": 66,
        "col": 18
      },
      "end": {
        "line": 72,
        "col": 20
      }
    },
    "commentinfo": {
      "start": {
        "line": 65,
        "col": 16
      },
      "end": {
        "line": 73,
        "col": 16
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
    "id": "scrap_82",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectMenu3"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectMenu3$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectMenu3$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'selectMenu3',
    desc: 'selectMenu("select-native-1", 3);',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.selectMenu("select-native-1", 3);
  _cat.utils.chai.assert({
    code: "assert.ok($(\"#select-native-1  option:selected\").val()==\"3\",\"select-native-1 selected : 3\")\n",
    fail: true,
    scrap: {
      "config": {
        "name": ["selectMenu3"],
        "run@": ["selectManager"],
        "embed": ["true"],
        "jqm": ["selectMenu(\"select-native-1\", 3);"],
        "assert": ["ok($('#select-native-1  option:selected').val() == '3','select-native-1 selected : 3')"],
        "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/selectmenu/index.html",
        "scrapinfo": {
          "start": {
            "line": 66,
            "col": 18
          },
          "end": {
            "line": 72,
            "col": 20
          }
        },
        "commentinfo": {
          "start": {
            "line": 65,
            "col": 16
          },
          "end": {
            "line": 73,
            "col": 16
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
        "id": "scrap_82",
        "$type": "html"
      },
      "output": ["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'selectMenu3', desc: 'selectMenu(\"select-native-1\", 3);',tips: ''});", "_cat.core.plugin('jqm').actions.selectMenu(\"select-native-1\", 3);"],
      "$$context": {
        "$$context": {
          "name": "selectMenu3",
          "run@": "selectManager",
          "assert": ["ok($('#select-native-1  option:selected').val() == '3','select-native-1 selected : 3')"],
          "embed": "true",
          "jqm": ["selectMenu(\"select-native-1\", 3);"]
        }
      }
    }
  });
});
_cat.core.setManager("selectManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectMenu2$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectMenu2$$cat', {
  scrap: {
    "name": ["selectMenu2"],
    "run@": ["selectManager"],
    "embed": ["true"],
    "jqm": ["selectMenu(\"select-native-1\", 2);"],
    "assert": ["ok($('#select-native-1  option:selected').val() == '2','select-native-1 selected : 2')"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/selectmenu/index.html",
    "scrapinfo": {
      "start": {
        "line": 76,
        "col": 18
      },
      "end": {
        "line": 82,
        "col": 20
      }
    },
    "commentinfo": {
      "start": {
        "line": 75,
        "col": 16
      },
      "end": {
        "line": 83,
        "col": 16
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
    "id": "scrap_83",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectMenu2"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectMenu2$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectMenu2$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'selectMenu2',
    desc: 'selectMenu("select-native-1", 2);',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.selectMenu("select-native-1", 2);
  _cat.utils.chai.assert({
    code: "assert.ok($(\"#select-native-1  option:selected\").val()==\"2\",\"select-native-1 selected : 2\")\n",
    fail: true,
    scrap: {
      "config": {
        "name": ["selectMenu2"],
        "run@": ["selectManager"],
        "embed": ["true"],
        "jqm": ["selectMenu(\"select-native-1\", 2);"],
        "assert": ["ok($('#select-native-1  option:selected').val() == '2','select-native-1 selected : 2')"],
        "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/selectmenu/index.html",
        "scrapinfo": {
          "start": {
            "line": 76,
            "col": 18
          },
          "end": {
            "line": 82,
            "col": 20
          }
        },
        "commentinfo": {
          "start": {
            "line": 75,
            "col": 16
          },
          "end": {
            "line": 83,
            "col": 16
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
        "id": "scrap_83",
        "$type": "html"
      },
      "output": ["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'selectMenu2', desc: 'selectMenu(\"select-native-1\", 2);',tips: ''});", "_cat.core.plugin('jqm').actions.selectMenu(\"select-native-1\", 2);"],
      "$$context": {
        "$$context": {
          "name": "selectMenu2",
          "run@": "selectManager",
          "assert": ["ok($('#select-native-1  option:selected').val() == '2','select-native-1 selected : 2')"],
          "embed": "true",
          "jqm": ["selectMenu(\"select-native-1\", 2);"]
        }
      }
    }
  });
});
_cat.core.setManager("selectManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.verticalGroupScroll$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.verticalGroupScroll$$cat', {
  scrap: {
    "name": ["verticalGroupScroll"],
    "run@": ["selectManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"verticalGroup\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/selectmenu/index.html",
    "scrapinfo": {
      "start": {
        "line": 187,
        "col": 16
      },
      "end": {
        "line": 193,
        "col": 18
      }
    },
    "commentinfo": {
      "start": {
        "line": 186,
        "col": 8
      },
      "end": {
        "line": 194,
        "col": 14
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
    "id": "scrap_84",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.verticalGroupScroll"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.verticalGroupScroll$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.verticalGroupScroll$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'verticalGroupScroll',
    desc: 'scrollTo("verticalGroup");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.scrollTo("verticalGroup");
});
_cat.core.setManager("selectManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectGroupMenu5$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectGroupMenu5$$cat', {
  scrap: {
    "name": ["selectGroupMenu5"],
    "run@": ["selectManager"],
    "embed": ["true"],
    "jqm": ["selectMenu(\"select-native-5\", \"twoOption\");"],
    "assert": ["ok($('#select-native-5  option:selected')[0].id == 'twoOption','select-native-5 selected : twoOption')"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/selectmenu/index.html",
    "scrapinfo": {
      "start": {
        "line": 204,
        "col": 18
      },
      "end": {
        "line": 210,
        "col": 20
      }
    },
    "commentinfo": {
      "start": {
        "line": 203,
        "col": 16
      },
      "end": {
        "line": 211,
        "col": 16
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
    "id": "scrap_85",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectGroupMenu5"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectGroupMenu5$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectGroupMenu5$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'selectGroupMenu5',
    desc: 'selectMenu("select-native-5", "twoOption");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.selectMenu("select-native-5", "twoOption");
  _cat.utils.chai.assert({
    code: "assert.ok($(\"#select-native-5  option:selected\")[0].id==\"twoOption\",\"select-native-5 selected : twoOption\")\n",
    fail: true,
    scrap: {
      "config": {
        "name": ["selectGroupMenu5"],
        "run@": ["selectManager"],
        "embed": ["true"],
        "jqm": ["selectMenu(\"select-native-5\", \"twoOption\");"],
        "assert": ["ok($('#select-native-5  option:selected')[0].id == 'twoOption','select-native-5 selected : twoOption')"],
        "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/selectmenu/index.html",
        "scrapinfo": {
          "start": {
            "line": 204,
            "col": 18
          },
          "end": {
            "line": 210,
            "col": 20
          }
        },
        "commentinfo": {
          "start": {
            "line": 203,
            "col": 16
          },
          "end": {
            "line": 211,
            "col": 16
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
        "id": "scrap_85",
        "$type": "html"
      },
      "output": ["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'selectGroupMenu5', desc: 'selectMenu(\"select-native-5\", \"twoOption\");',tips: ''});", "_cat.core.plugin('jqm').actions.selectMenu(\"select-native-5\", \"twoOption\");"],
      "$$context": {
        "$$context": {
          "name": "selectGroupMenu5",
          "run@": "selectManager",
          "assert": ["ok($('#select-native-5  option:selected')[0].id == 'twoOption','select-native-5 selected : twoOption')"],
          "embed": "true",
          "jqm": ["selectMenu(\"select-native-5\", \"twoOption\");"]
        }
      }
    }
  });
});
_cat.core.setManager("selectManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectGroupMenu7$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectGroupMenu7$$cat', {
  scrap: {
    "name": ["selectGroupMenu7"],
    "run@": ["selectManager"],
    "embed": ["true"],
    "jqm": ["selectMenu(\"select-native-7\", \"threeOption\");"],
    "assert": ["ok($('#select-native-7  option:selected')[0].id == 'threeOption','select-native-7 selected : threeOption')"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/selectmenu/index.html",
    "scrapinfo": {
      "start": {
        "line": 213,
        "col": 18
      },
      "end": {
        "line": 219,
        "col": 20
      }
    },
    "commentinfo": {
      "start": {
        "line": 212,
        "col": 16
      },
      "end": {
        "line": 220,
        "col": 16
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
    "id": "scrap_86",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectGroupMenu7"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectGroupMenu7$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectGroupMenu7$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'selectGroupMenu7',
    desc: 'selectMenu("select-native-7", "threeOption");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.selectMenu("select-native-7", "threeOption");
  _cat.utils.chai.assert({
    code: "assert.ok($(\"#select-native-7  option:selected\")[0].id==\"threeOption\",\"select-native-7 selected : threeOption\")\n",
    fail: true,
    scrap: {
      "config": {
        "name": ["selectGroupMenu7"],
        "run@": ["selectManager"],
        "embed": ["true"],
        "jqm": ["selectMenu(\"select-native-7\", \"threeOption\");"],
        "assert": ["ok($('#select-native-7  option:selected')[0].id == 'threeOption','select-native-7 selected : threeOption')"],
        "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/selectmenu/index.html",
        "scrapinfo": {
          "start": {
            "line": 213,
            "col": 18
          },
          "end": {
            "line": 219,
            "col": 20
          }
        },
        "commentinfo": {
          "start": {
            "line": 212,
            "col": 16
          },
          "end": {
            "line": 220,
            "col": 16
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
        "id": "scrap_86",
        "$type": "html"
      },
      "output": ["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'selectGroupMenu7', desc: 'selectMenu(\"select-native-7\", \"threeOption\");',tips: ''});", "_cat.core.plugin('jqm').actions.selectMenu(\"select-native-7\", \"threeOption\");"],
      "$$context": {
        "$$context": {
          "name": "selectGroupMenu7",
          "run@": "selectManager",
          "assert": ["ok($('#select-native-7  option:selected')[0].id == 'threeOption','select-native-7 selected : threeOption')"],
          "embed": "true",
          "jqm": ["selectMenu(\"select-native-7\", \"threeOption\");"]
        }
      }
    }
  });
});
_cat.core.setManager("selectManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectGroupMenu6$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectGroupMenu6$$cat', {
  scrap: {
    "name": ["selectGroupMenu6"],
    "run@": ["selectManager"],
    "embed": ["true"],
    "jqm": ["selectMenu(\"select-native-6\", \"threeOption2\");"],
    "assert": ["ok($('#select-native-6  option:selected')[0].id == 'threeOption2','select-native-6 selected : threeOption2')"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/selectmenu/index.html",
    "scrapinfo": {
      "start": {
        "line": 222,
        "col": 18
      },
      "end": {
        "line": 228,
        "col": 20
      }
    },
    "commentinfo": {
      "start": {
        "line": 221,
        "col": 16
      },
      "end": {
        "line": 229,
        "col": 16
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
    "id": "scrap_87",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectGroupMenu6"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectGroupMenu6$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectGroupMenu6$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'selectGroupMenu6',
    desc: 'selectMenu("select-native-6", "threeOption2");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.selectMenu("select-native-6", "threeOption2");
  _cat.utils.chai.assert({
    code: "assert.ok($(\"#select-native-6  option:selected\")[0].id==\"threeOption2\",\"select-native-6 selected : threeOption2\")\n",
    fail: true,
    scrap: {
      "config": {
        "name": ["selectGroupMenu6"],
        "run@": ["selectManager"],
        "embed": ["true"],
        "jqm": ["selectMenu(\"select-native-6\", \"threeOption2\");"],
        "assert": ["ok($('#select-native-6  option:selected')[0].id == 'threeOption2','select-native-6 selected : threeOption2')"],
        "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/selectmenu/index.html",
        "scrapinfo": {
          "start": {
            "line": 222,
            "col": 18
          },
          "end": {
            "line": 228,
            "col": 20
          }
        },
        "commentinfo": {
          "start": {
            "line": 221,
            "col": 16
          },
          "end": {
            "line": 229,
            "col": 16
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
        "id": "scrap_87",
        "$type": "html"
      },
      "output": ["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'selectGroupMenu6', desc: 'selectMenu(\"select-native-6\", \"threeOption2\");',tips: ''});", "_cat.core.plugin('jqm').actions.selectMenu(\"select-native-6\", \"threeOption2\");"],
      "$$context": {
        "$$context": {
          "name": "selectGroupMenu6",
          "run@": "selectManager",
          "assert": ["ok($('#select-native-6  option:selected')[0].id == 'threeOption2','select-native-6 selected : threeOption2')"],
          "embed": "true",
          "jqm": ["selectMenu(\"select-native-6\", \"threeOption2\");"]
        }
      }
    }
  });
});
_cat.core.setManager("selectManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.horGroupScroll$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.horGroupScroll$$cat', {
  scrap: {
    "name": ["horGroupScroll"],
    "run@": ["selectManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"horGroup\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/selectmenu/index.html",
    "scrapinfo": {
      "start": {
        "line": 284,
        "col": 15
      },
      "end": {
        "line": 290,
        "col": 17
      }
    },
    "commentinfo": {
      "start": {
        "line": 283,
        "col": 8
      },
      "end": {
        "line": 291,
        "col": 13
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
    "id": "scrap_88",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.horGroupScroll"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.horGroupScroll$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.horGroupScroll$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'horGroupScroll',
    desc: 'scrollTo("horGroup");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.scrollTo("horGroup");
});
_cat.core.setManager("selectManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectGroupMenu11$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectGroupMenu11$$cat', {
  scrap: {
    "name": ["selectGroupMenu11"],
    "run@": ["selectManager"],
    "embed": ["true"],
    "jqm": ["selectMenu(\"select-native-11\", \"twoOptionHor\");"],
    "assert": ["ok($('#select-native-11  option:selected')[0].id == 'twoOptionHor','select-native-11 selected : twoOptionHor')"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/selectmenu/index.html",
    "scrapinfo": {
      "start": {
        "line": 294,
        "col": 17
      },
      "end": {
        "line": 300,
        "col": 19
      }
    },
    "commentinfo": {
      "start": {
        "line": 293,
        "col": 8
      },
      "end": {
        "line": 301,
        "col": 15
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
    "id": "scrap_89",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectGroupMenu11"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectGroupMenu11$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectGroupMenu11$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'selectGroupMenu11',
    desc: 'selectMenu("select-native-11", "twoOptionHor");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.selectMenu("select-native-11", "twoOptionHor");
  _cat.utils.chai.assert({
    code: "assert.ok($(\"#select-native-11  option:selected\")[0].id==\"twoOptionHor\",\"select-native-11 selected : twoOptionHor\")\n",
    fail: true,
    scrap: {
      "config": {
        "name": ["selectGroupMenu11"],
        "run@": ["selectManager"],
        "embed": ["true"],
        "jqm": ["selectMenu(\"select-native-11\", \"twoOptionHor\");"],
        "assert": ["ok($('#select-native-11  option:selected')[0].id == 'twoOptionHor','select-native-11 selected : twoOptionHor')"],
        "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/selectmenu/index.html",
        "scrapinfo": {
          "start": {
            "line": 294,
            "col": 17
          },
          "end": {
            "line": 300,
            "col": 19
          }
        },
        "commentinfo": {
          "start": {
            "line": 293,
            "col": 8
          },
          "end": {
            "line": 301,
            "col": 15
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
        "id": "scrap_89",
        "$type": "html"
      },
      "output": ["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'selectGroupMenu11', desc: 'selectMenu(\"select-native-11\", \"twoOptionHor\");',tips: ''});", "_cat.core.plugin('jqm').actions.selectMenu(\"select-native-11\", \"twoOptionHor\");"],
      "$$context": {
        "$$context": {
          "name": "selectGroupMenu11",
          "run@": "selectManager",
          "assert": ["ok($('#select-native-11  option:selected')[0].id == 'twoOptionHor','select-native-11 selected : twoOptionHor')"],
          "embed": "true",
          "jqm": ["selectMenu(\"select-native-11\", \"twoOptionHor\");"]
        }
      }
    }
  });
});
_cat.core.setManager("selectManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectGroupMenu12$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectGroupMenu12$$cat', {
  scrap: {
    "name": ["selectGroupMenu12"],
    "run@": ["selectManager"],
    "embed": ["true"],
    "jqm": ["selectMenu(\"select-native-12\", \"oneOptionHor\");"],
    "assert": ["ok($('#select-native-12 option:selected')[0].id == 'oneOptionHor','select-native-12 selected : oneOptionHor')"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/selectmenu/index.html",
    "scrapinfo": {
      "start": {
        "line": 303,
        "col": 10
      },
      "end": {
        "line": 309,
        "col": 12
      }
    },
    "commentinfo": {
      "start": {
        "line": 302,
        "col": 8
      },
      "end": {
        "line": 310,
        "col": 8
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
    "id": "scrap_90",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectGroupMenu12"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectGroupMenu12$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectGroupMenu12$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'selectGroupMenu12',
    desc: 'selectMenu("select-native-12", "oneOptionHor");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.selectMenu("select-native-12", "oneOptionHor");
  _cat.utils.chai.assert({
    code: "assert.ok($(\"#select-native-12 option:selected\")[0].id==\"oneOptionHor\",\"select-native-12 selected : oneOptionHor\")\n",
    fail: true,
    scrap: {
      "config": {
        "name": ["selectGroupMenu12"],
        "run@": ["selectManager"],
        "embed": ["true"],
        "jqm": ["selectMenu(\"select-native-12\", \"oneOptionHor\");"],
        "assert": ["ok($('#select-native-12 option:selected')[0].id == 'oneOptionHor','select-native-12 selected : oneOptionHor')"],
        "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/selectmenu/index.html",
        "scrapinfo": {
          "start": {
            "line": 303,
            "col": 10
          },
          "end": {
            "line": 309,
            "col": 12
          }
        },
        "commentinfo": {
          "start": {
            "line": 302,
            "col": 8
          },
          "end": {
            "line": 310,
            "col": 8
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
        "id": "scrap_90",
        "$type": "html"
      },
      "output": ["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'selectGroupMenu12', desc: 'selectMenu(\"select-native-12\", \"oneOptionHor\");',tips: ''});", "_cat.core.plugin('jqm').actions.selectMenu(\"select-native-12\", \"oneOptionHor\");"],
      "$$context": {
        "$$context": {
          "name": "selectGroupMenu12",
          "run@": "selectManager",
          "assert": ["ok($('#select-native-12 option:selected')[0].id == 'oneOptionHor','select-native-12 selected : oneOptionHor')"],
          "embed": "true",
          "jqm": ["selectMenu(\"select-native-12\", \"oneOptionHor\");"]
        }
      }
    }
  });
});
_cat.core.setManager("selectManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectGroupMenu13$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectGroupMenu13$$cat', {
  scrap: {
    "name": ["selectGroupMenu13"],
    "run@": ["selectManager"],
    "embed": ["true"],
    "jqm": ["selectMenu(\"select-native-13\", \"threeOptionHor\");"],
    "assert": ["ok($('#select-native-13 option:selected')[0].id == 'threeOptionHor','select-native-13 selected : oneOptionHor')"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/selectmenu/index.html",
    "scrapinfo": {
      "start": {
        "line": 312,
        "col": 10
      },
      "end": {
        "line": 318,
        "col": 12
      }
    },
    "commentinfo": {
      "start": {
        "line": 311,
        "col": 8
      },
      "end": {
        "line": 319,
        "col": 8
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
    "id": "scrap_91",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectGroupMenu13"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectGroupMenu13$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectGroupMenu13$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'selectGroupMenu13',
    desc: 'selectMenu("select-native-13", "threeOptionHor");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.selectMenu("select-native-13", "threeOptionHor");
  _cat.utils.chai.assert({
    code: "assert.ok($(\"#select-native-13 option:selected\")[0].id==\"threeOptionHor\",\"select-native-13 selected : oneOptionHor\")\n",
    fail: true,
    scrap: {
      "config": {
        "name": ["selectGroupMenu13"],
        "run@": ["selectManager"],
        "embed": ["true"],
        "jqm": ["selectMenu(\"select-native-13\", \"threeOptionHor\");"],
        "assert": ["ok($('#select-native-13 option:selected')[0].id == 'threeOptionHor','select-native-13 selected : oneOptionHor')"],
        "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/selectmenu/index.html",
        "scrapinfo": {
          "start": {
            "line": 312,
            "col": 10
          },
          "end": {
            "line": 318,
            "col": 12
          }
        },
        "commentinfo": {
          "start": {
            "line": 311,
            "col": 8
          },
          "end": {
            "line": 319,
            "col": 8
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
        "id": "scrap_91",
        "$type": "html"
      },
      "output": ["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'selectGroupMenu13', desc: 'selectMenu(\"select-native-13\", \"threeOptionHor\");',tips: ''});", "_cat.core.plugin('jqm').actions.selectMenu(\"select-native-13\", \"threeOptionHor\");"],
      "$$context": {
        "$$context": {
          "name": "selectGroupMenu13",
          "run@": "selectManager",
          "assert": ["ok($('#select-native-13 option:selected')[0].id == 'threeOptionHor','select-native-13 selected : oneOptionHor')"],
          "embed": "true",
          "jqm": ["selectMenu(\"select-native-13\", \"threeOptionHor\");"]
        }
      }
    }
  });
});
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectManager$$cat', {
  scrap: {
    "name": ["selectManager"],
    "perform": ["@@basicSelectScroll repeat(1)", "@@selectMenu3 repeat(1)", "@@selectMenu2 repeat(1)", "@@verticalGroupScroll repeat(1)", "@@selectGroupMenu5 repeat(1)", "@@selectGroupMenu7 repeat(1)", "@@selectGroupMenu6 repeat(1)", "@@horGroupScroll repeat(1)", "@@selectGroupMenu11 repeat(1)", "@@selectGroupMenu12 repeat(1)", "@@selectGroupMenu13 repeat(1)", "@@appMenuSelectClick repeat(1)", "@@tabsMenuScroll repeat(1)", "@@tabsMenuClick repeat(1)"],
    "embed": ["true"],
    "catui": ["on"],
    "manager": ["true"],
    "signal": ["TESTEND"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/selectmenu/index.html",
    "scrapinfo": {
      "start": {
        "line": 347,
        "col": 4
      },
      "end": {
        "line": 369,
        "col": 6
      }
    },
    "commentinfo": {
      "start": {
        "line": 346,
        "col": 8
      },
      "end": {
        "line": 370,
        "col": 7
      }
    },
    "single": {
      "name": true,
      "perform": false,
      "embed": true,
      "catui": true,
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
      "embed": -1,
      "catui": -1,
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
    "id": "scrap_92",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectManager"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectManager$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectManager$$cat";

  /* test content in here */

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('selectManager', 'basicSelectScroll', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('selectManager', 'selectMenu3', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('selectManager', 'selectMenu2', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('selectManager', 'verticalGroupScroll', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('selectManager', 'selectGroupMenu5', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('selectManager', 'selectGroupMenu7', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('selectManager', 'selectGroupMenu6', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('selectManager', 'horGroupScroll', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('selectManager', 'selectGroupMenu11', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('selectManager', 'selectGroupMenu12', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('selectManager', 'selectGroupMenu13', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('selectManager', 'appMenuSelectClick', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('selectManager', 'tabsMenuScroll', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('selectManager', 'tabsMenuClick', 'repeat(1)');

  /*  CAT UI call  */
  _cat.core.ui.on();

  /*  Manager call  */
  (function() {
    _cat.core.managerCall('selectManager', function() {
      _cat.utils.Signal.send('TESTEND');
    });
  })();
});
_cat.core.setManager("selectManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.tabsMenuScroll$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.tabsMenuScroll$$cat', {
  scrap: {
    "name": ["tabsMenuScroll"],
    "run@": ["selectManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"tabsRef\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/selectmenu/index.html",
    "scrapinfo": {
      "start": {
        "line": 553,
        "col": 1
      },
      "end": {
        "line": 558,
        "col": 3
      }
    },
    "commentinfo": {
      "start": {
        "line": 552,
        "col": 0
      },
      "end": {
        "line": 559,
        "col": 3
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
    "id": "scrap_93",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.tabsMenuScroll"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.tabsMenuScroll$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.tabsMenuScroll$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'tabsMenuScroll',
    desc: 'scrollTo("tabsRef");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.scrollTo("tabsRef");
});
_cat.core.setManager("selectManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.tabsMenuClick$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.tabsMenuClick$$cat', {
  scrap: {
    "name": ["tabsMenuClick"],
    "run@": ["selectManager"],
    "embed": ["true"],
    "jqm": ["clickRef(\"tabsRef\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/selectmenu/index.html",
    "scrapinfo": {
      "start": {
        "line": 562,
        "col": 17
      },
      "end": {
        "line": 567,
        "col": 19
      }
    },
    "commentinfo": {
      "start": {
        "line": 561,
        "col": 0
      },
      "end": {
        "line": 568,
        "col": 18
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
    "id": "scrap_94",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.tabsMenuClick"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.tabsMenuClick$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.tabsMenuClick$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'tabsMenuClick',
    desc: 'clickRef("tabsRef");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.clickRef("tabsRef");
});
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.appMenuSelectClick", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.appMenuSelectClick";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.appMenuSelectClick
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.basicSelectScroll", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.basicSelectScroll";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.basicSelectScroll
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectMenu3", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectMenu3";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectMenu3
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectMenu2", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectMenu2";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectMenu2
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.verticalGroupScroll", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.verticalGroupScroll";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.verticalGroupScroll
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectGroupMenu5", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectGroupMenu5";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectGroupMenu5
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectGroupMenu7", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectGroupMenu7";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectGroupMenu7
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectGroupMenu6", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectGroupMenu6";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectGroupMenu6
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.horGroupScroll", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.horGroupScroll";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.horGroupScroll
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectGroupMenu11", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectGroupMenu11";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectGroupMenu11
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectGroupMenu12", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectGroupMenu12";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectGroupMenu12
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectGroupMenu13", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectGroupMenu13";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectGroupMenu13
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectManager", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectManager";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.selectManager
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.tabsMenuScroll", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.tabsMenuScroll";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.tabsMenuScroll
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.tabsMenuClick", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.tabsMenuClick";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.selectmenu.index.html.tabsMenuClick
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.setManager("sliderManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.appMenuSliderClick$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.appMenuSliderClick$$cat', {
  scrap: {
    "name": ["appMenuSliderClick"],
    "run@": ["sliderManager"],
    "embed": ["true"],
    "jqm": ["clickRef(\"appMenuSlider\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/slider/index.html",
    "scrapinfo": {
      "start": {
        "line": 42,
        "col": 22
      },
      "end": {
        "line": 47,
        "col": 24
      }
    },
    "commentinfo": {
      "start": {
        "line": 41,
        "col": 8
      },
      "end": {
        "line": 48,
        "col": 23
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
    "id": "scrap_96",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.appMenuSliderClick"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.appMenuSliderClick$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.appMenuSliderClick$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'appMenuSliderClick',
    desc: 'clickRef("appMenuSlider");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.clickRef("appMenuSlider");
});
_cat.core.setManager("sliderManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.basicSliderScroll$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.basicSliderScroll$$cat', {
  scrap: {
    "name": ["basicSliderScroll"],
    "run@": ["sliderManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"basicSlider\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/slider/index.html",
    "scrapinfo": {
      "start": {
        "line": 62,
        "col": 19
      },
      "end": {
        "line": 67,
        "col": 21
      }
    },
    "commentinfo": {
      "start": {
        "line": 61,
        "col": 8
      },
      "end": {
        "line": 68,
        "col": 17
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
    "id": "scrap_97",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.basicSliderScroll"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.basicSliderScroll$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.basicSliderScroll$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'basicSliderScroll',
    desc: 'scrollTo("basicSlider");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.scrollTo("basicSlider");
});
_cat.core.setManager("sliderManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.slider25$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.slider25$$cat', {
  scrap: {
    "name": ["slider25"],
    "run@": ["sliderManager"],
    "embed": ["true"],
    "jqm": ["slide(\"slider-1\" , 25);"],
    "assert": ["ok($('#slider-1').val()=='25','hello')"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/slider/index.html",
    "scrapinfo": {
      "start": {
        "line": 81,
        "col": 19
      },
      "end": {
        "line": 88,
        "col": 21
      }
    },
    "commentinfo": {
      "start": {
        "line": 80,
        "col": 20
      },
      "end": {
        "line": 89,
        "col": 17
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
    "id": "scrap_98",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.slider25"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.slider25$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.slider25$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'slider25',
    desc: 'slide("slider-1" , 25);',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.slide("slider-1", 25);
  _cat.utils.chai.assert({
    code: "assert.ok($(\"#slider-1\").val()==\"25\",\"hello\")\n",
    fail: true,
    scrap: {
      "config": {
        "name": ["slider25"],
        "run@": ["sliderManager"],
        "embed": ["true"],
        "jqm": ["slide(\"slider-1\" , 25);"],
        "assert": ["ok($('#slider-1').val()=='25','hello')"],
        "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/slider/index.html",
        "scrapinfo": {
          "start": {
            "line": 81,
            "col": 19
          },
          "end": {
            "line": 88,
            "col": 21
          }
        },
        "commentinfo": {
          "start": {
            "line": 80,
            "col": 20
          },
          "end": {
            "line": 89,
            "col": 17
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
        "id": "scrap_98",
        "$type": "html"
      },
      "output": ["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'slider25', desc: 'slide(\"slider-1\" , 25);',tips: ''});", "_cat.core.plugin('jqm').actions.slide(\"slider-1\" , 25);"],
      "$$context": {
        "$$context": {
          "name": "slider25",
          "run@": "sliderManager",
          "assert": ["ok($('#slider-1').val()=='25','hello')"],
          "embed": "true",
          "jqm": ["slide(\"slider-1\" , 25);"]
        }
      }
    }
  });
});
_cat.core.setManager("sliderManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.HighlightScroll$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.HighlightScroll$$cat', {
  scrap: {
    "name": ["HighlightScroll"],
    "run@": ["sliderManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"highlightSlider\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/slider/index.html",
    "scrapinfo": {
      "start": {
        "line": 104,
        "col": 19
      },
      "end": {
        "line": 109,
        "col": 21
      }
    },
    "commentinfo": {
      "start": {
        "line": 103,
        "col": 8
      },
      "end": {
        "line": 110,
        "col": 17
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
    "id": "scrap_99",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.HighlightScroll"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.HighlightScroll$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.HighlightScroll$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'HighlightScroll',
    desc: 'scrollTo("highlightSlider");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.scrollTo("highlightSlider");
});
_cat.core.setManager("sliderManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.sliderHighlight77$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.sliderHighlight77$$cat', {
  scrap: {
    "name": ["sliderHighlight77"],
    "run@": ["sliderManager"],
    "embed": ["true"],
    "jqm": ["slide(\"slider-2\" , 77);"],
    "assert": ["ok($('#slider-2').val()=='77','hello')"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/slider/index.html",
    "scrapinfo": {
      "start": {
        "line": 116,
        "col": 19
      },
      "end": {
        "line": 122,
        "col": 21
      }
    },
    "commentinfo": {
      "start": {
        "line": 115,
        "col": 20
      },
      "end": {
        "line": 123,
        "col": 17
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
    "id": "scrap_100",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.sliderHighlight77"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.sliderHighlight77$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.sliderHighlight77$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'sliderHighlight77',
    desc: 'slide("slider-2" , 77);',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.slide("slider-2", 77);
  _cat.utils.chai.assert({
    code: "assert.ok($(\"#slider-2\").val()==\"77\",\"hello\")\n",
    fail: true,
    scrap: {
      "config": {
        "name": ["sliderHighlight77"],
        "run@": ["sliderManager"],
        "embed": ["true"],
        "jqm": ["slide(\"slider-2\" , 77);"],
        "assert": ["ok($('#slider-2').val()=='77','hello')"],
        "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/slider/index.html",
        "scrapinfo": {
          "start": {
            "line": 116,
            "col": 19
          },
          "end": {
            "line": 122,
            "col": 21
          }
        },
        "commentinfo": {
          "start": {
            "line": 115,
            "col": 20
          },
          "end": {
            "line": 123,
            "col": 17
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
        "id": "scrap_100",
        "$type": "html"
      },
      "output": ["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'sliderHighlight77', desc: 'slide(\"slider-2\" , 77);',tips: ''});", "_cat.core.plugin('jqm').actions.slide(\"slider-2\" , 77);"],
      "$$context": {
        "$$context": {
          "name": "sliderHighlight77",
          "run@": "sliderManager",
          "assert": ["ok($('#slider-2').val()=='77','hello')"],
          "embed": "true",
          "jqm": ["slide(\"slider-2\" , 77);"]
        }
      }
    }
  });
});
_cat.core.setManager("sliderManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.scrollTopSlider$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.scrollTopSlider$$cat', {
  scrap: {
    "name": ["scrollTopSlider"],
    "run@": ["sliderManager"],
    "embed": ["true"],
    "jqm": ["scrollTop();"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/slider/index.html",
    "scrapinfo": {
      "start": {
        "line": 131,
        "col": 11
      },
      "end": {
        "line": 136,
        "col": 13
      }
    },
    "commentinfo": {
      "start": {
        "line": 130,
        "col": 8
      },
      "end": {
        "line": 137,
        "col": 9
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
    "id": "scrap_101",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.scrollTopSlider"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.scrollTopSlider$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.scrollTopSlider$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'scrollTopSlider',
    desc: 'scrollTop();',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.scrollTop();
});
_cat.core.setManager("sliderManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.formsMenuScroll$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.formsMenuScroll$$cat', {
  scrap: {
    "name": ["formsMenuScroll"],
    "run@": ["sliderManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"formsMenu\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/slider/index.html",
    "scrapinfo": {
      "start": {
        "line": 255,
        "col": 18
      },
      "end": {
        "line": 260,
        "col": 20
      }
    },
    "commentinfo": {
      "start": {
        "line": 254,
        "col": 4
      },
      "end": {
        "line": 261,
        "col": 16
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
    "id": "scrap_102",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.formsMenuScroll"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.formsMenuScroll$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.formsMenuScroll$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'formsMenuScroll',
    desc: 'scrollTo("formsMenu");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.scrollTo("formsMenu");
});
_cat.core.setManager("sliderManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.formsMenuClick$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.formsMenuClick$$cat', {
  scrap: {
    "name": ["formsMenuClick"],
    "run@": ["sliderManager"],
    "embed": ["true"],
    "jqm": ["click(\"formsMenu\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/slider/index.html",
    "scrapinfo": {
      "start": {
        "line": 264,
        "col": 21
      },
      "end": {
        "line": 269,
        "col": 23
      }
    },
    "commentinfo": {
      "start": {
        "line": 263,
        "col": 4
      },
      "end": {
        "line": 270,
        "col": 22
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
    "id": "scrap_103",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.formsMenuClick"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.formsMenuClick$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.formsMenuClick$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'formsMenuClick',
    desc: 'click("formsMenu");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.click("formsMenu");
});
_cat.core.setManager("sliderManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.formsMenu2$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.formsMenu2$$cat', {
  scrap: {
    "name": ["formsMenu2"],
    "run@": ["sliderManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"formsMenu\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/slider/index.html",
    "scrapinfo": {
      "start": {
        "line": 273,
        "col": 19
      },
      "end": {
        "line": 278,
        "col": 21
      }
    },
    "commentinfo": {
      "start": {
        "line": 272,
        "col": 4
      },
      "end": {
        "line": 279,
        "col": 17
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
    "id": "scrap_104",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.formsMenu2"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.formsMenu2$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.formsMenu2$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'formsMenu2',
    desc: 'scrollTo("formsMenu");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.scrollTo("formsMenu");
});
_cat.core.setManager("sliderManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.formRef$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.formRef$$cat', {
  scrap: {
    "name": ["formRef"],
    "run@": ["sliderManager"],
    "embed": ["true"],
    "jqm": ["clickRef(\"formRef\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/slider/index.html",
    "scrapinfo": {
      "start": {
        "line": 282,
        "col": 18
      },
      "end": {
        "line": 287,
        "col": 20
      }
    },
    "commentinfo": {
      "start": {
        "line": 281,
        "col": 4
      },
      "end": {
        "line": 288,
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
    "id": "scrap_105",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.formRef"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.formRef$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.formRef$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'formRef',
    desc: 'clickRef("formRef");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.clickRef("formRef");
});
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.sliderManager$$cat', {
  scrap: {
    "name": ["sliderManager"],
    "perform": ["@@basicSliderScroll repeat(1)", "@@slider25 repeat(1)", "@@HighlightScroll repeat(1)", "@@sliderHighlight77 repeat(1)", "@@scrollTopSlider repeat(1)", "@@appMenuSliderClick repeat(1)", "@@formsMenuScroll repeat(1)", "@@formsMenuClick repeat(1)", "@@formsMenu2 repeat(1)", "@@formRef repeat(1)"],
    "embed": ["true"],
    "catui": ["on"],
    "manager": ["true"],
    "signal": ["TESTEND"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/slider/index.html",
    "scrapinfo": {
      "start": {
        "line": 304,
        "col": 16
      },
      "end": {
        "line": 325,
        "col": 18
      }
    },
    "commentinfo": {
      "start": {
        "line": 303,
        "col": 0
      },
      "end": {
        "line": 326,
        "col": 19
      }
    },
    "single": {
      "name": true,
      "perform": false,
      "embed": true,
      "catui": true,
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
      "embed": -1,
      "catui": -1,
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
    "id": "scrap_106",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.sliderManager"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.sliderManager$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.sliderManager$$cat";

  /* test content in here */

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('sliderManager', 'basicSliderScroll', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('sliderManager', 'slider25', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('sliderManager', 'HighlightScroll', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('sliderManager', 'sliderHighlight77', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('sliderManager', 'scrollTopSlider', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('sliderManager', 'appMenuSliderClick', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('sliderManager', 'formsMenuScroll', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('sliderManager', 'formsMenuClick', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('sliderManager', 'formsMenu2', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('sliderManager', 'formRef', 'repeat(1)');

  /*  CAT UI call  */
  _cat.core.ui.on();

  /*  Manager call  */
  (function() {
    _cat.core.managerCall('sliderManager', function() {
      _cat.utils.Signal.send('TESTEND');
    });
  })();
});
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.appMenuSliderClick", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.appMenuSliderClick";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.appMenuSliderClick
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.basicSliderScroll", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.basicSliderScroll";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.basicSliderScroll
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.slider25", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.slider25";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.slider25
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.HighlightScroll", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.HighlightScroll";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.HighlightScroll
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.sliderHighlight77", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.sliderHighlight77";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.sliderHighlight77
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.scrollTopSlider", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.scrollTopSlider";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.scrollTopSlider
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.formsMenuScroll", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.formsMenuScroll";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.formsMenuScroll
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.formsMenuClick", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.formsMenuClick";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.formsMenuClick
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.formsMenu2", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.formsMenu2";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.formsMenu2
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.formRef", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.formRef";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.formRef
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.sliderManager", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.sliderManager";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.slider.index.html.sliderManager
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.setManager("swipeItemsManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.appMenuSwipeListClick$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.appMenuSwipeListClick$$cat', {
  scrap: {
    "name": ["appMenuSwipeListClick"],
    "run@": ["swipeItemsManager"],
    "embed": ["true"],
    "jqm": ["clickRef(\"appMenuSwipeList\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/swipe-list/index.html",
    "scrapinfo": {
      "start": {
        "line": 150,
        "col": 20
      },
      "end": {
        "line": 155,
        "col": 22
      }
    },
    "commentinfo": {
      "start": {
        "line": 149,
        "col": 8
      },
      "end": {
        "line": 156,
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
    "id": "scrap_108",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.appMenuSwipeListClick"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.appMenuSwipeListClick$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.appMenuSwipeListClick$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'appMenuSwipeListClick',
    desc: 'clickRef("appMenuSwipeList");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.clickRef("appMenuSwipeList");
});
_cat.core.setManager("swipeItemsManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.openSwipe$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.openSwipe$$cat', {
  scrap: {
    "name": ["openSwipe"],
    "run@": ["swipeItemsManager"],
    "embed": ["true"],
    "jqm": ["clickRef(\"openSwipe\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/swipe-list/index.html",
    "scrapinfo": {
      "start": {
        "line": 168,
        "col": 13
      },
      "end": {
        "line": 173,
        "col": 15
      }
    },
    "commentinfo": {
      "start": {
        "line": 167,
        "col": 8
      },
      "end": {
        "line": 174,
        "col": 14
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
    "id": "scrap_109",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.openSwipe"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.openSwipe$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.openSwipe$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'openSwipe',
    desc: 'clickRef("openSwipe");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.clickRef("openSwipe");
});
_cat.core.setManager("swipeItemsManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.homePageRef$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.homePageRef$$cat', {
  scrap: {
    "name": ["homePageRef"],
    "run@": ["swipeItemsManager"],
    "embed": ["true"],
    "jqm": ["clickRef(\"homePage\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/swipe-list/index.html",
    "scrapinfo": {
      "start": {
        "line": 184,
        "col": 14
      },
      "end": {
        "line": 189,
        "col": 16
      }
    },
    "commentinfo": {
      "start": {
        "line": 183,
        "col": 12
      },
      "end": {
        "line": 190,
        "col": 15
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
    "id": "scrap_110",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.homePageRef"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.homePageRef$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.homePageRef$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'homePageRef',
    desc: 'clickRef("homePage");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.clickRef("homePage");
});
_cat.core.setManager("swipeItemsManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.backBtn$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.backBtn$$cat', {
  scrap: {
    "name": ["backBtn"],
    "run@": ["swipeItemsManager"],
    "embed": ["true"],
    "jqm": ["clickButton(\"backBtn\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/swipe-list/index.html",
    "scrapinfo": {
      "start": {
        "line": 624,
        "col": 18
      },
      "end": {
        "line": 629,
        "col": 20
      }
    },
    "commentinfo": {
      "start": {
        "line": 623,
        "col": 8
      },
      "end": {
        "line": 630,
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
    "id": "scrap_111",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.backBtn"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.backBtn$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.backBtn$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'backBtn',
    desc: 'clickButton("backBtn");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.clickButton("backBtn");
});
_cat.core.setManager("swipeItemsManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeAvery$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeAvery$$cat', {
  scrap: {
    "name": ["swipeAvery"],
    "run@": ["swipeItemsManager"],
    "embed": ["true"],
    "jqm": ["swipeItemRight(\"swipeAvery\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/swipe-list/index.html",
    "scrapinfo": {
      "start": {
        "line": 641,
        "col": 19
      },
      "end": {
        "line": 646,
        "col": 21
      }
    },
    "commentinfo": {
      "start": {
        "line": 640,
        "col": 16
      },
      "end": {
        "line": 647,
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
    "id": "scrap_112",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeAvery"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeAvery$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeAvery$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'swipeAvery',
    desc: 'swipeItemRight("swipeAvery");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.swipeItemRight("swipeAvery");
});
_cat.core.setManager("swipeItemsManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeMike$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeMike$$cat', {
  scrap: {
    "name": ["swipeMike"],
    "run@": ["swipeItemsManager"],
    "embed": ["true"],
    "jqm": ["swipeItemLeft(\"swipeMike\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/swipe-list/index.html",
    "scrapinfo": {
      "start": {
        "line": 668,
        "col": 19
      },
      "end": {
        "line": 673,
        "col": 21
      }
    },
    "commentinfo": {
      "start": {
        "line": 667,
        "col": 16
      },
      "end": {
        "line": 674,
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
    "id": "scrap_113",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeMike"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeMike$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeMike$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'swipeMike',
    desc: 'swipeItemLeft("swipeMike");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.swipeItemLeft("swipeMike");
});
_cat.core.setManager("swipeItemsManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeRedfin$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeRedfin$$cat', {
  scrap: {
    "name": ["swipeRedfin"],
    "run@": ["swipeItemsManager"],
    "embed": ["true"],
    "jqm": ["swipeItemLeft(\"swipeRedfin\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/swipe-list/index.html",
    "scrapinfo": {
      "start": {
        "line": 688,
        "col": 19
      },
      "end": {
        "line": 693,
        "col": 21
      }
    },
    "commentinfo": {
      "start": {
        "line": 687,
        "col": 16
      },
      "end": {
        "line": 694,
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
    "id": "scrap_114",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeRedfin"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeRedfin$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeRedfin$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'swipeRedfin',
    desc: 'swipeItemLeft("swipeRedfin");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.swipeItemLeft("swipeRedfin");
});
_cat.core.setManager("swipeItemsManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeAngela$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeAngela$$cat', {
  scrap: {
    "name": ["swipeAngela"],
    "run@": ["swipeItemsManager"],
    "embed": ["true"],
    "jqm": ["swipeItemLeft(\"swipeAngela\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/swipe-list/index.html",
    "scrapinfo": {
      "start": {
        "line": 705,
        "col": 19
      },
      "end": {
        "line": 710,
        "col": 21
      }
    },
    "commentinfo": {
      "start": {
        "line": 704,
        "col": 16
      },
      "end": {
        "line": 711,
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
    "id": "scrap_115",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeAngela"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeAngela$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeAngela$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'swipeAngela',
    desc: 'swipeItemLeft("swipeAngela");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.swipeItemLeft("swipeAngela");
});
_cat.core.setManager("swipeItemsManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeMikeDel$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeMikeDel$$cat', {
  scrap: {
    "name": ["swipeMikeDel"],
    "run@": ["swipeItemsManager"],
    "embed": ["true"],
    "jqm": ["click(\"yes\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/swipe-list/index.html",
    "scrapinfo": {
      "start": {
        "line": 810,
        "col": 14
      },
      "end": {
        "line": 815,
        "col": 16
      }
    },
    "commentinfo": {
      "start": {
        "line": 809,
        "col": 8
      },
      "end": {
        "line": 816,
        "col": 15
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
    "id": "scrap_116",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeMikeDel"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeMikeDel$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeMikeDel$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'swipeMikeDel',
    desc: 'click("yes");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.click("yes");
});
_cat.core.setManager("swipeItemsManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeRedfinCancel$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeRedfinCancel$$cat', {
  scrap: {
    "name": ["swipeRedfinCancel"],
    "run@": ["swipeItemsManager"],
    "embed": ["true"],
    "jqm": ["click(\"cancel\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/swipe-list/index.html",
    "scrapinfo": {
      "start": {
        "line": 820,
        "col": 14
      },
      "end": {
        "line": 825,
        "col": 16
      }
    },
    "commentinfo": {
      "start": {
        "line": 819,
        "col": 8
      },
      "end": {
        "line": 826,
        "col": 15
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
    "id": "scrap_117",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeRedfinCancel"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeRedfinCancel$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeRedfinCancel$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'swipeRedfinCancel',
    desc: 'click("cancel");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.click("cancel");
});
_cat.core.setManager("swipeItemsManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeAveryCancel$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeAveryCancel$$cat', {
  scrap: {
    "name": ["swipeAveryCancel"],
    "run@": ["swipeItemsManager"],
    "embed": ["true"],
    "jqm": ["click(\"cancel\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/swipe-list/index.html",
    "scrapinfo": {
      "start": {
        "line": 829,
        "col": 14
      },
      "end": {
        "line": 834,
        "col": 16
      }
    },
    "commentinfo": {
      "start": {
        "line": 828,
        "col": 8
      },
      "end": {
        "line": 835,
        "col": 15
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
    "id": "scrap_118",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeAveryCancel"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeAveryCancel$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeAveryCancel$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'swipeAveryCancel',
    desc: 'click("cancel");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.click("cancel");
});
_cat.core.setManager("swipeItemsManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeAngelaDel$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeAngelaDel$$cat', {
  scrap: {
    "name": ["swipeAngelaDel"],
    "run@": ["swipeItemsManager"],
    "embed": ["true"],
    "jqm": ["click(\"yes\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/swipe-list/index.html",
    "scrapinfo": {
      "start": {
        "line": 839,
        "col": 14
      },
      "end": {
        "line": 844,
        "col": 16
      }
    },
    "commentinfo": {
      "start": {
        "line": 838,
        "col": 8
      },
      "end": {
        "line": 845,
        "col": 15
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
    "id": "scrap_119",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeAngelaDel"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeAngelaDel$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeAngelaDel$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'swipeAngelaDel',
    desc: 'click("yes");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.click("yes");
});
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeItemsManager$$cat', {
  scrap: {
    "name": ["swipeItemsManager"],
    "perform": ["@@openSwipe repeat(1)", "@@swipeMike repeat(1)", "@@swipeMikeDel repeat(1)", "@@swipeRedfin repeat(1)", "@@swipeRedfinCancel repeat(1)", "@@swipeAvery repeat(1)", "@@swipeAveryCancel repeat(1)", "@@swipeAngela repeat(1)", "@@swipeAngelaDel repeat(1)", "@@backBtn repeat(1)", "@@appMenuSwipeListClick repeat(1)", "@@homePageRef repeat(1)"],
    "embed": ["true"],
    "catui": ["on"],
    "manager": ["true"],
    "signal": ["TESTEND"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/swipe-list/index.html",
    "scrapinfo": {
      "start": {
        "line": 858,
        "col": 14
      },
      "end": {
        "line": 880,
        "col": 16
      }
    },
    "commentinfo": {
      "start": {
        "line": 857,
        "col": 8
      },
      "end": {
        "line": 881,
        "col": 17
      }
    },
    "single": {
      "name": true,
      "perform": false,
      "embed": true,
      "catui": true,
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
      "embed": -1,
      "catui": -1,
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
    "id": "scrap_120",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeItemsManager"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeItemsManager$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeItemsManager$$cat";

  /* test content in here */

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('swipeItemsManager', 'openSwipe', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('swipeItemsManager', 'swipeMike', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('swipeItemsManager', 'swipeMikeDel', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('swipeItemsManager', 'swipeRedfin', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('swipeItemsManager', 'swipeRedfinCancel', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('swipeItemsManager', 'swipeAvery', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('swipeItemsManager', 'swipeAveryCancel', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('swipeItemsManager', 'swipeAngela', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('swipeItemsManager', 'swipeAngelaDel', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('swipeItemsManager', 'backBtn', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('swipeItemsManager', 'appMenuSwipeListClick', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('swipeItemsManager', 'homePageRef', 'repeat(1)');

  /*  CAT UI call  */
  _cat.core.ui.on();

  /*  Manager call  */
  (function() {
    _cat.core.managerCall('swipeItemsManager', function() {
      _cat.utils.Signal.send('TESTEND');
    });
  })();
});
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.appMenuSwipeListClick", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.appMenuSwipeListClick";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.appMenuSwipeListClick
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.openSwipe", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.openSwipe";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.openSwipe
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.homePageRef", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.homePageRef";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.homePageRef
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.backBtn", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.backBtn";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.backBtn
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeAvery", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeAvery";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeAvery
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeMike", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeMike";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeMike
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeRedfin", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeRedfin";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeRedfin
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeAngela", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeAngela";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeAngela
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeMikeDel", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeMikeDel";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeMikeDel
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeRedfinCancel", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeRedfinCancel";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeRedfinCancel
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeAveryCancel", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeAveryCancel";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeAveryCancel
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeAngelaDel", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeAngelaDel";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeAngelaDel
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeItemsManager", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeItemsManager";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.swipe-list.index.html.swipeItemsManager
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.setManager("tabsManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.appMenuTabsClick$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.appMenuTabsClick$$cat', {
  scrap: {
    "name": ["appMenuTabsClick"],
    "run@": ["tabsManager"],
    "embed": ["true"],
    "jqm": ["clickRef(\"appMenuTabs\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/tabs/index.html",
    "scrapinfo": {
      "start": {
        "line": 45,
        "col": 20
      },
      "end": {
        "line": 50,
        "col": 22
      }
    },
    "commentinfo": {
      "start": {
        "line": 44,
        "col": 8
      },
      "end": {
        "line": 51,
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
    "id": "scrap_122",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.appMenuTabsClick"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.appMenuTabsClick$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.appMenuTabsClick$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'appMenuTabsClick',
    desc: 'clickRef("appMenuTabs");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.clickRef("appMenuTabs");
});
_cat.core.setManager("tabsManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.navScroll$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.navScroll$$cat', {
  scrap: {
    "name": ["navScroll"],
    "run@": ["tabsManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"navTabs\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/tabs/index.html",
    "scrapinfo": {
      "start": {
        "line": 63,
        "col": 20
      },
      "end": {
        "line": 68,
        "col": 22
      }
    },
    "commentinfo": {
      "start": {
        "line": 62,
        "col": 8
      },
      "end": {
        "line": 69,
        "col": 18
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
    "id": "scrap_123",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.navScroll"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.navScroll$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.navScroll$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'navScroll',
    desc: 'scrollTo("navTabs");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.scrollTo("navTabs");
});
_cat.core.setManager("tabsManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.navTabSelect2$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.navTabSelect2$$cat', {
  scrap: {
    "name": ["navTabSelect2"],
    "run@": ["tabsManager"],
    "embed": ["true"],
    "jqm": ["selectTab(\"navTab2\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/tabs/index.html",
    "scrapinfo": {
      "start": {
        "line": 72,
        "col": 10
      },
      "end": {
        "line": 77,
        "col": 12
      }
    },
    "commentinfo": {
      "start": {
        "line": 71,
        "col": 8
      },
      "end": {
        "line": 78,
        "col": 8
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
    "id": "scrap_124",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.navTabSelect2"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.navTabSelect2$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.navTabSelect2$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'navTabSelect2',
    desc: 'selectTab("navTab2");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.selectTab("navTab2");
});
_cat.core.setManager("tabsManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.navTabSelect3$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.navTabSelect3$$cat', {
  scrap: {
    "name": ["navTabSelect3"],
    "run@": ["tabsManager"],
    "embed": ["true"],
    "jqm": ["selectTab(\"navTab3\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/tabs/index.html",
    "scrapinfo": {
      "start": {
        "line": 81,
        "col": 10
      },
      "end": {
        "line": 86,
        "col": 12
      }
    },
    "commentinfo": {
      "start": {
        "line": 80,
        "col": 8
      },
      "end": {
        "line": 87,
        "col": 8
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
    "id": "scrap_125",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.navTabSelect3"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.navTabSelect3$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.navTabSelect3$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'navTabSelect3',
    desc: 'selectTab("navTab3");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.selectTab("navTab3");
});
_cat.core.setManager("tabsManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.navTabSelect1$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.navTabSelect1$$cat', {
  scrap: {
    "name": ["navTabSelect1"],
    "run@": ["tabsManager"],
    "embed": ["true"],
    "jqm": ["selectTab(\"navTab1\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/tabs/index.html",
    "scrapinfo": {
      "start": {
        "line": 89,
        "col": 10
      },
      "end": {
        "line": 94,
        "col": 12
      }
    },
    "commentinfo": {
      "start": {
        "line": 88,
        "col": 8
      },
      "end": {
        "line": 95,
        "col": 8
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
    "id": "scrap_126",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.navTabSelect1"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.navTabSelect1$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.navTabSelect1$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'navTabSelect1',
    desc: 'selectTab("navTab1");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.selectTab("navTab1");
});
_cat.core.setManager("tabsManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.listTabsScroll$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.listTabsScroll$$cat', {
  scrap: {
    "name": ["listTabsScroll"],
    "run@": ["tabsManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"listTabs\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/tabs/index.html",
    "scrapinfo": {
      "start": {
        "line": 124,
        "col": 20
      },
      "end": {
        "line": 129,
        "col": 22
      }
    },
    "commentinfo": {
      "start": {
        "line": 123,
        "col": 12
      },
      "end": {
        "line": 130,
        "col": 18
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
    "id": "scrap_127",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.listTabsScroll"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.listTabsScroll$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.listTabsScroll$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'listTabsScroll',
    desc: 'scrollTo("listTabs");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.scrollTo("listTabs");
});
_cat.core.setManager("tabsManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.listTabsSelect3$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.listTabsSelect3$$cat', {
  scrap: {
    "name": ["listTabsSelect3"],
    "run@": ["tabsManager"],
    "embed": ["true"],
    "jqm": ["selectTab(\"listTabsSelect3\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/tabs/index.html",
    "scrapinfo": {
      "start": {
        "line": 133,
        "col": 14
      },
      "end": {
        "line": 138,
        "col": 16
      }
    },
    "commentinfo": {
      "start": {
        "line": 132,
        "col": 12
      },
      "end": {
        "line": 139,
        "col": 12
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
    "id": "scrap_128",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.listTabsSelect3"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.listTabsSelect3$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.listTabsSelect3$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'listTabsSelect3',
    desc: 'selectTab("listTabsSelect3");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.selectTab("listTabsSelect3");
});
_cat.core.setManager("tabsManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.listTabsSelect1$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.listTabsSelect1$$cat', {
  scrap: {
    "name": ["listTabsSelect1"],
    "run@": ["tabsManager"],
    "embed": ["true"],
    "jqm": ["selectTab(\"listTabsSelect1\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/tabs/index.html",
    "scrapinfo": {
      "start": {
        "line": 142,
        "col": 14
      },
      "end": {
        "line": 147,
        "col": 16
      }
    },
    "commentinfo": {
      "start": {
        "line": 141,
        "col": 12
      },
      "end": {
        "line": 148,
        "col": 12
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
    "id": "scrap_129",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.listTabsSelect1"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.listTabsSelect1$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.listTabsSelect1$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'listTabsSelect1',
    desc: 'selectTab("listTabsSelect1");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.selectTab("listTabsSelect1");
});
_cat.core.setManager("tabsManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.listTabsSelect2$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.listTabsSelect2$$cat', {
  scrap: {
    "name": ["listTabsSelect2"],
    "run@": ["tabsManager"],
    "embed": ["true"],
    "jqm": ["selectTab(\"listTabsSelect2\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/tabs/index.html",
    "scrapinfo": {
      "start": {
        "line": 150,
        "col": 14
      },
      "end": {
        "line": 155,
        "col": 16
      }
    },
    "commentinfo": {
      "start": {
        "line": 149,
        "col": 12
      },
      "end": {
        "line": 156,
        "col": 12
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
    "id": "scrap_130",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.listTabsSelect2"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.listTabsSelect2$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.listTabsSelect2$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'listTabsSelect2',
    desc: 'selectTab("listTabsSelect2");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.selectTab("listTabsSelect2");
});
_cat.core.setManager("tabsManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.eventsMenuScroll$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.eventsMenuScroll$$cat', {
  scrap: {
    "name": ["eventsMenuScroll"],
    "run@": ["tabsManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"eventsMenu\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/tabs/index.html",
    "scrapinfo": {
      "start": {
        "line": 217,
        "col": 17
      },
      "end": {
        "line": 222,
        "col": 19
      }
    },
    "commentinfo": {
      "start": {
        "line": 216,
        "col": 4
      },
      "end": {
        "line": 223,
        "col": 15
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
    "id": "scrap_131",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.eventsMenuScroll"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.eventsMenuScroll$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.eventsMenuScroll$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'eventsMenuScroll',
    desc: 'scrollTo("eventsMenu");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.scrollTo("eventsMenu");
});
_cat.core.setManager("tabsManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.eventsMenuClick$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.eventsMenuClick$$cat', {
  scrap: {
    "name": ["eventsMenuClick"],
    "run@": ["tabsManager"],
    "embed": ["true"],
    "jqm": ["click(\"eventsMenu\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/tabs/index.html",
    "scrapinfo": {
      "start": {
        "line": 226,
        "col": 21
      },
      "end": {
        "line": 231,
        "col": 23
      }
    },
    "commentinfo": {
      "start": {
        "line": 225,
        "col": 4
      },
      "end": {
        "line": 232,
        "col": 22
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
    "id": "scrap_132",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.eventsMenuClick"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.eventsMenuClick$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.eventsMenuClick$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'eventsMenuClick',
    desc: 'click("eventsMenu");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.click("eventsMenu");
});
_cat.core.setManager("tabsManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.eventsMenuScroll2$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.eventsMenuScroll2$$cat', {
  scrap: {
    "name": ["eventsMenuScroll2"],
    "run@": ["tabsManager"],
    "embed": ["true"],
    "jqm": ["scrollTo(\"eventsMenu\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/tabs/index.html",
    "scrapinfo": {
      "start": {
        "line": 235,
        "col": 19
      },
      "end": {
        "line": 240,
        "col": 21
      }
    },
    "commentinfo": {
      "start": {
        "line": 234,
        "col": 4
      },
      "end": {
        "line": 241,
        "col": 17
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
    "id": "scrap_133",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.eventsMenuScroll2"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.eventsMenuScroll2$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.eventsMenuScroll2$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'eventsMenuScroll2',
    desc: 'scrollTo("eventsMenu");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.scrollTo("eventsMenu");
});
_cat.core.setManager("tabsManager", "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.swipeListRef$$cat");
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.swipeListRef$$cat', {
  scrap: {
    "name": ["swipeListRef"],
    "run@": ["tabsManager"],
    "embed": ["true"],
    "jqm": ["clickRef(\"swipeList\");"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/tabs/index.html",
    "scrapinfo": {
      "start": {
        "line": 244,
        "col": 18
      },
      "end": {
        "line": 249,
        "col": 20
      }
    },
    "commentinfo": {
      "start": {
        "line": 243,
        "col": 4
      },
      "end": {
        "line": 250,
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
    "id": "scrap_134",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.swipeListRef"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.swipeListRef$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.swipeListRef$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'swipeListRef',
    desc: 'clickRef("swipeList");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.clickRef("swipeList");
});
_cat.core.declare('C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.tabsManager$$cat', {
  scrap: {
    "name": ["tabsManager"],
    "perform": ["@@navScroll repeat(1)", "@@navTabSelect2 repeat(1)", "@@navTabSelect3 repeat(1)", "@@navTabSelect1 repeat(1)", "@@listTabsScroll repeat(1)", "@@listTabsSelect3 repeat(1)", "@@listTabsSelect2 repeat(1)", "@@listTabsSelect1 repeat(1)", "@@appMenuTabsClick repeat(1)", "@@eventsMenuScroll repeat(1)", "@@eventsMenuClick repeat(1)", "@@eventsMenuScroll2 repeat(1)", "@@swipeListRef repeat(1)"],
    "embed": ["true"],
    "catui": ["on"],
    "manager": ["true"],
    "signal": ["TESTEND"],
    "file": "C:/Users/snirr/workspace/CATCore/test/jqm/cat-project/target/jqm-test/tabs/index.html",
    "scrapinfo": {
      "start": {
        "line": 260,
        "col": 3
      },
      "end": {
        "line": 282,
        "col": 5
      }
    },
    "commentinfo": {
      "start": {
        "line": 259,
        "col": 4
      },
      "end": {
        "line": 283,
        "col": 6
      }
    },
    "single": {
      "name": true,
      "perform": false,
      "embed": true,
      "catui": true,
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
      "embed": -1,
      "catui": -1,
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
    "id": "scrap_135",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.tabsManager"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.tabsManager$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.tabsManager$$cat";

  /* test content in here */

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('tabsManager', 'navScroll', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('tabsManager', 'navTabSelect2', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('tabsManager', 'navTabSelect3', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('tabsManager', 'navTabSelect1', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('tabsManager', 'listTabsScroll', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('tabsManager', 'listTabsSelect3', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('tabsManager', 'listTabsSelect2', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('tabsManager', 'listTabsSelect1', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('tabsManager', 'appMenuTabsClick', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('tabsManager', 'eventsMenuScroll', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('tabsManager', 'eventsMenuClick', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('tabsManager', 'eventsMenuScroll2', 'repeat(1)');

  /*  Add Manager behavior  */
  _cat.core.setManagerBehavior('tabsManager', 'swipeListRef', 'repeat(1)');

  /*  CAT UI call  */
  _cat.core.ui.on();

  /*  Manager call  */
  (function() {
    _cat.core.managerCall('tabsManager', function() {
      _cat.utils.Signal.send('TESTEND');
    });
  })();
});
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.appMenuTabsClick", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.appMenuTabsClick";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.appMenuTabsClick
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.navScroll", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.navScroll";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.navScroll
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.navTabSelect2", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.navTabSelect2";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.navTabSelect2
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.navTabSelect3", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.navTabSelect3";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.navTabSelect3
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.navTabSelect1", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.navTabSelect1";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.navTabSelect1
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.listTabsScroll", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.listTabsScroll";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.listTabsScroll
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.listTabsSelect3", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.listTabsSelect3";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.listTabsSelect3
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.listTabsSelect1", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.listTabsSelect1";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.listTabsSelect1
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.listTabsSelect2", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.listTabsSelect2";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.listTabsSelect2
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.eventsMenuScroll", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.eventsMenuScroll";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.eventsMenuScroll
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.eventsMenuClick", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.eventsMenuClick";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.eventsMenuClick
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.eventsMenuScroll2", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.eventsMenuScroll2";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.eventsMenuScroll2
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.swipeListRef", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.swipeListRef";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.swipeListRef
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
_cat.core.define("C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.tabsManager", function() {

  var pkgName = "C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.tabsManager";

  return {

    /**
     * Init functionality for scrap C:.Users.snirr.workspace.CATCore.test.jqm.cat-project.target.jqm-test.tabs.index.html.tabsManager
     *
     * @param content CAT Context object
     */
    init: function(context) {

    }
  };

}());
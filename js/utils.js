/**
 * General utilities
 *
 */
define(["underscorejs"], function (_) {

    var _getLiTemplate = (function (data) {

        var htmlli = "<li>{{text}}</li>",
            template = _.template(htmlli);

        return template(data);
    });

    var _module = {

        /**
         * Create bullets template with a given array object
         *
         * example:
         *      createBulletsHTML(["cell1", ["cell2"]], [])
         *
         * @param item {Array} The hierarchical array data
         * @param line {Array} The reference array object to collect the html content
         */
        createBulletsHTML: function (item, line) {

            if (_.isArray(item)) {

                line.push("<ul>");
                item.forEach(function (row) {

                    if (_.isArray(row)) {
                        _module.createBulletsHTML(row, line);

                    } else {
                        line.push(_getLiTemplate({text: row}));

                    }

                });
                line.push("</ul>");
            }
        }
    };

    return _module;
});
"use strict";
var standard = require("standard");

/**
 *
 */
exports.process = function (source, options /*, reportInfo */) {
  var results = analyse(source, options);

  // var report = generateReport(results);
  // return report;
};

/**
 *
 */
function analyse(source, config) {
  config = config || {};

  var results = [];
  var data = [];

  // Remove potential Unicode BOM.
  // source = source.replace(/^\uFEFF/, "");

  var messages = standard.lintFiles(source, config);
  results = results.concat(messages);

  return {
    results : results,
    data : data
  };
}

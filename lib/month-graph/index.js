var Chartist = require('chartist');
require('chartist-plugin-tooltips');

var makeLabelInterpolator = require('./label-interpolator');
var tooltip = require('./tooltip');

var graph;

module.exports = {
  render: render
};

function render(records) {
  var data = {
    labels: records.map(toLabel),
    series: [records.map(toValue)]
  };

  var options = {
    axisX: {
      labelInterpolationFnc: makeLabelInterpolator(records.length)
    },
    plugins: [
      Chartist.plugins.tooltip({
        tooltipFnc: tooltip,
        appendToBody: true
      })
    ]
  };

  if (graph) graph.detach();
  graph = new Chartist.Bar(container(), data, options);
}

function toLabel(record) {
  return record.year + '-' + record.month;
}

function toValue(record) {
  return {
    meta: toLabel(record),
    value: record.count
  };
}

function container() {
  return document.querySelector('#by-month');
}

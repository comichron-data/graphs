var Chartist = require('chartist');
require('chartist-plugin-tooltips');

var makeLabelInterpolator = require('./label-interpolator');
var monthByNumber = require('./month-by-number');

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
        tooltipFnc: makeTooltipText,
        appendToBody: true
      })
    ]
  };

  if (graph) graph.detach();
  graph = new Chartist.Bar(container(), data, options);
}

function makeTooltipText(meta, value) {
  var date = parseMeta(meta);

  return value + ' in ' + monthByNumber(date.month) + ' ' + date.year;
}

function parseMeta(label) {
  var parts = label.split('-');
  return {
    year: Number(parts[0]),
    month: Number(parts[1])
  };
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

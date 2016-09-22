var Chartist = require('chartist');

var graph;

module.exports = {
  render: render
};

function render(records) {
  var data = {
    labels: records.map(toLabel),
    series: [records.map(toValue)]
  };

  if (graph) graph.detach();
  graph = new Chartist.Bar(container(), data);
}

function toLabel(record) {
  return record.year + '-' + record.month;
}

function toValue(record) {
  return record.count;
}

function container() {
  return document.querySelector('#by-month');
}

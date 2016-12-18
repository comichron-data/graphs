var client = require('comichron-data-browser-client');
var titlePicker = require('./lib/title-picker');
var monthGraph = require('./lib/month-graph');
var issueGraph = require('./lib/issue-graph');
var idDisplay = require('./lib/id-display');

loadTitles();

function loadTitles() {
  client.titles(function(err, titles) {
    if (err) throw err;

    titlePicker.init(titles, onSelect);
  });
}

function onSelect(id) {
  idDisplay.render(id);
  loadByMonthData(id);
  loadByIssueData(id);
}

function loadByMonthData(id) {
  client.byMonth(id, function(err, data) {
    if (err) throw err;

    monthGraph.render(data.records)
  });
}

function loadByIssueData(id) {
  client.byIssue(id, function(err, data) {
    if (err) throw err;

    issueGraph.render(data.records);
  });
}

var client = require('./lib/client');
var titlePicker = require('./lib/title-picker');
var monthGraph = require('./lib/month-graph');
var issueGraph = require('./lib/issue-graph');

loadTitles();

function loadTitles() {
  client.titles(function(err, titles) {
    if (err) throw err;

    titlePicker.init(titles, onSelect);
  });
}

function onSelect(id) {
  loadByMonthData(id);
  loadByIssueData(id);
}

function loadByMonthData(id) {
  client.byMonth(id, function(err, records) {
    if (err) throw err;

    monthGraph.render(records)
  });
}

function loadByIssueData(id) {
  client.byIssue(id, function(err, records) {
    if (err) throw err;

    issueGraph.render(records);
  });
}

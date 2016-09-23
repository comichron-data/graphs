var request = require('superagent');

var baseUrl = 'https://comichron-data.github.io/api';
// var baseUrl = 'http://localhost:3000';

module.exports = {
  titles: loadTitles,
  byMonth: loadByMonth,
  byIssue: loadByIssue
};

function loadTitles(cb) {
  request
    .get(titlesUrl())
    .end(responseBodyTo(cb));
}

function titlesUrl() {
  return baseUrl + '/titles.json';
}

function loadByMonth(id, cb) {
  request
    .get(byMonthUrl(id))
    .end(responseBodyTo(cb));
}

function byMonthUrl(id) {
  return baseUrl + '/titles/' + id + '/by-month.json';
}

function loadByIssue(id, cb) {
  request
    .get(byIssueUrl(id))
    .end(responseBodyTo(cb));
}

function byIssueUrl(id) {
  return baseUrl + '/titles/' + id + '/by-issue.json';
}

/**
 * @param  {Function} cb - error first callback
 */
function responseBodyTo(cb) {
  return function(err, resp) {
    if (err) return cb(err);
    cb(null, resp.body);
  };
}

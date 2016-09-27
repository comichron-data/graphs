var monthByNumber = require('./month-by-number');

module.exports = function tooltip(meta, value) {
  var date = parseMeta(meta);

  return value + ' in ' + monthByNumber(date.month) + ' ' + date.year;
};

function parseMeta(label) {
  var parts = label.split('-');
  return {
    year: Number(parts[0]),
    month: Number(parts[1])
  };
}

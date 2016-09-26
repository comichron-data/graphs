var monthByNumber = require('./month-by-number');

module.exports = function(recordCount) {
  if (recordCount > 100) {
    return onlyYearChanges;
  } else if (recordCount > 20) {
    return monthsWithYearChanges;
  } else {
    return monthsWithYears;
  }
};

function onlyYearChanges(x, y, allXValues) {
  if (isYearChange(x, allXValues)) {
    return parseYear(x);
  }
}

function monthsWithYearChanges(x, y, allXValues) {
  if (isYearChange(x, allXValues)) {
    return monthsWithYears(x);
  } else {
    return monthByNumber(parseMonth(x));
  }
}

function monthsWithYears(x) {
  return monthByNumber(parseMonth(x)) + ' ' + parseYear(x);
}

function isYearChange(yearMonth, allXValues) {
  var index = allXValues.indexOf(yearMonth);
  var previous = allXValues[index - 1];

  // this is first date or previous date's year is different
  return !previous || parseYear(previous) != parseYear(yearMonth);
}

function parseYear(yearMonth) {
  return Number(yearMonth.split('-')[0]);
}

function parseMonth(yearMonth) {
  return Number(yearMonth.split('-')[1]);
}

module.exports = function(recordCount) {
  if (recordCount > 100) {
    return onlyYearChanges;
  } else if (recordCount > 20) {
    return monthsWithYearChanges;
  } else {
    return monthsWithYears;
  }
};

function onlyYearChanges(x, y) {
  if (isYearChange(x)) {
    return parseYear(x);
  }
}

function monthsWithYearChanges(x, y) {
  if (isYearChange(x)) {
    return parseYear(x);
  } else {
    return parseMonth(x);
  }
}

function monthsWithYears(x, y) {
  return x;
}

function isYearChange(yearMonth) {
  return parseMonth(yearMonth) == '1';
}

function parseYear(yearMonth) {
  return yearMonth.split('-')[0];
}

function parseMonth(yearMonth) {
  return yearMonth.split('-')[1];
}

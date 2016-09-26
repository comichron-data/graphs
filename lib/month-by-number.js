module.exports = nameByNumber;

var monthsByNumber = {
  1: 'Jan',
  2: 'Feb',
  3: 'Mar',
  4: 'Apr',
  5: 'May',
  6: 'Jun',
  7: 'Jul',
  8: 'Aug',
  9: 'Sep',
  10: 'Oct',
  11: 'Nov',
  12: 'Dec'
};

function nameByNumber(number) {
  return monthsByNumber[number] || noMonthForNumber(number);
}

function noMonthForNumber(number) {
  throw new Error('No month for number ' + number);
}

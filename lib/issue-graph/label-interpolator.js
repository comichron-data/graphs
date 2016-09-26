module.exports = makeInterpolator;

function makeInterpolator(recordCount) {
  if (recordCount > 50) {
    return everyTenWithNumberOnes;
  } else {
    return allIssues;
  }

}

function allIssues(x, y) {
  return x;
}

function everyTenWithNumberOnes(x, y) {
  var issueNumber = Number(x);

  if (issueNumber == 1 || issueNumber % 10 == 0) {
    return issueNumber;
  }
}

const { fromJS, Seq } = require('immutable');

function printBestStudents(grades) {

  const filteredGrades = Seq(grades)

    .filter(student => student.get('score') >= 70)

    .map(student => student.update('firstName', firstName => firstName.charAt(0).toUpperCase() + firstName.slice(1)))

    .map(student => student.update('lastName', lastName => lastName.charAt(0).toUpperCase() + lastName.slice(1)));

  console.log(filteredGrades.toJS());

}

module.exports = printBestStudents;

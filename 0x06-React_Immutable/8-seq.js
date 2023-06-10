const { Seq } = require('immutable');

function printBestStudents(students) {

  const filteredStudents = Seq(students)

    .filter((student) => student.get('score') >= 70)

    .map((student) => student.update('firstName', (name) => capitalizeFirstLetter(name)))

    .map((student) => student.update('lastName', (name) => capitalizeFirstLetter(name)))

    .toObject();

  console.log(filteredStudents);

}

function capitalizeFirstLetter(string) {

  return string.charAt(0).toUpperCase() + string.slice(1);



module.exports = {

  printBestStudents

};

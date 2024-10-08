function getStudentIdsSum(students) {
  if (Array.isArray(students)) {
    const sum = students.reduce((acc, curr) => acc + curr.id, 0);
    return sum;
  }
  return [];
}
module.exports = getStudentIdsSum;
